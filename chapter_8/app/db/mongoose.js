const mongoose = require('mongoose');
const Company = require('./models/company');
const {database} = require('../config');

mongoose.connect(database);


// async function main() {
//   // const companies = await Company.find({});
//   // console.log(companies);

//   const company = new Company({
//     name: 'Probox',
//     slug: '   ProBox  ',
//     // employeesCount: 0
//   });

//   try {
//     await company.save();
//   } catch(e) {
//     console.log('Coś poszło nie tak!');
//     for (const key in e.errors) {
//       console.log(e.errors[key].message);
//     }
//   }
// }
// main();
