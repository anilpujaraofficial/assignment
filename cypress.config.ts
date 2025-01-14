import { defineConfig } from "cypress";
import * as webpack from "@cypress/webpack-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
const fs = require("fs");
async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
): Promise<Cypress.PluginConfigOptions> {
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    webpack({
      webpackOptions: {
        resolve: { extensions: [".ts", ".js"] },
        module: {
          rules: [
            {
              test: /\.ts$/,
              exclude: /node_modules/,
              use: "ts-loader",
            },
            {
              test: /\.feature$/,
              use: {
                loader: "@badeball/cypress-cucumber-preprocessor/webpack",
                options: config,
              },
            },
          ],
        },
      },
    })
  );

  //!----------check file exists-----------------------------
  on("task", {
    checkFileExists(filepath: string) {
      if (fs.existsSync(filepath)) {
        return true;
      } else {
        return false;
      }
    },
  });
  // !-------------------------remove directory--------------------
  on("task", {
    removeDirectory(fileDir: string) {
      return new Promise((resolve, reject) => {
        fs.rmdir(fileDir, { recursive: true }, (err: boolean) => {
          if (err) {
            return reject(err);
          }
          resolve(null);
        });
      });
    },
  });

  return config;
}

export default defineConfig({
  e2e: {
    setupNodeEvents,
    specPattern: "**/*.feature",
    excludeSpecPattern: ["cypress/e2e/assignment-one"],
    chromeWebSecurity: false,
    includeShadowDom: true,
    video: true,
    supportFile: false,
    viewportHeight: 960,
    viewportWidth: 1536,
    pageLoadTimeout: 90000,
    defaultCommandTimeout: 9000,
    numTestsKeptInMemory: 0,
    experimentalStudio: true,
    //cypress report
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/report/mocha",
      reportFilename: "[status]-[name]-report_",
      html: true,
      json: true,
      inlineAssets: true,
      timestamp: "yyyy-mm-dd_HH-MM-ss",
    },
    //cypress dashboard
    projectId: "oycui9",

    //Env define
    env: {
      testEnv: "qa",
      qa: {
        url: "https://bookcart.azurewebsites.net/",
        apiUrl: "https://bookcart.azurewebsites.net/api",
        username: "",
        password: "",
      },
      dev: {
        url: "",
        username: "",
        password: "",
        apiUrl: "",
      },
    },
  },
});
