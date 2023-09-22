import './App.css';
import Header from './Components/Header';
import AddUser from './Components/AddUser';
import ViewUser from './Components/UserCards';
import { useEffect, useState } from 'react';
import { User } from './Interface';
import { getStore } from './Helpers';

function App() {
  const [users, setUsers] = useState<Array<User>>([])

  useEffect(() => {
    const allUsers: Array<User> = getStore()
    setUsers(allUsers)
  }, [])

  return (
    <div className="App">
      <Header />
      <main className='container'>
        <AddUser users={users}  setUsers={setUsers} />
        <ViewUser users={users} setUsers={setUsers} />
      </main>
    </div>
  );
}

export default App;
