// Write your solution in this file!
let employee = {
    name: "Raymond",
    streetAddress: "Mamlaka RD, Kilimani",
};

function updateEmployeeWithKeyAndValue(employee, key, value){
    let updatedEmployee={...employee};
    return updatedEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee;
}