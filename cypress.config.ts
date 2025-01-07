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

  on("task", {
    checkFileExists(filepath: string) {
      if (fs.existsSync(filepath)) {
        return true;
      } else {
        return false;
      }
    },
  });

  return config;
}

export default defineConfig({
  e2e: {
    setupNodeEvents,
    specPattern: "**/*.feature",
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

    //Env define
    env: {
      testEnv: "qa",
      qa: {
        url: "",
        username: "",
        password: "",
      },
      dev: {
        url: "",
        username: "",
        password: "",
      },
    },
  },
});
