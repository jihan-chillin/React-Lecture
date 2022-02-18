import React, { useCallback } from 'react'

import { Card, Button } from 'antd'
import Avatar from 'antd/lib/avatar/avatar'

const UserProfile = ({setIsloggedIn}) =>{
    const onLogout = useCallback(() =>{
        console.log("로그아웃")
        setIsloggedIn(false)
    },[])

    return(
        <Card
            actions={[
                <>
                    <div key="twit">짹짹<br/>0</div>
                    <div key="following">팔로잉<br/>0</div>
                    <div key="follower">팔로워<br/>0</div>
                </>
            ]}
        >
            <Card.Meta
                avatar={<Avatar>Kozub</Avatar>}
                title='Kozub'
            />
            <Button onClick={onLogout}>로그아웃</Button>
        </Card>
    )
}

export default UserProfile