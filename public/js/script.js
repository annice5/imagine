const btn = document.getElementById('btn');
btn.onclick = function () {
    const name = prompt('Enter your Full Name.');
    document.getElementById('name').innerText = name;
}

// variable
const pi = 3.142;
let username = 'annice';
let age = 101;
let present = false;

// objects
const person = {
    username : 'annice',
    age: 101,
    present: false,
    child: {
        name: 'Mickey Mouse',
        friend:{
            name: 'Biggie',
        }
    }
}



console.log(person.username);
console.log(person.age);
person.age = 105;
console.log(person);


//Arrays
const bottle1 = {
    size: 'large',
    color: 'yellow',
  }
  
  const bottle2 = {
    size: 'small',
    color: 'blue',
  }
  
  
  
  const bottles = [bottle1,bottle2,]
  bottles.push(bottle1);
  bottles.push(bottle2);
  bottles;
  bottles[1].size
  
  const date = new Date();
  date.getDay(); 
  
  
  //If /Else
//   const age = 18;
  if (age>=18 ){
       'you are true';
  } else{
         'you are false';
  }
  
  //For loop
  for (let i = 0; i<= 5; i++){
    console.log('We did it!', i);
  }


  // functions
// Defining a function
function login(username, password) {
  // Validate the username and password
  if(!username || !password){
    return 'username or password not provided';
  }
  //verify username and password
 if (username == 'annice' && password == '1234'){
   return 'user is logged in'; 
 } else{
   return 'invalid username or password';
 }
}

// Invoking a function
login('annice');


//Basic Arithmetic Operations
11+12;
1+0.5;
43-12;
45/7;
5*3;
14%3;

Math.floor(45/25);
45%24;
Math.random()*1000
Math.max(34,32,37);
2*(3+4)-5/2;

//the use of Num()
Number('2')+2


// Strings in JavaScript
//Concatenation
const firstname = 'Agnes';
const lastname = 'Odame';
firstname + ' ' + lastname;

//Template Literal
`${firstname} ${lastname}`;


//Stirng Methods
let fullName = 'agnes odame'

fullName.length
fullName.toUpperCase()
fullName.toLowerCase()
fullName.charAt(5)
fullName.charAt(7)
fullName.slice(6,11)
fullName.split('')
fullName.replace('agnes','annice')
fullName.indexOf('ame')

//String Conversion
Number('3.243')
parseInt('3.243')
parseFloat('3.243')
let amount = 1800
console.log(`GHS${amount}`)
amount.toString()

//Write a function that will add a participant to our Google Classroom
const participants = [];
function addParticipant(email){
  //check if email was provided
  if (!email){
    return 'Email not provided'
  }
  // check if email is valid
  if(!email.includes('@')){
    return 'Invalid email provided';
  }
  //Add email to participant
  participants.push(email);
  return 'Participant added';
  
}
addParticipant('agnesodame5@gmail.com');
addParticipant('agnesodame5@gmail.com');
addParticipant();
addParticipant('agnesodame');
participants;






// // //Arrays in JavaScript
// // const users = [
// //  {
// //    username: 'mickeymond',
// //    password: '2345',
// //    email: 'mickeymond@yahoo.com'
// //  },
// //  {
// //   username: 'annice',
// //    password: '1234',
// //    email: 'agnesodame5@gmail.com'
// //  }
// ];


//Write a function that will take a user with firstname, lastname and return fullname;


function fullName(user){
   
  return {
    ...user,
    fullName:`${user.firstname} ${user.lastname}`
  };
    
}

const user = {
      firstname: 'Agnes',
      lastname: 'Odame'
    }

 fullName(user);


//Array map
const users = [
{firstname: 'Agnes', lastname: 'Odame'},
{firstname: 'Elon', lastname: 'Musk'},
{firstname: 'Samantha', lastname: 'Asare'},
{firstname: 'Oliver', lastname: 'Queen'},
  ]
users.map(fullName);

// Square of numbers
function squareNum(number){
  return number **2;
}
squareNum(5)

const numbers = [9,8,7,6];
numbers.map(squareNum);

//Array filter
function isEven(number){
  return number % 2 === 0;
}
isEven(4)
numbers.filter(isEven);

function isOdd(number){
  return number % 2!==0;
}
isOdd(4)
numbers.filter(isOdd);



//write a function that will allow a user to reset their password
// const user = {
//   email: 'mickeymond@yahoo.com',
//   password: '1234'
// }


function resetPassword( email, newPassword){
  // check if email and new password was provided
  if(!email || !newPassword){
  return 'Email or password not provided';
}
  //Check if provided email is correct
  if(email === user.email){
     //Update password with new
    user.password = newPassword
    return 'Password reset Successful';
  }
  if(email !==user.email){
    return 'Invalid email';
  }
  
}
user;
resetPassword('mickeymond@yahoo.com', '0934')
user;







  