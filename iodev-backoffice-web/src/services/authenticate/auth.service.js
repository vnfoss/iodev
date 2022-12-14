import axios from 'axios';

class AuthService {
  login(user) {
    return axios
      .post('/authenticate', {
        username: user.username,
        password: user.password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }

  register(user) {
    return axios.post('/signup', {
      username: user.username,
      email: user.email,
      password: user.password
    });
  }
}

export default new AuthService();