let employee = {
    name: "Siyajari Samuel",
    streetAddress: " 567 Dog unit St"
};
// function to update employee with a new key-value pair(non-destructive)
function updateEmployeeWithKeyAndValue(employee,key,value){
    return {
        ...employee,
        [key]: value
    };
}
// function to destructively update employee with new key-value pair
function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    employee[key] = value;
    return employee;
}
// function to delete a key-value pair from emeployee (non-destructive)
function deleteFromEmployeeByKey(employee, key){
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
}
// function to destructively delete a key-value pair from employee
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}