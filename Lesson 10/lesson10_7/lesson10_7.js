function addToLocalStorage(arrayName, obj){
    const storageItem = localStorage.getItem(arrayName);

    const array = storageItem ? JSON.parse(storageItem) : [];

    array.push(obj);

    const newItem = JSON.stringify(array);
    localStorage.setItem(arrayName, newItem);
}

addToLocalStorage('sessionsList', {});

