# CMTTHE04 Week3 oefening 1

Startproject voor Pong in Typescript

<br>
<br>
<br>

## Beweeg de bal

Bestudeer de opzet van het project: game roept de update functie van de bal aan. Maak de volgende aanpassingen:

- In de update functie van de bal tel je 1 op bij de `x` en `y` variabelen.
- Log de waarde van de `x` en `y` variabelen in de console.
- Gebruik de variabelen om de bal op die plek te tekenen!
- Geef de bal twee nieuwe variabelen: `xspeed` en `yspeed`. Zet deze op 1.
- In de update functie tel je `xspeed` op bij `x` en `yspeed` bij `y`.

<br>
<br>
<br>

## Hou de bal binnen het scherm

De breedte en hoogte van het scherm kan je opvragen met `window.innerWidth` en `window.innerHeight`. 

- Controleer of de positie van de bal binnen het window is met `if (this.x ...)`.
- Als de bal rechts of links buiten beeld gaat, dan moet je de xspeed omdraaien. Dit doe je door de xspeed te vermenigvuldigen met -1:  `this.xspeed *= -1`.
- Doe hetzelfde met de yspeed als de bal boven of onder uit beeld gaat.
- Controleer of de bal nu continu door het beeld blijft stuiteren, of dat je nog iets moet aanpassen.

### Meerdere ballen

- Maak een array van ballen in Game.ts: `balls:Ball[] = []`
- Plaats een aantal ballen in de array met `this.balls.push(new Ball())`. Experimenteer met het aantal ballen.
- Update alle ballen in de gameloop van game.ts

<br>
<br>
<br>

## Paddle

- Het project bevat een `paddle.ts` class. Voeg een paddle instance toe aan Game.ts!
- Vergeet niet de paddle te updaten, net zoals de ballen.
- Bestudeer het [voorbeeld van collision detection](https://github.com/HR-CMGT/Typescript/blob/master/snippets/collision.md)
- Voeg in game.ts collision detection toe tussen de balls en de paddle. 
- Toon een bericht in de console als een bal de paddle raakt.

<br>
<br>
<br>

## De game af maken

- De bal stuitert *niet* terug als die links uit beeld gaat. 
- De bal stuitert *wel* terug als de bal de paddle raakt.
- Kan je de bal steeds sneller laten gaan, naar mate die vaker geraakt wordt?
- Kan je een score updaten en tonen nadat de ball de paddle heeft geraakt?

<br>
<br>
<br>

## Multiplayer

- Kan je twee paddles toevoegen die elk hun eigen keyboard controls hebben? 

<br>
<br>
<br>

## Voorbeeldcode

- [Collision detection](https://github.com/HR-CMGT/Typescript/blob/master/snippets/collision.md)
- [Keyboard input](https://github.com/HR-CMGT/Typescript/blob/master/snippets/movement.md)
- [Game Loop](https://github.com/HR-CMGT/Typescript/blob/master/snippets/game.md)
