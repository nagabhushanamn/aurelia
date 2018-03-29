

// hotel module
let swiggy = {
    getFood: function () {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('d-boys available/notavaiable');
                //reject('d-boys r busy at moment');return;
                setTimeout(() => {
                    console.log('hotel resolving/rejecting promise..');
                    resolve("biryani");
                    //reject('item not avaiable..');
                }, 5000);
            }, 3000);
        });
        return promise;
    }
};

// bar module
let bar = {
    getDrink: function () {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('bar resolving/rejecting promise...');
                resolve('Teachers 50-scotch');
                //reject('ur brand not in TN');
            }, 2000);
        });
        return promise;
    }
}


// person module

let person = {
    doWork: function () {
        console.log('person working.....');
        console.log('person feels to do party.....');
        let promise = swiggy.getFood();
        let promise2 = bar.getDrink();
        console.log('got promise,deferring my action(s) to future..');
        
        Promise.race([promise,promise2]).then((result) => {
            console.log('yummy with ' + result);
        }, (error) => {
            console.log('oops - ' + error);
        });
        console.log('cont.. with remaining work... finished');
    }
}

person.doWork();