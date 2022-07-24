const inquirer = require('inquirer')
const fs = require('fs')

const questions = [
  {
    message: 'What is the Title of your Project?',
    type: 'input',
    name: 'Title'
  },
  {
    message: 'What is the Description of your Project?',
    type: 'input',
    name: 'Description'
  },
  {
    message: 'What are the Installation Instructions for your Project?',
    type: 'input',
    name: 'Installation'
  },
  {
    message: 'What are the Usage Instructions for your Project?',
    type: 'input',
    name: 'Usage'
  },
  {
    message: 'What is the License for your Project?',
    type: 'list',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    name: 'License'
  },
  {
    message: 'What Contributions are required for your Project?',
    type: 'input',
    name: 'Contributions'
  },
  {
    message: 'What are the Testing Guidelines for your Project?',
    type: 'input',
    name: 'Testing'
  },
  {
    message: 'What is your GitHub username for Follow-Up Contact?',
    type: 'input',
    name: 'Username'
  },
  {
    message: 'What is your E-Mail Address for Follow-Up Contact?',
    type: 'input',
    name: 'EMail'
  }
]

inquirer.prompt(questions)
  .then(answers => {
    console.log(answers)
    let readMeElem = `
<img src='https://img.shields.io/badge/${answers.License}-blue.svg'>
<h1>${answers.Title}</h1>
<h2>${answers.Description}</h2>
<h2>Table of Contents</h2>
<details open="open">
<summary>Table of Contents</summary>
<ol>
<li><a href="#installation">Installation</a></li>
<li><a href="#usage">Usage</a></li>
<li><a href="#contributions">Contributions</a></li>
<li><a href="#testing">Testing Guidelines</a></li>
<li><a href="#contact">Contact Details</a></li>
</details>

<h3 id='installation'>Installation</h3>
<p>${answers.Installation}</p>
<h3 id='usage'>Usage</h3>
<p>${answers.Usage}</p>
<h3 id='contributions'>Contributions</h3>
<p>${answers.Contributions}</p>
<h3 id='testing'>Testing Guidelines</h3>
<p>${answers.Testing}</p>
<h3 id='contact'>Contact Details</h3>
<p>${answers.Username}</p>
<p>${answers.EMail}</p>

`

    fs.writeFile('newReadMe.md', readMeElem, err => console.log(err))
  })
  .catch(err => console.log(err))