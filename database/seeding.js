const db = require('./index.js');

//for next 3 month generate price

// roomId: x.roomId,
// date: x.date,
// price: x.price,
// maxGuest: x.maxGuest,
// cleaningFee: x.cleaningFee,
// taxes: x.taxes,
// rating: x.rating


// [
// {roomId: 1,date: 09-01-2020,price: 150,maxGuest: 3,cleaningFee: 100,taxes: 30,rating: 4.7},
// {roomId: 1,date: 09-02-2020,price: 150,maxGuest: 3,cleaningFee: 100,taxes: 30,rating: 4.7},
// {roomId: 1,date: 09-03-2020,price: 160,maxGuest: 3,cleaningFee: 100,taxes: 30,rating: 4.7},...
// {roomId: 2,date: 01-01-2020,price: 220,maxGuest: 3,cleaningFee: 100,taxes: 30,rating: 3.5},...
// {roomId: 3,date: 01-01-2020,price: 180,maxGuest: 3,cleaningFee: 100,taxes: 30,rating: 5.0},...
//  ]

for (var i = 0; i < 90; i++) {}

//
db.save(eachSingleDate);
//db.get('123', (err, result)=> console.log(result));
