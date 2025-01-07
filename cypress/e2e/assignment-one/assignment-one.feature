Feature: Assgnment 1

  @smoke
  Scenario: Search and Navigate on YouTube
    Given Navigate to "https://www.youtube.com"
    Then From the search bar,search for "Itonics"
    Then Click on the first video that comes up and navigate to the video's detail page
    Then Assert the URL of the video detail page is correct
    Then Click one of the videos randomly on the right side of the page
    Then Assert that the title of the video is the one you clicked. For example, you randomly selected the second video on this list. Then you should expect the video title to be "Master Ideation with ITONICS Academy’s FREE Course!" on the opening video detail page
