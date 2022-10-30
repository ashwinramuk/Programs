class Student{
    constructor(n, dob, addr, pH, dept, pr, jyr, tF, fP){
        this.Name = n
        this.DateOfBirth = dob
        this.Address = addr
        this.PhoneNumber = pH
        this.Department = dept
        this.Programme = pr
        this.YearOfJoining = jyr
        this.TotalFees = tF
        this.FeesPaid = fP
    }
    updateAddress(addr){
        this.Address = addr
    }
    updatePhoneNumber(pH){
        this.PhoneNumber = pH
    }
    updateFees(amt){
        this.FeesPaid += amt
    }
}

let student1 = new Student("aravin")