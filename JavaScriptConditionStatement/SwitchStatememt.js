// Switch Control Statement

// Based on the condition, the switch statement executes one of the cases.

// Syntax:
// switch (expression) {    
//     case value1:
//         // code to be executed if expression matches value1
//         break;
//     case value2: 
//         // code to be executed if expression matches value2
//         break;
//     // more cases...
//     default:
//         // code to be executed if no case matches
// }

const day = 3; // Let's say we want to find out the day of the week based on a number
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday"); // Output: Wednesday
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day number"); // This will execute if day is not between 1 and 7
}

// The break statement is used to exit the switch block after executing a case.

// The default case is optional and will execute if none of the cases match the expression.
// It is similar to the else statement in if-else conditions.