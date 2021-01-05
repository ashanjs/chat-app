import { LOGIN, REGISTER, LOGOUT } from '../actions/auth'

const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || {},
  token: localStorage.getItem('token') || '',
  isLoggedIn: !!localStorage.getItem('user')
}

const authReducer = (state = initialState, action) => {

  const { type, payload } = action

  switch (type) {
    case LOGIN:
      return {
        ...state,
        user: payload.user,
        token: payload.token,
        isLoggedIn: true
      }
    case REGISTER:
      return {
        ...state,
        user: payload.user,
        token: payload.token,
        isLoggedIn: true
      }
    case LOGOUT:
      return {
        ...state,
        user: {},
        token: '',
        isLoggedIn: false
      }

    default: {
      return state
    }
  }
}

export default authReducer