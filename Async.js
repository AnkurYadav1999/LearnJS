// setTimeout(function run(){
//     console.log("running")
//     setTimeout(run,2000)
// },2000);

// clearTimeout( )





//----------------------- Callbacks----------------------//

// function greet(name){
//     console.log(`Hello ${name}`)
// }


// function greetPerson(Callback){
//     const name="Ankur";
//     Callback(name)
// }

// greetPerson(greet)




const data = [
    {
        name:"Ankur",
        age:23
    },
    {
        name:"Lucifer",
        age:24
    }
]


function getData(){
    let output=""
    setTimeout(()=>{
        data.forEach(obj => {
           output=output+`<li>${obj.name}</li>`
        });
     document.getElementById('li-items').innerHTML=output
    },1000)
}


function createData(newData){

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            data.push(newData)
            let error=false;
            if(!error){
                resolve()
            }
            else{
                reject("error")
            }
          },2000)
    })

   
}

// createData({name:"Steve",age:25})
// .then(getData)
// .catch(err=>console.log(err))


async function start(){
    await createData({name:"Steve",age:25})
    getData()

}

start();


