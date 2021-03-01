// src/pages.MembersList.js
import React, { useState, useEffect } from 'react';
import apis from '../api/index';

const MembersList = () => {
  const [members, setMembers] = useState();
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const members = await apis.getAllMembers();
      setMembers(members);
      setIsloading(false);
    };
    loadData();
  }, []);

  console.log(members);

  return (
    <div className='MembersList'>
      <p>List</p>
    </div>
  );
};

export default MembersList;
