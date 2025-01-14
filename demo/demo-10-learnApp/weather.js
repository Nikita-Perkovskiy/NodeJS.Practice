#!usr/bin/env node
import { getArgs } from "./helpers/args.js";
import {
  printError,
  printSuccess,
  printHelp,
} from "./services/log.services.js";
import { saveKeyValue } from "./services/storage.services.js";

const saveToken = async (token) => {
  try {
    await saveKeyValue("token", token);
    printSuccess("Success");
  } catch (err) {
    printError(err.message);
  }
};

const initCLI = () => {
  const args = getArgs(process.argv);
  // console.log(args);
  // printError();
  // printSuccess();
  // printHelp();
  if (args.h) {
    printHelp();
  } else if (args.s) {
    //save city
  } else if (args.t) {
    //save token
    return saveToken(args.t);
  }
  //print weather
};
initCLI();
