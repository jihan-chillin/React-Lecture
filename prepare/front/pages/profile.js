import React from 'react';
import Head from 'next/head'
import { useSelector } from 'react-redux';

import AppLayout from '../components/AppLayout';
import NicknameEditForm from '../components/NicknameEditForm';
import FollowingList from '../components/FollowingList';
import FollowerList from '../components/FollwerList';

const Profile = () => {
  const {me} = useSelector((state)=> state.user)


    return(
    <>
      <Head>
        <title>profile</title>
      </Head>
      <AppLayout>
        <NicknameEditForm/>
        <FollowingList header="팔로잉 목록" data={me.Follwings}/>
        <FollowerList header="팔로워 목록" data={me.Followers}/>
      </AppLayout>
    </>
    )
  };

export default Profile;