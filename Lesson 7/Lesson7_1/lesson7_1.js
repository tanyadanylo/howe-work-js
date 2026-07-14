function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let users = [];
let user1 = new User(1, "Doe", "Dole", "Doe@gamil.com", '0681405214');
let user2 = new User(2, "Ivanov", "Ivan", "ivan.ivanov@gmail.com", '0671234567');
let user3 = new User(3, "Petrenko", "Olga", "olga.p@gmail.com", '0939876543');
let user4 = new User(4, "Shevchenko", "Andriy", "sheva99@gmail.com", '0501112233');
let user5 = new User(5, "Kovalenko", "Maryna", "m.kovalenko@gmail.com", '0974445566');
let user6 = new User(6, "Smith", "John", "john.smith@gmail.com", '0637778899');
let user7 = new User(7, "Melnyk", "Dmytro", "d.melnyk@gmail.com", '0985554433');
let user8 = new User(8, "Moroz", "Iryna", "iryna.moroz@gmail.com", '0662223344');
let user9 = new User(9, "Boyko", "Vasyl", "v.boyko@gmail.com", '0956667788');
let user10 = new User(10, "Kravchenko", "Anna", "a.kravchenko@gmail.com", '0688889900');
users.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10);

console.log(users);
