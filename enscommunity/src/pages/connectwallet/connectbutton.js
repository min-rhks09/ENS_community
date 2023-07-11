import { ethers } from "ethers";
import { useCallback } from "react";
import styled from 'styled-components';
import Connectwallet from './connectwallet';

export let Button = styled.button`
  background-color: #D6EF0E;
  color: #ffffff;
  padding: 1vw 1vw 1vw 1vw;
  margin: 2vw 1vw 2vw;1vw;
  border-radius: 5px;
  font-size: 2vw;
  font-weight: 300;
`

const ConnectButton = (props) => {
<<<<<<< HEAD
  const { isConnected, connectwallet, currentBalance, walletAddress} =
    props;

    const displayWalletAddress = `${walletAddress?.substring(0,10)}...`
    const displayCurrentBalance = `${currentBalance?.toFixed(4)}`
=======
  const { isConnected, connectWallet, currentBalance, walletAddress } = props;
>>>>>>> e7bb727f92e489c204afb1e7dd0f91df7fcb9632

    const WalletAddress = `${walletAddress?.substring(0,10)}...`
    const CurrentBalance = `${currentBalance?.toFixed(4)}`

  return (
    <>
      {isConnected ? ( 
         <Button>
       {WalletAddress}
        </Button>
      ) : (
<<<<<<< HEAD
        <div
          className="btn connectButton"
          onClick={() => Connectwallet()}
        >
=======
        <Button>
>>>>>>> e7bb727f92e489c204afb1e7dd0f91df7fcb9632
          Connect Wallet
        </Button>
      )}
    </>
  );
};

export default ConnectButton;