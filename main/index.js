const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = ({ name, id, position, email, github }) =>
  `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Software Development Team</title>
  
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&family=Dosis:wght@200&display=swap" rel="stylesheet">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  
      <link rel="stylesheet" href="/inClass/Team-Profile-Generator/assets/css/style.css">
  </head>
  <body>
      <div>
          <header>
              <h1>My Team</h1>
          </header>
      </div>
      <div>
          <main>
              <div class="card" style="width: 18rem;">
                  <div class="card-body">
                    <h5 class="card-title">Jonny Gemme<h3>Manager</h3></h5>
                    <p class="card-text">ID:</p>
                    <p class="card-text">Email:</p>
                    <p class="card-text">GitHub:</p>
                  </div>
              </div>
              <div class="card" style="width: 18rem;">
                  <div class="card-body">
                    <h5 class="card-title">Jonny Gemme<h3>Manager</h3></h5>
                    <p class="card-text">ID:</p>
                    <p class="card-text">Email:</p>
                    <p class="card-text">GitHub:</p>
                  </div>
              </div>
              <div class="card" style="width: 18rem;">
                  <div class="card-body">
                    <h5 class="card-title">Jonny Gemme<h3>Manager</h3></h5>
                    <p class="card-text">ID:</p>
                    <p class="card-text">Email:</p>
                    <p class="card-text">GitHub:</p>
                  </div>
              </div>
              <div class="card" style="width: 18rem;">
                  <div class="card-body">
                    <h5 class="card-title">Jonny Gemme<h3>Manager</h3></h5>
                    <p class="card-text">ID:</p>
                    <p class="card-text">Email:</p>
                    <p class="card-text">GitHub:</p>
                  </div>
              </div>
              <div class="card" style="width: 18rem;">
                  <div class="card-body">
                    <h5 class="card-title">Jonny Gemme<h3>Manager</h3></h5>
                    <p class="card-text">ID:</p>
                    <p class="card-text">Email:</p>
                    <p class="card-text">GitHub:</p>
                  </div>
              </div>
          </main>
      </div>
      <script src="./index.js"></script>
  </body>
  </html>`;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'position',
      message: 'Where are you from?',
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is your favorite hobby?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter email',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
    },
  ])
  .then((answers) => {
    const htmlPageContent = generateHTML(answers);

    fs.writeFile('index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });
