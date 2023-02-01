# Documentation of Design and Approach
## Automation script for Topset Login Functionality


## Tools and Framework used
* Framework: (Mocha)
* Supporting Language: Javascript
* Test Site: [https://topset-dev.vercel.app/login]

   
### Requirements
Install Node js
Install Vs code


## Installation and usage. (Starting from Scratch)
Installation and usage can be done on  VsCode.

### Using the Vscode Terminal
* Create a folder your desktop
* Open Vs code and navigate to the folder
* Open terminal
* clone the repository using (git clone url)
* Run npm install (to add depencies to package.json)
* Run npx cypress open --e2e (to run in browser)
* Run npx cypress run --e2e (to run in headless mode)
* Click on the test file in Specs folder to start the test run (Test file: 'login.cy.js')



### Scenario Automated
* Login Functionality
  * Verify user is able to login with valid credentials
  * Verify user is unable to login with invalid credentials
  * Verify right error message is returned when email field is blank
  * Verify right error message is returned when password field is blank
  * Verify error message when password lenght doesn't meet the requirement
  

## Video with Audio
The below link redirects to a recorded video with audio showing how the test runs.

[https://monosnap.com/file/xFo6imrdaHTKvSUepbnXU5aOek3n1Z]