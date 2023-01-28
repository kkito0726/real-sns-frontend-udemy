import { MoreVert } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import axios from "axios";
// import { Users } from "../../dummyData";
import "./Post.css";

export default function Post({ post }) {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;

  // const userInfo = Users.filter((user) => user.id === post.id)[0];
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(`users/${post.userId}`);
      setUser(response.data);
      console.log(response.data);
    };
    fetchUser();
  }, []);

  const handleLike = () => {
    setLike((prevLike) => (isLiked ? prevLike - 1 : prevLike + 1));
    setIsLiked(!isLiked);
  };

  return (
    <div>
      <div className="post">
        <div className="postWrapper">
          <div className="postTop">
            <div className="postTopLeft">
              <img
                src={
                  user.profilePicture || PUBLIC_FOLDER + "/person/noAvatar.png"
                }
                alt=""
                className="postProfileImg"
              />
              <span className="postUsername">{user.username}</span>
              <span className="postDate">{post.date}</span>
            </div>
            <div className="postTopRight">
              <MoreVert />
            </div>
          </div>

          <div className="postCenter">
            <span className="postText">{post.desc}</span>
            <img src={PUBLIC_FOLDER + post.img} alt="" className="postImg" />
          </div>

          <div className="postBottom">
            <div className="postBottomLeft">
              <img
                src={PUBLIC_FOLDER + "/heart.png"}
                alt=""
                className="likeIcon"
                onClick={handleLike}
              />
              <span className="postLikeCounter">
                {like}人がいいねを押しました
              </span>
            </div>

            <div className="postBottomRight">
              <span className="postCommentText">{post.comment}:コメント</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
