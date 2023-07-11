import axios from "axios";
import { useState } from "react";

function Reple_write() {

  const [text, setText] = useState('');

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  // const handleSubmit = () => {
  //   if (text.trim() !== '') {
  //     axios.post('/api/replies', { content: text })
  //       .then((response) => {
  //         const newReply = response.data;
  //         setText('');
  //       })
  //       .catch((error) => {
  //         console.error('댓글 작성 실패:', error);
  //       });
  //   }
  // };

  return(
    <div>
      <div className='reply-write'>
        <div className='rp-wr-user-box'>
          <span className='rp-wr-user-name'>test.eth</span>
        </div>
        {/* <form onSubmit={handleSubmit}> */}
        <form>
          <textarea
            className='rp-wr-txt'
            placeholder='근거없는 비방 글, 광고성 댓글은 삭제될 수 있습니다.'
            value={text}
            // onChange={handleTextChange}
          ></textarea>
          <div className="btn-box">
            <button type='submit' className="reply-btn">작성</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Reple_write;