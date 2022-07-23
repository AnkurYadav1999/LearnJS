// Advanced JS concepts

// let a = 10;

// function outer(){
//     let b=20;

//     function inner(){
//         let c=30;
//         console.log(a,b,c)
//     }

//     inner()
// }

// outer()



// Closures


// function outer(){
//     let counter=0
//     function inner(){
//         counter++;
//         console.log(counter)
//     }
//     return inner
// }

// const fn = outer()
// fn()
// fn()



// function sum(a,b,c){
//     return a+b+c;
// }

// console.log(sum(10,20,30));


// function curry(fn){
//     return function(a){
//         return function(b){
//             return function(c){
//                 return fn(a,b,c)
//             }
//         }
//     }
// }

// const curried = curry(sum)
// console.log(curried(10)(20)(30))



// Prototype


// function person(fname,lname){
//      this.firstname=fname
//      this.lastname=lname
     
// }

// person.prototype.getFullname=function(){
//     console.log(`${this.firstname} ${this.lastname}`)
//     console.log(this)
//  }


// const person1 = new person("Ankur","Yadav")
// const person2 = new person("Jack","Dorsey")


//  person1.getFullname()
//  person2.getFullname()



// Classes 

class Person{
      constructor(fname,lname){
        this.firstName=fname;
        this.lastName=lname;
      }

      getFullName(){
         return this.firstName+" "+this.lastName;
      }
}

class superhero extends Person{
    isASuperhero(){
          let name = this.getFullName()

          switch(name){
            case "Clark Kent":
                console.log("Superman")
            break;

            case "Bruce Wayne":
                console.log("Batman")
            break;

            case "Diana":
                console.log("Wonder Woman")
            break;

            default:
                console.log("No,not a superhero")
          }
    }
}

const super1 = new superhero('Bruce','Wayne')

super1.isASuperhero()

