/*
var firstName = 'John';
var age = 26;


console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ');
*/

/************************* 
 * Basic Operators
*/

// var year, yearJohn, yearMark,nu;
// now = 2020;
// ageJohn = 28;
// ageMark = 33;
// nu = null;

// //Math operators
// yearJohn = now - ageJohn;
// yearMark = now - ageMark;

// console.log(yearJohn);

// console.log(now + 2);

// console.log(now * 2 );
// console.log(now / 10);

// //Logical operators
// var johnOlder = ageJohn < ageMark;
// console.log(johnOlder);

// //typeof Operator
// console.log(typeof johnOlder);
// console.log(typeof ageJohn);
// console.log(typeof nu);


// Operator precedence

// var now = 2018;
// var yearJohn = 1989;
// var fullAge = 18;

// //Multiple operators
// var isFullAge = now - yearJohn >= fullAge;
// console.log(isFullAge);

// //Grouping
// var ageJohn = now - yearJohn;
// var ageMark = 35;
// var average = (ageJohn + ageMark) / 2;
// console.log(average);

// // Multiple assignments

// var x, y;
// x = y = (3 + 5) * 4 - 6;
// console.log(x, y);

// // More operators

// x *= 2;

//Coding Challenge

// var markMass, markHeight, johnMass, johnHeight;

// markMass = 78;
// markHeight = 1.69;

// johnMass = 92;
// johnHeight = 1.95;

// markBmi = markMass / (markHeight * markHeight);
// johnBmi = johnMass / (johnHeight * johnHeight);

// var markVsJohn = markBmi > johnBmi;

// console.log('Mark\'s BMI is higher thank John\'s = ' + markVsJohn);


// If / else statements

// var firstName = 'John';
// var civilStatus = 'single';

// if(civilStatus === 'married') {
//     console.log(firstName + ' is married');
// } else {
//     console.log(firstName + ' is single');
// }


// var markMass, markHeight, johnMass, johnHeight;

// markMass = 78;
// markHeight = 1.69;

// johnMass = 92;
// johnHeight = 1.95;

// markBmi = markMass / (markHeight * markHeight);
// johnBmi = johnMass / (johnHeight * johnHeight);

// if(markBmi > johnBmi) {
//     console.log('Mark\'s Bmi is higher than John\'s. ');
// } else {
//     console.log('Johns Bmi is higher than Marks');
// }


// //var markVsJohn = markBmi > johnBmi;
// //console.log('Mark\'s BMI is higher thank John\'s = ' + markVsJohn);

// var firstName = 'John';
// var age = 22;

// if(age<13) {
//     console.log(firstName + ' is a boy');
// } else if(age>=13 && age<20) {
//     console.log(firstName + ' is a teenager');
// } else {
//     console.log(firstName + ' is a man.');
// }


// var firstName = 'John';
// var age = 22;

// age>=18 ? console.log(firstName + ' drinks beer') : console.log(firstName + ' drinks juice');

// var drink = age >= 18 ? 'beer' : 'juice';
// console.log(drink);

// if(age>=18) {
//     var drink = 'beer';
// } else {
//     var drink = 'juice';
// }

//Switch statement

// var job ='teacher';

// switch(job) {
//     case 'teacher':
//     case 'instructor':
//         console.log(' teaches kids how to code');
//         break;
//     case 'driver':
//         console.log('driver');
//         break;
//     case 'designer':
//         console.log('designer');
//         break;
// }

// Truthy and Falsy values and equality operators

// var height;
// height = 'twenty';

// if(height || height === 0) {
//     console.log('Variable is defined');
// } else {
//     console.log('Variable has not been defined');
// }



// var johnsTeam = 191 + 120 + 123;
// var mikesTeam = 291 + 120 + 123;
// var marysTeam = 191 + 120 + 123;

// var johnsTeamAvg = johnsTeam / 3;
// var mikesTeamAvg = mikesTeam / 3;
// var marysTeamAvg = marysTeam / 3;


// if(johnsTeamAvg > mikesTeamAvg && johnsTeamAvg > marysTeamAvg) {

//     console.log('The highest average score team is Johns team with ' + johnsTeamAvg + ' per game average');

// }else if (johnsTeamAvg == mikesTeamAvg && johnsTeamAvg == marysTeamAvg) {

