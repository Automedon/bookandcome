import axios from "axios";

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
  const { data } = await axios.get(
    `https://api.australia-southeast1.gcp.commercetools.com/book-and-come/products`,
    {
      headers: {
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("token")).access_token
        }`,
      },
    }
  );
  return data;
};
