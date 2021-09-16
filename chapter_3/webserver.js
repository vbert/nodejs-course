// 1. Postaw web serwer za pomocą biblioteki "express"
// Serwer powinien obsługiwać 4 adresy:
  // strona główna:    GET /
  // kontakt:          GET /kontakt
  // użytkownicy:      GET /profile
  // użytkownicy:      GET /profile/:id/:mode?

// Przykładowa tabela użytkowników:
const users = [
  { id: 1, name: 'Janek', email: 'janek@gmail.com' },
  { id: 2, name: 'Adam', email: 'adam@gmail.com' },
  { id: 3, name: 'Tomasz', email: 'tomek@my.com' },
  { id: 4, name: 'Dawid', email: 'dawid@email.com' },
];

// Rezultat /profile
  // `Znaleziono 4 profile.
  // - <a href="/profile/1">Janek (id: 1)</a>
  // - Adam (id: 2)
  // - Tomasz (id: 3)
  // - Dawid (id: 4) `

// Rezultat /profile/1
  // `Dane użytkownika:: imię "Janek" `

// Rezultat /profile/1/szczegoly
  // `Dane użytkownika:: imię "Janek", id "1", email "janek@gamil.com"`

const express = require('express');
const port = 3000;
const app = express();

const itemList = (user) => {
  const {id, name} = user;
  return `<li><a href="/profile/${id}">${name}</a></li>\n`
};

app.get('/', (req, res) => {
  res.send('<h1>Strona główna</h1>');
});

app.get('/kontakt', (req, res) => {
  res.send('<h1>Kontakt</h1>');
});

app.get('/profile', (req, res) => {
  let userList = '';
  users.forEach(user => {
    userList += itemList(user);
  });
  const content = `<h1>Profile</h1>
  <p>Znaleziono ${users.length} profile:</p>
  <ol>\n${userList}</ol>
  `;
  res.send(content);
});

app.get('/profile/:id/:mode?', (req, res) => {
  const {id, mode} = req.params;
  const user = users.find(x => x.id === parseInt(id));
  if (!user) {
    return res.send('Nie ma takiego usera!');
  }
  if (mode && mode === 'szczegoly') {
    res.send(`<p>Dane użytkownika:: imię "${user.name}, id "${user.id}", email "${user.email}" </p>\n<p><a href="/profile">&laquo;Lista profili</a></p>`);
  } else {
    res.send(`<p>Dane użytkownika:: imię "${user.name}" [<a href="/profile/${id}/szczegoly">więcej &raquo;</a>]</p>\n<p><a href="/profile">&laquo;Lista profili</a></p>`);
  }
});

app.listen(port);