//     console.log('All have the same average points per game');

// }else if (mikesTeamAvg > johnsTeamAvg && mikesTeamAvg > marysTeamAvg) {

//     console.log('The highest average score team is Mikes team with ' + mikesTeamAvg + ' per game average');

// } else {

//     console.log('The highest average score team is Marys team with ' + johnsTeamAvg + ' per game average');

// }


//Functions

// function calculateAge(birthYear) {

//     return 2020 - birthYear;

// }

// var ageJohn = calculateAge(1990);
// console.log(ageJohn);

// function yearsUntilRetirement(birthYear, firstName) {

//     var age = calculateAge(birthYear);
//     var retirement = 65 - age;
//     if(retirement > 0) {

//         console.log(firstName + ' retires in ' + retirement + ' years.');

//     } else {

//         console.log(firstName + ' is retired');

//     }

    

// }

// yearsUntilRetirement(1910, 'John');

// Function Statements and Expressions

// var whatDoYouDo = function(job, firstName) {

//     switch(job) {

//         case 'teacher':
//             return firstName + ' teaches kids how to code';
//         case 'driver':
//             return firstName + ' drives the cab in Lisbon';
//         case 'designer':
//             return firstName + ' designs beautiful websites';
//         default:
//             return firstName + ' does something else';

//     }

// }

// console.log(whatDoYouDo('teacher', 'John'));


// Arrays

// var names = ['John', 'Mark', 'Jane'];
// var years = new Array();

// console.log(names);
// console.log(names.length);

// names[1] = 'Ben';
// names.push('Mary');
// console.log(names);

// var john = ['John', 'Smith', 1990, 'teacher', 'designer'];

// john.push('blue');
// john.unshift('Mr.');
// console.log(john);

// // john.pop();
// // john.pop();
// // john.shift();


// var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John is a designer';
// console.log(isDesigner);

//Moje resenje za izazov
// var bills = [124, 48, 268];

// var tips = [];
// var billsAndTips = [];

// function getTip(bill) {

//     if(bill < 50) {

//         tip = bill * 0.2;
//         sum = bill + tip;
//         tips.push(tip);
//         billsAndTips.push(sum);

//     } else if (bill>=50 && bill<200) {

//         tip = bill * 0.15;
//         sum = bill + tip;
//         tips.push(tip);
//         billsAndTips.push(sum);

//     } else {

//         tip = bill * 0.1;
//         sum = bill + tip;
//         tips.push(tip);
//         billsAndTips.push(sum);

//     }

// }

// getTip(bills[0]);
// getTip(bills[1]);
// getTip(bills[2]);

// console.log('Tips ' + tips);
// console.log('Totals ' + billsAndTips);


//tudje resenje

// bills = [124, 48, 268];

// var theTip = function(bill) {

//     var percentage = bill < 50 ? 20 : (bill >= 50 && bill <= 200) ? 15 : 10;
//     return bill * percentage/100;

// }

// allTips = [theTip(bills[0]), theTip(bills[1]), theTip(bills[2])];
// total = [allTips[0] + bills[0], allTips[1] + bills[1], allTips[2] + bills[2]];

// console.log(allTips, total);


//profesionalno resenje

// function tipCalculator(bill) {

//     var percentage;

//     if(bill < 50) {
//         percentage = 0.2;
//     } else if ( bill>=50 && bill<200) {
//         percentage = 0.15;
//     } else {
//         percentage = 0.1;
//     }

//     return percentage * bill;

// }


// var bills = [124, 48, 268];
// var tips = [
//     tipCalculator(bills[0]),
//     tipCalculator(bills[1]),
//     tipCalculator(bills[2])
// ];

// var total = [
//     bills[0] + tips[0],
//     bills[1] + tips[1],
//     bills[2] + tips[2]
// ];

// console.log(tips, total);



// Objects and properties

// var john = {

//     firstName: 'John',
//     lastName: 'Smith',
//     birthYear: 1990,
//     family: ['Jane', 'Mark', 'Bob', 'Emily'],
//     job: 'teacher',
//     isMarried: false

// };

// console.log(john.firstName);
// console.log(john['lastName']);

// var x = 'birthYear';
// console.log(john[x]);

// var jane = new Object();
// jane.name = 'Jane';
// jane.birthYear = 1969;
// jane["lastName"] = 'Smith';
// console.log(jane);


