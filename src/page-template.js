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
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">Manager</h5>
                  <p class="card-text">Name: ${Manager.name}</p>
                  <p class="card-text">ID: ${Manager.id}</p>
                  <p class="card-text">Email: <a href="https:${Manager.email}//"></a>${Manager.email}</p>
                  <p class="card-text">Office Number: ${Manager.officeNumber}</p>
                </div>
            </div>
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">Engineer</h5>
                  <p class="card-text">Name: ${Engineer.name}</p>
                  <p class="card-text">ID: ${Engineer.id}</p>
                  <p class="card-text">Email: <a href="https://${Engineer.email}"></a>${Engineer.email}</p>
                  <p class="card-text">GitHub: <a href="https://github.com/${Engineer.github}"></a>${Engineer.github}</p>
                </div>
            </div>
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">Intern</h5>
                  <p class="card-text">Name: ${Intern.name}</p>
                  <p class="card-text">ID: ${Intern.id}</p>
                  <p class="card-text">Email: <a href="https://${Intern.email}"></a>${Intern.email}</p>
                  <p class="card-text">School: ${Intern.school}</p>
                </div>
            </div>
        </main>
    </div>
    <script src="./index.js"></script>
</body>
</html>`