// CODE here for your Lambda Classes
class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    };
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    };
};

class Instructor extends Person {
    constructor(teachAttributes) {
        super(teachAttributes);
        this.specialty = teachAttributes.specialty;
        this.favLanguage = teachAttributes.favLanguage;
        this.catchPhrase = teachAttributes.catchPhrase;
    };
    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    };
    grade(Student, subject) {
        console.log(`${student.name} recieves a perfect score on ${subject}`);
    };
}

class Student extends Person {
    constructor(studentAttributes) {
        super(studentAttributes);
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
    };
    listsSubjects() {
        console.log(this.favSubjects);
    };
    PRAssignment(subject) {
        console.log(`${this.name} recieves a perfect score on ${subject}`);
    };
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    };
};

class ProjectManager extends Instructor {
    constructor(pmAttributes) {
        super(pmAttributes);
        this.gradClassName = pmAttributes.gradClassName;
        this.favInstructor = pmAttributes.favInstructor;
    };
    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    };
    debugsCode(Student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    };
};

//===========================================

const erick = new Student({
    name: 'Erick',
    location: 'Pittsburgh',
    age: 24,
    gender: 'male',
    previousBackground: 'Outdoor Educator',
    className: 'WEB 17',
    favSubjects: ['HTML', 'CSS', 'Javascript'],
  });

const josh = new Instructor({
    name: 'Josh',
    location: 'Utah',
    age: 35,
    gender: 'male',
    favLanguage: 'React',
    specialty: 'Full Stack',
    catchPhrase: `Waddup`
  });

const michael = new ProjectManager({
    name: 'Michael',
    location: 'Utah',
    age: 35,
    gender: 'male',
    favLanguage: 'React',
    specialty: 'Full Stack',
    catchPhrase: `Waddup`,
    gradClassName: ''
  });
  



// console.log(josh.speak());
// console.log(josh.grade(joe, `javascript`));
// console.log(josh.demo(`javascript`));
// console.log(joe.listsSubjects());
// console.log(joe.PRAssignment(`javascript IV`));
// console.log(joe.sprintChallenge(`javascript-IV`));
// console.log(luis.standUp(`fsw14-luis`));
// console.log(luis.debugsCode(joe, `javascript`));
