import { http } from "@/lib";

export const auth = {
  login: async (username, password) => {
    const { data } = await http("post", {
      url: "/login",
      data: {
        username,
        password,
      },
    });

    return data;
  },
};
