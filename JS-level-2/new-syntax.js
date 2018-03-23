

// 4. obj-literal enhancements


// let name="Nag";
// let age=34;

// let dynamicField='office'; // office | vacation

// // ES-5
// let person={
//     name:name,
//     age:age,
//     sayName:function(){
//         console.log('im '+this.name);
//     },
//     address:'chennai'
// };
// // ES6
// let newPerson={
//     name,
//     age,
//     sayName(){
//         console.log('im '+this.name);
//     },
//     [dynamicField+"-address"]:'chennai',
//     100:'this is hundred',
//     ['do Something'](){
//         console.log('doing something...');
//     }
// };

//----------------------------------------------------

// 5. detructuring


// a. array destructuring

// let myNums = [10, 20, 30, 40, [50, 60]];

// // let n1=myNums[0];
// // let n2=myNums[1];
// // let n3=myNums[3];

// // or

// let [n1, n2, n3, n4 = 400, [n5, n6]] = myNums;

// let n1,n2;
// [n1,n2]=myNums;


// b. object destructuring

// let person={
//     name:'Nag',
//     age:34
// }

// let myName=person.name;
// let myAge=person.age;

// or

// let {name:myName,age:myAge}=person;
// let {name:name,age:age}=person;
// or
// let {name,age}=person;

// let myName;
// let myAge;

// ({name:myName,age:myAge}=person);


//----------------------------------------------------

// 6. spread operator

// function func(a,b,c){
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// let nums=[12,13,14];
// func(nums[0],nums[1],nums[2]);
// func(...nums);


// let arr1=[1,2,3];
// let arr2=[7,8,9];
// let name="NAG";

// let newArray=[...arr1,4,5,6,...arr2,...name];



//----------------------------------------------------


// let javaSymbol = Symbol.for('java');
// let jsSymbol = Symbol.for('js');

// let e1 = { name: 'A', [javaSymbol]: 'java,spring,....' };
// let e2 = { name: 'B', [javaSymbol]: 'java,....' };
// let e3 = { name: 'C', [jsSymbol]: 'JS,aurelia' };

// if(e1[javaSymbol]){
//     console.log('he is java employee');
//     console.log(e1[javaSymbol]);
// }

//----------------------------------------------------


// let nums=[4,5,6,7,8];

// let newNums=[1,2,3,...nums];
// let [n1,n2,n3]=nums;

// for(let n of nums){
//     console.log(n);
// }


//----------------------------------------------------


// 7. OOP through class syntax

// ES5

// function Person(name,age){
//     this.name=name;
//     this.age=age;
// }
// Person.prototype.sayName=function(){
//     console.log('im '+this.name);
// }
// Person.prototype.sayAge=function(){
//     console.log('im '+this.age +" old");
// }

// // ES6

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//         console.log('Person:constructor()');
//     }
//     sayName() {
//         console.log('im ' + this.name);
//     }
//     sayAge() {
//         console.log('im ' + this.age + " old");
//     }
// }


// // let p1=new Person('Nag',34);


// class Employee extends Person {
//     constructor(name, age, salary) {
//         super(name, age);
//         this.salary = salary;
//         console.log('Employee::constructor');
//     }
//     saySalary() {
//         console.log('i get ' + this.salary + " only");
//     }
//     askForBonus() {
//         return this.salary * 0.02;
//     }
// }

// // let e = new Employee('Nag', 34, 1000.00);

// class Boss extends Employee {
//     askForBonus() {
//         return this.salary * 0.2 + super.askForBonus();
//     }
// }

// let boss = new Boss('Nag', 34, 1000.00);



// class Abc{
//     static staMethod(){
//         console.log('static method...');
//     }
// }
// Abc.staVar=123;

//----------------------------------------------------