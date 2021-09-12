export const checkLogin = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return JSON.parse(token).expiredDate >= new Date().getTime();
  }
  return false;
};

export const formatterMoney = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export const capitalize = (str) =>
  str
    .split(" ")
    .map((v) => v.slice(0, 1).toUpperCase() + v.slice(1).toLowerCase())
    .join(" ");

export const hasPositiveValue = (state) =>
  Object.values(state).some((v) => !!v);
