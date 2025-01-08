export class AssignmentTwo {
  buttton() {
    return {
      label: "button span.mdc-button__label",
      value: {
        register: "Register",
        login: "Login",
      },
    };
  }

  register(val) {
    switch (val) {
      case "radio":
        return `input[value='Male']`;
      default:
        return `input[formcontrolname='${val}']`;
    }
  }
}
