import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { AssignmentOneObj } from "../../../pagesObject/assignment-one-Obj";

let assignmentOneObj = new AssignmentOneObj();

before(() => {
  Cypress.session.clearAllSavedSessions();
});
Given("Navigate to {string}", (url: string) => {
  assignmentOneObj.navigate_to_youtube(url);
});

Then("From the search bar,search for {string}", (text: string) => {
  assignmentOneObj.search_text(text);
});
Then(
  "Click on the first video that comes up and navigate to the video's detail page",
  () => {
    assignmentOneObj.navigate_video_details_and_click_first_video();
  }
);
Then("Assert the URL of the video detail page is correct", () => {
  assignmentOneObj.assert_the_URL_of_the_video_detail();
});
Then("Click one of the videos randomly on the right side of the page", () => {
  assignmentOneObj.click_one_of_the_videos_randomly();
});
Then(
  "Assert that the title of the video is the one you clicked. For example, you randomly selected the second video on this list. Then you should expect the video title to be {string} on the opening video detail page",
  (text) => {
    assignmentOneObj.assert_that_the_title_of_the_video(text);
  }
);
