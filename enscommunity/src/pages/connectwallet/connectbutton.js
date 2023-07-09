import { ethers } from "ethers";
import { useCallback } from "react";
import styled from 'styled-components'

export let Button = styled.button`
  background-color: #D6EF0E;
  color: #ffffff;
  padding: 1vw 1vw 1vw 1vw;
`

const ConnectButton = (props) => {
  const { isConnected, connectWallet, currentBalance, walletAddress } = props;

    const WalletAddress = `${walletAddress?.substring(0,10)}...`
    const CurrentBalance = `${currentBalance?.toFixed(4)}`

  return (
    <>
      {isConnected ? ( 
         <Button>
       {WalletAddress}
        </Button>
      ) : (
        <Button>
          Connect Wallet
        </Button>
      )}
    </>
  );
};

export default ConnectButton;