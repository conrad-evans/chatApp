import axios from "axios";

const api =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== "apiCallBegan") {
      return next(action);
    }

    const { url, method, data, onSuccess, onError } = action.payload;

    try {
      const response = await axios.request({
        baseURL: "http://localhost:4000",
        url,
        method,
        data,
      });

      dispatch({ type: onSuccess, payload: response.data });
      console.log(response.data);
    } catch (error) {
      dispatch({ type: onError, payload: error });
    }
  };

export default api;
