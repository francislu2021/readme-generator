const inquirer = require("inquirer");
const fs = require("fs");

//generate questions to be included in the README
inquirer.prompt(
    [{
            type: "input",
            message: "What is your project title?",
            name: "title",
            validate: (value) => { if (value) { return true } else { return "I need a value to continue" } }
        },

        {
            type: "input",
            message: "If applicable, please list the steps required to install your project?",
            name: "installation",
            validate: (value) => { if (value) { return true } else { return "I need a value to continue" } }
        },

        {
            type: "input",
            message: "Give a description of your project.",
            name: "description",
            validate: (value) => { if (value) { return true } else { return "I need a value to continue" } }
        },

        {
            type: "input",
            message: "Provide instructions and examples of your project in use for the Usage section.",
            name: "usage",
            validate: (value) => { if (value) { return true } else { return "I need a value to continue" } }
        },

        {
            type: "input",
            message: "If applicable provide instructions and examples for use with screenshot if needed.",
            name: "instructions",
            validate: (value) => { if (value) { return true } else { return "I need a value to continue" } }
        },
        //add checkbox for licence
        {
            type: "list",
            message: "What licence did you use?",
            name: "licence",
            choices: ["MIT Licence", "GPL Licence", "Apache Licence", "GNU Licence", "N/A"],
            validate: (value) => { if (value) { return true } else { return "I need a value to continue" } }
        },

        {
            type: "input",
            message: "For an README entitled questions contact me via Git with my username.",
            name: "GitHub",
            validate: (value) => { if (value) { return true } else { return "I need a value to continue" } }
        },

        {
            type: "input",
            message: "If applicable, provide guidelines on how other developers can contribute to your project.",
            name: "credit",
            validate: (value) => { if (value) { return true } else { return "I need a value to continue" } }
        },

        {
            type: "input",
            message: "If applicable, provide any tests written for your application and provide examples on how to run them.",
            name: "test",
            validate: (value) => { if (value) { return true } else { return "I need a value to continue" } }
        },

        {
            type: "input",
            message: "For contribution and any additional questions you can contact me by email.",
            name: "email",
            validate: (value) => { if (value) { return true } else { return "I need a value to continue" } }
        },
    ]
).then(({
    title,
    installation,
    description,
    usage,
    licence,
    GitHub,
    credit,
    test,
    email
}) => {
    //create template to be used
    const template = `# ${ title }
    *[Installation](#installation) 
    *[Description](#description) 
    *[Usage](#usage) 
    *[Licence](#licence) 
    *[Credit/Contributing](#credit/contributing)
    # Installation 
    ${ installation }
    ## Usage 
    ${ usage }
    ## Credits 
    ${ credit}
    ## Description 
    ${ description }
    ## Licence 
    ${ licence }
    ## Test
    ${ test}
    #Contact
        *GitHub: ${ GitHub } 
        *email: ${ email }`;

    //set function to create README with fs
    createNewFile(title, template);
});

//set a function to create README file
function createNewFile(fileName, data) {
    fs.writeFile(`./${fileName.toLowerCase().split(" ").join(" ")}.md`, data, (err) => {
        if (err) {
            console.log(err)
        }
        console.log("Your README file has been generated");



    })
}
