const managerCard = function(manager) {
    return
`<div class="card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">manager</h5>
            <p class="card-text">Name: ${manager.name}</p>
            <p class="card-text">ID: ${manager.id}</p>
            <p class="card-text">Email: <a href="https:${manager.email}//"></a>${manager.email}</p>
            <p class="card-text">Office Number: ${manager.officeNumber}</p>
    </div>
</div>`
};

const engineerCard = function(engineer) {
    return
`<div class="card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">engineer</h5>
            <p class="card-text">Name: ${engineer.name}</p>
            <p class="card-text">ID: ${engineer.id}</p>
            <p class="card-text">Email: <a href="https://${engineer.email}"></a>${engineer.email}</p>
            <p class="card-text">GitHub: <a href="https://github.com/${engineer.github}"></a>${engineer.github}</p>
    </div>`
};

const internCard = function(intern) {
    return
`</div>
<div class="card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">intern</h5>
            <p class="card-text">Name: ${intern.name}</p>
            <p class="card-text">ID: ${intern.id}</p>
            <p class="card-text">Email: <a href="https://${intern.email}"></a>${intern.email}</p>
            <p class="card-text">School: ${intern.school}</p>
    </div>
</div>`
};

htmlPageContent = (data) => {

    cardArray = []; 

        for (let i = 0; i < data.length; i++) {
            const employee = data[i];
            const role = employee.getRole(); 

            if (role === 'Manager') {
                const mCard = managerCard(employee);

                cardArray.push(mCard);
            }

            if (role === 'Engineer') {
                const eCard = engineerCard(employee);

                cardArray.push(eCard);
            }

            if (role === 'Intern') {
                const iCard = internCard(employee);

                cardArray.push(iCard);
            }
        }

    const teamCards = cardArray.join('');

    const generateTemplate = teamTemplate(teamCards);
        return generateTemplate;
};

const teamTemplate = function (teamCards) {
    return 
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

    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <div>
        <header>
            <h1>My Team</h1>
        </header>
    </div>
    <div>
        <main>
        ${teamCards}
        </main>
    </div>
        <script src="./index.js"></script>
</body>
</html>`
};