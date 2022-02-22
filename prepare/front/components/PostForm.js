import {Form, Input, Button} from 'antd'
import { useCallback, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {addPost} from '../reducers/post'

const PostForm = () =>{
    
    const dispatch = useDispatch();
    const {imagePaths} = useSelector((state)=>state.post)
    const imageInput = useRef()
    const ImageUpload = useCallback(()=>{
        imageInput.current.click()
        // imageInput.current를 통해서 접근할 수 있음.
    }, [imageInput.current])

    const [text, setText] = useState('')
    
    const onChangeText = (e) =>{
        setText(e.target.value)
    }

    const onSubmit = useCallback(()=>{
        dispatch(addPost)
        setText('')
    },[])

    return (
        <Form style={{margin : '10px 0 20px'}} encType="multipart/form-data" onFinish={onSubmit}>
            <Input.TextArea
                value={text}
                onChange={onChangeText}
                maxLength={140}
                placeholder="퇴사하고 싶으신가요?"
        />
            <div>
                <input type='file' multiple hidden ref={imageInput}/>
                <Button onClick={ImageUpload}>이미지 업로드</Button>
                <Button type="primary" style={{float : 'right'}} htmlType="submit">짹짹</Button>
            </div>
            <div>
                {imagePaths.map((v)=>(
                    <div key={v} style={{display : 'inline-block'}}>
                        <img src={v} style={{width : '200px'}} alt={v}/>
                    </div>
                ))}
            </div>
        </Form>
    )
}

export default PostForm