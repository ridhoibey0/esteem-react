import axios from "./axios";

export const getUser = () => {
  return axios.get("/siswa/profile", {
    headers: {
      token: localStorage.getItem("token"),
    },
  });
};

export const getAttendance = () => {
  return axios.get("/kehadiran/history", {
    headers: {
      token: localStorage.getItem("token"),
    },
  });
};

export const attendanceIn = (formData) => {
  return axios.post("/kehadiran", formData, {
    mode: "no-cors",
    headers: {
      "Access-Control-Allow-Origin": "*",
      token: localStorage.token,
      "Content-Type": "multipart/form-data",
    },
  });
};

export const attendanceOut = (formData) => {
  return axios.put("/kehadiran", formData, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      token: localStorage.token,
      "Content-Type": "multipart/form-data",
    },
  });
};
