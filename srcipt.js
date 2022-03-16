class Student  {
    constructor(fullName, direction) {
        this.fullName = fullName;
        this._direction = direction;
    }
    showFullName() {
        return this.fullName;
    };
    nameIncludes(data) {
        return this.showFullName().includes(data)
    };
    static studentBuilder(fullName, direction) {
        return new Student(fullName, direction);
    };
    set direction(value) {
        this._direction = value;
    }
    get direction() {
        return this._direction;
    };

}

const stud1 = new Student(`Ivan Petrenko`, `web`)
const stud2 = new Student(`Sergiy Koval`, `python`)
const stud3 = Student.studentBuilder(`Ihor Kohut`,`qc`)

console.log(stud1.nameIncludes('Ivan'));   
console.log(stud1.nameIncludes('Denysenko'));
