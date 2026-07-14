function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let users = [
    new User(1, "Doe", "Dole", "Doe@gamil.com", '0681405214'),
    new User(2, "Ivanov", "Ivan", "ivan.ivanov@gmail.com", '0671234567'),
    new User(3, "Petrenko", "Olga", "olga.p@gmail.com", '0939876543'),
    new User(4, "Shevchenko", "Andriy", "sheva99@gmail.com", '0501112233'),
    new User(5, "Kovalenko", "Maryna", "m.kovalenko@gmail.com", '0974445566'),
    new User(5, "Kovalenko", "Maryna", "m.kovalenko@gmail.com", '0974445566'),
    new User(6, "Smith", "John", "john.smith@gmail.com", '0637778899'),
    new User(7, "Melnyk", "Dmytro", "d.melnyk@gmail.com", '0985554433'),
    new User(8, "Moroz", "Iryna", "iryna.moroz@gmail.com", '0662223344'),
    new User(9, "Boyko", "Vasyl", "v.boyko@gmail.com", '0956667788'),
    new User(10, "Kravchenko", "Anna", "a.kravchenko@gmail.com", '0688889900'),

];

let filteedUsers = users.filter((user) => user.id % 2 === 0);
console.log(filteedUsers);