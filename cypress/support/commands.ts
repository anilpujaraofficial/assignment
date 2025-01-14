/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//

/**
 *
 * @param value
 * @returns
 */
export function getEnvVariables(value) {
  return Cypress.env(Cypress.env("testEnv"))[value];
}

// ! remove directory
Cypress.Commands.add("rmDir", (dirPath) => {
  cy.task("checkFileExists", dirPath).then((data) => {
    if (data) {
      cy.task("removeDirectory", dirPath);
    } else {
      cy.log("directory not found");
    }
  });
});

declare global {
  namespace Cypress {
    interface Chainable {
      rmDir(filepath: string): Chainable<void>;
    }
  }
}
