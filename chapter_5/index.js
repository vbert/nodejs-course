const express = require('express');
const path = require('path');
const port = 3000;

const app = express();

app.get('/', (req, res) => {
  // res.send('Hello express');
  res.sendFile(path.join(__dirname + '/views/home.html'));
});

app.get('/firmy/:name', (req, res) => {
  const {name} = req.params;
  const companies = [
    {slug: 'tworcastron', name: 'Tworca Stron.pl'},
    {slug: 'google', name: 'Google'},
  ];

  const company = companies.find(x => x.slug === name);
  if (company) {
    res.send(`Nazwa firmy: ${company.name}`);
  } else {
    res.send(`Nie ma takiej firmy`);
  }

});

app.listen(port);