// Objects and methods


// var john = {

//     firstName: 'John',
//     lastName: 'Smith',
//     birthYear: 1990,
//     family: ['Jane', 'Mark', 'Bob', 'Emily'],
//     job: 'teacher',
//     isMarried: false,
//     calcAge: function() {

//         this.age = 2020 - this.birthYear;

//     }

// };


// john.calcAge();
// console.log(john);

//var markMass, markHeight, johnMass, johnHeight;

// markMass = 78;
// markHeight = 1.69;

// johnMass = 92;
// johnHeight = 1.95;

// markBmi = markMass / (markHeight * markHeight);
// johnBmi = johnMass / (johnHeight * johnHeight);

// var markVsJohn = markBmi > johnBmi;

// console.log('Mark\'s BMI is higher thank John\'s = ' + markVsJohn);

// var mark = {

//     firstName: 'Mark Pop',
//     mass: 175,
//     height: 1.95,

//     bmi: function() {

//         this.BMIresult = this.mass / (this.height * this.height);

//     }

// };

// var john = {

//     firstName: 'John Smith',
//     mass: 195,
//     height: 1.95,

//     bmi: function() {

//         this.BMIresult = this.mass / (this.height * this.height);

//     }

// };

// mark.bmi();
// john.bmi();

// if (mark.BMIresult > john.BMIresult) {

//     console.log(mark.firstName + ' has the higher Body to Mass ratio which is ' + mark.BMIresult);

// } else if (mark.BMIresult == john.BMIresult) {

//     console.log(mark.firstName + ' and ' + john.firstName + ' have the same Body to Mass ratio');

// } else {

//     console.log(john.firstName + ' has the higher Body to Mass ratio which is ' + john.BMIresult);

// }


// for (var i=0; i<10; i+=5) {

//     console.log(i);

// }

// var john = ['John', 'Smith', 1990, 'designer', false];

// for(var i = 0; i<john.length; i++) {

//     console.log(john[i]);

// }

// var i = 0;
// while(i<john.length) {

//     console.log(john[i]);
//     i++;

// }


//continue and break statements
// var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];

// // for(var i = 5; i < john.length; i--) {

// //     if(typeof john[i] !== 'string') continue;

// //     console.log(john[i]);

// // }

// // for(var i = 0; i<john.length; i++) {

// //     if(typeof john[i] !== 'string') break;

// //     console.log(john[i]);

// // }

// //looping backwards

// for(var i = john.length - 1; i >= 0; i--) {

//     console.log(john[i]);

// }


//CHALLENGE

var john = {

    bills: [124, 48, 268, 180, 42],

    calcTip: function() {

        for(var i = 0; i < this.bills.length; i++) {

            var percentage;
            var bill = this.bills[i];

            if(bill < 50) {

                percentage = 0.2;

            } else if (bill >=50 && bill <= 200) {

                percentage = 0.15;

            } else {

                percentage = 0.1;

            }

            this.tips.push(bill * percentage);
            this.total.push(bill * percentage + bill);

        }

    },

    tips: [],
    total: []

}

john.calcTip();
console.log(john.tips);


// Extra

var mark = {

    bills: [77, 475, 110, 45],

    calcTip: function() {

        for(var i = 0; i < this.bills.length; i++) {

            if(this.bills[i] < 100) {

                percentage = 0.2;

            } else if (this.bills[i] >=100 && this.bills[i] <= 300) {

                percentage = 0.1;

            } else {

                percentage = 0.25;

            }

            this.tips.push(this.bills[i] * percentage);
            this.total.push(this.bills[i] * percentage + this.bills[i]);

        }

    },

    tips: [],
    total: []

}

mark.calcTip();

function avgTip(tips) {

    var sum = 0;

    for(i=0; i<tips.length; i++) {

        sum += tips[i];

    }

    return avg = sum / (tips.length);

}

var averageTipResultJohn = avgTip(john.tips);
console.log('Johns average tip is ' + averageTipResultJohn);

var averageTipResultMark = avgTip(mark.tips);
console.log('Marks average tip is ' + averageTipResultMark);

averageTipResultJohn > averageTipResultMark ? console.log('John paid the heighest average tip') : console.log('Mark paid the heighest average tip')






























