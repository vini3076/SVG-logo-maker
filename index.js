const inquirer = require('inquirer');
const {Circle, Triangle, Square} = require('./lib/shapes');
const fs = require('fs');


function init (){

    inquirer.prompt (
        [
            {
            type: 'input',
            name: 'text',
            message: 'Enter Logo text (max 3 characters):',
            validate(answer) {
                if(answer.length < 1 || answer.length >3) {
                    return "Please enter logo text between 1-3 characters"
                }
                return true;
            
            }
        },
            
            {
                type: 'list',
                name: 'shape',
                message: 'What shape do you want?',
                choices: ['Circle', 'Square', 'Triangle']
            },
            {
                type: 'input',
                name: 'shapeColor',
                message: 'What color do you want for the shape?',
            },
            {
                type: 'input',
                name: 'textColor',
                message: 'What color do want for the text?',
            }
        ]

    ).then((answers) => {
        console.log (answers);

    })

    

    
}
init();