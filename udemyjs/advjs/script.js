// Function constructor

// var john = {

//     name: 'John',
//     yearOfBirth: 1990,
//     job: 'teacher'

// };

// var Person = function(name, yearOfBirth, job) {

//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
//     // this.calculateAge = function() {

//     //     console.log(2020 - this.yearOfBirth);

//     // }


// }

// Person.prototype.calculateAge = function() {

//     console.log(2016-this.yearOfBirth);

// }

// //Person.prototype.lastName = 'Smith';


// var john = new Person('John', 1990, 'teacher');
// var jane = new Person('Jane', 1969, 'designer');
// var mark = new Person('Mark', 1948, 'retired');


// john.calculateAge();
// jane.calculateAge();
// mark.calculateAge();


// Object.create

// var personProto = {

//     calculateAge: function() {

//         console.log(2020 - this.yearOfBirth);

//     }

// };

// var john = Object.create(personProto);

// john.name = 'John';
// john.yearOfBirth = 1993;
// john.job = 'teacher';


// var jane = Object.create(personProto, {

//     name: {value: 'Jane'},
//     yearOfBirth: { value: 1969 },
//     job: { value: 'designer' }

// });

// var john = Object.create(personProto, {

//     name: {value: 'John'},
//     yearOfBirth: {value: 1990},
//     job: {value: 'teacher'},

// });


// var personProto = {

//     calculateAge: function() {

//         console.log(2020 - this.year);

//     }

// };

// var john = Object.create(personProto, {

//     name: {value:'John'},
//     year: {value:1995},
//     job: {value:'police officer'}
// });


// var mark = {

//     name: 'Mark',
//     year: 1993,


// };

// mark.calculateAge = personProto.calculateAge;
// mark.calculateAge();




// Primitives vs objects

// //Primitives
// var a = 23;
// var b = a;
// a = 46;
// console.log(a);
// console.log(b);

// //Objects
// var obj1 = {

//     name: 'John',
//     age: 26,

// };

// var obj2  = obj1;
// obj1.age = 30;
// console.log(obj1.age);
// console.log(obj2.age);



// //Functions

// var age = 27;
// var obj = {

//     name: 'Jonas',
//     city: 'Lisbon'

// };

// function change(age, obj) {

//     age = 30;
//     obj.city = 'San Francisco';

// }

// change(age, obj);

// console.log(age);
// console.log(obj.city);




// Passing functions as arguments

// var years = [1990, 1965, 1937, 2005, 1998];

// function arrayCalc(arr, fn) {

//     var arrRes = [];
//     for(var i=0; i < arr.length; i++) {
        
//         arrRes.push(fn(arr[i]));

//     }
//     return arrRes;

// }

// function calculateAge(year) {

//     return 2016 - year;

// }

// function isFullAge(el) {

//     return el >= 18;

// }

// function maxHeartRate(el) {

//     if(el >= 18 && el<= 81) {

//         return Math.round(206.9 - (0.67 * el));

//     } else {

//         return -1;

//     }

    

// }


// var ages = arrayCalc(years, calculateAge);
// var fullAges = arrayCalc(ages, isFullAge);
// var rates = arrayCalc(ages, maxHeartRate);

// console.log(ages);
// console.log(fullAges);
// console.log(rates);


// Functions returning functions


// function interviewQuestion(job) {

//     if(job === 'designer') {

//         return function(name) {

//             console.log(name + ', can you please explain what UX design is?')

//         } 

//     } else if (job === 'teacher') {

//         return function(name) {

//             console.log(name + ', what subject do you teach?');

//         }

//     } else {

//         return function(name) {

//             console.log('Hello ' + name + ' what do you do?');

//         }

//     }

// }

// var teacherQuestion = interviewQuestion('teacher');
// var designerQuestions = interviewQuestion('designer');

// teacherQuestion('John');
// teacherQuestion('Peter');
// designerQuestions('Jane');
// designerQuestions('Mark');
// designerQuestions('Mike');

// interviewQuestion('teacher')('MarkK');


//  function game() {

//     var score = Math.random() * 10;
//     console.log(score >= 5);

// }

// game();


// (function() {
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// })();

// // console.log(score);

