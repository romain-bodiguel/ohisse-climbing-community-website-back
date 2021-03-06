// == import

// npm
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
// local
import User from './user/User';
import { changeField, fetchUsers } from '../../actions/users';

import search_symbol from '../../img/icons/search.png';
import addUser from '../../img/icons/add-user.png';
// style
import './users.scss';
import { NavLink } from 'react-router-dom';

function Users()
{
  const dispatch = useDispatch();
  const searchValue= useSelector((state) => state.users.search.inputValue);
  const handleChangeField =(value, name) => (
    dispatch(changeField(value, name))
  );
  const userData = useSelector((state) => state.users.usersList);
  console.log(userData);
  useEffect(() => {
    // load all user from API
    dispatch(fetchUsers());
  }, []);

  return(
    <section className='allUser'>
      <h1 className='allUser_h1'>Tous les utilisateurs</h1>
      <form className='allUser_form'>
        <span className='allUser-form_span-input'>
        <img
        src={search_symbol}
        alt='icone de recher'
        className='form_span-input_img'
        />
        <input
        type='search'
        className='form_span-input_input'
        placeholder='Rechercher'
        value={searchValue}
        onChange={(evt)=> handleChangeField(evt.target.value, 'search.inputValue')}
        />
        </span>
        <NavLink to='/ajout-utilisateur'>
          <img
          src={addUser}
          alt='icone ajouter un nouvel utilisateur'
          className='allUser-form_img add_user'
          />
        </NavLink>
      </form>
      {userData.map((item) => {
        return (
          <User {...item} key={item.id} />
        )
        })}
    </section>
  )
};

export default Users;