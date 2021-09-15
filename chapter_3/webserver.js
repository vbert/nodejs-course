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
`Znaleziono 4 profile.
- <a href="/profile/1">Janek (id: 1)</a>
- Adam (id: 2)
- Tomasz (id: 3)
- Dawid (id: 4) `

// Rezultat /profile/1
`Dane użytkownika:: imię "Janek" `

// Rezultat /profile/1/szczegoly
`Dane użytkownika:: imię "Janek", id "1", email "janek@gamil.com"`