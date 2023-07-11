import { useState, useEffect } from 'react';
import CommentIcon from './img/Comments.png'
import HitIcon from "./img/hit.png"
import axios from 'axios';

function Main_post() {


  [1,2,3].map(function(a){
    return '12345'
  })

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // 백엔드 API에서 게시글 데이터
    axios.get('/posts')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('게시글 연결 오류', error);
      });
  }, []);

  return(
    <div>
    {
      [1].map(function(a,i){
        return (
          <div>
          <div class="post-box">
            <div class="post-info-box">
              <div class="post-info">
                <span>name.eth</span>
                <span>time</span>
              </div>
            </div>
            <div class="main-post-content-box">
              <div class="main-post-content">
                <h2 className='post-ct-title'>제목</h2>
                <p className='post-ct-ct'>게시글 내용~</p>
              </div>
            </div>
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
          <hr />
        </div>
      )
    })
  }
</div>

)
}


export default Main_post;