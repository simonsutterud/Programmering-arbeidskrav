"use strict";

//selectors
const addBtn = document.querySelector(".add");
const removeBtn = document.querySelector(".remove");
const countBtn = document.querySelector(".count");
const sortBtn = document.querySelector(".sort");
const avgBtn = document.querySelector(".avg");
const result = document.querySelector(".result");
const array = document.querySelector("#array");
//const array = document.getElementById("array").innerHTML;
//const result = document.querySelector(".result");

//functions
const add = function () {
  let answerName = prompt("Enter employee's name:");
  let answerGender = prompt(
    "Enter employee's gender (M for male, F for female):"
  );
  let answerSalary = Number(prompt("Enter employee's salary:"));
  if (
    answerName !== "" &&
    (answerGender === "M" ||
      answerGender === "F" ||
      answerGender === "m" ||
      answerGender === "f") &&
    answerSalary > 0
  ) {
    employees.push({
      name: answerName,
      gender: answerGender,
      salary: answerSalary,
    });
    //result.classList.remove("hidden");
    //console.log("Employee successfully added!");
    //console.log(employees);
    result.textContent = `${answerName} was successfully added to the array!`;
  } else {
    //console.log("Error: employee not added. Please check your input.");
    result.textContent = `Error: employee not added. Please check your input!`;
  }
  printArray();
  //document.querySelector(".jsTest").textContent = employees;
};

const remove = function () {
  let removeName = prompt(
    "Enter the name of the employee you wish to delete from the array:"
  );
  for (let i = 0; i < employees.length; i++)
    if (employees[i].name === removeName) {
      employees.splice(i, 1);
      //console.log("Employee successfully removed!");
      //console.log(employees);
      result.textContent = `${removeName} successfully removed!`;
      //console.log(employees;
      break;
    } else {
      //console.log("Error: employee not removed. Please check your input.");
      if (removeName == "" || removeName == null) {
        result.textContent = `Please enter the name of the employee you wish to remove.`;
      } else {
        result.textContent = `${removeName} not removed: no such name in the array.`;
      }
    }
  printArray();
};

const count = function () {
  let femaleCount = 0;
  let maleCount = 0;
  for (let i = 0; i < employees.length; i++) {
    if (employees[i].gender === "M" || employees[i].gender === "m") {
      maleCount += 1;
    } else femaleCount += 1;
  }
  //console.log(`The array contains ${maleCount} male employees and ${femaleCount} female employees.`
  result.textContent = `The array contains ${maleCount} male and ${femaleCount} female employees.`;
  printArray();
};

const sort = function (a, b) {
  employees.sort((a, b) => a.gender.localeCompare(b.gender));
  result.textContent = "Array sorted!";
  printArray();
};

const calcAvg = function () {
  let avgSalary = 0;
  for (let i = 0; i < employees.length; i++) {
    avgSalary += employees[i].salary;
  }
  avgSalary = avgSalary / employees.length;
  //console.log(`The average salary is ${avgSalary}.`);
  result.textContent = `The average salary is ${avgSalary}.`;
};

const printArray = function () {
  array.textContent = "";
  for (let i = 0; i < employees.length; i++) {
    array.textContent += `Employee name: ${employees[i].name}, gender: ${
      employees[i].gender === "F" || employees[i].gender === "f"
        ? "female"
        : "male"
    }, salary: ${employees[i].salary} `;
  }
};

//event listeners
addBtn.addEventListener("click", add);
removeBtn.addEventListener("click", remove);
countBtn.addEventListener("click", count);
sortBtn.addEventListener("click", sort);
avgBtn.addEventListener("click", calcAvg);

//array of employees
const employees = [
  { name: "Eva Vik", gender: "F", salary: 300000 },
  { name: "Terje Dyb", gender: "M", salary: 320000 },
  { name: "Ann Karin", gender: "F", salary: 400000 },
  { name: "Elisa Fjell", gender: "F", salary: 350000 },
  { name: "Nils Bjørn", gender: "M", salary: 500000 },
];

//console.log(employees);
printArray();

/*
employees.push({
  name: prompt("enter name"),
  gender: prompt("enter gender"),
  salary: Number(prompt("enter salary")),
});
*/
