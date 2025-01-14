import { AssignmentOne } from "../pages/assignment-one";
import { Command } from "../utils/command";

let command = new Command();
let xpath = AssignmentOne;

export class AssignmentOneObj {
  navigate_to_youtube(url: string) {
    command.navigate(url);
  }

  search_text(text) {
    command.inputField(xpath.xpath.search_query, text);
    command.clickButton(xpath.xpath.searchIcon);
    command.verifyUrl("results?search_query=Itonics");
  }

  navigate_video_details_and_click_first_video() {
    command.clickButton(xpath.xpath.avatar);
    command.verifyUrl("/@itonics");
    command.clickButton(xpath.xpath.video);
  }

  assert_the_URL_of_the_video_detail() {
    command.verifyUrl("/watch?v=ScXKKhHbu5o");
  }

  click_one_of_the_videos_randomly() {
    command.clickButton(xpath.xpath.random_video);
  }

  assert_that_the_title_of_the_video(text) {
    command.inputField(xpath.xpath.search_query, text);
    command.clickButton(xpath.xpath.searchIcon);
    command.clickWithContain(xpath.xpath.video_title, text);
    command.verifyContains(xpath.xpath.video_title, text);
  }
}
