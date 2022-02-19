import React from "react";
// import { Dropdown, DropdownButton } from "react-bootstrap";
// import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import styles from "./DropdownCurrency.module.scss";

// assets
// import BTC_ICON from "assets/imgs/btc_icon.png";
import ETH_ICON from "assets/imgs/eth_icon.png";
import USDC_ICON from "assets/imgs/usdc_icon.png";

type Currency = {
  name: string;
  symbol: string;
};

type Props = {
  onSelectCurrency: (selectedKey: string | null) => void;
  selectedCurrency: string | null;
  listCurrency: Array<Currency>;
  containerClass?: string;
};

const useStyles = makeStyles(() => ({
  dropdownBtn: {
    color: '#79B9F4',
    background: '#172033',
    borderRight: '0px !important',
    '&:hover': {
      background: '#172033',
    },
  },
  assetIcon: {
    marginRight: '5px'
  }
}));

const getIcon = (currency) => {
  switch (currency) {
    case 'USDC':
      return (
        <img src={USDC_ICON} alt="USDC" width="25px" />
      )
    case 'ETH':
      return (
        <img src={ETH_ICON} alt="ETH" width="25px" />
      )
    default:
      break;
  }
}

const DropdownCurrency = ({
  onSelectCurrency,
  selectedCurrency,
  listCurrency,
  containerClass,
}: Props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLDivElement>(null);

  const handleMenuItemClick = (option) => {
    console.log({ option })
    onSelectCurrency(option)
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: React.MouseEvent<Document, MouseEvent>) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return;
    }

    setOpen(false);
  };

  return (
    <div className={styles.dropdownContainer}>
      <ButtonGroup
        variant="contained"
        ref={anchorRef}
        aria-label="split button"
        style={{ height: '100%' }}
      >
        <Button className={classes.dropdownBtn}>
          <span className={classes.assetIcon}>
            {getIcon(selectedCurrency)}
          </span>
          {selectedCurrency}
        </Button>
        <Button
          className={classes.dropdownBtn}
          size="small"
          aria-controls={open ? 'split-button-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          onClick={handleToggle}
        >
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        transition
        disablePortal
        style={{ zIndex: 10 }}
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu">
                  {listCurrency.map((option) => (
                    <MenuItem
                      key={option?.symbol}
                      selected={option?.symbol === selectedCurrency}
                      onClick={() => handleMenuItemClick(option?.symbol)}
                    >
                      {option?.symbol}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
};

export default DropdownCurrency;
