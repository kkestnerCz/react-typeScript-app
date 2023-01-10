import axios from "axios";

// context
import { useFormCtx } from "../contexts/FormCtxProvider";

export const useFetch = () => {
  const dataCtx = useFormCtx();

  // handling sending order via axios. Ill use put method next time, I dont wanna waste time on coding BE now.
  const sendOrder = () => {
    return new Promise((resolve, reject) => {
      dataCtx.setContext((prevState) => ({ ...prevState, loading: true })); // loading on
      axios
        .get(
          `https://kkestner.cz/api/tstApiV1/?id=${
            dataCtx.lastApiCallState ? 2 : 1 // here Iam faking errors in response by sending odd or even number in id param.
          }&type=send`
        )
        .then((res) => {
          dataCtx.setContext((prevState) => ({
            ...prevState,
            lastApiCallState: true,
            alert: {
              type: "success",
              message: res.data.message || "api call was ok",
            },
          }));
        })
        .catch((e) => {
          dataCtx.setContext((prevState) => ({
            ...prevState,
            lastApiCallState: false,
            alert: {
              type: "error",
              message: e.response.data.message || "error occured",
            },
          }));
          reject("error occured");
        })
        .finally(() => {
          dataCtx.setContext((prevState) => ({ ...prevState, loading: false })); // loading off
          resolve(true);
        });
    });
  };

  // loading form data from BE
  const loadFormData = () => {
    // TODO: next time
  };

  return { sendOrder };
};
