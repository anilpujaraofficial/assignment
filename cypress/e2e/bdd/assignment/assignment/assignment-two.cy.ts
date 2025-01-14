import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";
import { AssignmentTwoObj } from "../../../../pagesObject/assignment-two-obj";
import { filePath } from "../../../../utils/filePath/filePath";
let assignmentOTwoObj = new AssignmentTwoObj();

Given("Navigate to this URL {string}", (url) => {
  assignmentOTwoObj.navigate(url);
});
Then("Register on this website any way you want", () => {
  assignmentOTwoObj.register(filePath.register);
});

Then(
  "Try to log in to the website without touching any of the UI elements",
  () => {
    assignmentOTwoObj.APILogin(filePath.register);
  }
);

Then("After log in to the website,assert username on the toolbar", () => {
  assignmentOTwoObj.assert_username(filePath.register);
});
