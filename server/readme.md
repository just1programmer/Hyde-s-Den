Cont Google : hydesdenshop@gmail.com
parola : Parolasite.1 

Partea tehnologica a proiectului :


Pe Backend folosim urmatoarele tehnologii:

Node.js

Express.js -- pentru a crea un web server.
nodemon -- pentru server hot reloading  (sa nu mai dam start si stop la server cand facem o modificare)
concurrently -- pentru a putea rula mai multe scripturi deodata (noi folosim pentru a putea rula scriptul pentru serverul de Backend si pentru a rula serverul de React de pe Frontend)
passport.js -- librarie care manageriaza autentificarea OAuth prin Google , dar si loginul local , care presupune doar email si parola. 
cookie-session -- pentru a putea folosi cookieurile din browser.
bcrypt -- librarie pentru criptarea parolei la inregistrare. 
mongoDB -- baza de date no-sql. 
mongoDB Atlas -- pentru rularea remote a serverului de mongoDB. 
mongoose -- librarie care face posibila comunicarea dintre Node.js si serverul de MongoDB . 
stripe -- pentru procesarea platilor. 
strapi -- pentru a defini produse si categorii . 
emailjs -- pentru a trimite mailuri -- contact form.

Pe Frontend folosim urmatoarele tehnologii : 

HTML - markup html
CSS - pentru stilizarea paginii web
Javascript - pentru a face pagina web dinamica
React - pentru a defini pagina web ca fiind compusa din componente cu stare (state) 
Sass  -  Sass foloseste CSS , este un css framework care face lucrul cu CSS mai eficient
Redux - librarie pentru managementul datelor de pe frontend. 
Redux-toolkit - librarie aditionala pentru redux - permite lucrul asincron. (face treaba mai usoara atunci cand apelam un API din Backend)
React-Router - librarie care rezolva partea de routing de pe Frontend. 


Alte concepte folosite : 

cookie
server proxy 