// const promise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("You are a ginious");
//         resolve({name: "Niamul Hoque", Status: "🤬"});
//     },1000)
// })

// promise.then((user)=>{
//     console.log(user)
// })

// const promise1 = new Promise((resolve, reject) => {
//     let error = true;

//     if (!error) {
//         setTimeout(() => {
//             console.log("This is the 2nd promise");
//             resolve({ user: "Nimaul Hoque", doing: "Learning right now" });
//         }, 2000);
//     } else {
//         console.log("Error occurred");
//         reject("Something went wrong");
//     }
// });

// promise1
//   .then((user) => {
//       console.log("Promise resolved with data:", user);
//   })
//   .catch((error) => {
//       console.log("Promise rejected with error:", error);
//   })
//   .finally(()=> console.log("the promise is either resolve or rejected"))



fetch("https://api.chucknorris.io/jokes/random")
.then((data)=>{
    if(!data){
        throw new Error("ERROR")
    }else{
       return  data.json();
    }
})
.then((data)=> {
    console.log(data);
})
.catch((error)=>{
    console.error("Fetch error:", error.message);
});