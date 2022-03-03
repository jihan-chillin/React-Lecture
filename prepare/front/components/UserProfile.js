import React, { useCallback } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Card, Button } from 'antd'
import Avatar from 'antd/lib/avatar/avatar'

import {logoutRequestAction} from '../reducers/user';

const UserProfile = () =>{
    const dispatch = useDispatch();

    const {me, isLoggingOut} = useSelector((state)=> state?.user)

    const onLogout = useCallback(() =>{
        dispatch(logoutRequestAction());
    },[])

    return(
        <Card
            actions={[
                <>
                    <div>{me?.nickname}</div>
                    <div key="twit">짹짹<br/>0</div>
                    <div key="following">팔로잉<br/>0</div>
                    <div key="follower">팔로워<br/>0</div>
                </>
            ]}
        >
            <Card.Meta
                avatar={<Avatar>{me?.nickname[0]}</Avatar>}
                title={me?.nickname}
            />
            <Button onClick={onLogout} loading={isLoggingOut}>로그아웃</Button>
        </Card>
    )
}

export default UserProfile