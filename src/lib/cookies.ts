import Cookies from "universal-cookie";

const cookies = new Cookies();

export const getToken = (): string => cookies.get("@nexttemplate/token");

export const setToken = (token: string) => {
  cookies.set("@nexttemplate/token", token, { path: "/" });
};

export const removeToken = () =>
  cookies.remove("@nexttemplate/token", { path: "/" });
