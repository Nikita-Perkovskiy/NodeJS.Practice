#!usr/bin/env node
import { getArgs } from "./helpers/args.js";
import {
  printError,
  printSuccess,
  printHelp,
} from "./services/log.services.js";

const initCLI = () => {
  const args = getArgs(process.argv);
  console.log(args);
  printError();
  printSuccess();
  printHelp();
};
initCLI();
