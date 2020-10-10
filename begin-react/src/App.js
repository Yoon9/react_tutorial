import React, { useRef, useState } from 'react';
import CreateUser from './CreateUser';
import UserList from './UserList';

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });
  const {username, email} = inputs;
  const onChange = e => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  }
  const [users, setUsers] = useState([
    {
        id: 1,
        username: '테스트1',
        email: 'dbs852456@naver.com'
    },
    {
        id: 2,
        username: '테스트2',
        email: 'dbs852456@2naver.com'
    },
    {
        id: 3,
        username: '테스트3',
        email: 'dbs852456@3naver.com'
    },
  ]);
  const nextId = useRef(4);
  const onCreate = () => {
    console.log(nextId);
    const user = {
      id: nextId,
      username,
      email,
    }
    setUsers(users.concat(user));
    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1;
  }
  return (
    <>
    <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} />
    <UserList users={users} />
    </>
  )
}

export default App;
