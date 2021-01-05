import API from './api'

const AuthService = {

  login: (data) => {
    return API.post('/login', data)
      .then(({ data }) => {
        setHeaderAndStorage(data)
        return data
      })
      .catch(err => {
        console.log("Auth service error", err)
        throw err
      })
  },

  register: (data) => {
    return API.post('/register', data)
      .then(({ data }) => {
        setHeaderAndStorage(data)
        return data
      })
      .catch(err => {
        console.log("Auth service error", err)
      })
  },

  logout: () => {
    API.defaults.headers['Authorization'] = ''
    localStorage.removeItem('user')
    localStorage.removeItem('token')
  }
}

const setHeaderAndStorage = ({ user, token }) => {
  API.defaults.headers['Authorization'] = `Bearer ${token}`
  localStorage.setItem('user', JSON.stringify(user))
  localStorage.setItem('token', token)
}


export default AuthService