// (function (goodluck) {
//     var score = Math.random() * 10;
//     console.log(score >= 5 - goodluck );
// })(5);





//Closures

// function retirement(retirementAge) {

//     var a = ' years left untill retirement.';

//     return function(yearOfBirth) {

//         var age = 2020 - yearOfBirth;
//         console.log((retirementAge - age) + a);

//     }

// }

// var retirementUS = retirement(66);
// var retirementGermany = retirement(65);
// var retirementIceland = retirement(67);

// retirementUS(1993);
// retirementGermany(1993);
// retirementIceland(1993);


// function interviewQuestion(job) {

//     var text = ' can you explain ';

//     return function(name) {

//         if(job === 'programmer') {

//             console.log(name + text + 'how does programming work?');

//         } else if (job === 'designer') {

//             console.log(name + text + 'the basic principles of UX design?');

//         } else {

//             console.log(name + text + 'anything really?');

//         }

//     }

// }


// var programJob = interviewQuestion('programmer');
// programJob('Mark');


// Bind call and apply


// var john = {

//     name: 'John',
//     age: 26,
//     job: 'teacher',
//     presentation: function(style, timeOfDay) {

//         if(style === 'formal') {

//             console.log('Good ' + timeOfDay + ', ladies and gentlemen! I\'m ' + this.name + ' and i am a ' + this.job + ' and i am ' + this.age + ' years old.');

//         } else if (style === 'friendly') {

//             console.log('Hey whats up? I am ' + this.name + ' have a nice ' + timeOfDay);

//         }

//     }

// }

// var emily = {

//     name: 'Emily',
//     age: 35,
//     job: 'designer'

// };

// john.presentation('formal', 'morning');

// john.presentation.call(emily, 'friendly', 'afternoon');

// // john.presentation.apply(emily, ['friendly', 'afternoon']);

// var johnFriendly = john.presentation.bind(john, 'friendly');
// johnFriendly('morning');

// var emilyFormal = john.presentation.bind(emily,'formal');
// emilyFormal('afternoon');






// var years = [1990, 1965, 1937, 2005, 1998];

// function arrayCalc(arr, fn) {

//     var arrRes = [];

//     for(var i=0; i<arr.length; i++) {

//         arrRes.push(fn(arr[i]));

//     }

//     return arrRes;

// }

// function calculateAge(year){

//     return 2016 - year;

// }

// function isFullAge(limit, age) {

//     return age >= limit;

// }

// // var godine = arrayCalc(years, calculateAge);
// // console.log(godine);

// // var punoletan = arrayCalc(godine, isFullAge);
// // console.log(punoletan);


// var ages = arrayCalc(years, calculateAge);
// var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
// var fullSerbia = arrayCalc(ages, isFullAge.bind(this, 18));
// console.log(ages);
// console.log(fullJapan);
// console.log(fullSerbia);



// CHALLENGE 


var Question = function(question, answers, correctAnswer) {

    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;

}

Question.prototype.getAnswers = function() {

    for(var i=0; i<this.answers.length; i++) {

        console.log(i + ': ' + this.answers[i]);

    }

}

Question.prototype.checkAnswer = function(loto, answer) {

    console.log('Your current score is ' + score);

    if(answer == questions[loto].correctAnswer) {

        console.log('Congratz! Your answer is correct!');
        console.log('#################################');
        score++;
        getQuestion();

    } else if(answer == 'exit') {

        console.clear();

    } else {

        console.log('Ooops.. try again');
        console.log('#################################');
        getQuestion();

    }

}

function getQuestion() {

    var loto = Math.round(Math.random() * 2);

    console.log(questions[loto].question);
    console.log(questions[loto].getAnswers());
    

    questions[loto].checkAnswer(loto, prompt('Enter your answer or type exit'));

}


var question1 = new Question('Is javascript a programming language?', ['yes', 'no', 'maybe'], 0);
var question2 = new Question('How do you write color white in hexadecimal?', ['#ccc', '#000', '#fff'], 2);
var question3 = new Question('Is HTML a programming language?', ['yes', 'no', 'maybe'], 1);
var questions = [question1, question2, question3];
var score = 0;
getQuestion();
































