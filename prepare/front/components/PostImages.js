import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import { PlusOutlined } from '@ant-design/icons'

const PostImages = ({images}) =>{
    const [showImagesZoom, setShowImagesZoom] = useState(false)
    const onZoom = useCallback(()=>{
        setShowImagesZoom(true);
    },[])

    // 1. 이미지가 몇 개냐에 따라서 화면이 달라짐
    if(images.length === 1){
        return(
            <>
                {/* role="presentation" : 클릭할 순 있지만, 클릭할 필요가 없다는 메세지 전달 --> 시각장애인 */}
                <img role="presentation" src={images[0].src} alt={images[0].src} onClick={onZoom}/>
            </>
        )
    }
    if(images.length === 2){
        return(
            <>
                <img role="presentation" style={{width : '50%', display : 'inline-block'}} src={images[0].src} alt={images[0].src} onClick={onZoom}/>
                <img role="presentation" style={{width : '50%', display : 'inline-block'}} src={images[0].src} alt={images[0].src} onClick={onZoom}/>
            </>
        )
    }
    // 이미지가 세 개 이상일 때,
    return(
        <>
            <img role="presentation" style={{width : '50%', display : 'inline-block'}} src={images[0].src} alt={images[0].src} onClick={onZoom}/>
            <div
                role="presentation"
                style={{display : 'inline-block', width:'50%', textAlign : 'center', verticalAlign :'middle'}}
                onClick={onZoom}
            >
                <PlusOutlined/>
                <br/>
                {images.length -1}
                개 사진 더 보기
            </div>
        </>
        )
}

PostImages.propTypes = {
    images : PropTypes.arrayOf(PropTypes.object)
}

export default PostImages