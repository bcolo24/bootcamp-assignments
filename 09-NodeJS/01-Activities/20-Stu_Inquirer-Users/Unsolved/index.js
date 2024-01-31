// * It's done when the application asks the user, "What is your name?"
const inquirer = require('inquirer');

inquirer
  .prompt([
    /* Pass your questions in here */
    // * It's done when the application asks the user, "What languages do you know?"
    {
        type:  'input',
        name: 'name',
        message: "What is your name?"
    },

    // * It's done when the application asks the user, "What is your preferred method of communication?"
    {
        type: 'checkbox',
        name: 'languages',
        message: "What languages do you know?",
        choices: [
            'English',
            'French',
            'Japanese',
            'Javascript',
            'Spanish',
            'Pig latin'
        ]
    },
    // * It's done after I have written those responses to a file.
    {
        type: 'list',
        name: 'communication',
        message: "What is your preferred method of communication?",
        choices: [
            'telepathy',
            'speaking',
            'slack',
            'email',
            'text',
            'phone call',
            'ASL',
            'USPS',
            'Pigeon'
        ]
    }

  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
