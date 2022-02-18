import React from 'react';
import Head from 'next/head'
import AppLayout from '../components/AppLayout';

const Signup = () => (
  <>
    <Head>
        <meta charSet='utf-8'/>
        <title>profile</title>
      </Head>
    <AppLayout>
      <div>회원가입</div>
    </AppLayout>  
  </>
);

export default Signup;