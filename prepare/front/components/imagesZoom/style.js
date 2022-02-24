
import {CloseOutlined} from '@ant-design/icons'
import styled, { createGlobalStyle } from 'styled-components'

export const Overlay = styled.div`
    position : fixed;
    z-index : 5000;
    top : 0;
    left : 0;
    right : 0;
    bottom : 0;
`
export const Header = styled.header`
    header : 44px;
    background : white;
    position : relative;
    padding : 0;
    text-align : center;

    & h1{
        margin : 0;
        font-size : 17px;
        color : #000000;
        line-height : 44px;
    }

    & button {
        position : absolute;
        right : 0;
        top : 0;
        padding : 15px;
        line-height : 14px;
        cursor : pointer;
    }
`   

export const SlickWrapper = styled.div`
    height : calc(100%-44px);
    background : #090909;
`

export const ImgWrapper = styled.div`
    padding : 32px;
    text-align : center;

    & img {
        margin : 0 auto;
        max-height : 500px;
    }
`
export const Indicator = styled.div`
    text-align : center;

    & > div {
        width : 75px;
        height : 30px;
        line-height : 30px;
        border-radius : 15px;
        background : #313131;
        display : inline-block;
        text-align : center;
        color : white;
        font-size : 15px;
        margin-bottom: 20px;
    }
`

export const CloseBtn = styled(CloseOutlined)`
    position : absolute ;
    right : 0;
    top : 0;
    padding : 15px;
    line-height: 14px;
    cursor : pointer;
`

// react-slick처럼 라이브러리로 자동 스타일링이 되는 것들은 createStyle을 이용해 변경해줄 수 있음
export const Gloabal = createGlobalStyle`
    .slick-slide{
        display: inline-block ;
    }

    .ant-card-cover{
        transform: none !important;
    }
`