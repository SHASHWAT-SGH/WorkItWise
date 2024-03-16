import { removeAsyncData } from "./asyncStorage";
import keys from "../global/asyncStorage";

const checkJwtError = (err, setIsAuthenticated, toast) => {
  if (err.response.status == 403) {
    toast.show("You are logged out!", {
      type: "danger",
    });
    console.error("JWT expired");
    setIsAuthenticated(false);
    removeAsyncData(keys.AUTH_TOKEN);
  }
};

export { checkJwtError };
