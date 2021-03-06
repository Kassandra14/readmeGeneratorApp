// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const util = require('util');

// TODO: Create an array of questions for user input
//const questions = [

//];
const writeFileSync = util.promisify(fs.writeFile);

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      message: 'What is your project title?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Please describe your project:',
      name: 'description',
    },
    {
        type: 'input',
        message: 'Please provide installation instructions:',
        name: 'installation',
      },
      {
        type: 'input',
        message: 'Please provide usage details',
        name: 'usage',
      },
      {
        //should this be a list?
        type: 'input',
        message: 'Please provide contribution guidelines:',
        name: 'contributing',
      },
      {
        type: 'input',
        message: 'Please provide test instructions:',
        name: 'test',
      },
    {    
      type: 'list',
      message: 'What license do you want to use?',
      name: 'license',
      choices: ['Apache License 2.0', 'Boost Software License 1.0','Creative Commons','Eclipse Public License 1.0','GNU GPL v3','MIT','Mozilla Public License 2.0','The Unlicense'],
    },
{
    type: 'input',
    message: 'What is your GitHub username',
    name: 'gituser',
  },
{
    type: 'input',
    message: 'What is your email address?',
    name: 'email',
  },
  {
  type: 'input',
  message: 'What is your project url?',
  name: 'projectUrl',
  },
  ]);
};

//function generateReadMe(answers){
 

//function to write README file
const generateReadMe = (answers) => {
  if(answers.license == "Apache License 2.0"){
    answers.license = "[![Apache License 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  }else if 
    (answers.license == "Boost Software License 1.0"){
      answers.license = "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
  }else if 
    ( answers.license == "Creative Commons"){
      answers.license = "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)"
    }else if 
    (answers.license == "Eclipse Public License 1.0"){
    answers.license = "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"
    } else if
    (answers.license == "GNU GPL v3"){
     answers.license = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
    } else if 
    (answers.license == "MIT"){
    answers.license = "[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    }else if 
    (answers.license == "Mozilla Public License 2.0"){
    answers.license = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
    } else if 
    (answers.license == "The Unlicense"){
    answers.license = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
    }

  return `# ${answers.title}

  ## Description
  
  * ${answers.description}

  ## Table of Contents
  
  <ul>
  [Description](#descriptive)
  [Installation](#installation)
  [Usage](#usage)
  [License](#license)
  [Contributing](#contributing)
  [Tests](#tests)
  [Questions](#questions)
  </ul>
  
  
  ## Installation 
  
  * ${answers.installation}
  
  ## Usage 
  
  * ${answers.usage}
  
  ## License 

  * ${answers.license}
  
  ## Contributing
  
  * ${answers.contributing}
  
  ## Tests
  
  * ${answers.test}
  
  
  ## Questions
  
  * Github username: ${answers.gituser} ...(api call?)
  
  * Email:  ${answers.email}
  
  * Project URL: ${answers.projectUrl}`
 
}

//function writeToFile(fileName, data) {}
//const writeFileSync = util.promisify(fs.writeFile);
//(fileName, data) {}

//function to initialize app
const init = () => {
    promptUser()
    .then((answers) => fs.writeFile('readmeTest2.md', generateReadMe(answers), function(err,data) {
      if(err) {
        console.log(err)
      }
      console.log('Successfully wrote a readme for your project!')
    }))
    .then((answers) => console.log('successfully wrote to readme2.md'))
    .catch((err) => console.error(err));
  };


//Function call to initalize app  
  init();


//   The application will be invoked by using the following command:

// ```bash
// node index.js
// ```
