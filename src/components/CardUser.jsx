import React, {useState} from 'react';
import './styles/cardUser.css';

const CardUser = ({user, deleteUser,  setEditUser, setIsOpen, isDelete, setIsDelete}) => {

 
    const handleDelete = () => {
        deleteUser('/users', user.id);
        setIsDelete(true);
   
    }

    const handleEdit = () => {
        setEditUser(user);
        setIsOpen(true);

    }

    
    // console.log(user)
  return (
   <article className='container_card'>
    <h3 className='name_card'>{user.first_name} {user.last_name}</h3>
    <hr></hr>
    <ul className='ul_card'>
        <li className='li_card'><span>Email: <br/></span><span className='span_card'>{user.email}</span></li>

        <li className='li_card'><span>Birthday: <br/></span><span className='span_card'><i className='bx bx-gift'></i>{user.birthday}</span></li> 
    </ul>
    <div className='buttons_cont_card'>
    <button className='button_delete' onClick={handleDelete}><box-icon name='trash'></box-icon></button>
    <button className='button_edit' onClick={handleEdit}><box-icon name='edit' ></box-icon></button>
    </div>
    </article>
  )
}

export default CardUser;