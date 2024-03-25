import { useState, useEffect } from 'react';
import './App.css';
import useCrud from './assets/hooks/useCrud';
import FormUser from './components/FormUser';
import CardUser from './components/CardUser';
import DeleteUser from './components/DeleteUser';
import { URL_API } from '../url';


function App() {
  // la url de la api 
  // es la misma url base del useCrud

  const [editUser, setEditUser] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [isDelete, setIsDelete] = useState();
  // const url = 'https://users-crud.academlo.tech/'

 
  const url =  URL_API.url
  const [users, getUsers, createUser, deleteUser, updateUser] = useCrud(url);

  useEffect(() => {
    getUsers('/users')
 
  }, []);
  // console.log(users)

  const handleOpen = () => {
    setIsOpen(true);
  }

  


  return (
    
      <div className='container_app'>
       <h1 className='container_title'>Regitro de usuarios</h1>
       
       <button className='button_app' onClick={handleOpen}>+ crear nuevo ususario</button>
       <FormUser 
       createUser={createUser}
       editUser={editUser}
       updateUser={updateUser}
       setEditUser={setEditUser}
       isOpen={isOpen}
       setIsOpen={setIsOpen}
       />

       <DeleteUser 
    
       isDelete={isDelete}
       setIsDelete={setIsDelete}
       />
       <div className='cards_container_app'>
        {
          users?.map(user => (
            <CardUser 
            key={user.id}
            user={user}
            deleteUser={deleteUser}
            setEditUser={setEditUser}
            setIsOpen={setIsOpen}
            isDelete={isDelete}
            setIsDelete={setIsDelete}
            />
          ))
        }
       </div>
      </div>
  
  )
}

export default App
