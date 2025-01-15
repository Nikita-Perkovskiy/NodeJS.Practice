#!usr/bin/env node
import { getArgs } from "./helpers/args.js";
import { TOKEN_DICTIONARY } from "./helpers/constants.js";
import { getWeather } from "./services/api.service.js";
import {
  printError,
  printSuccess,
  printHelp,
} from "./services/log.services.js";
import { saveKeyValue } from "./services/storage.services.js";

const saveToken = async (token) => {
  if (!token.length) {
    printError("no token");
    return;
  }
  try {
    await saveKeyValue(TOKEN_DICTIONARY.token, token);
    printSuccess("Success");
  } catch (err) {
    printError(err.message);
  }
};

const saveCity = async (city) => {
  if (!city.length) {
    printError("No city");
    return;
  }
  try {
    await saveKeyValue(TOKEN_DICTIONARY.city, city);
    printSuccess("City success");
  } catch (e) {
    printError(e.message);
  }
};

const getForecast = async () => {
  try {
    const city = process.env.CITY ?? (await getKeyValue(TOKEN_DICTIONARY.city));
    console.log(weather);
  } catch (err) {
    if (err?.response?.status === 404) {
      printError("404 city not found");
    } else if (err?.response?.status === 401) {
      printError("401 token not found");
    } else {
      printError(err.message);
    }
  }
};

const initCLI = () => {
  const args = getArgs(process.argv);
  // console.log(args);
  // printError();
  // printSuccess();
  // printHelp();
  console.log(process.argv);
  if (args.h) {
    printHelp();
  } else if (args.s) {
    //save city
    saveCity(args.s);
  } else if (args.t) {
    //save token
    return saveToken(args.t);
  }
  //print weather
  getForecast();
};
initCLI();
