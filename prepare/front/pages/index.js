import React from 'react';
import { useSelector } from 'react-redux';

import AppLayout from '../components/AppLayout';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';

function Home() {
  const { me } = useSelector((state) => state.user);
  const { mainPosts } = useSelector((state) => state.post);

  console.log('첫 인덱스 페이지', me);
  console.log('첫 인덱스 페이지', mainPosts);
  return (
    <AppLayout>
      {me && <PostForm />}
      {/* map 돌릴 때, key값을 index대신 post.id로 쓰는 것이 CRUD관리에 용이 */}
      {mainPosts.map((c) => (
        <PostCard key={c.id} post={c} />
      ))}
    </AppLayout>

  );
}

export default Home;
