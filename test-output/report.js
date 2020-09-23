$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./src/test/java/features/setcolor.feature");
formatter.feature({
  "line": 1,
  "name": "As a user I want to click on set skyBlue background button",
  "description": "so that the background color change to skyBlue;",
  "id": "as-a-user-i-want-to-click-on-set-skyblue-background-button",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Valid user should be able to change the background color to blue",
  "description": "",
  "id": "as-a-user-i-want-to-click-on-set-skyblue-background-button;valid-user-should-be-able-to-change-the-background-color-to-blue",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am on techfios.com website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on the Set SkyBlue background button;",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "The color should change to sky blue;",
  "keyword": "Then "
});
formatter.match({
  "location": "SetColorSteps.i_am_on_techfios_com_website()"
});
formatter.result({
  "duration": 8810454800,
  "status": "passed"
});
formatter.match({
  "location": "SetColorSteps.i_click_on_the_Set_SkyBlue_background_button()"
});
formatter.result({
  "duration": 96303800,
  "status": "passed"
});
formatter.match({
  "location": "SetColorSteps.the_color_should_change_to_sky_blue()"
});
formatter.result({
  "duration": 10229015700,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for invisibility of [[ChromeDriver: chrome on WINDOWS (fc666be7f8f4daf9ec1c4a7aada7a6f5)] -\u003e css selector: body[style\u003d\"background-color: skyblue;\"]] (tried for 10 second(s) with 500 MILLISECONDS interval)\nBuild info: version: \u00273.7.1\u0027, revision: \u00278a0099a\u0027, time: \u00272017-11-06T21:01:39.354Z\u0027\nSystem info: host: \u0027LAPTOP-3LTEOA25\u0027, ip: \u0027192.168.1.75\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 85.0.4183.102, chrome: {chromedriverVersion: 84.0.4147.30 (48b3e868b4cc0..., userDataDir: C:\\Users\\simba\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:52554}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: fc666be7f8f4daf9ec1c4a7aada7a6f5\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:82)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:231)\r\n\tat page.SetColorPage.assertSkyBlueColor(SetColorPage.java:31)\r\n\tat steps.SetColorSteps.the_color_should_change_to_sky_blue(SetColorSteps.java:32)\r\n\tat ✽.Then The color should change to sky blue;(./src/test/java/features/setcolor.feature:7)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 9,
  "name": "User should be able to change the background color to white",
  "description": "",
  "id": "as-a-user-i-want-to-click-on-set-skyblue-background-button;user-should-be-able-to-change-the-background-color-to-white",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "I am on techfios.com website",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click on white Background button;",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "The background color will change to white;",
  "keyword": "Then "
});
formatter.match({
  "location": "SetColorSteps.i_am_on_techfios_com_website()"
});
formatter.result({
  "duration": 6246784800,
  "status": "passed"
});
formatter.match({
  "location": "SetColorSteps.i_click_on_white_Background_button()"
});
formatter.result({
  "duration": 86118000,
  "status": "passed"
});
formatter.match({
  "location": "SetColorSteps.the_background_color_will_change_to_white()"
});
formatter.result({
  "duration": 6445314600,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for invisibility of [[ChromeDriver: chrome on WINDOWS (63b928de400c8ddfca97002c75b2897c)] -\u003e css selector: body[style\u003d\"background-color: white;\"]] (tried for 6 second(s) with 500 MILLISECONDS interval)\nBuild info: version: \u00273.7.1\u0027, revision: \u00278a0099a\u0027, time: \u00272017-11-06T21:01:39.354Z\u0027\nSystem info: host: \u0027LAPTOP-3LTEOA25\u0027, ip: \u0027192.168.1.75\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 85.0.4183.102, chrome: {chromedriverVersion: 84.0.4147.30 (48b3e868b4cc0..., userDataDir: C:\\Users\\simba\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:52698}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 63b928de400c8ddfca97002c75b2897c\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:82)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:231)\r\n\tat page.SetColorPage.assertWhiteColor(SetColorPage.java:38)\r\n\tat steps.SetColorSteps.the_background_color_will_change_to_white(SetColorSteps.java:42)\r\n\tat ✽.Then The background color will change to white;(./src/test/java/features/setcolor.feature:12)\r\n",
  "status": "failed"
});
});