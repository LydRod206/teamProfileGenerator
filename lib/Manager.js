// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
class Manager {
    constructor(name, id, email, officeNumber) {
      this.name = name;
      this.id = id;
      this.email = email;
      this.officeNumber = officeNumber;
      this.role = "Manager";
    }
  
    getName() {
      return this.name;
    }
  
    getId() {
      return this.id;
    }
  
    getEmail() {
      return this.email;
    }
  
    getOfficeNumber() {
      return this.officeNumber;
    }
  
    getRole() {
      return this.role;
    }
  }
module.exports = Manager;