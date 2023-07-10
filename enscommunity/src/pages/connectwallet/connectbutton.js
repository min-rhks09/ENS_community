import { ethers } from "ethers";
import { useCallback } from "react";
import styled from 'styled-components';
import Connectwallet from './connectwallet';

const ConnectButton = (props) => {
  const { isConnected, connectwallet, currentBalance, walletAddress} =
    props;

    const displayWalletAddress = `${walletAddress?.substring(0,10)}...`
    const displayCurrentBalance = `${currentBalance?.toFixed(4)}`


  return (
    <>
      {isConnected ? (
        <div className="buttonContainer">
            <span className="pageButtonBold connectButton">{displayWalletAddress}</span>
        </div>
      ) : (
        <div
          className="btn connectButton"
          onClick={() => Connectwallet()}
        >
          Connect Wallet
        </div>
      )}
    </>
  );
};

export default ConnectButton;