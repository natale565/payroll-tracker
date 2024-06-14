// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function () {

  const employeesArray = [];

  let addEmployees = true;
  // while loop to repeatedly prompt user to add employees until user cancels 
  while (addEmployees) {

    const firstName = prompt("enter employee's first name");
    const lastName = prompt("Enter employee's last name:");
    const salary = prompt("Enter employee's salary:");

    //Object to store entered employee infomation in prompts until they choose to cancel
    const employee = {
      firstName: firstName,
      lastName: lastName,
      salary: salary
    }

    // prompt to continue adding employees
    addEmployees = prompt("Do you want to add another employee? Type yes or click cancel)");

    employeesArray.push(employee);

  }
  console.log(employeesArray)

  return employeesArray;
}




// calcualtes and displays the average salary of employees 
const displayAverageSalary = function (employeesArray) {
  
  let totalSalary = 0;
  for (let i = 0; i < employeesArray.length; i++) {
    totalSalary += parseInt(employeesArray[i].salary);
  }
// calculates average of entered employees
  const averageSalary = totalSalary / employeesArray.length;

  console.log(`The average employee salary is: $${averageSalary.toFixed(2)}`);
}

// Selects a random employee and displays message along with selected employees first and last name in console
const getRandomEmployee = function (employeesArray) {

  const randomIndex = Math.floor(Math.random() * employeesArray.length);

  const randomEmployee = employeesArray[randomIndex];

  console.log(`Congratulations to ${randomEmployee.firstName} ${randomEmployee.lastName}, our radom drawing winner!`)
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
