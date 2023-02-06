//switch - a statement that examines a value
//          for a match against many case clauses.
//      more efficient than many "else if" statements

let grade = ""

switch(grade){

    case "a":
        console.log("You got an A. you did great.")
        break;
        case "b":
        console.log("You got a b. you did good.")
        break;
        case "c":
        console.log("You got a c. you did ok.")
        break;
        case "d":
        console.log("You got a d. at least you participated")
        break;
        case "f":
        console.log("You got an f. you failed.")
        break;

    default:
    console.log(grade, " is.... ????")
}