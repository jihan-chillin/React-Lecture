import React, { useMemo } from 'react';
import { Form, Input } from 'antd';

function NicknameEditForm() {
  // 이렇게 해야 스타일 작업이 rerendering되지 않고, 최적화할 수 있음.
  const style = useMemo(() => ({
    marginBottom: '20px',
    border: '1px solid #d9d9d9',
    padding: '20px',
  }), []);

  return (
    <Form style={style}>
      <Input.Search addonBefore="닉네임" enterButton="수정" />
    </Form>
  );
}

export default NicknameEditForm;
