# 💔 Opdracht 2 - "Breek het web" 💔

Voor deze opdracht moeten verschillende soorten features onderzocht worden, om zo te bepalen welk invloed en impact deze hebben op verschillende websites.
Deze websites ga ik testen, door de door mij gekozen features op de websites uit te schakelen.

Ik heb gekozen voor de features:
- Afbeeldingen uitzetten
- Custom Fonts uitzetten
<br><br>


## 📸 Afbeeldingen uitzetten

Tijdens het onderzoek naar de impact van het uitschakelen van aafbeeldingen, maak ik gebruik van de Google Chrome extentie: Web Developer.
Web Developer is een handige tool die je kan gebruiken om bepaalde features van een website uit te schakelen, om zo de website te testen op Progressive Enhancement. 

Als je geen gebruik wil maken van de extentie kun je als volgt het laden van de afbeeldingen uitschakelen:<br><br>
Google Chrome:

- Instellingen -> Privacy en beveiliging -> Site-instellingen -> Afbeeldingen -> uitschakelen

Microsoft Edge:

- Instellingen -> Cookies en site machtigingen -> Afbeeldingen -> uitschakelen
<br><br>

### 💢 Problemen
Afbeeldingen zijn hele belangrijke onderdelen van een website. Ze zorgen voor een prettige en duidelijk overzicht voor de gebruiker. Je kunt namelijk meestal in één oogopslag de context van de website zien, en weten wat de website voor de gebruiker te bieden heeft.

Als eerste probleem: de laadtijd.<br>
Voor dit voorbeeld maak ik gebruik van de website van het Algemeen Dagblad (www.ad.nl).

Afbeeldingen zijn, zoals eerder al verteld, een belangrijk onderdeel van een website. Ze zorgen voor een duidelijk overzicht, en meestal voor een goede sfeer op de website.
Afbeeldingen kunnen ook een negatieve werking hebben op een website. Dit komt omdat websites er langer over doen om te laden, als deze afbeeldingen bevatten. Dit hangt natuurlijk ook af van de afmetingen, de kwaliteit, en het bestandstype van de afbeeldingen.

Tijdens het laden van de website zie ik via het netwerk-tabblad van Google Chrome dat de website er ongeveer 3 seconden over doet om de afbeeldingen te laden. Als ik via de Web Developer extentie de afbeeldingen uitschakel, doet de website er ongeveer 1,3 seconden over om te laden. Dit is een verschil van ruim 1,5 seconden. <br><br>

### 📡 Bandbreedte aanpassen
<br>
Ik kan via het netwerk-tabblad ook de bandbreedte van de internet veranderen. Als ik de bandbreedte aanpas naar "Slow 3G", doet de website er 59 seconden over om de website met afbeeldingen volledig te laden. Zonder afbeeldingen doet de website er maar 7 seconden over. 
<br><br>
Als ik de bandbreedte aanpas naar "Fast 3G", doet de website er ongeveer 13 seconden over om volledige (inclusief afbeeldingen) te laden. Zonder afbeeldingen doet de website er ongeveer 3 seconden over. Dit verschil is ongeveer 10 seconden.
<br><br>
Het verschil in laadtijd tussen de verschillende soorten bandbreedtes is aanzienlijk groot, dus zo kun je zien dat afbeeldingen heel veel moeite kosten voor de webbrowsers om te kunnen renderen. Ook kun je concluderen dat hoe sneller je internetverbinding is, hoe sneller de website met of zonder afbeeldingen laadt.
<br><br>

### 🌐 Andere browser
<br>
Ik heb deze test ook in een andere webbrowser geprobeerd, namelijk Microsoft Edge. 
Op Microsoft Edge heb ik hetzelfde gedaan als bij Google Chrome. Hier volgen de resultaten:

Op normale bandbreedte doet de website er 15 seconden over om volledig te laden, inclusief alle afbeeldingen. Zonder afbeeldingen doet de website er maar 4 seconden over.

Met een "Slow 3G" bandbreedte doet de website er 55 seconden over om de pagina volledig, inclusief afbeeldingen, te laden.
Zonder afbeeldingen duurt dit maar 8 seconden.

Met een "Fast 3G" bandbreedte doet de website er 20 seconden over om volledig te laden. Zonder afbeeldingen te laden, doet de website er maar liefst 6 seconden over.

Dit geeft een duidelijk inzicht over hoe lang een website er eigenlijk over doet om met of zonder afbeeldingen te laden.
<br><br>

### 🔨 Wat valt er te fixen?
<br>
Om een website zo snel mogelijk te laten laden, om zo de gebruikerstevredenheid te verhogen, moet er goed gekeken worden naar de efficientie van de afbeeldingen.
<br><br>"Zijn zo veel afbeeldingen wel nodig? Welk bestandstype kan ik het best gebruiken? Welke formaten moet ik aanhouden?"
<br><br>
Al deze vragen moeten eerst goed worden beanwoord, en kritisch naar gekeken worden om een zo gebruikersvriendelijke website te maken.

Ook moet de developer de website voor elke gebruiker goed te gebruiken maken. Denk hierbij aan blinde mensen. Hierbij gaat het namelijk nog best vaak mis, zo ook op de website van het Algemeen Dagblad.

Als een afbeelding niet kan laden, of als er een screen reader voor blinde/slechtziende mensen over de site wordt gehaald, zal deze de afbeelding niet kunnen lezen. Hier is een oplossing voor; de <i>alt=""</i> tag. De inhoud van deze tag zal verschijnen/voorgelezen worden door screen readers, om zo alsnog de inhoud van de afbeelding te beschrijven. <br><br> 
Vaak zie je dat hiermee geen rekening worden gehouden, en/of dat de <i>alt=""</i> tag niet juist wordt gebruikt. Onder andere bij de website van het Algemeen Dagblad wordt de tag niet goed gebruikt. In de tag moet worden beschreven wat er op de afbeelding te zien is, en dus NIET informatie over bijvoorbeeld het artikel. <br><br>

Er zijn dus heel veel features en onderdelen waar je als web designer rekening moet houden om het voor de gebruiker zo makkelijk mogelijk te maken. Zo verhoog je het niveau van Progressive Enhancement op een website.
<br><br>

### 📰 Bronnen:
https://cherry-communicatie.nl/blog/invloed-van-afbeeldingen-op-je-website/#:~:text=Afbeeldingen%20geven%20een%20website%20grotendeels,ruimte%20in%20beslag%20dan%20tekst

<br><br>
## 🔠 Custom Fonts uitschakelen
Custom fonts zijn tegenwoordig niet meer weg te denken van websites. Ze zorgen voor een prettigere leeservaring, en zorgen voor meer sfeer op de website. Tegenwoordig zijn er duizenden soorten custom fonts die je kunt importeren vanuit bijvoorbeeld Google Fonts (https://fonts.google.com/), of FontSpace (https://www.fontspace.com). <br>Deze custom fonts zijn natuurlijk leuk voor de website, en kunnen als prettig worden ervaren door de gebruiker, maar het brengt ook de nodige problemen met zich mee.<br> Ik zal een paar van deze problemen verder toelichten.
<br><br>
### 💢 Problemen
Net zoals afbeeldingen, duurt het laden van een website langer omdat deze eerst de custom fonts moeten inladen.
### 📡 Bandbreedte aanpassen
### 🌐 Andere browser
### 🔨 Wat valt er te fixen?
### 📰 Bronnen:
https://www.wholegraindigital.com/blog/performant-web-fonts/

