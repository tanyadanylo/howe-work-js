function foobar<SomeType>(url:string):Promise<SomeType> {
    return fetch(url)
        .then(res => res.json())
    .then(data => {
        return data as SomeType;
    })
}