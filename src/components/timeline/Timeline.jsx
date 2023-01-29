import React, { useContext, useState } from "react";
import { useEffect } from "react";
import Post from "../post/Post";
import axios from "axios";
import Share from "../share/Share";
import "./Timeline.css";
import { AuthContext } from "../../state/AuthContext";
// import { Posts } from "../../dummyData";
export default function Timeline({ username }) {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = username
        ? await axios.get(`/posts/profile/${username}`) // プロフィールの場合
        : await axios.get(`/posts/timeline/${user._id}`); // ホームの場合
      setPosts(
        response.data.sort((post1, post2) => {
          return new Date(post2.createdAt) - new Date(post1.createdAt);
        })
      );
    };
    fetchPosts();
  }, [username, user._id]);

  return (
    <div className="timeline">
      <div className="timelineWrapper">
        <Share />
        {posts.map((post) => {
          return <Post post={post} key={post._id} />;
        })}
      </div>
    </div>
  );
}
