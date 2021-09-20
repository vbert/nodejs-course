const express = require('express');
const path = require('path');
const port = 3000;
const ejsLayouts = require('express-ejs-layouts');
const app = express();

// view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname + '/views'));
// set layout
app.use(ejsLayouts);
app.set('layout', './layouts/main');
// public folder
app.use(express.static('public'));

app.get('/', (req, res) => {
  // res.send('Hello express');
  // res.sendFile(path.join(__dirname + '/views/home.html'));
  res.render('pages/home', {
    title: 'Strona główna',
    url: req.url
  });
});

app.get('/firmy/:name', (req, res) => {
  const {name} = req.params;
  const companies = [
    {slug: 'tworcastron', name: 'Tworca Stron.pl'},
    {slug: 'google', name: 'Google'},
  ];

  const company = companies.find(x => x.slug === name);
  // if (company) {
  //   res.send(`Nazwa firmy: ${company?.name}`);
  // } else {
  //   res.send(`Nie ma takiej firmy`);
  // }
  res.render('pages/company', {
    title: company?.name ?? 'Brak wyników',
    name: company?.name,
    companies,
    url: req.url
  });
});

app.get('*', (req, res) => {
  res.render('errors/404', {
    title: 'Nie znaleziono',
    layout: 'layouts/minimalistic',
    url: req.url
  });
});

app.listen(port);
