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
* Create a folder on your destop
* Open the folder in Vscode
* Open terminal
* Run npm init (to install package.json)
* Run npm install cypress (to install cypress)
* Run npx cypress open (to run in browser)
* Run npx cypress run (to run headless)
* Select e2e 
* Select any browser (chrome, edge, Electron)



### Scenario Automated
* Login Functionality
  * Verify user is able to login with valid credentials
  * Verify user is unable to login with invalid credentials
  * Verify right error message is returned when email field is blank
  * Verify right error message is returned when password field is blank
  * Verify error message when password lenght doesn't meet the requirement
  

## Video with Audio
The below link is a recorded video with an audio showing how the test runs.
Also, in the folder named videos, there is a video recording of the test run
[https://monosnap.com/file/xFo6imrdaHTKvSUepbnXU5aOek3n1Z]