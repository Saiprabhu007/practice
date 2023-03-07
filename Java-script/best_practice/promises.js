
//promises 


// var promise = new Promise(function(resolve, reject) {
// const x = "sai";
// const y = "prabhu"
// if(x === y) {
// 	resolve();
// } else {
// 	reject();
// }
// });
	
// promise.
// 	then(function () {
// 		console.log('Success, You are a GEEK');
// 	}).
// 	catch(function () {
// 		console.log('Some error has occurred');
// 	});

    ///

    var promise = new Promise(function(resolve, reject) {
const x = "sai";
const y = "sai"
if(x === y) {
	resolve("you are done");
} else {
	reject();
}
});
	
promise.
	then(function () {
		console.log(" ");
	}).
	catch(function () {
		console.log('Some error has occurred');
	});
