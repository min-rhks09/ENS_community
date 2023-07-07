import { ethers } from "ethers";
import { useCallback } from "react";

const ConnectButton = (props) => {
  const { isConnected, connectWallet, currentBalance, walletAddress } =
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
          onClick={() => connectWallet()}
        >
          Connect Wallet
        </div>
      )}
    </>
  );
};

export default ConnectButton;