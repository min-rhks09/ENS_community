
import {Link, Route, Routes, useNavigate, Outlet} from 'react-router-dom';
import styled from 'styled-components'
import { useState, useEffect, useCallback } from "react";
import { ethers } from "ethers";
import ConnectButton from './connectbutton';

let Connectwalletst =  styled.div`
    background-color: #070617;
    color: #ffffff;
    font-size: 40px;
    padding-left: 10%;
    padding-right: 10%;
    padding-top:2vw;
    padding-bottom: 2vw;
`
let Pagetitle = styled.div`
  font-weight: 500;
`

let Button = styled.button`
  background-color: #D6EF0E;
  text-align: center;
  display: inline-block;

`

function Connectwallet() {
  const downloadmetamask = () => {
    window.open('https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn');
  };

  const [provider, setProvider] = useState(undefined);
  const [signer, setSigner] = useState(undefined)
  const [walletAddress, setWalletAddress] = useState(undefined)
  const [currentBalance, setCurrentBalance] = useState(undefined)
  const [chainId, setChainId] = useState(undefined)
  const [isConnected,setIsConnected] = useState(false)

  const connectwallet = useCallback(async () => {
    try {
      if(typeof window.ethereum !== 'undefined') {
        await getMetamaskData();

        setIsConnected(true);
      } else {
        alert("please install MetaMask")
      }
    } catch (error) {
      console.log(error);
    }
  },[])


  const getMetamaskData = async () => {
    const _provider = await getProvider();
    const _signer = await getSigner(_provider);
    await getWalletData(_signer);
  }

  const getProvider = async () => {
    const provider = await new ethers.providers.Web3Provider(window.ethereum);
    setProvider(provider);

    return provider;
  }

  const getSigner = async (provider) => {
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    setSigner(signer) 

    return signer;
  }
  
  const getWalletData = async(signer) => {
    const result = await Promise.all([signer.getAddress(),signer.getBalance(),signer.getChainId()])
    setWalletAddress(result[0])
    setCurrentBalance(Number(ethers.utils.formatEther(result[1])))
    setChainId(result[2])
  
  }
  return (
  <Connectwalletst>
    <Pagetitle>
      CONNECT WALLET
    </Pagetitle>
    <hr/>
    <Button onClick={downloadmetamask}>
      download Metamask
    </Button>

    <Button >
      <ConnectButton onClick={connectwallet}>
      
        isConnected={isConnected}
        walletAddress={walletAddress}
        currentBalance={currentBalance}
    </ConnectButton>
    </Button>
  </Connectwalletst>
  );
}


export default Connectwallet;