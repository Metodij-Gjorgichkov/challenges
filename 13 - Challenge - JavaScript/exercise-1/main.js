// solution with a class

// class Employee {
//   constructor(name, companyName, jobPosition, salary) {
//     this.name = name;
//     this.companyName = companyName;
//     this.jobPosition = jobPosition;
//     this.salary = salary;
//   }
// }

// const employee1 = new Employee("Metodij", "Brainster", "JS Developer", 100000);
// const employee2 = new Employee("Filip", "Noir", "Back End Developer", 110000);
// const employee3 = new Employee("Aleksandar", "Google", "Data Science", 200000);

// const employees = [employee1, employee2, employee3];
// const list = document.createElement("ul");

// employees.forEach((employee) => {
//   list.innerHTML += `<li>Name: ${employee.name}</li>
//       <li>Company Name: ${employee.companyName}</li>
//       <li>Job Position: ${employee.jobPosition}</li>
//       <li style="margin-bottom: 30px; ">Salary: $${employee.salary}</li>`;
// });
// document.body.append(list);

// solution with a constructor fn

function Employee(name, companyName, jobPosition, salary) {
  this.name = name;
  this.companyName = companyName;
  this.jobPosition = jobPosition;
  this.salary = salary;
}

const employee1 = new Employee("Metodij", "Brainster", "JS Developer", 100000);
const employee2 = new Employee("Filip", "Noir", "Back End Developer", 110000);
const employee3 = new Employee("Aleksandar", "Google", "Data Science", 200000);

const employees = [employee1, employee2, employee3];
const list = document.createElement("ul");

employees.forEach((employee) => {
  list.innerHTML += `<li>Name: ${employee.name}</li>
          <li>Company Name: ${employee.companyName}</li>
          <li>Job Position: ${employee.jobPosition}</li>
          <li style="margin-bottom: 30px; ">Salary: $${employee.salary}</li>`;

  document.body.append(list);
});
