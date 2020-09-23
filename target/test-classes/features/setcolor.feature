Feature: As a user I want to click on set skyBlue background button 
	so that the background color change to skyBlue;
	
Scenario: Valid user should be able to change the background color to blue 
Given I am on techfios.com website  
When  I click on the Set SkyBlue background button; 
Then  The color should change to sky blue; 

Scenario: User should be able to change the background color to white
Given I am on techfios.com website
When I click on white Background button;
Then The background color will change to white;
	
         