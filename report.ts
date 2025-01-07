var reporter = require("cucumber-html-reporter");

var options = {
  theme: "bootstrap",
  jsonFile: "cucumber-report.json",
  output: "cucumber-report.html",
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: true,
  metadata: {
    "App Version": "0.3.2",
    "Test Environment": "STAGING",
    Browser: "Chrome  54.0.2840.98",
    Platform: "Linux",
    Parallel: "Scenarios",
    Executed: "Remote",
  },
  failedSummaryReport: true,
};

reporter.generate(options);
