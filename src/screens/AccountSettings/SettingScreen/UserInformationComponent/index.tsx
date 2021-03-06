import React , {useState, useEffect} from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { UpdateEmail, AddEmail } from "services/api/server/multi_currency_api";
import { GetUserAccountById } from "services/api/server/platform";
import { setPlatformAccountSuccess } from "redux/platform/platform_action";
import { translate } from "helpers/translate";

// const ConfirmEmailModal = ({showModal,setShow}) => {
//   const [code, setCode] = useState('');
//   // const [show, setShow] = useState(showModal);

//   // const handleClose = () => setShow(false);

//   const codeHandler = (e) => {
//     const {value} = e.target;
//     setCode(value);
//   }

//   const handleSubmit = () => {
//     if(code === ''){
//       toast.warning('please enter verification code',{position:"top-center"});
//     }else{
//       VerifyEmail(code).then(data => {
//         console.log('success'); 
//       }).catch(error => {
//         console.log('confirm email error', error)
//       });
//       setShow(false);
//     }
//   }
  
//   return (
//     <Modal show={showModal} onHide={() => setShow(false)}>
//       <Modal.Header closeButton>
//         <Modal.Title>Confirm E-mail</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <p>Please check your e-mail for the confirmation link</p>
//         {/* <Form>
//           <Form.Group>
//             <Form.Control 
//               type="text"
//               placeholder="Enter code"
//               className="col-6"
//               value={code}
//               onChange={codeHandler}
//             />
//           </Form.Group>
        
//           <Button className="btn egs-btn-primary" onClick={handleSubmit}>
//             Submit
//           </Button>
//         </Form> */}
//       </Modal.Body>
//     </Modal>
//   )
// }

type SettingsProps = {
  platform?: any;
  dispatch?: any;
  showModal: boolean;
  setShow: Function;
};

const UserInformation = ({platform, dispatch, showModal, setShow} : SettingsProps) => {
  const { account } = platform;
  const [loading, setLoading] = useState(false)
  const [emailInput, setEmailInput] = useState("");
  const [email, setEmail] = useState(undefined);
  
  useEffect(() => {
    if(account){
      setEmail(account.email);
    }
  }, [account]);

  const handleSubmit = () =>{
    if(account){
      if(emailInput === ''){
        toast.warning(translate("account_settings.setting_screen.user_information.email_input.toast.warning"),{position:"top-center"});
      }else{
        if(email !== ''){
          if(emailInput === email){
            return toast.error(translate("account_settings.setting_screen.user_information.email_input.toast.error"));
          }
          // console.log('update email');
          setLoading(true)
          AddEmail(emailInput).then(async data => {
            toast.success(translate("account_settings.setting_screen.user_information.email_input.toast.success"),{position:"top-center"});
            // console.log('data',data);
            const updatedUser = await GetUserAccountById(account.id);
            if(updatedUser){
              // console.log('user', updatedUser);
              dispatch(setPlatformAccountSuccess(updatedUser.data));
              setEmail(updatedUser.data.email);
            }
            setShow(false);
          }).catch(error => {
            toast.error(translate("account_settings.setting_screen.user_information.update_email.toast.error"));
          }).finally(() => {
            setLoading(false)
          });
        }else{
          // console.log('add email');
          AddEmail(emailInput);
        }
        setShow(true);
      }
      
    }else{
      toast.error(translate("account_settings.setting_screen.user_information.no_account.toast.error"));
    }

  }

  const EmailHandler = (e) =>{
    const{value} = e.target;
    setEmailInput(value);
  }

  return (
      <div className="d-flex align-items-center h-100">
        <TextField
          type="email"
          variant="outlined"
          label={email ? email : ''}
          style={{
            width: '400px',
            background: '#0E131F',
            borderRadius: '5px'
          }}
          InputLabelProps={{
            style: { color: '#427AAD' },
          }}
          onChange={EmailHandler}
        />
        <Button
          color="primary"
          variant="contained"
          onClick={() => handleSubmit()}
          style={{
            height: '55px',
            marginLeft: '15px'
          }}
        >
          {loading ? 'Loading...' : translate("account_settings.setting_screen.user_information.button.submit")}
        </Button>
      </div>
  );
};

const mapStateToProps = ({ platform }) => ({ platform });
const mapDispatchToProps = (dispatch) => ({ dispatch });
export default connect(mapStateToProps, mapDispatchToProps)(UserInformation);
