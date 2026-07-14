function Client(id, name, email, phone, order) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.order = order;
}

let clients = [
    new Client(4, 'Lisa', 'lisa54@gmail.com', '0684701542', ['New Balance 1906R', 'Nike Dunk']),
    new Client(7, 'Petro', 'ppetro@gmail.com', '0685155455', ['Nike Dunk', 'Jordan 4']),
    new Client(2, 'Anya', 'aanya@gmail.com', '0697401254', ['Adidas Spezial', 'Adidas Forum']),
    new Client(5, 'Andriy', 'and87@gmail.com', '0687412036',['Nike Air Force']),
    new Client(1, 'Max', 'maxymchikk@gmail.com', '0965401232', ['New balance 9060', 'Vans', 'Nike Dunk']),
    new Client(3, 'Ares', 'ares.aldg@gmail.com', '0988808880',['Balenciaga Track', 'Balenciaga Runner']),
    new Client(6, 'Kamila', 'kaml@gmail.com','0687436458', ['Nike Air Force', 'Adidas Forum'] ),
    new Client(8, 'Nazar', 'nazarko@gmail.com', '0965401236', ['Nike Dunk']),
    new Client(10, 'Arsen', 'arsennn@gmail.com', '0967808878', ['Nike Air Force', 'Balenciaga Track']),
    new Client(9, 'Tanya', 'tandn@gmail.com', '0688868688', ['New balance 1906R', 'Nike Air Force', 'Nike Dunk']),

];
let sortedClients = clients.sort((client1, client2) => client1.order.length - client2.order.length);
console.log(sortedClients);