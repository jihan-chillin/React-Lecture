import React from 'react';
import Head from 'next/head';

import AppLayout from '../components/AppLayout';
import NicknameEditForm from '../components/NicknameEditForm';
import FollowingList from '../components/FollowingList';
import FollowerList from '../components/FollwerList';

function Profile() {
  const following = [{ nickname: '코줍' }, { nickname: '김코줍' }, { nickname: '코줍쟌' }];
  const follower = [{ nickname: 'KOJUB' }, { nickname: 'KIMKOJUB' }, { nickname: 'KOJUBJYAN' }];
  return (
    <>
      <Head>
        <title>profile</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowingList header="팔로잉 목록" data={following} />
        <FollowerList header="팔로워 목록" data={follower} />
      </AppLayout>
    </>
  );
}

export default Profile;
