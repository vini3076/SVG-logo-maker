const inquirer = require('inquirer');
const { Circle,Rectangle, Triangle } = require('./lib/shapes.js');
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
                choices: ['Circle', 'Rectangle', 'Triangle']
            },
            {
                type: 'input',
                name: 'shapeColor',
                message: 'Enter the color keyword or hexadecimal number for the shape color (default Black)?',
                
            },
            {
                type: 'input',
                name: 'textColor',
                message: 'Enter the color keyword or hexadecimal number for the text color(default White)?',
                
            }
        ]

    ).then((answers) => {
        console.log (answers);
        let renderLogo
        if (answers.shapeColor == null || answers.shapeColor==''){
            answers.shapeColor = 'black';
        }

        if (answers.textColor == null || answers.textColor==''){
            answers.textColor = 'white';
        }
        switch(answers.shape){
            case 'Circle':
            const circle = new Circle(answers.text, answers.shape, answers.shapeColor, answers.textColor);
            renderLogo = circle.render();
            console.log(renderLogo)
            fs.writeFileSync('./examples/logo.svg', renderLogo);
            break;

            case 'Rectangle':
            const rectangle = new Rectangle(answers.text, answers.shape, answers.shapeColor, answers.textColor);
            renderLogo = rectangle.render();
            console.log(renderLogo)
            fs.writeFileSync('./examples/logo.svg', renderLogo);
            break;

            case 'Triangle':
            const triangle = new Triangle(answers.text, answers.shape, answers.shapeColor, answers.textColor);
            renderLogo = triangle.render();
            console.log(renderLogo)
            fs.writeFileSync('./examples/logo.svg', renderLogo);
            break;


        }

    }) 
}
init();