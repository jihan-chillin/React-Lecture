import React from 'react';
import AppLayout from '../components/AppLayout';

const Home = () =>{
  const {isLoggedIn}
  return (
    <AppLayout>
      <PostForm/>
      <PostCard/>
    </AppLayout>
  )
}

export default Home;