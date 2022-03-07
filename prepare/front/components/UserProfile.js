import React, { useCallback } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Card, Button } from 'antd'
import Avatar from 'antd/lib/avatar/avatar'

import {logoutRequestAction} from '../reducers/user';

const UserProfile = () =>{
    const dispatch = useDispatch();

    const {me, logOutLoading} = useSelector((state)=> state?.user)

    const onLogout = useCallback(() =>{
        dispatch(logoutRequestAction());
    },[])

    return(
        <Card
            actions={[
                <>
                    {/* <div key="twit">짹짹<br/>{me?.Posts.length}</div>
                    <div key="following">팔로잉<br/>{me?.Followings?.length}</div>
                    <div key="follower">팔로워<br/>{me?.Follwers?.length}</div> */}
                    <div key="twit">짹짹<br/>2</div>
                    <div key="following">팔로잉<br/>2</div>
                    <div key="follower">팔로워<br/>3</div>
                </>
            ]}
        >
            <Card.Meta
                // avatar={<Avatar>{me?.nickname[0]}</Avatar>}
                avatar={<Avatar>{me?.nickname}</Avatar>}
                title={me?.nickname}
            />
            <Button onClick={onLogout} loading={logOutLoading}>로그아웃</Button>
        </Card>
    )
}

export default UserProfile