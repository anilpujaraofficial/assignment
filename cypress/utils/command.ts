/// <reference types="cypress" />

export class Command {
  navigate(url) {
    cy.visit(url).url().should("include", url);
  }
  clickButton(xpath: string) {
    cy.get(xpath).should("exist").click().wait(500);
  }

  clickWithContain(xpath, value) {
    cy.get(xpath).contains(value).and("exist").click().wait(500);
  }

  inputField(xpath: any, value: any) {
    cy.get(xpath)
      .clear({ force: true })
      .type(value)
      .should("have.value", value)
      .wait(500);
  }

  clickInputValue(val) {
    cy.get(`input[value='${val}']`).click().invoke("val").should("eq", val);
  }

  verifyUrl(url) {
    cy.url().should("include", url);
  }
  verifyContains(xpath, text) {
    cy.get(xpath).should("contain", text);
  }
}
