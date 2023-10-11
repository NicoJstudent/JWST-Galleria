# JWST-Galleria
Basics of Web Applications final assignment

## Arviointi-lista
Tyhjiä kohtia ei ole sisällytetty sivustoon.

### HTML
1. Basic HTML structure is present.
- Näkyy .html tiedostoissa


2. HTML structure with clear content differentiation (headings, paragraphs, lists).
- Jokaisessa .html tiedostossa.
- Listaa kytetty esimerkiksi verkkosivun navigointi palkissa. Löytyy Header:sta


3. Use of forms, links, and media.
- Etusivulle ja galleriassa on kuvia mediatiedostona
- Linkkejä löytyy Historia sivuston lopulta lähde linkkinä ja Gallerian lopussa linkki kuvien tekijänoikeuksiin


4. Tables are effectively used.
- Laitteisto sivulla on taulukko, jote on tyylitetty myös .css:lä


5. Consistent use of semantic HTML throughout, ensuring better structure and understanding of the content.
- Löytyy Header, nav, section, footer
- Kaikissa .html on samaja näihin .css tyylitykset


### CSS
1. Basic CSS styling (colors, fonts).
- styles.css tiedostossa on useita eri tyylityksiä
- "Darkmode" nappula vaihtaa koko sivuston tummempaan sävyyn


2. Use of classes and IDs to style specific elements.
- styles.css tiedoston rivin 116 jälkeen useita class ja id elementtejä


3. Implementation of responsive design elements.
- Toimii monella eri resoluutiolla.


4. Use of layouts for advanced user interfaces (arrays, float, flexbox, css grid)
- Gallerian toiminta toteutettu näin
-  styles.css rivit: 121 - 164


5. Styling demonstrates a strong grasp of layout principles, aesthetics, and user experience.
-  Darkmode nappula käyttäjämukavuuden luomiseksi. 
- styles.css rivit 26-42 sekä scripts/script.js rivit 1-2, 11-27


### JavaScript Basics
1. Simple interactions (like alerts on button click).
- Etusivulla ilmoitus ensimmäisellä kerralla.
- scripts/script.js rivit 4-9


2. Multiple event listeners and basic DOM manipulations.
-


3. Use of arrays, objects, and functions.
- scripts/ löytyy useita käytännössä


4. Advanced logic, looping through data, and dynamic DOM updates.
- 


5. Consistent use of Object-Oriented JavaScript principles.
- scripts/rss.js löytyy 32-38 riviltä

### Asynchronous Operations
 1. Use of timers.
 -


 2. Successful implementation of an AJAX call or Fetch.
 - RSS feedi on ajaxilla tehty RSS.html ja scripts/rss.js
 - Kaikki linkit ei toiminut oikein, kommenttina toimiva RSS feed linkki. Vanhentunut formaatti? 


 3. Data from the asynchronous call is displayed on the webpage.
 - Uutiset sivuston Twitter feedi
 - RSS sivusto näyttä, jos vaihtaa scripts/rss.js kommentista toisen linkin.


 4. Error handling is implemented (for failed API calls, etc.).
 - Nykyinen RSS sivuston linkki ei toimi oikein, joten tulee ERROR ilmoitus
 - scripts/rss.js 51-54 löytyy error funktio


 5. Effective use of asynchronous data to enhance user experience (like filtering, sorting).
 - 