
import { useState, useEffect } from 'react';
import {Link, Route, Routes, useNavigate, Outlet} from 'react-router-dom';
import styled, { css } from 'styled-components';
import axios from 'axios';

import CoinTable from './cointable';



export const FlexGrid = styled.div`
  display: flex;
  width: 100%;
`;

export const FlexGridCenter = styled(FlexGrid)`
  justify-content: center;
`;

export const AlignRight = styled.div`
  text-align: right;
`;

export const CoinTracker = styled.section`
  padding: 3.5rem 0.75rem;

  h1 {
    font-weight: 700;
    font-size: 1.25rem;
    color: #fff;
    text-align: center;
  }

  .title {
    position: relative;
  }



    button {
      display: inline-block;
      width: 40px;
      height: 25px;
      padding: 0.25rem;
      font-size: 0.75rem;
      color: #fff;
      text-indent: -9999px;
      border: 1px solid #fff;
      border-radius: 3px;
      background: rgba(255, 255, 255, 0.3) center center url('../public/images/refresh.png') no-repeat;
      background-size: 20px auto;
      transition: all ease-in 0.1s;

      &:hover {
        background-color: rgba(255, 255, 255, 0.5);
      }
    }
  }

  .result {
    position: relative;
    height: 57vh;
    overflow-y: scroll;
    margin: 2rem auto 0;
    border: 3px solid #666;

    .coin-table {
      padding-left: 155px;
      overflow-x: scroll;
    }

    table {
      margin: auto;
      font-size: 0.875rem;
      table-layout: fixed;

      th {
        width: 110px;
        padding: 0.5rem;
        font-weight: 700;
        font-size: 0.75rem;
        color: rgb(15, 184, 141);
        background-color: #333;
        border-bottom: 1px solid #666;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }

      td {
        width: 110px;
        padding: 0.5rem;
        color: #eee;
        background-color: #333;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }

      .headCol {
        position: absolute;

        th {
          z-index: 1;
        }
      }

      .rankCol {
        left: 0;
        width: 45px;
      }

      .nameCol {
        left: 45px;
        width: 110px;
        border-right: 3px solid #666;
      }
    }
  }

  .loader {
    display: block;
    font-size: 0.875rem;
    line-height: 1.4;
    text-align: center;
    color: #eee;
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 2rem;
    }

    .btn {
      padding-top: 6px;
    }

    .result {
      width: 715px;
      height: auto;
      overflow-y: hidden;

      .coin-table {
        padding-left: 0;
        overflow-x: auto;
      }

      table {
        th {
          width: 110px;
          padding: 0.5rem;
          font-weight: 700;
          color: rgb(15, 184, 141);
          background-color: #333;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }

        td {
          width: 110px;
          padding: 0.5rem;
          color: #eee;
          background-color: #333;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }

        .headCol {
          position: static;
        }
      }
    }
  }
`;


let Marketcapst =  styled.div`
  color: #ffffff;
  font-size: 40px;
  padding-left: 10%;
  padding-right: 10%;
  padding-top:2vw;
  padding-bottom: 2vw;
  background-color: #070617;
`
let Pagetitle = styled.div`
  font-weight: 500;
`

let Refreshbutton =styled.button`
	text-align: center;
	display: block;
	margin:auto;
`

function Marketcap() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  const refreshPage = () => {
    window.location.reload();
  };

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers?quotes=KRW")
      .then(response => response.json())
      .then(json => {
        setCoins(json.slice(0, 100));
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        // Check the error response status
        console.log(error.response.status);
      });
  }, []);

  return (
	<Marketcapst>
    <Pagetitle>
        MARKETCAP
    </Pagetitle>
    <hr/>
	<div className="App">
      <CoinTracker>
        <FlexGridCenter>
          <h1>암호화폐 실시간 TOP 100</h1>
          <div className="btn">
            <button onClick={refreshPage}>새로고침</button>
          </div>
        </FlexGridCenter>
        <div className="result">
          {loading ? (
            <span className="loader">Loading...</span>
          ) : (
            <CoinTable coins={coins} />
          )}
        </div>
      </CoinTracker>
    </div>
	</Marketcapst>
  );
}

export default Marketcap;
