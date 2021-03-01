// src/pages/MembersUpdate.js
import React, { useState, useEffect } from 'react';
import apis from '../api/index';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

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

const MembersUpdate = () => {
  const { id } = useParams();
  const [name, setName] = useState();
  const [user, setMember] = useState();
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      await apis.getMemberById(id).then((user) => {
        setMember(user);
        setName(user.data.data.name);
        setIsloading(false);
      });
    };

    loadData();
  }, []);

  const handleChangeInputName = async (event) => {
    const name = event.target.value;
    setName(name);
  };

  const handleUpdateMember = async () => {
    const res = apis.updateMemberById(id, { name });
    window.alert(`Member updated successfully`);
  };

  return (
    <div className='MembersUpdate'>
      <h1>In this page you'll see the form to update a user</h1>
      <Wrapper>
        <Title>Update Member</Title>

        <Label>Name: </Label>
        <InputText type='text' value={name} onChange={handleChangeInputName} />

        <Button onClick={handleUpdateMember}>Update Member</Button>
        <CancelButton href={'/users/list'}>Cancel</CancelButton>
      </Wrapper>
    </div>
  );
};

export default MembersUpdate;
