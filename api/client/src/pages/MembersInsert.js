// src/pages/MembersInsert.js
import React, { useState } from 'react';
import apis from '../api/index';
import styled from 'styled-components';

const Title = styled.h1.attrs({
  className: 'h1',
})``;

const Wrapper = styled.div.attrs({
  className: 'form-group',
})`
  margin: 0 30px;
`;

const Label = styled.label`
  margin: 5px;
`;

const InputText = styled.input.attrs({
  className: 'form-control',
})`
  margin: 5px;
`;

const Button = styled.button.attrs({
  className: `btn btn-primary`,
})`
  margin: 15px 15px 15px 5px;
`;

const CancelButton = styled.a.attrs({
  className: `btn btn-danger`,
})`
  margin: 15px 15px 15px 5px;
`;

const MembersInsert = () => {
  const [name, setName] = useState();

  const handleChangeInputName = async (event) => {
    const name = event.target.value;
    setName(name);
  };

  const handleIncludeMember = async () => {
    const res = await apis.insertMember({ name });
    window.alert(`Member inserted successfully`);
    setName(name);
  };

  return (
    <div className='MembersInsert'>
      <Wrapper>
        <Title>Create Member</Title>

        <Label>Name: </Label>
        <InputText type='text' onChange={handleChangeInputName} />

        <Button onClick={handleIncludeMember}>Add Member</Button>
        <CancelButton href={'/users/list'}>Cancel</CancelButton>
      </Wrapper>
    </div>
  );
};

export default MembersInsert;
