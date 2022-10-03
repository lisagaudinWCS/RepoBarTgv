import axios from "axios";
import jwtDecode from "jwt-decode";

function setAxiosToken(token) {
  axios.defaults.headers.Authorization = `Bearer ${token}`;
}

function authenticate(credentials) {
  return axios
    .post(`${import.meta.env.VITE_BACKEND_URL}/login`, credentials)
    .then((response) => response.data)
    .then((data) => {
      // Stoker le token dans le local storage
      window.localStorage.setItem("authToken", data.token);
      window.localStorage.setItem("userLog", JSON.stringify(data.user));
      // Prevenir Axios du header par défaut pour les futures requetes http
      setAxiosToken(data.token);
      window.localStorage.getItem("authToken");
    });
}

function isAuthenticated() {
  const token = window.localStorage.getItem("authToken");

  if (token) {
    const { exp: expiration } = jwtDecode(token);
    if (expiration * 1000 > new Date().getTime()) {
      return true;
    }
    return false;
  }
  return false;
}

function logout() {
  window.localStorage.removeItem("authToken");
  window.localStorage.removeItem("userLog");
  delete axios.defaults.headers.Authorization;
}

export default {
  authenticate,
  isAuthenticated,
  logout,
};
