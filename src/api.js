import axios from "axios";
import {fakeData}  from './fakeData'

export const fetchToken = async () => {
  //const data = await axios.get('/api/token')
  const { data } = await axios.post(
    `https://auth.australia-southeast1.gcp.commercetools.com/oauth/token`,
    ``,
    {
      auth: {
        username: "Z6ZwElVg4dZzxJno9_0iuEwL",
        password: "WDRmfZFcTu4Mrll7th27it0dmXIcdHDU",
      },
      params: {
        grant_type: "client_credentials",
        scope: "manage_project:book-and-come",
      },
    }
  );

  localStorage.setItem(
    "token",
    JSON.stringify({
      ...data,
      expiredDate: new Date().getTime() + data.expires_in,
    })
  );
};

export const fetchProducts = async () => {
  return fakeData;
};
