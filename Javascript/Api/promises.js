const promiseOne = new Promise(function (resolve, reject) {
  //Do async tasks, DB calls, Network Calls, Set Timouts
  setTimeout(function () {
    console.log("Async Task Completed!");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise Consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async Task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 Resolved");
});

//resolve
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({
      username: "Zain22",
      email: "zaynmr810@gmail.com",
    });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

//reject
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({
        username: "Zain22",
        email: "zaynmr810@gmail.com",
      });
    } else {
      reject("Error: Something went wrong");
    }
  }, 1000);
});

//.then chaining

promiseFour
  .then((user) => {
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (e) {
    console.log(e);
  })
  .finally(() => {
    console.log("The promise is either resolved or rejected!");
  });

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({
        username: "Java",
        password: "1122",
      });
    } else {
      reject("Error: Something went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive();

async function getAllUsers() {
  try {
    const response = await fetch("https://api.github.com/users/zain-009");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

fetch("https://api.github.com/users/zain-009")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
