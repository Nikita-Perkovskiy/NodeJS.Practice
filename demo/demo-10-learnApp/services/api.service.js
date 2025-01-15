import https from "https";
import { BASE_URL, TOKEN_DICTIONARY } from "../helpers/constants.js";
import { getKeyValue } from "./storage.services.js";
import { error } from "console";
import { printError } from "./log.services.js";
import axios from "axios";

const getWeather = async (city) => {
  const token =
    process.env.TOKEN ?? (await getKeyValue(TOKEN_DICTIONARY.token));
  if (!token) {
    throw new Error("no API key, set it using -t api key");
  }

  const { data } = await axios.get(
    "https://api.openweathermap.org/data/2.5/weather",
    {
      params: {
        q: city,
        appid: token,
        lang: "eng",
        units: "metric",
      },
    }
  );
  return data;

  //version with http:
  // BASE_URL.searchParams.append("q", city);
  // BASE_URL.searchParams.append("appid", token);
  // BASE_URL.searchParams.append("lang", "eng");
  // BASE_URL.searchParams.append("units", "metrics");
  // https.get(BASE_URL, (response) => {
  //   let result = "";
  //   response.on("data", (chunk) => {
  //     result += chunk;
  //   });
  //   response.on("end", () => {
  //     console.log(result);
  //   });
  //   // response.complete("error", (error) => {
  //   //   printError(error);
  //   // });
  // });
};

export { getWeather };
