import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import LanguageProvider from "newDesign/components/LanguageProvider";
// import EntryScreen from "./screens";
import NewDesignEntryScreen from "newDesign/screens";
import { ServerAPI } from "./Config";
// import Loading from "./components/Loader";
import Loading from "./newDesign/components/Loading";
import { useIdleTimer } from "react-idle-timer";
import { multi_currency_sign_out } from "services/api/server/multi_currency_api";
import { deleteHeaderParams, getHeaderParams } from "services/auth";
import {
  GetUserAccountById,
  GetUserWalletBalance,
} from "services/api/server/platform";
import {
  setUserBalance,
  logoutPlatformAccount,
  resetRedux,
  setWalletConfig,
} from "./redux/platform/platform_action";
import connectWS from "services/socket";
import { walletNetwork } from "./helpers/wallet";
declare global {
  interface Window {
    gqWS: any;
  }
}

type ReduxState = {
  platform: any;
};

const IDLE_TIMEOUT = 60000 * 15 - 30000; // 14mins 30sec

const App = () => {
  const history = useHistory();
  const { account } = useSelector((state: ReduxState) => state.platform);
  const dispatch = useDispatch();
  const [isAppIdle, setIsAppIdle] = useState(false);

  const handleOnIdle = () => {
    const { CLIENT_ID, CLIENT_TOKEN } = getHeaderParams();
    setIsAppIdle(CLIENT_ID && CLIENT_TOKEN ? true : false);
  };

  const { isLeader } = useIdleTimer({
    timeout: IDLE_TIMEOUT,
    onIdle: handleOnIdle,
    crossTab: {
      emitOnAllTabs: true,
    },
  });

  const updateWalletBalance = async () => {
    try {
      const { data } = await GetUserWalletBalance();
      dispatch(setUserBalance(data));
    } catch (error) {
      throw error;
    }
  };

  const handleRedirectHome = () => {
    setIsAppIdle(false);
    dispatch(logoutPlatformAccount());
    history.push("/home");
  };

  useEffect(() => {
    const { CLIENT_ID, CLIENT_TOKEN } = getHeaderParams();
    if (!CLIENT_ID || !CLIENT_TOKEN) {
      console.log("no client id or token");
      dispatch(resetRedux());
    } else if (!account) {
      console.log("no account");
      deleteHeaderParams();
    } else {
      console.log("logged in");
      GetUserAccountById(account.id)
        .then((res) => {
          updateWalletBalance();
        })
        .catch((err) => {
          dispatch(logoutPlatformAccount());
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (account) {
      const { id } = account;

      const wallet = walletNetwork();
      dispatch(setWalletConfig(wallet));

      /*
       * Show notification message for transaction success
       * DEPOSIT and WITHDRAW
       * */
      const gqWs = connectWS({
        url: ServerAPI.ws_url,
        account_id: id,
      });

      gqWs.onmessage = (event) => {
        let data = JSON.parse(event?.data) || null;
        if (data && data.id === "DEPOSIT_WITHDRAW_EVENT") {
          const {
            response: { tx_type, currency },
          } = data;

          toast.info(
            <>
              Your <strong>{currency}</strong> transaction is succesfully{" "}
              {tx_type.toLowerCase()}
            </>,
            {
              autoClose: 10000,
              style: { borderRadius: "4px", fontSize: "0.875rem" },
            }
          );
          updateWalletBalance();
        }
      };

      // store global websocket connection
      window.gqWS = gqWs;

      return () => {
        window.gqWS.close();
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account]);

  useEffect(() => {
    // Note: if multiple Tab opened only parent Tab is request api logout
    // others will redirect to Home.
    if (isAppIdle) {
      if (isLeader() && account) {
        multi_currency_sign_out()
          .then((res) => {
            handleRedirectHome();
          })
          .catch((err) => console.log("error logging out", err));
      } else {
        handleRedirectHome();
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account, isAppIdle]);

  return (
    <LanguageProvider>
      <React.Suspense fallback={<Loading isLoading={true} />}>
        {/* <EntryScreen /> */}
        <NewDesignEntryScreen />
      </React.Suspense>
    </LanguageProvider>
  );
};

export default App;
