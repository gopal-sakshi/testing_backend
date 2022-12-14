const api = 'http://dummy.restapiexample.com/api/v1/employees'
fetch(api)
    .then(response => response.json())
    .then(employees => employees.forEach(employee => console.log(employee.id)) // logs all employee id
        .catch(error => console.log(error.message))) // logs any error from the promise