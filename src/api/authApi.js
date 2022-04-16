const BASE_API = process.env.REACT_APP_BASE_API || 'http://localhost:5000';

const apiUrl = `${BASE_API}/api`;

export const authApi = {
  register: async ({email, username, password}) => {

    const payload = {
      email,
      username,
      password
    };

    const response = await fetch(`${apiUrl}/auth/register`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    return response.json();

  },

  login: async ({email, password}) => {

    const payload = {
      email,
      password
    };

    const response = await fetch(`${apiUrl}/auth/login`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    return response.json();

  },

  verify: async (token) => {

    const response = await fetch(`${apiUrl}/auth/verifyEmail/${token}`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    return response.json();

  },

  logout: async (token) => {

    const response = await fetch(`${apiUrl}/auth/logout`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    return response.json();

  },

};