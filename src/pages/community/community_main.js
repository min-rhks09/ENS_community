import styled from 'styled-components'
import {Link, Route, Routes, useNavigate, Outlet} from 'react-router-dom';
import Post_hot from '../../components/community/main_hot_post';
import Post_rk from '../../components/community/main_rk_post'
import Main_post from '../../components/community/main_post';
import './community_main.css';
import HotIcon from './img/fire.png'
import RankingIcon from './img/ranking.png'
import { Cm_wrap } from '../cm_main_css';


function Community() {

  const navigate = useNavigate();
  const post_write = () => {
    navigate('/community_write');
  };

  return(
    <div className='Community'>
      <Cm_wrap>
        <div class="cm-box">
          <div class="cm-header">
            <div class="cm-title">
              <h1>Community</h1>
            </div>
          </div>
          <div class="hr-box">
            <hr/>
          </div>
          <div class="cm-box-2">
            <div class="rk-box">
              <div class="rk-hot-box">
                <h2 class="rk-hot">HOT
                  <img src={HotIcon} width="20" height="20" alt="fire"/>
                </h2>
                <ul class="rk-hot-ul">
                  <Post_hot></Post_hot>
                </ul>
              </div>
              <div class="rk-hot-box">
                <h2 class="rk-hot">RANKING
                  <img src={RankingIcon} width="15" height="30" alt="ranking-icon"/>
                </h2>
                <ul class="rk-hot-ul">
                  <Post_rk></Post_rk>
                </ul>
              </div>
            </div>
            <div class="hr-box">
              <hr/>
            </div>
            <div class="cm-category">
              <div class="cate-list">
                <button class="cate-btn" onClick={post_write}>글쓰기</button>
              </div>
            </div>
          </div>
          <div class="post-wrap">
            <div class="post-list-box">
              <Main_post></Main_post>
            </div>
          </div>
        </div>
      </Cm_wrap>
  </div>
  );
}

export default Community;