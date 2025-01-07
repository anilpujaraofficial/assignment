/// <reference types="cypress" />

export class Command {
  clickButton(xpath: string) {
    cy.get(xpath).should("exist").click().wait(500);
  }

  clickWithContain(xpath, value) {
    cy.get(xpath).contains(value).click().wait(500);
  }

  inputField(xpath: any, value: any) {
    cy.get(xpath)
      .clear({ force: true })
      .type(value)
      .should("have.value", value)
      .wait(500);
  }

  verifyUrl(url) {
    cy.url().should("include", url);
  }
  verifyContains(xpath, text) {
    cy.get(xpath).should("contain", text);
  }
}
