import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import {Card, Popover, Button} from 'antd'
import {EllipsisOutlined, HeartOutlined, MessageOutlined, RetweetOutlined} from '@ant-design/icons'
import Avatar from 'antd/lib/avatar/avatar'

import PostImages from './PostImages'

// 부모컴포넌트인 index.js에서 post 받아옴.
const PostCard = ({post}) =>{
    const {me} = useSelector((state)=> state.user)
    const id = me?.id;

    return (
        <div>
            <Card
                cover = {post.Images[0] && <PostImages images={post.Images}/>}
                actions={[
                    <RetweetOutlined key="retweet"/>,
                    <HeartOutlined key="heart"/>,
                    <MessageOutlined key="comment"/>,
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
            {/* <CommnetForm/>
            <Comments/> */}
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