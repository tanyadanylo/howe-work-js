function deepCopy(obj) {
    let clone = {};
    for (let key in obj) {
        let value = obj[key];
        if (value === null || value === undefined || Number.isNaN(value)){
            continue;
        }
        if (typeof value === 'object') {
            clone[key] = deepCopy(value);
        } else {
            clone[key] = value;
        }
    }
    return clone;
}

let data = {
    title: 'test',
    details: {
        id: 1,
        status: undefined
    },
    sayHello() {
        console.log('Hello');
    }
};

console.log(deepCopy(data));