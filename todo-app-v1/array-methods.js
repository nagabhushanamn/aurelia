



//----------------------------------------
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// arr.push(10); // mutational

// let newArr = arr.concat(10); // immutable methods

// let arr1=[1,2,3];
// let arr2=[4,5,6];
// let arr3=arr1.concat(arr2);
// or
// let arr3=[...arr1,...arr2];
//----------------------------------------


// let todos = [
//     { id: 1, title: 'go movie', completed: true },
//     { id: 2, title: 'go beach', completed: false },
//     { id: 3, title: 'live life', completed: false }
// ];

//----------------------------------------

//.every()

// let b = todos.every(function (item) {
// return item.completed;
// });

// let b = todos.every(item =>item.completed);

//----------------------------------------

//.some()

// let b = todos.some(item => item.completed);

//----------------------------------------------------
// let products = [
//     { id: 1, name: 'product-1', price: 2000.00 },
//     { id: 2, name: 'product-2', price: 1000.00 },
//     { id: 3, name: 'product-3', price: 3000.00 },
//     { id: 4, name: 'product-4', price: 5000.00 }
// ];
//------------------------------------------------------------------------

// .filter()

// let lowPriceProducts = products.filter((item) => item.price <= 2000.00);

//------------------------------------------------------------------------

// .map()

// let productName = products.map((item, idx) => item.name);

//------------------------------------------------------------------------

// .findIndex()

// let idx=products.findIndex((item) => item.price === 3000);

//------------------------------------------------------------------------

// .forEach()

// products.forEach(item => {
//     item.price = 0;
// });

//------------------------------------------------------------------------

// let products = [
//     { id: 1, name: 'product-1', price: 2000.00 },
//     { id: 2, name: 'product-2', price: 1000.00 },
//     { id: 3, name: 'product-3', price: 3000.00 },
//     { id: 4, name: 'product-4', price: 5000.00 }
// ];

//------------------------------------------------------------------------
// . reduce()

// let totalPrice = products.reduce((acc, item) => acc + item.price, 0);

//------------------------------------------------------------------------

// slice() : immutable method
// let smallList=products.slice(0,2);

//------------------------------------------------------------------------

// splice() : mutational method
// delete products[2];

// products.splice(2,1);
// products.splice(2, 2, { id: 33, name: 'im here', price: 3000.00 }, { id: 44, name: 'im here too', price: 3000.00 });

