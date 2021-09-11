export const checkLogin = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return JSON.parse(token).expiredDate >= new Date().getTime();
  }
  return false;
};
