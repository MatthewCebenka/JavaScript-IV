// CODE here for your Lambda Classes

class Person {
    constructor(attr) {
        this.name = attr.name;
        this.age = attr.age;
        this.location = attr.location;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
}

class Instructor extends Person {
    constructor(instructorAttr) {
        super(instructorAttr);
        this.specialty = instructorAttr.specialty;
        this.favlanguage = instructorAttr.favlanguage;
        this.catchPhrase = instructorAttr.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}.`;
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`;
    }
}

class Student extends Person {
    constructor(studentAttr) {
        super(studentAttr);
        this.previousBackground = studentAttr.previousBackground;
        this.className = studentAttr.className;
        this.favSubjects = studentAttr.favSubjects;
    }
    listsSubjects() {
        return `${this.favSubjects}`; //?
    }
    PRAssignment(student, subject) {
        return `${student.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(student, subject) {
        return `${student.name} has begun spring challenge on ${subject}`;
    }
}

class ProjectManager extends Instructor {
    constructor(PmAttr) {
        super(PmAttr);
        this.gradClassName = PmAttr.gradClassName;
        this.favInstructor = PmAttr.className;
    }
    standUp(name, channel) {
        return `${name} announces to ${channel}, @${channel} standy times!`;
    }
    debugsCode(name, student, subject) {
        return `${name} debugs ${student}'s code on ${subject}`;
    }
}

const bob = new Person({
    "name": 'Bob',
    "age": 25,
    "location": 'US',
});
const sandy = new Person({
    "name": 'Sandy',
    "age": 4,
    "location": 'New York',
});
const kyle = new Person({
    "name": 'Kyle',
    "age": 37,
    "location": 'Delaware',
});

const tim = new Instructor({
    "specialty": 'Flask',
    "favLanguage": 'Python',
    "catchPhrase": 'Eat tacos',
});
const john = new Instructor({
    "specialty": 'JavaScript',
    "favLanguage": 'Italian',
    "catchPhrase": 'Word!',
});
const zack = new Instructor({
    "specialty": 'Zoom',
    "favLanguage": 'Spanish',
    "catchPhrase": 'yo',
});

const ethan = new Student({
    "previousBackground": 'Teacher',
    "className": 'the class',
    "favSubjects": 'Art',
});

const klein = new Student({
    "previousBackground": 'Wev Developer',
    "className": 'class 2',
    "favSubjects": 'Math',
});

const lars = new Student({
    "previousBackground": 'taxi',
    "className": 'class 3',
    "favSubjects": 'Coding',
});

const britt = new ProjectManager({
    "gradClassName": 'WEB24',
    "favInstructor": 'Britt Hemming',
});
const karl = new ProjectManager({
    "gradClassName": 'WEB23',
    "favInstructor": 'Karl Beska',
});
const theDude = new ProjectManager({
    "gradClassName": 'Web2600',
    "favInstructor": 'The Dude',
});





// classes video TK

// class Animal {
//     constructor(name) {
//         this.name = name;
//     }

//     speak() {
//         console.log(`${this.name} says, hello!`)
//     }
// }

// class Dog extends Animal {
//     constructor(name) {
//         super(name);
//     }
//     speak() {
//         console.log(`${this.name} says, woof!`)
//     }
// }

// class Cat extends Animal {
//     constructor(name) {
//         super(name);
//     }
//     speak() {
//         console.log(`${this.name} says, meow!`)
//     }
// }


// const bowow = new Dog('Grizzly')
// console.log(bowow);
// bowow.speak()

// const kitty = new Cat('Fluffertons')
// console.log(kitty)
// kitty.speak()

// Converting Conunstructers into Classes Video TK fdfs37