import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Button } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import { logOutRequestAction } from '../reducers/user';

function UserProfile() {
  const dispatch = useDispatch();
  const { me, logOutLoading } = useSelector((state) => state.user);

  console.log(me, 'me 데이터');

  const onLogout = useCallback(() => {
    dispatch(logOutRequestAction());
  }, []);

  return (
    <Card
      actions={[
        <>
          <div key="twit">짹짹<br />0</div>
          <div key="following">팔로잉<br />0</div>
          <div key="follower">팔로워<br />0</div>
        </>,
      ]}
    >
      <Card.Meta
        avatar={<Avatar>{me?.nickname[0]}</Avatar>}
        title={me?.nickname}
      />
      <Button onClick={onLogout} loading={logOutLoading}>로그아웃</Button>
    </Card>
  );
}

export default UserProfile;
