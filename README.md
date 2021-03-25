# Live link naar demo:
https://frozen-thicket-59522.herokuapp.com/ 

# 👕 T-Shirt Generator

Ik heb voor het vak Browser Technologies de use case: "Nerdy T-shirt" gekozen.
Het doel van deze use case is om een applicatie te maken waarin je je eigen T-shirt kan ontwerpen. Deze T-shirts kun je uiteindelijk ook terugzien, bewerken en "bestellen" op een bestelpagina.
<br><br>
Als eerste ga ik mijn Wire-Flow schetsen laten zien. Hierna
leg ik de verschillende lagen van mijn applicatie uit, en wat het verband is met Progressive Enhancement.

## Wire Flow

- Overview Page: ![](https://imgur.com/i9ZPf2F.png)
<br><br>
- Detailed Page: ![](https://imgur.com/W22pFDE.png)
<br><br>
- Check-out Page: ![](https://imgur.com/2otiJER.png)
<br><br>

## Functional layer
De Nerdy T-shirt App laat gebruikers een eigen "Nerdy" T-shirt ontwerpen, en deze uiteindelijk bestellen. Op deze app is het mogelijk om gemaakte T-shirts op te slaan, om er zo later verder aan te werken. 
<br><br>
Op de overview page zie je de andere gemaakte t-shirts, waarop je kunt klikken om er verder aan te werken, of af te rekenen.

## Reliable layer
Op de Wire-Flow zie je een geschetste versie van de app. Om dit te realiseren ga ik onder andere gebruik maken van de volgende HTML tags/structuur:

``` 
<body>
    <div class="shirt">
    </div>
    <form>
        <label></label>
        <input>
        <label></label>
        <input>
        <label></label>
        <input>    
    </form>
</body> 
```
Deze tags zullen uiteindelijk misschien veranderen, maar ik ga zo veel mogelijk gebruik maken van de semantische HTML-tags.
<br><br>

## Usable layer
Bij het ontwerpen van de T-shirts zullen er verschillende opties in beeld komen om aanpassingen te doen aan het shirt. Denk hierbij aan de vorm van het shirt (M/V), de kleur, de tekst, de maat, etc. 
<br><br>
Als deze velden niet (compleet) zijn ingevuld, zal de app een melding/notificatie geven, en de gebruiker vragen om de gegevens correct in te vullen.
<br><br>

## Pleasurable layer
De app zal een gebruiksvriendelijk design hebben, met bijvoorbeeld subtiele animaties en juiste colorschemes.
<br><br>
