const fs = require("fs")
const path = require("path")

function buildHTML(employeeArr) {
    //First, build the part of the html before the cards.
    fs.appendFileSync(path.resolve("./dist/index.html"), createHead())

    //Then, for each employee, create an HTML card and append it to the file
    employeeArr.forEach(element => {
        let name = element.getName;
        let role = element.getRole;
        let ID = element.getId;
        let email = element.getEmail;
        let additionalInfo;

        if (role === "Manager") {
            additionalInfo = `Office Number: ${element.getOfficeNumber}`;
            fs.appendFileSync(path.resolve("./dist/index.html"), createEmployeeCard(name, role, ID, email, additionalInfo));
        } 
        else if(role === "Engineer") {
            additionalInfo = `Github: <a href = "https://github.com/${element.getGithub}">${element.getGithub}</a>`;
            fs.appendFileSync(path.resolve("./dist/index.html"), createEmployeeCard(name, role, ID, email, additionalInfo));
        }
        else if (role === "Intern") {
            additionalInfo = `School: ${element.getSchool}`;
            fs.appendFileSync(path.resolve("./dist/index.html"), createEmployeeCard(name, role, ID, email, additionalInfo));
        }
        else {
            console.log("Something went wrong in buildHTML.");
            fs.appendFileSync(path.resolve("./dist/index.html"), createEmployeeCard(name, role, ID, email, additionalInfo));
        }
        
    }); 

    //Finally, close any open tags.
    fs.appendFileSync(path.resolve("./dist/index.html"), createTail())
}

function createHead() {
    let headStr = 
        `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <link rel="stylesheet" href="styles.css">
            <!--Google Fonts-->
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet"></head>
        <body>
            <header class = "main-header">
                <h1>My Team</h1>
            </header>
        
            <main>
                <!--Cards are placed inside this section-->
                <section class = "card-container">
                `;

    return headStr;
}

function createEmployeeCard(name, role, ID, email, additionalInfo) {
    let card;
    card = 
    `
    
    <div class = "employee-card">
        <div class = "card-top">
            <h1>
                ${name}
            </h1>

            <h2>
                ${role}
            </h2>
        </div>
        <div class = "card-bottom">
            <div>
                ID: ${ID}
            </div>
            <div>
                email: 
                <a href = "mailto: ${email}">
                    ${email}
                </a>
            </div>
            <div>
                ${additionalInfo}
            </div>
        </div>
    </div>
    
    `
    return card;
}

function createTail() {
    let tail = 
    `   </section>
            </main>

            <footer class= "footer">
                <a href = "https://github.com/jkohrt7">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
            </footer>
        </body>

    </html>`
    return tail;
}

module.exports = buildHTML;