// ***********************************************************
// This example support/e2e.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:

import "./commands";
import "@badeball/cypress-cucumber-preprocessor";
import "@cypress/webpack-preprocessor";
import "webpack";

Cypress.on("uncaught:exception", (err, runnable) => {
  // Ignore the specific error
  if (err.message.includes("__shady_getRootNode")) {
    return false;
  }
  // Return true to let Cypress fail the test
  return true;
});
