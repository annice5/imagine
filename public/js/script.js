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
  