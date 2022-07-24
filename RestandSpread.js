// Spread

// Can use both in array and Object


let arr1 = [1,2,3,4,5];

let arr2 = [...arr1,6,7,8,9]

console.log(arr2)




let person = {
    name:"",
    age:23
}


let address = {
    city:"Mumbai",
    flat:"city Paradise"
}

let p1 = {...person,...address}

p1.name="Ankur";

console.log(p1)




// Rest

function sum(...nums){
    let total=0;
    for(let n of nums){
      total+=n;
    }
    return total
}

const result = sum(10,20,30,40,50)

console.log(result)




let person1 = {
    name:"Ankur",
    age:29,
    hobbies:["sleep","eat","code"]
}

let{...rest}=person1;

console.log(rest)




