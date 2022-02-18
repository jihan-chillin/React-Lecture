import React from 'react';
import Head from 'next/head'
import AppLayout from '../components/AppLayout';

const Profile = () => (
  <>
    <Head>
      <meta charSet='utf-8'/>
      <title>profile</title>
    </Head>
    <AppLayout>
      <div>내 프로필</div>
    </AppLayout>
  </>
);

export default Profile;