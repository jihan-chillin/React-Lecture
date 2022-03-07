import React, { useCallback, useMemo } from 'react';
import { Form, Input, Button } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { LOG_IN_REQUEST } from '../reducers/user';
import useInput from '../hooks/useInput';

const ButtonWrapper = styled.div`
    margin-top : 10px;
`;

const FormWrapper = styled(Form)`
    padding : 10px;
`;

function LoginForm() {
  const dispatch = useDispatch();
  const { logInLoading } = useSelector((state) => state.user);
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');

  const style = useMemo(() => ({ marginTop: 10 }), []);

  const onSubmitForm = useCallback(() => {
    dispatch({
      type: LOG_IN_REQUEST,
      data: { email, password },
    });
    console.log('아놔 왜 안돼', email, password, logInLoading);
  }, [email, password]);

  return (
    <FormWrapper onFinish={onSubmitForm}>
      <div>
        <label htmlFor="useremail">이메일</label>
        <br />
        <Input name="user-email" value={email} onChange={onChangeEmail} required />
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <br />
        <Input
          name="user-password"
          value={password}
          type="password"
          onChange={onChangePassword}
          required
        />
      </div>
      <ButtonWrapper style={style}>
        <Button type="primary" htmlType="submit" loading={logInLoading}>로그인</Button>
        <Link href="/signup"><a><Button>회원가입</Button></a></Link>
      </ButtonWrapper>
    </FormWrapper>
  );
}

export default LoginForm;
