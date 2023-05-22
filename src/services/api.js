import axios from "./axios";

export const getUser = () => {
  return axios.get("/user", {
    headers: {
      token: localStorage.getItem("token"),
    },
  });
};

export const getAttendance = () => {
  return axios.get("/attendance/history", {
    headers: {
      token: localStorage.getItem("token"),
    },
  });
};

export const attendanceIn = (formData) => {
  console.log(formData);
  return axios.post("/attendance/in", formData, {
    mode: "no-cors",
    headers: {
      "Access-Control-Allow-Origin": "*",
      token: localStorage.token,
      "Content-Type": "multipart/form-data",
    },
  });
};
