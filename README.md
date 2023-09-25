# IKT-Abgabe
PWA 2023 
## Inhalt der ReadME
1. [Ottgramm](#Ottgramm)
2. [Technologies](#technologies)
3. [Installation](#installation)
4. [UserGuideBook](#userguidebook)

### Ottgramm
***
Die Cannabis Legalisierung steht vor der Tür und wir wollen dieses Event mit Dir teilen!
Mit Ottgramm bekommst du einen Ort, an dem du deine Pflanzenliebe mit deinen Freunden teilen  kannst und dies mittels Uploads von Deinen Cannabis-Erlebnissen. 

Spring jetzt mit auf den Zug!

### Screenshot
![Screenshot 2023-09-25 202906](https://github.com/KatharinaSchippl/IKT-Abgabe/assets/82724771/7022f4c1-fca9-461a-87f3-a94ed9db8ea9)


## Technologies
***
Folgende Programme finden sich in der Entwicklung wieder:

*[Node.js]
*[MongoDB]
*[express.js]

## Installation
***
frontend 
```
$ npm install
$ npm start
```
***
backend
```
$ cd backend
$ npm install
$ npm run watch
```
## User Guidebook
***
Mittels der PWA sollen Fotos von Cannabiserlebnissen hochgeladen werden können.
Dafür wurde eine Kameraeinbindung implementiert und der eigene Standort kann abgerufen werden, um einfacher die Location des aufgenommenen Fotos zu verwenden.
Ein neuer Eintrag erfolgt über den + Button. Hier kann dann ein Titel vergeben werden und der Standort eingegeben, oder über die Leolocation bestimmt werden. Zudem besteht die Auswahl zwischen einem Foto aufnehmen und ein bestehendes Bild vom Smartphone oder Rechner hochladen.
Mittels Push-Notifications kann darüber informiert werden, wenn ein neuer Eintrag erfolgt ist. Die PWA ist zudem installierbar und auch teilweise offline nutzbar.
