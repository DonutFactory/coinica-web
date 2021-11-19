import React, { useState } from "react";
import { Box, Grid, Button } from "@material-ui/core";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import StakeCoinModal from "./Modals/StakeCoin";
import { CoinicaStakingIcon } from "./Assets";
import styles from "./Staking.module.scss";

const StyledTableCell = withStyles((theme) => ({
  head: {
    color: "#79B9F4",
    borderBottom: "1px solid #57688D",
  },
  body: {
    color: "#79B9F4",
    border: 0,
  },
}))(TableCell);

const createData = (name, tvl, apy, isApproved) => {
  return { name, tvl, apy, isApproved };
}

const rows = [
  createData('CCA', "$23,512,975", "380%", false),
  createData('CCA', "$694,206,942", "380%", false),
  createData('CCA', "$694,206,942", "380%", true),
];

const StakeAndApproveStyle = {
  marginRight: "10px",
  width: "100px",
  filter: "drop-shadow(0px 0px 6px #0F1223)"
}

const Staking = () => {
  const [stakingModalState, openStakingModal] = useState(false);
  return (
    <Grid container className={styles.container}>
      <StakeCoinModal isOpen={stakingModalState} onClose={() => openStakingModal(false)} />
      <Box className={styles.mainheaderContainer}>
        {/* <Grid container className={styles.mainheader}> */}
        <TableContainer component={Paper} className={styles.mainheader} >
          <Table aria-label="pools table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Pools</StyledTableCell>
                <StyledTableCell align="center">TVL</StyledTableCell>
                <StyledTableCell align="center">APY</StyledTableCell>
                <StyledTableCell align="center"></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    <img src={CoinicaStakingIcon} alt="" width="40px" style={{ marginRight: "5px" }} />
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="center">{row.tvl}</StyledTableCell>
                  <StyledTableCell align="center">{row.apy}</StyledTableCell>
                  <StyledTableCell align="left">
                    {row.isApproved ? (
                      <Button
                        variant="contained"
                        color="primary"
                        style={StakeAndApproveStyle}
                        onClick={() => openStakingModal(true)}
                      >
                        Stake
                      </Button>  
                    ) : (
                      <Button
                        variant="contained"
                        color="primary"
                        style={StakeAndApproveStyle}
                      >
                        Approve
                      </Button>  
                    )}
                    <Button
                      variant="contained"
                      color="secondary"
                      style={{ background: "linear-gradient(180deg, #354B79 4.17%, #2C2C4E 95.31%)",
                      color: "#9DC8EF",
                      filter: "drop-shadow(0px 0px 6px #0F1223)"
                    }}
                    >
                      Details
                    </Button>  
                  </StyledTableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {/* </Grid> */}
      </Box>
    </Grid>
  );
};

export default Staking;
