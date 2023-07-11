import { useState } from 'react';
import HitIcon from "./img/hit.png";
import CommentIcon from './img/Comments.png';
import { useNavigate } from 'react-router-dom';

function V_post() {

  const navigate = useNavigate();
  const reply_modify = () => {
    // navigate('community/community_modify');
  };

  return(
    <div>
      <a>
      <div className="cm-post-box-view">
        <div className="cm-user">
          <div className='cm-us-in'>
            <div className='cm-user-info'>
              <span className='v-post-n'>이름.eth</span>
              <span className='v-post-t'>2023.0.0 00:00</span>
            </div>
            <div className='cm-post-btn-list'>
              <button className='post-btn' onClick={reply_modify}>수정</button>
              <button className='post-btn'>삭제</button>
            </div>
          </div>
            <div className='cm-us-wallet'>
              <span>0xfwjiqoeoaafs</span>
            </div>
            <div className='cm-view-ct-info'>
              <div className="cm-view-title">
                <p>게시글 제목</p>
              </div>
              <div className="cm-view-content">
                <p>게시글 내용</p>
              </div>
            </div>
            <div className='cm-us-st'>
              <div className='cm-post-icon'>
              <div class="post-btn-box">
                <div class="btn-list">
                  <span class="hits-btn">
                    <img src={HitIcon} width="25" height="25" />
                    <span class="btn-num">0</span>
                  </span>
                  <span class="cm-btn">
                    <img src={CommentIcon} width="20" height="20" />
                    <span class="btn-num">0</span>
                  </span>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  )
}

export default V_post;