const BASE_URL = "https://strangers-things.herokuapp.com/api/";
const COHORT_NAME = "2211-FTB-ET-WEB-FT";
const API_URL = BASE_URL + COHORT_NAME;

export const authenticateUser = async (username, password, method) => {
  // console.log('authenticating user! method type: ', method);
  try {
    const response = await fetch(`${API_URL}/users/${method}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
        },
      }),
    });

    const result = await response.json();

    if (!result.data.token) {
      return;
    } else {
      window.localStorage.setItem("strange-token", result.data.token);
      
      return await getUser(result.data.token);
    }
  } catch (error) {
    console.error(error);
  }
};

export const getUser = async (token) => {
  try {
      const response = await fetch(`${API_URL}/users/me`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const { data: user } = await response.json();
      console.log("hey look it is me: ", user);

      return user;
  } catch (error) {
    console.error(error);
  }
};
