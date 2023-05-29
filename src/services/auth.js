import axios from "./axios";

export const authLogin = (nisLogin, password) => {
  return axios.post("/login/siswa", {
    nisLogin,
    password,
  });
};

export const logout = () => {
  return localStorage.clear();
};
