// // starting javascript
// // var let const

// // variable declaration
// var a; //here we dont declare type of variable like string int float ?

// // variable initalization
// a = 10;
// console.log(a);
// console.log(typeof a);
// //reinitialization of a
// a="hello";
// console.log(a);
// console.log(typeof a);  
// // typeof operator -> it tells us the type of data stored in variable
// a= true;
// console.log(a);
// console.log(typeof a);

// a= null;
// console.log(a);
// console.log(typeof a);

// Number
// var num = 10;
// console.log(num);
// var float = 2.4;
// console.log(float);

// //boolean
// var t= true;
// var f = false;
// console.log(t);
// console.log(f);

// //strings
// // we can use these 3 things to write string 
// '',"",``
// // single quotes, double quotes, backtick

// var str = 'a';
// console.log(typeof str);
// str = "How you doin ? i am fine"
// console.log(str);
// //if we want to print in different lines then we will use backslash n (\n)
// str = "How you doin ?\ni am fine"
// console.log(str);

// // if we use (BACKTICK) then we dont have to use \n for new line we just have to write code in new line 
// var b=`i hope you guys are 
// able to grasp content`
// console.log(str);

// var num =6400;
// // ${}
// console.log(`half of ${num} is ${num/2}`);

//var has some problems
// 1> redeclaration is allowed
// var a="abcd";
// console.log(a);

var num=10;
// console.log(n);

// var me redeclaration allowed tha is se apan to ye pata nahi vhalega ki apan koi cheej pehle declare kar chuke he 
// and redeclaration is not a good practice 
// reinitialization is okay

// 2nd problem with var keyword
// var keyword is function scoped incase of function else it is global scoped
// let keyword is block scoped

// space between two curly braces is known as block
// {
//     this place is a block
// }

// like we can access let only in bracket if we have declared it in bracket but we can acess var outside bracket also

let j=20;
for (let k=0;k<num;k++){
    if(k%2==0){
        console.log(k);
    }
//   let d=80;
}
// console.log("value of k "+k);
console.log(j);
// console.log(d);
// overcome karne ke liye

//let keyword is used
let l=100;
console.log(l);

// let l=200; //SyntaxError: Identifier 'l' has already been declared
// console.log(l);

 // we can reinitialize a variable but we can not redeclare it
l=300;
console.log(l);

//loops in js
var num=10;
// for(var i=0;i<num;i++){
//     if(i%2==0)
//     {
//         console.log("num is even");
//     }
// }

// now third type 
// const
 const a=2;
 console.log(a);
 // na hi redclare na reinitialize
//  const a=5;       // SyntaxError: Identifier 'a' has already been declared

// a=3;   //TypeError: Assignment to constant variable.
console.log("hey bro");
// JS line by line chalti he and error milne pe code vahi ruk jata he aage nahi badhta
var x="i am mad";
console.log(typeof x);