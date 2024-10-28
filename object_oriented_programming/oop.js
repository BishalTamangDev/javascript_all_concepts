let employee = {
    baseSalary: 16000,
    rate: 100,
    overtime: 7,

    getWage : function() {
        return this.baseSalary + (this.overtime * this.rate);
    } 
};

console.log(employee.getWage());
