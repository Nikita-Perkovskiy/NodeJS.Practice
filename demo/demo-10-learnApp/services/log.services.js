import chalk from "chalk";
import dedent from "dedent-js";

const printError = (error) => {
  console.log(chalk.bgRed(" ERROR ") + " " + error);
};

const printSuccess = (message) => {
  console.log(chalk.bgGreen(" SUCCESS ") + " " + message);
};

const printHelp = () => {
  console.log(
    dedent`${chalk.bgCyan(" HELP ")}
		Without parameters - weather forecast
		-s [CITY] for city name
		-h for print helpers
		-t [API_KEY] for token saving		
        `
  );
};

export { printError, printSuccess, printHelp };
