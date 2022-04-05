# ProjectTech 2022
Project van team 4 'Fetch First': 
 <a href="https://github.com/Mitchel-DS">Mitchel Staal</a>,
 <a href="https://github.com/rarooij98">Robin van Rooij</a>,
 <a href="https://github.com/Sanne1998HvA">Sanne Kes</a>,
 <a href="https://github.com/DennisHvA">Dennis de Graaf</a>,
 <a href="https://github.com/SBindels">Sjoerd Bindels</a>,
 <a href="https://github.com/saskiapool">Saskia Pool</a>.

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![HANDLEBARS](https://img.shields.io/badge/Handlebars.js-f0772b?style=for-the-badge&logo=handlebarsdotjs&logoColor=black)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
![Node](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Heroku](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)

# Onze Applicatie
Onze matching app helpt studenten die op zoek zijn naar een nieuwe opleiding door ze te matchen met scholen die overeenkomen met hun interesses.
Wanneer je gematcht bent met een school kun je meer over hen te weten komen door te chatten.

## :computer: Installatie
Om deze feature te installeren voer je de volgende stappen uit.

Clone deze repository naar local: 

```
Git clone https://github.com/rarooij98/bt_team4.git
```

Installeer de benodigde Node modules: <br>
(hieronder staat een lijst met de benodigde modules)

```
npm install
```

Om de application te starten:

```
npm run start
```

Maak een .env file aan en include deze in je .gitignote file:

```
CONNECTION_STRING='yourConnectionString'
DB_NAME='yourDbName' 
```

## :package: Packages die je nodig heb
Als je van plan bent de repository te clonen en de applicatie te gebruiken heb je een aantal pakketjes nodig om alles te laten werken.

* body-parser
* dotenv
* express(v8.3.1)
* express-handlebars
* mongoose
* slug
* multer
* bcrypt
* chai
* chai-http
* mocha
* nodemon
* express-session
* passport
* passport-google-oauth2
* https

# :pushpin: Belangrijke commits

Sanne <br>
* [776cf0cc2eeaec24d3f7b5fa17b3d49ae6107ff5](https://github.com/rarooij98/bt_team4/commit/776cf0cc2eeaec24d3f7b5fa17b3d49ae6107ff5) - setup handlebars<br>
* [a2d468f018c64f4ad970da1acdd5c1050a01440a](https://github.com/rarooij98/bt_team4/commit/a2d468f018c64f4ad970da1acdd5c1050a01440a) - db connected en pagina live<br>
* [776cf0cc2eeaec24d3f7b5fa17b3d49ae6107ff5](https://github.com/rarooij98/bt_team4/commit/776cf0cc2eeaec24d3f7b5fa17b3d49ae6107ff5) - Setup handlebars
* [a322f40f343c10681a498f88f8b54eaba770a017](https://github.com/rarooij98/bt_team4/commit/a322f40f343c10681a498f88f8b54eaba770a017) - connection mongoDB & config
* [a2d468f018c64f4ad970da1acdd5c1050a01440a](https://github.com/rarooij98/bt_team4/commit/a2d468f018c64f4ad970da1acdd5c1050a01440a) - DB connected en pagina live
* [0955731133a6142b5e202718c0d0178320b5a2d5](https://github.com/rarooij98/bt_team4/commit/0955731133a6142b5e202718c0d0178320b5a2d5) - Style & kleur
* [9f1bee9250f4e7f3dd742072cffa2823b76e91c9](https://github.com/rarooij98/bt_team4/commit/9f1bee9250f4e7f3dd742072cffa2823b76e91c9) - Style forms
* [ca3a5457ddd3bd36d5c8f6a31e206233a4e7d6f8](https://github.com/rarooij98/bt_team4/commit/ca3a5457ddd3bd36d5c8f6a31e206233a4e7d6f8) - Hash blokt niet meer de registreer functie
* [2dbd024fe53022c7cac9c29dfff31a658ebc2a4e](https://github.com/rarooij98/bt_team4/commit/2dbd024fe53022c7cac9c29dfff31a658ebc2a4e) &  [c7449e951f9eb10ffe316dfa1959cda5f630cc02](https://github.com/rarooij98/bt_team4/commit/c7449e951f9eb10ffe316dfa1959cda5f630cc02) - Hashing gefixt
* [a1da5f5948be094eb4b790dcde0d75917a2ec1ea](https://github.com/rarooij98/bt_team4/commit/a1da5f5948be094eb4b790dcde0d75917a2ec1ea) - Decrypt password en login
* [678ae0575e126e95e88e86ce6a6f0c9b9bb47188](https://github.com/rarooij98/bt_team4/commit/678ae0575e126e95e88e86ce6a6f0c9b9bb47188) - Verwijder gebruiker werkt

Robin <br>
[40cd03e82af35f14355803d1dbf3f2532e99b77d](https://github.com/rarooij98/bt_team4/commit/40cd03e82af35f14355803d1dbf3f2532e99b77d) - handlebars {{#each}} functie toevoegen <br>
* [5a7f847d9ed9fb974f0f4448f60a7e638fd75d6c](https://github.com/rarooij98/bt_team4/commit/5a7f847d9ed9fb974f0f4448f60a7e638fd75d6c) - ophalen filter resultaten met mongoose <br>
* [019c3b599323a8b950dff8ba6aefb5256592dcab](https://github.com/rarooij98/bt_team4/commit/019c3b599323a8b950dff8ba6aefb5256592dcab) - styles samengevoegd en custom properties toegevoegd <br>
* [cb8a3f148620155f4d517ae8d6dd857057815165](https://github.com/rarooij98/bt_team4/commit/cb8a3f148620155f4d517ae8d6dd857057815165) - nieuwe controllers en routes <br>
* [4a1ae8d8e2d0ec9ee377ba9a5b931b3de118a660](https://github.com/rarooij98/bt_team4/commit/4a1ae8d8e2d0ec9ee377ba9a5b931b3de118a660) - nieuwe controllers en routes, werkt nog niet <br>
* [19db161986e12c8fb7d97d483bea5a2f7416cbe8](https://github.com/rarooij98/bt_team4/commit/19db161986e12c8fb7d97d483bea5a2f7416cbe8) - matches duplicate render verwijderd, alles werkt <br>
* [8dc2a51678b004e8a9dc62b3691db1d6acb55d88](https://github.com/rarooij98/bt_team4/commit/8dc2a51678b004e8a9dc62b3691db1d6acb55d88) - merged filter-en-voorkeuren <br>
* [b5defa957aa0a8c428482861c3d0f9ba30132986](https://github.com/rarooij98/bt_team4/commit/b5defa957aa0a8c428482861c3d0f9ba30132986) - test: get login formulier <br>

Dennis <br>
* [0246c991cb55cfd57141e1f43aa801bf3ca3b18a](https://github.com/rarooij98/bt_team4/commit/0246c991cb55cfd57141e1f43aa801bf3ca3b18a) - google login auth <br>
* [1a1a6c8777a2a15ac4a07b526604a6b1e7f3af85](https://github.com/rarooij98/bt_team4/commit/1a1a6c8777a2a15ac4a07b526604a6b1e7f3af85) - na inloggen kom je op een pagina die met passport is beveiligd <br>
* [6c7aec105ad0ea241a84a4951a25f5eb50ab1791](https://github.com/rarooij98/bt_team4/commit/6c7aec105ad0ea241a84a4951a25f5eb50ab1791) - hbs pagina's eraan gekoppeld <br>
* [7549ae8275eacf1cbf62bbc3f639cb61a72d63da](https://github.com/rarooij98/bt_team4/commit/7549ae8275eacf1cbf62bbc3f639cb61a72d63da) - styling voor de google login knop <br>
* [9e265b6e92dee24b62dd935e90210c4896d91ab6](https://github.com/rarooij98/bt_team4/commit/9e265b6e92dee24b62dd935e90210c4896d91ab6) - knop voor uitloggen gemaakt <br>
* [e79be58850bc7ca99c20bc742776fa3125285ed0](https://github.com/rarooij98/bt_team4/commit/e79be58850bc7ca99c20bc742776fa3125285ed0) - aangepast voor als we gaan mergen <br>
* [f2690b813197bfb702e4cd2903518174fca556fb](https://github.com/rarooij98/bt_team4/commit/f2690b813197bfb702e4cd2903518174fca556fb) - Progressive Enhancement code voor login/registreren <br>
* [09406f40c24f500eea68096b2119fa07acd52df7](https://github.com/rarooij98/bt_team4/commit/09406f40c24f500eea68096b2119fa07acd52df7) - script gelinked in hbs <br>
* [f87c6e35ac6690e7df17d1f5bc6389827d08a28c](https://github.com/rarooij98/bt_team4/commit/f87c6e35ac6690e7df17d1f5bc6389827d08a28c) - PE zit op de login pagina <br>
* [2760e82f8b96ea7b7e3bec0f2af7b270a44e9757](https://github.com/rarooij98/bt_team4/commit/2760e82f8b96ea7b7e3bec0f2af7b270a44e9757) - Feedback zit is in het Nederlands <br>
* [e8d6f57a57da611d2d91dc5e33dc6fd3a98d0fc1](https://github.com/rarooij98/bt_team4/commit/e8d6f57a57da611d2d91dc5e33dc6fd3a98d0fc1) - PE zit op de registreer pagina <br>

Saskia <br>
* [b327c6cc5de531611e3afeec2f247fef3cff6461](https://github.com/rarooij98/bt_team4/commit/b327c6cc5de531611e3afeec2f247fef3cff6461) - log in en registreren werkend gekregen in samenwerking met Sanne, Sjoerd en Dennis  <br>
* [f83c569c14e8591dc9c77d9f8e32196897b69ced](https://github.com/rarooij98/bt_team4/commit/b327c6cc5de531611e3afeec2f247fef3cff6461) - controllers bestand gemaakt.   <br>
* [291e56477a9028552f6b71562865f9118fd55e15](https://github.com/rarooij98/bt_team4/commit/291e56477a9028552f6b71562865f9118fd55e15) - controllers bestand weggehaald en functie werkend gekregen in reglog.js <br>
* [178c1ec84268bba2489ab9e93275368b074abd7d](https://github.com/rarooij98/bt_team4/commit/178c1ec84268bba2489ab9e93275368b074abd7d) - de inloggegevens van de transporter stonden nog niet in .env, die deed het eerst niet, nu wel! <br>
* [c267c90d35f7898d78b799823663f53e2fad8474](https://github.com/rarooij98/bt_team4/commit/c267c90d35f7898d78b799823663f53e2fad8474) - error pagina gemaakt, maar cannot /get <br>
* [675b64a81a56f03742f3b9eabbdc917d23eb2a0b](https://github.com/rarooij98/bt_team4/commit/c267c90d35f7898d78b799823663f53e2fad8474) - error pagina werkend (met hulp van Mitchel) zie: [b37721b4527e192e1b4e395d9d402eb95065c526](https://github.com/rarooij98/bt_team4/commit/b37721b4527e192e1b4e395d9d402eb95065c526) <br>

Sjoerd: <br>
* [b0d7b64eb3bc891ce61dca34f134949b3f900be8](https://github.com/rarooij98/bt_team4/commit/b0d7b64eb3bc891ce61dca34f134949b3f900be8) - Added sessions to login <br>
* [2dbbe8fef188c888bd7a4a1af6fb3091e22d06ae](https://github.com/rarooij98/bt_team4/commit/2dbbe8fef188c888bd7a4a1af6fb3091e22d06ae) - Added logout <br>
* [5290027b521967925c739c78347bb8c9465f707f](https://github.com/rarooij98/bt_team4/commit/5290027b521967925c739c78347bb8c9465f707f) - Poging MVC structuur toepassen <br>
* [05450d159b267c1e3ef80968cea2554c88ca3335](https://github.com/rarooij98/bt_team4/commit/05450d159b267c1e3ef80968cea2554c88ca3335) - MVC <br>
* [44d264b043a86eb32c48d499d38ca235a12f7bbd](https://github.com/rarooij98/bt_team4/commit/44d264b043a86eb32c48d499d38ca235a12f7bbd) - Mongoose topic timestamps <br>

Mitchel: <br>
* [39c3350bc5e5036b31423d2db2a485d57c262c75](https://github.com/rarooij98/bt_team4/commit/39c3350bc5e5036b31423d2db2a485d57c262c75) - Login functie omgezet, naar werkend MVC
* [5b6a50ea53a1b5c69282dbdd8bdedee480f9e0e3](https://github.com/rarooij98/bt_team4/commit/5b6a50ea53a1b5c69282dbdd8bdedee480f9e0e3) - Session aanmaken die user opslaat en de chat view rendered. + [32a11eefb2c56d1ef3b166625b67ecfdce7e7bdb3](https://github.com/rarooij98/bt_team4/commit/32a11eefb2c56d1ef3b166625b67ecfdce7e7bdb3)
* [da2db56c30a9567f532278c5556acb0d3f670d12](https://github.com/rarooij98/bt_team4/commit/da2db56c30a9567f532278c5556acb0d3f670d12) - User verwijderen functie fixed (met sanne). Zie [3f9befc89fac3afd3bf944cb7324515fe52b44a3](https://github.com/rarooij98/bt_team4/commit/3f9befc89fac3afd3bf944cb7324515fe52b44a3)
* [71d35c3b1a0967a37066fdd7ba90fd30357309f5](https://github.com/rarooij98/bt_team4/commit/71d35c3b1a0967a37066fdd7ba90fd30357309f5) - Chat en chatroom routing added
* [33a1b3b658dc62a3cb6176f159b8034c051d33eb](https://github.com/rarooij98/bt_team4/commit/33a1b3b658dc62a3cb6176f159b8034c051d33eb) - socket.io installatie, en server setup
* [8c89bda00282a745b80ffae533a6447e18e4ccc8](https://github.com/rarooij98/bt_team4/commit/8c89bda00282a745b80ffae533a6447e18e4ccc8) - Message ophalen uit html en on connection met de server berichten vertonen (zoals user joined, user disconnected)
* [9bca1b697c9d9c2c76500a90a1b616fa6c15cd98](https://github.com/rarooij98/bt_team4/commit/9bca1b697c9d9c2c76500a90a1b616fa6c15cd98) - Session toegevoegd aan profiel pagina met user
* [74e4e36623c235440edc962ae88233d7dcacf84c](https://github.com/rarooij98/bt_team4/commit/74e4e36623c235440edc962ae88233d7dcacf84c) - Message wordt opgeslagen en in een div gestopt




## :balance_scale: Licence
Licensed met de <a href="https://github.com/rarooij98/bt_team4/blob/main/LICENSE">MIT license</a>. 
