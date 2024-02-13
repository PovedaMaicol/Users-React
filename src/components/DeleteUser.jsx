import React from 'react';
import './styles/deleteUser.css';

const DeleteUser = ({isDelete, setIsDelete}) => {

    
    const handleCloseDelete = () => {
        setIsDelete(false);
    }

    

  return (
    <div className={`delete_background ${isDelete&&'able'}`}>
    <div className='delete_container'>
        <div className='close_delete' onClick={handleCloseDelete}><ion-icon name="close-circle-outline"></ion-icon></div>
        <h2>Eliminar usuario</h2>
        <p>el usuario se a eliminado</p>
        <button className='button_delete2' onClick={handleCloseDelete}>Aceptar</button>

    </div>
    </div>
  )
}

export default DeleteUser;