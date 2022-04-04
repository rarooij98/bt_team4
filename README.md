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

## Installatie
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

## Packages die je nodig heb
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

# Belangrijke commits

Sanne - 776cf0cc2eeaec24d3f7b5fa17b3d49ae6107ff5 - setup handlebars<br>
Sanne - a2d468f018c64f4ad970da1acdd5c1050a01440a - db connected en pagina live<br>

Robin - 40cd03e82af35f14355803d1dbf3f2532e99b77d - handlebars {{#each}} functie toevoegen <br>
Robin - 5a7f847d9ed9fb974f0f4448f60a7e638fd75d6c - ophalen filter resultaten met mongoose <br>
Robin - 019c3b599323a8b950dff8ba6aefb5256592dcab - styles samengevoegd en custom properties toegevoegd <br>
Robin - cb8a3f148620155f4d517ae8d6dd857057815165 - nieuwe controllers en routes <br>
Robin - 4a1ae8d8e2d0ec9ee377ba9a5b931b3de118a660 - nieuwe controllers en routes, werkt nog niet <br>
Robin - 19db161986e12c8fb7d97d483bea5a2f7416cbe8 - matches duplicate render verwijderd, alles werkt <br>
Robin - 8dc2a51678b004e8a9dc62b3691db1d6acb55d88 - merged filter-en-voorkeuren <br>
Robin - b5defa957aa0a8c428482861c3d0f9ba30132986 - test: get login formulier <br>

Dennis - 0246c991cb55cfd57141e1f43aa801bf3ca3b18a - google login oauth <br>
Dennis - 1a1a6c8777a2a15ac4a07b526604a6b1e7f3af85 - na inloggen kom je op een pagina die met passport is beveiligd <br>
Dennis - 6c7aec105ad0ea241a84a4951a25f5eb50ab1791 - hbs pagina's eraan gekoppeld <br>
Dennis - 7549ae8275eacf1cbf62bbc3f639cb61a72d63da - styling voor de google login knop <br>
Dennis - 9e265b6e92dee24b62dd935e90210c4896d91ab6 - knop voor uitloggen gemaakt <br>
Dennis - e79be58850bc7ca99c20bc742776fa3125285ed0 - aangepast voor als we gaan mergen <br>
Dennis - f2690b813197bfb702e4cd2903518174fca556fb - Progressive Enhancement code voor login/registreren <br>
Dennis - 09406f40c24f500eea68096b2119fa07acd52df7 - script gelinked in hbs <br>
Dennis - f87c6e35ac6690e7df17d1f5bc6389827d08a28c - PE zit op de login pagina <br>
Dennis - 2760e82f8b96ea7b7e3bec0f2af7b270a44e9757 - Feedback zit is in het Nederlands <br>
Dennis - e8d6f57a57da611d2d91dc5e33dc6fd3a98d0fc1 - PE zit op de registreer pagina <br>





## Licence
Licensed met de <a href="https://github.com/rarooij98/bt_team4/blob/main/LICENSE">MIT license</a>. 
