const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/node-kurs');

const checkForbidenString = (value, forbidenString) => {
  if (value === forbidenString) {
    throw new Error(`Nazwa ${forbidenString} jest zakazana`);
  }
}


// model w liczbie pojedynczej, a mnogooos automatycznie domyśli się, 
// że kolekcja jest w liczbie mnogiej companies
const companySchema = new Schema({
  slug: {
    type: String,
    required: [true, 'Pole `slug` jest wymagane'],
    minLength: [3, 'Minimalna liczba znaków to 3'],
    validate: value => checkForbidenString(value, 'slug'),
    trim: true,
    lowercase: true
  },
  name: {
    type: String,
    required: [true, 'Pole `name` jest wymagane'],
    minLength: [3, 'Minimalna liczba znaków to 3']
  },
  employeesCount: {
    type: Number,
    min: 1,
    default: 1
  }
});
// setter
// companySchema.path('slug').set((value) => value.toLowerCase());

const Company = mongoose.model('Company', companySchema);

async function main() {
  // const companies = await Company.find({});
  // console.log(companies);

  const company = new Company({
    name: 'Probox',
    slug: '   ProBox  ',
    // employeesCount: 0
  });

  try {
    await company.save();
  } catch(e) {
    console.log('Coś poszło nie tak!');
    for (const key in e.errors) {
      console.log(e.errors[key].message);
    }
  }
}
main();
