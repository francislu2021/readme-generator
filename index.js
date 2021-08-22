const inquirer = require("inquirer");
const fs = require("fs");

//generate questions to be included in the README
inquirer.prompt(
    [{
            type: "input",
            message: "Please enter your project title.",
            name: "title",
            validate: (value) => { if (value) { return true } else { return "Please enter a value to continue!" } }
        },

        {
            type: "input",
            message: "Please indicate how you will install the application.",
            name: "installation",
            validate: (value) => { if (value) { return true } else { return "Please enter a value to continue!" } }
        },

        {
            type: "input",
            message: "Please enter a brief description of your project.",
            name: "description",
            validate: (value) => { if (value) { return true } else { return "Please enter a value to continue!" } }
        },

        {
            type: "input",
            message: "Please describe the purpose and specific usage of your project.",
            name: "usage",
            validate: (value) => { if (value) { return true } else { return "please enter a value to continue!" } }
        },

        {
            type: "input",
            message: "Please briefly describe the instructions of your application.",
            name: "instructions",
            validate: (value) => { if (value) { return true } else { return "Please enter a value to continue!" } }
        },
        //add checkbox for licence
        {
            type: "list",
            message: "What licence do you have?",
            name: "licence",
            choices: ["MIT Licence", "GPL Licence", "Apache Licence", "GNU Licence", "N/A"],
            validate: (value) => { if (value) { return true } else { return "Please pick a value to continue!" } }
        },

        {
            type: "input",
            message: "Please enter your GitHub account name.",
            name: "GitHub",
            validate: (value) => { if (value) { return true } else { return "Please enter a value to continue!" } }
        },

        {
            type: "input",
            message: "Idealy, how would you like users to contribute to your project?",
            name: "contribution",
            validate: (value) => { if (value) { return true } else { return "Please enter a value to continue!" } }
        },

        {
            type: "input",
            message: "Please briefly describe the testing details of the application.",
            name: "test",
            validate: (value) => { if (value) { return true } else { return "Please enter a value to continue!" } }
        },

        {
            type: "input",
            message: "For contribution and any additional questions you can contact me by email.",
            name: "email",
            validate: (value) => { if (value) { return true } else { return "Please enter a value to continue"} }
        },
    ]
).then(({
    title,
    installation,
    description,
    usage,
    licence,
    GitHub,
    contribution,
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
    ## Contribution 
    ${ contribution}
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
        console.log("Congradulations! Your README file now is generated");



    })
}
