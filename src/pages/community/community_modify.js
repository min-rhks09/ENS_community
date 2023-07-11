import './community_write.css';
import { Cm_wrap } from './cm_main_css';

function Community_modify() {
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
          <form method="community-post">
            <div class="post-wr-box">
              <div className='post-user-info'>
                <div className='post-user'>
                  <span>test.eth</span>
                </div>
              </div>
              <div className='post-title'>
                <input className='post-title-input' name='post-title'/>
              </div>
              <div className='post-content-box'>
                <div className='post-content'>
                  <textarea className='post-info-txt'></textarea>
                </div>
              </div>
              <div className='post-upload'>
                <button className='upload-btn'>수정</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Cm_wrap>
  </div>
  )
}

export default Community_modify;