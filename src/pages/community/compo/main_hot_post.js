import './main_hot_post.css'
import { useEffect, useState } from 'react';
import axios from 'axios';

function Post_hot() {

  const [popularPosts, setPopularPosts] = useState([]);

  // useEffect(() => {
  //   fetchPopularPosts();
  // }, []);

  // const fetchPopularPosts = async () => {
  //   try {
  //     const response = await axios.get('/api/popular-posts');
  //     setPopularPosts(response.data);
  //   } catch (error) {
  //     console.error('Error fetching popular posts:', error);
  //   }
  // };

  return(
    <div>
      <a href="#">
        <li class="rk-hot-li">
          <span class="rk-ranking">1</span>
          <div class="rk-info">
            <div class="rk-name-time">
              <span>name.eth</span>&nbsp;
              <span>time ago</span>
            </div>
            <div class="rk-title">
              <p>인기 게시글 제목</p>
            </div>
          </div>
        </li>
      </a>

      {/* <div>
      {data.map((item) => (
        <a key={item.id} href="#">
          <li className="rk-hot-li">
            <span className="rk-ranking">{item.ranking}</span>
            <div className="rk-info">
              <div className="rk-name-time">
                <span>{item.name}</span>
                <span>{item.time}</span>
              </div>
              <div className="rk-title">
                <p>{item.title}</p>
              </div>
            </div>
          </li>
        </a>
      ))}
    </div> */}

    </div>
    
  )
}

export default Post_hot;