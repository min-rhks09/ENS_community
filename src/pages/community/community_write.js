import './community_write.css';
import { Cm_wrap } from './cm_main_css';
import { Navigate, useNavigate } from 'react-router-dom';

import React, { useState } from 'react';
import axios from 'axios';


function Community_write() {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [id, setId] = useState('');
  const [writer_user_id, setUserId] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('', {
        
        title: title,
        content: content,
        date : TodayTime(),
        writer_user_id : writer_user_id

      });
      console.log(response.data);
      window.alert('등록이 완료되었습니다');
      navigate('/view');
    } catch (error) {
      console.error(error);
      window.alert('오류가 발생했습니다');
      navigate(-1);
    }
  };

  // 시간 반환
  const TodayTime = () => {
    let now = new Date() // 현재 날짜 및 시간
    let Month = now.getMonth() + 1 // 월
    let nowDate = now.getDate() // 일
    let hours = now.getHours() // 시간
    let min = now.getMinutes() // 분

    return (
      Month +
      "." +
      nowDate +
      ". " +
      " "+
      hours +
      ":" +
      min
    )
  }


  return(
    <div className="Community">
      <Cm_wrap>
        <div className="cm-box">
          <div class="cm-header">
            <div className="cm-title">
              <h1>Community</h1>
            </div>
          <div class="hr-box">
            <hr/>
          </div>
          </div>
        <div class="cm-box-write">
        <form onSubmit={handleSubmit}>
      <div className="post-wr-box">
        <div className="post-user-info">
          <div className='post-user'>
            <span>test.eth</span>
          </div>
        </div>
        <div className="post-title">
          <input
            placeholder="제목을 입력해 주세요."
            minlength='3'
            maxlength='20'
            className="post-title-input"
            name="post-title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <input ></input>
        <div className="post-content-box">
          <div className="post-content">
            <textarea
              className="post-info-txt"
              placeholder="근거없는 비방 글, 광고성 게시글은 삭제될 수 있습니다."
              value={content}
              onChange={(event) => setContent(event.target.value)}
            ></textarea>
          </div>
        </div>
        <div className="post-upload">
          <button type="submit" className="upload-btn">
            등록
          </button>
        </div>
      </div>
    </form>
        </div>
      </div>
    </Cm_wrap>
  </div>
  )
}

export default Community_write