import React, { useEffect, useState } from "react";
import Goals from ".././components/Goals";
import Work from ".././components/Initiatives";
import TopBar from ".././components/Navbar";
import Posts from ".././components/Posts";
import "animate.css";
import Footer from ".././components/Footer";
import axios from "axios";
import AllMembers from "../components/AllMembers";

const Home = () => {
  const [posts, setPosts] = useState([]);
  // const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("http://localhost:5000/api/posts");
      setPosts(res.data);
    };
    fetchPosts();
  }, []);
  const [works, setWorks] = useState([]);
  useEffect(() => {
    const fetchWorks = async () => {
      const res = await axios.get("http://localhost:5000/api/events/allevents");
      setWorks(res.data);
    };
    fetchWorks();
  }, []);

  return (
    <div>
      <TopBar />

      <p className="animate__animated animate__bounceInLeft text-center text-2xl font-extrabold animate__slower ">
        Our Values
      </p>
      <Goals />
      <Work works={works} />
      <Posts posts={posts} />
      <AllMembers />
      <Footer />
    </div>
  );
};

export default Home;
