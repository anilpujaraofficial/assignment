import { Command } from "../utils/command";
import { AssignmentTwo } from "../pages/assignment";
import { register } from "../utils/faker/faker";
import { getEnvVariables } from "../support/commands";

let command = new Command();
let xpath = new AssignmentTwo();
export class AssignmentTwoObj {
  navigate(url) {
    command.navigate(url);
  }
  register(filePath) {
    let data = register();
    cy.task("checkFileExists", filePath).then((bool) => {
      if (!bool) {
        command.clickWithContain(
          xpath.buttton().label,
          xpath.buttton().value.login
        );
        command.verifyUrl("/login");
        command.clickWithContain(
          xpath.buttton().label,
          xpath.buttton().value.register
        );
        command.verifyUrl("/register");
        for (const key in data) {
          switch (data[key].type) {
            case "radio":
              command.clickInputValue(data[key].value);
              break;
            default:
              command.inputField(xpath.register(key), data[key].value);
              break;
          }
        }

        command.clickWithContain(
          xpath.buttton().label,
          xpath.buttton().value.register
        );
        cy.writeFile(filePath, data);
      } else {
        command.clickWithContain(
          xpath.buttton().label,
          xpath.buttton().value.login
        );
        command.verifyUrl("/login");
      }
    });
  }

  APILogin(filePath) {
    cy.readFile(filePath).then((res) => {
      cy.request({
        method: "POST",
        url: getEnvVariables("apiUrl") + "/login",
        headers: {
          "Content-Type": "application/json",
        },
        body: {
          username: res.username.value,
          password: res.password.value,
        },
      }).then((res) => {
        expect(res.statusText).to.eq("OK");
        expect(res.status).to.eq(200);
        window.localStorage.setItem("authToken", res.body.token);
        cy.reload();
      });
    });
  }

  assert_username(filePath) {
    command.navigate(getEnvVariables("url"));
    cy.readFile(filePath).then((res) => {
      command.verifyContains(xpath.homePage().username, res.username.value);
    });
  }
}
