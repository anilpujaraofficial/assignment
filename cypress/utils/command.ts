/// <reference types="cypress" />

export class Command {
  /**
   *
   * @param url
   */
  navigate(url) {
    cy.visit(url).url().should("include", url);
  }

  /**
   *
   * @param xpath
   */
  clickButton(xpath: string) {
    cy.get(xpath).should("exist").click().wait(500);
  }

  /**
   *
   * @param xpath
   * @param value
   */
  clickWithContain(xpath, value) {
    cy.get(xpath).contains(value).and("exist").click().wait(500);
  }

  /**
   *
   * @param xpath
   * @param value
   */
  inputField(xpath: any, value: any) {
    cy.get(xpath)
      .clear({ force: true })
      .type(value)
      .should("have.value", value)
      .wait(500);
  }

  /**
   *
   * @param val
   */
  clickInputValue(val) {
    cy.get(`input[value='${val}']`).click().invoke("val").should("eq", val);
  }

  /**
   *
   * @param url
   */
  verifyUrl(url) {
    cy.url().should("include", url);
  }
  /**
   *
   * @param xpath
   * @param text
   */
  verifyContains(xpath, text) {
    cy.get(xpath).should("contain", text);
  }
}
