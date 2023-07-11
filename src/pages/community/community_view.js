import './community_view.css';
import { Cm_wrap } from './cm_main_css';
import Reply from './compo/view_reply';
import Reple_write from './compo/view_reply_write';
import V_post from './compo/view_post';

function Community_view() {

  return(
    <div className="Community">
      <Cm_wrap>
        <div className="cm-box">
          <div className="cm-header">
            <div class="cm-title">
              <h1>Community</h1>
            </div>
          </div>
          <div class="hr-box">
            <hr/>
          </div>
        <div className="cm-box-2">
          <div className='cm-view-box'>
            <V_post></V_post>
            <hr/>
          <div className="post-reply-view">
            {/* 댓글 작성 */}
            <Reple_write></Reple_write>
            {/* 댓글 작성 */}
            {/* 댓글 */}
            <Reply></Reply>
            {/* 댓글 */}
          </div>
            </div>
          </div>
        </div>
      </Cm_wrap>
    </div>
  )
}

export default Community_view;