import axios from "axios";
import { build } from "../../eas.json";

export const getFetcher = (url: string) =>
    axios
        .create({
            baseURL: build.development.env.API_URL,
        })
        .get(url)
        .then((response) => {
            response.data;
            // console.log("response: ", response);
        })
        .catch((error) => {
            // console.warn("error: ", error);
            return error;
        });
