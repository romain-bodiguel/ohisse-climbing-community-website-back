// == import

// npm

// local


import {
  CHANGE_FIELD,
  SAVE_CURRENT_TOKEN,
  SAVE_CURRENT_USER,
  CHANGE_INPUT,
  SAVE_USERS,
  FETCH_USER_BY_ID,
  EMPTY_AFTER_DELETE,
  IS_EMPTY_IN_FALSE,
  ADD_INPUT_USER
} from "../actions/users";

import { LOGOUT } from '../actions/settings';


export const initialState = {

  currentUser: [],
  tokenCurrentUser: "",
  isEmpty:false,
  usersList: [],
  search:
  {
    inputValue: '',
  },
  inputCurrentUser: {
    id:'',
    firstname: '',
    lastname: '',
    pseudo: '',
    email: '',
    description: '',
    role: '',
  },
  addUser:{
    firstname: '',
    lastname: '',
    pseudo: '',
    email: '',
    password:'',
    city:'',
    country:'',
    description: '',
    role: '',
  }
};
console.log(initialState);
const usersReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD:
      return {
        ...state,
        [action.name]: action.value,
      };
      case SAVE_USERS:
          return {
            ...state,
            usersList: action.data,
          };
      case SAVE_CURRENT_USER:
        return {
          ...state,
          currentUser: action.data,
        }
      case SAVE_CURRENT_TOKEN:
        return {
          ...state,
          tokenCurrentUser: action.data,
        }
    case FETCH_USER_BY_ID:
        return {
          ...state,
          inputCurrentUser: {
            ...state.inputCurrentUser,
            id:action.data.id,
            firstname: action.data.firstname,
            lastname: action.data.lastname,
            pseudo: action.data.pseudo,
            email: action.data.email,
            city: action.data.city,
            country: action.data.country,
            description: action.data.description,
            role: action.data.role,
          } 
        }
    case CHANGE_INPUT:
          return {
            ...state,
            inputCurrentUser: {
              ...state.inputCurrentUser,
              [action.name]: action.value
            }
          }
    case EMPTY_AFTER_DELETE:
      return {
        ...state,
        isEmpty: true,
        inputCurrentUser: {
          ...state.inputCurrentUser,
          id:'',
          firstname:'',
          lastname:'',
          pseudo:'',
          email:'',
          description:'',
          role:'',
        } 
      }
    case IS_EMPTY_IN_FALSE:
      return {
        ...state,
        isEmpty:false
      }
    case LOGOUT:
      return {
        ...state,
        tokenCurrentUser: "",        
      }
    case ADD_INPUT_USER: 
      return{
        ...state,
        addUser:{
          ...state.addUser,
          [action.name] : action.value,
        }

      }
      default:
        return state;
  }
};

export default usersReducer;