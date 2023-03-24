import React, { useState} from 'react';
import PersonInfo from './personInfo';
import Navbar from './Navbar';
import './App.css';

function App() {
  const [userList, setUserList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const toGetUserData = () => {
    setIsLoading(true);
    fetch('https://reqres.in/api/users?page=1')
      .then(response => response.json())
      .then(data => {
        setUserList(data.data);
        setIsLoading(false);
      })
      .catch(error => console.error(error));
  };
  return (
    <div>
      <Navbar onGetUserData={toGetUserData} />
      {isLoading ? (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      ) : (
        <>
          {userList.map(user => (
            <PersonInfo key={user.id} user={user} />
          ))}
        </>
      )}
    </div>
  );
}

export default App;
