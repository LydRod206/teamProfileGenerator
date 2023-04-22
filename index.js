
// Require the necessary modules
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./util/generateHTML');
const jest = require('jest');
// Create an empty team array
const team = [];

// Create a function to prompt the user for manager information
async function promptManager() {
  const managerQuestions = [
    {
      type: 'input',
      name: 'name',
      message: "What is the manager's name?",
    },
    {
      type: 'input',
      name: 'id',
      message: "What is the manager's ID?",
    },
    {
      type: 'input',
      name: 'email',
      message: "What is the manager's email?",
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: "What is the manager's office number?",
    },
  ];

  const managerAnswers = await inquirer.prompt(managerQuestions);

  const manager = new Manager(
    managerAnswers.name,
    managerAnswers.id,
    managerAnswers.email,
    managerAnswers.officeNumber
  );

  team.push(manager);

  // Prompt the user to add more team members or generate the HTML page
  promptNextAction();
}

// Create a function to prompt the user for engineer information
async function promptEngineer() {
  const engineerQuestions = [
    {
      type: 'input',
      name: 'name',
      message: "What is the engineer's name?",
    },
    {
      type: 'input',
      name: 'id',
      message: "What is the engineer's ID?",
    },
    {
      type: 'input',
      name: 'email',
      message: "What is the engineer's email?",
    },
    {
      type: 'input',
      name: 'github',
      message: "What is the engineer's GitHub username?",
    },
  ];

  const engineerAnswers = await inquirer.prompt(engineerQuestions);

  const engineer = new Engineer(
    engineerAnswers.name,
    engineerAnswers.id,
    engineerAnswers.email,
    engineerAnswers.github
  );

  team.push(engineer);

  // Prompt the user to add more team members or generate the HTML page
  promptNextAction();
}

// Create a function to prompt the user for intern information
async function promptIntern() {
  const internQuestions = [
    {
      type: 'input',
      name: 'name',
      message: "What is the intern's name?",
    },
    {
      type: 'input',
      name: 'id',
      message: "What is the intern's ID?",
    },
    {
      type: 'input',
      name: 'email',
      message: "What is the intern's email?",
    },
    {
      type: 'input',
      name: 'school',
      message: "What is the intern's school?",
    },
  ];

  const internAnswers = await inquirer.prompt(internQuestions);

  const intern = new Intern(
    internAnswers.name,
    internAnswers.id,
    internAnswers.email,
    internAnswers.school
  );

  team.push(intern);

  // Prompt the user to add more team members or generate the HTML page
  promptNextAction();
}

// Create a function to prompt the user to add another team member or generate the HTML page
async function promptNextAction() {
  const nextActionQuestion = {
    type: 'list',
    message: 'What would you like to do next?',
    name: 'nextAction',
    choices: ['Add an engineer', 'Add an intern', 'Finish building my team'],
  };

  const { nextAction } = await inquirer.prompt(nextActionQuestion);

  switch (nextAction) {
    case 'Add an engineer':
      await promptEngineer();
      break;
      case 'Add an intern':
        await promptIntern();
        break;
      default:
        generateHTML(team);
        break;
    }
  }