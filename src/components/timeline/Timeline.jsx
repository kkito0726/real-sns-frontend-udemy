import React, { useState } from "react";
import { useEffect } from "react";
import Post from "../post/Post";
import axios from "axios";
import Share from "../share/Share";
import "./Timeline.css";
// import { Posts } from "../../dummyData";
export default function Timeline() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get(
        "/posts/timeline/63ccee17d01482a298ba9ce7"
      );
      setPosts(response.data);
    };
    fetchPosts();
  }, []);

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
