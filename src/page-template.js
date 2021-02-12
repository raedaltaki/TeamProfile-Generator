const engineersSection = function (employees) 
{
  const engineers = employees.filter(employee =>
  {
    if(employee.getRole()==='Engineer')
    {
      return employee;
    }
  });
  let result ='';
  for(let i =0;i<engineers.length;i++)
  {
    result +=`
          <div class="card m-3" style="min-width: auto; max-width: 300px;">
            <div class="card-header bg-primary text-white">
            <h5 class="card-title text-nowrap">${engineers[i].name}</h5>
            <h6 class="card-subtitle mb-2 text-nowrap"><i class="fas fa-glasses"></i> Engineer</h6>
            </div>
            <div class="card-body">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${engineers[i].id}</li>
                <li class="list-group-item"><span class="text-nowrap">Email:</span> <a href="mailto:${engineers[i].email}" class="card-link text-nowrap">${engineers[i].email}</a></li>
                <li class="list-group-item"><span class="text-nowrap">GitHub: </span> <a href="https://github.com/${engineers[i].github}" class="card-link text-nowrap" target="_blank">${engineers[i].github}</a></li>
              </ul>
            </div>
          </div>
    `;
  } 
  return result; 
};

const internsSection = function (employees) 
{
  const interns = employees.filter(employee =>
  {
    if(employee.getRole()==='Intern')
    {
      return employee;
    }
  });
  let result ='';
  for(let i =0;i<interns.length;i++)
  {
    result +=`
          <div class="card m-3" style="min-width: auto; max-width: 300px;">
            <div class="card-header bg-primary text-white">
              <h5 class="card-title text-nowrap">${interns[i].name}</h5>
              <h6 class="card-subtitle mb-2 text-nowrap"><i class="fas fa-user-graduate"></i> Intern</h6>
            </div>
            <div class="card-body">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${interns[i].id}</li>
                <li class="list-group-item"><span class="text-nowrap">Email:</span> <a href="mailto:${interns[i].email}" class="card-link text-nowrap">${interns[i].email}</a></li>
                <li class="list-group-item"><span class="text-nowrap">School:</span> <span class="text-nowrap"> ${interns[i].school}</span></li>
              </ul>
            </div>
          </div>
    `;
  } 
  return result; 
};

module.exports = templateData => 
{

  const { manager, employees } = templateData;


  return `
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
    <title>Team List</title>
  </head>

  <body>
    <header>
      <div class="w-100 align-center">
        <h1 class="page-title text-center  bg-danger text-white p-4">My Team </h1>
      </div>
    </header>
    <main class="container my-5">
      <div class="d-flex justify-content-center p-2">
        <div class="card-deck justify-content-center">

          <div class="card m-3" style="min-width: auto; max-width: 300px;">
            <div class="card-header bg-primary text-white">
              <h5 class="card-title text-nowrap">${manager.name}</h5>
              <h6 class="card-subtitle mb-2 text-nowrap"><i class="fas fa-mug-hot mr-2"></i> Manager</h6>
            </div>
            <div class="card-body">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${manager.id}</li>
                <li class="list-group-item"><span class="text-nowrap">Email:</span> <a href="mailto:${manager.email}" class="card-link text-nowrap">${manager.email}</a></li>
                <li class="list-group-item"><span class="text-nowrap">Office number:</span> ${manager.officeNumber}</li>
              </ul>
            </div>
          </div>
          ${engineersSection(employees)}
          ${internsSection(employees)}
        </div>
      </div>
    </main>
    <footer class="container text-center py-3">
      <h3 class="text-dark">&copy; ${new Date().getFullYear()} by ${manager.name}</h3>
    </footer>
  </body>
  </html>
  `;
};