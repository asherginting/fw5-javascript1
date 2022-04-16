let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    hobi: "bermain",
    address: 
    {
        street: "Kulkas Light",
        suite: "Apt.556",
        city: "Gwenborough",
        zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
};

// Ubah data dengan Spread Operator "name, email dan hobby"!
let datasaya = {...data, name: "Asher Azriel Ginting", email: "asherginting3@gmail.com", hobi: "Nonton Film"};
console.log(datasaya)


const {street, city} = data.address

console.log(street)
console.log(city)