import React, { useCallback, useMemo } from 'react'
import {useDispatch, useSelector} from 'react-redux'
// import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';
import styled from 'styled-components'
import {Form, Input, Button} from 'antd'

import { loginRequestAction } from '../reducers/user';
import Link from 'next/link'

const ButtonWrapper = styled.div`
    marginTop : 10px
`

const FormWrapper = styled(Form)`
    padding : 10px
`

const LoginForm = () =>{
    const dispatch = useDispatch();
    const {logInLoading} = useSelector((state)=> state.user)
    const [email, onChangeEmail] = useInput('')
    const [password, onChangePassword] = useInput('')

    const style = useMemo(()=>({marginTop : 10}),[])

    const onSubmitForm = useCallback(() =>{
        dispatch(loginRequestAction())
    },[email, password])

    return(
        <FormWrapper onFinish={onSubmitForm}>
            <div>
                <label htmlFor='user-id'>이메일</label>
                <br/>
                <Input name='user-id' value={email} onChange={onChangeEmail} required/>
            </div>
            <div>
                <label htmlFor='user-password'>비밀번호</label>
                <br/>
                <Input name = 'user-password' 
                    value={password}
                    type='password'
                    onChange={onChangePassword} required/>
            </div>
            <ButtonWrapper style={style}>
                <Button type='primary' htmlType='submit' loading={logInLoading}>로그인</Button>
                <Link href='/signup'><a><Button>회원가입</Button></a></Link>
            </ButtonWrapper>
        </FormWrapper>   
    )
}

// LoginForm.propTypes={
//     setIsloggedIn : PropTypes.func.isRequired,
// }

export default LoginForm