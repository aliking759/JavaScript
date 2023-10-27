const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("My task is complete");
        resolve();
    }, 1000);
});

promise.then(function () {
    console.log("Promise consumed");
});



new Promise(function(resolve,reject) {
    setTimeout(function () {
console.log("task 2");
resolve()
    },1000)

    
}).then(function () {
    console.log("task 2 resolved");
})




 const promiseThree=new Promise(function(resolve,reject) {
    setTimeout(function () {
// console.log("task 2");
resolve({username:"ali",email:"heroki467@gmail.com"})
    },1000)

    
})
promiseThree.then(function (user) {
    console.log("user");
})