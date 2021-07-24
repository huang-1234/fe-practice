let passcode = "Hello TypeScript";

class Employee {
  private _fisrtName: string;
  private _lastName: string;
  private _fullName: string

  get firstName() { return this._fisrtName }
  set firstName(newFirstName) {
    this._fisrtName = newFirstName;
  }

  get fullName(): string {
    return this._fullName;
  }

  set fullName(newName: string) {
    if (passcode && passcode == "Hello TypeScript") {
      this._fullName = newName;
    } else {
      console.log("Error: Unauthorized update of employee!");
    }
  }

  public getLastName() {
    return this._lastName
  }
}

let employee = new Employee();
employee.fullName = "Semlinker";
if (employee.fullName) {
  console.log(employee.fullName);
}
