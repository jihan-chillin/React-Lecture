import React, { useCallback, useState } from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import {Card, Popover, Button, List, Comment} from 'antd'
import {EllipsisOutlined, HeartOutlined,HeartTwoTone ,MessageOutlined, RetweetOutlined} from '@ant-design/icons'
import Avatar from 'antd/lib/avatar/avatar'

import PostImages from './PostImages'
import CommentForm from './CommentForm'

// 부모컴포넌트인 index.js에서 post 받아옴.
const PostCard = ({post}) =>{
    const [liked, setLiked] = useState(false);
    // 토글인 state관리 setLiked((prev) => !prev);
    const onToggleLike = useCallback(() => {
        setLiked((prev) => !prev);
    }, []);
    const [commentOpened, setCommentOpened] = useState(false)
    const onToggleComment = useCallback(()=>{
        setCommentOpened((prev) => !prev)
    },[])
    const {me} = useSelector((state)=> state.user)
    const id = me?.id;

    return (
        <div style={{marginBottom : 20}}>
            <Card
                cover={post.Images[0] && <PostImages images={post.Images} />}
                actions={[
                    <RetweetOutlined key="retweet"/>,
                    liked
                    ? <HeartTwoTone twoToneColor="#eb2f96" key="heart" onClick={onToggleLike} />
                    : <HeartOutlined key="heart" onClick={onToggleLike} />,
                    <MessageOutlined key="comment" onClick={onToggleComment}/>,
                    <Popover key="more" content={(
                        <Button.Group>
                           {id && post.User.id === id ?(
                               <>
                                 <Button>수정</Button>
                                 <Button type="danger">삭제</Button>
                               </>
                           ) : (
                            <>
                                 <Button>신고</Button>
                            </>
                           )}
                           
                        </Button.Group>
                    )}>
                        <EllipsisOutlined/>
                    </Popover>
                ]}
            >
                <Card.Meta
                    avatar ={<Avatar>{post.User.nickname}</Avatar>}
                    title={post.User.nickname}
                    description={post.content}
                />
                {/* <Image/> */}
                {/* <Content/> */}
                {/* <Buttons></Buttons> */}
            </Card>
            {commentOpened && (
                <div>
                    <CommentForm post={post}/>
                    <List
                        header={`${post.Comments.length}개의 댓글`}
                        itemLayout="horizontal"
                        dataSource={post.Comments}
                        renderItem={(item)=>(
                            <li>
                                <Comment
                                    author={item.User.nickname}
                                    avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
                                    content={item.content}
                                />
                            </li>
                        )}
                    />
                 </div>   
            )}
        </div>
    )
}

// PropTypes.shape을 하면 그 안에 있는 데이터 타입들 모두 세세하게 검사할 수 있음
// reducer에 작성되어 있는 데이터 형식대로 작성하면 됨!
PostCard.propTypes = {
    post : PropTypes.shape({
        id : PropTypes.number, 
        User : PropTypes.object,
        content : PropTypes.string,
        createAt : PropTypes.object,
        Comments : PropTypes.arrayOf(PropTypes.object),
        Images : PropTypes.arrayOf(PropTypes.object)
        
    }).isRequired,
}

export default PostCard