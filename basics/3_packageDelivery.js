/* scenario - 1 :  execution of code sequentially
console.log("user 1 makes a request");
console.log("database operation takes 5sec");
console.log("data sent to user");
console.log("user 2 makes a request");
console.log("database operation takes 5sec");
console.log("data sent to user");
console.log("user 3 makes a request");
console.log("database operation takes 5sec");
console.log("data sent to user");
*/

/* scanrio 2 : code executed concurrently */
console.log("user 1 makes a request");
setTimeout(dbOperation, 5000);
console.log("user 1 makes a request");
setTimeout(dbOperation, 9000);
console.log("user 1 makes a request");
setTimeout(dbOperation, 15000);

function dbOperation()
{
    console.log("DB operation done and data sent in 5 sec")
}