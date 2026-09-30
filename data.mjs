export const TRIALS = [
  {
    "n": 1,
    "title": "Inventari de bateries",
    "mins": 3,
    "story": "Les bateries auxiliars encara funcionen, però NORA ha perdut l’inventari d’energia.",
    "text": "Quatre bateries emmagatzemen 4.876 J, 3.958 J, 6.247 J i 2.819 J d’energia. Quanta energia emmagatzemen en total?",
    "fields": "Energia total en J.",
    "work": "Escriu una única suma vertical amb quatre sumands i mostra les xifres que portes.",
    "p1": "Has de sumar l’energia de les quatre bateries.",
    "p2": "Alinea les unitats, les desenes, les centenes i els milers. Comença per les unitats.",
    "unlock": "Inventari complet. La nau torna a conèixer la seva reserva auxiliar.",
    "answers": [
      17900
    ],
    "inputs": [
      {
        "label": "Energia total",
        "unit": "J"
      }
    ],
    "solution": [
      "Alinea els quatre nombres per unitats, desenes, centenes i milers.",
      "4.876 + 3.958 + 6.247 + 2.819 = 17.900 J.",
      "A les unitats sumes 30: escrius 0 i portes 3. A les desenes sumes 29, i a les centenes també 29: en tots dos casos escrius 9 i portes 2. La columna dels milers dona 17."
    ],
    "image": "assets/trial-01-v3.webp",
    "alt": "Il·lustració de còmic espacial del sistema inventari de bateries"
  },
  {
    "n": 2,
    "title": "Dipòsit de combustible",
    "mins": 3,
    "story": "El sensor del dipòsit s’ha reiniciat i cal recuperar la quantitat que queda.",
    "text": "Abans de l’avaria hi havia 20.040 kg de combustible. Durant la maniobra d’emergència s’han consumit 8.765 kg. Quina massa de combustible queda al dipòsit, en kg?",
    "fields": "Massa de combustible restant en kg.",
    "work": "Escriu la resta vertical i mostra com reorganitzes les xifres quan cal portar-ne.",
    "p1": "La quantitat restant és la quantitat inicial menys el consum.",
    "p2": "Alinea les xifres. Si una columna no permet restar, reorganitza una unitat d’ordre superior; fixa’t en els zeros.",
    "unlock": "Dipòsit verificat. NORA pot controlar el combustible disponible.",
    "answers": [
      11275
    ],
    "inputs": [
      {
        "label": "Combustible restant",
        "unit": "kg"
      }
    ],
    "solution": [
      "Resta el combustible consumit del combustible inicial.",
      "20.040 − 8.765 = 11.275 kg.",
      "Quan no pots restar en una columna, reorganitza una unitat de l’ordre superior. Cal passar pels zeros sense oblidar de reduir les columnes d’on prens una unitat.",
      "Comprovació: 11.275 + 8.765 = 20.040."
    ],
    "image": "assets/trial-02-v3.webp",
    "alt": "Il·lustració de còmic espacial del sistema dipòsit de combustible"
  },
  {
    "n": 3,
    "title": "Plaques del casc",
    "mins": 4,
    "story": "Els robots reparadors necessiten saber quantes plaques hi ha al magatzem.",
    "text": "El magatzem conté 24 caixes amb 1.248 plaques de reparació a cada caixa. Quantes plaques hi ha en total?",
    "fields": "Nombre total de plaques.",
    "work": "Fes la multiplicació vertical i escriu els dos productes parcials.",
    "p1": "Totes les caixes contenen la mateixa quantitat. Pots calcular el total amb una multiplicació.",
    "p2": "Multiplica 1.248 per 4 i per 20. Recorda el desplaçament del producte de les desenes.",
    "unlock": "Inventari de plaques confirmat. Els robots reparen el casc.",
    "answers": [
      29952
    ],
    "inputs": [
      {
        "label": "Plaques disponibles",
        "unit": "plaques"
      }
    ],
    "solution": [
      "Multiplica les plaques de cada caixa pel nombre de caixes.",
      "1.248 × 4 = 4.992; 1.248 × 20 = 24.960.",
      "Suma els productes parcials: 4.992 + 24.960 = 29.952 plaques."
    ],
    "image": "assets/trial-03-v3.webp",
    "alt": "Il·lustració de còmic espacial del sistema plaques del casc"
  },
  {
    "n": 4,
    "title": "Reserva hídrica",
    "mins": 3,
    "story": "Els compartiments habitables han quedat aïllats i cal repartir la reserva d’aigua.",
    "text": "La nau té 8.640 kg d’aigua. Es reparteixen a parts iguals entre 8 dipòsits. Quina massa d’aigua rebrà cada dipòsit, en kg?",
    "fields": "Massa d’aigua per dipòsit en kg.",
    "work": "Fes la divisió escrita. Comprova que el quocient multiplicat pel divisor dona el dividend.",
    "p1": "És un repartiment en 8 parts iguals.",
    "p2": "Divideix d’esquerra a dreta. Si en una posició no hi cap el divisor, pot caldre escriure un zero al quocient.",
    "unlock": "Aigua distribuïda. Els compartiments recuperen la seva reserva.",
    "answers": [
      1080
    ],
    "inputs": [
      {
        "label": "Aigua per dipòsit",
        "unit": "kg"
      }
    ],
    "solution": [
      "Reparteix la massa d’aigua entre els 8 dipòsits.",
      "8.640 : 8 = 1.080 kg per dipòsit.",
      "Després de dividir 8 i 6, queda 6; en baixar el 4, 64 : 8 = 8. En baixar el zero final, cal escriure 0 al quocient. El zero interior també és necessari: en dividir 6 entre 8, hi escrius 0.",
      "Comprovació: 1.080 × 8 = 8.640."
    ],
    "image": "assets/trial-04-v3.webp",
    "alt": "Il·lustració de còmic espacial del sistema reserva hídrica"
  },
  {
    "n": 5,
    "title": "Recuperació de dades",
    "mins": 4,
    "story": "Cinc arxius contenen els registres necessaris per recuperar la ruta.",
    "text": "Els arxius contenen 7.638, 4.857, 6.924, 3.576 i 5.809 registres. Quants registres s’han de recuperar en total?",
    "fields": "Nombre total de registres.",
    "work": "Escriu una única suma vertical amb cinc sumands. Indica què portes en cada columna.",
    "p1": "Cal comptar els registres dels cinc arxius junts.",
    "p2": "En sumar cinc nombres, pots portar més d’una desena a la columna següent. No afegeixis sempre només 1.",
    "unlock": "Arxius recuperats. El mapa de retorn torna a estar disponible.",
    "answers": [
      28804
    ],
    "inputs": [
      {
        "label": "Registres recuperats",
        "unit": "registres"
      }
    ],
    "solution": [
      "Suma els cinc arxius en una sola operació vertical.",
      "7.638 + 4.857 + 6.924 + 3.576 + 5.809 = 28.804 registres.",
      "Unitats: 34, escrius 4 i portes 3. Desenes: 30, escrius 0 i portes 3. Centenes: 38, escrius 8 i portes 3. Milers: 28."
    ],
    "image": "assets/trial-05-v3.webp",
    "alt": "Il·lustració de còmic espacial del sistema recuperació de dades"
  },
  {
    "n": 6,
    "title": "Escut tèrmic",
    "mins": 4,
    "story": "El circuit de refrigeració de l’escut ha absorbit energia durant la pluja de micrometeorits.",
    "text": "El circuit de refrigeració de l’escut pot absorbir 30.002 J d’energia abans d’arribar al seu límit de funcionament. Durant l’incident ha absorbit 18.746 J. Quanta energia encara pot absorbir abans d’arribar al límit?",
    "fields": "Energia que encara pot absorbir el circuit en J.",
    "work": "Fes la resta escrita i mostra el pas de la desena de miler a les columnes amb zeros.",
    "p1": "Resta l’energia ja absorbida de l’energia màxima que pot absorbir el circuit.",
    "p2": "Reorganitza una unitat de la columna no nul·la més propera. Comprova com queden totes les columnes per on passa.",
    "unlock": "Escut verificat. NORA coneix l’energia que el circuit encara pot absorbir.",
    "answers": [
      11256
    ],
    "inputs": [
      {
        "label": "Energia que encara pot absorbir",
        "unit": "J"
      }
    ],
    "solution": [
      "Resta l’energia absorbida del límit total.",
      "30.002 − 18.746 = 11.256 J.",
      "En reorganitzar el minuend, tens 2 desenes de miler, 9 milers, 9 centenes, 9 desenes i 12 unitats. Ja pots restar columna per columna.",
      "Comprovació: 11.256 + 18.746 = 30.002."
    ],
    "image": "assets/trial-06-v3.webp",
    "alt": "Il·lustració de còmic espacial del sistema escut tèrmic"
  },
  {
    "n": 7,
    "title": "Panells solars",
    "mins": 5,
    "story": "NORA necessita calcular la producció conjunta dels panells que han sobreviscut.",
    "text": "Funcionen 128 panells solars. Durant un interval de 600 s, cadascun produeix 2.364 J d’energia. Quants joules produeixen tots els panells durant aquest interval?",
    "fields": "Energia produïda en J.",
    "work": "Escriu els tres productes parcials i la suma que dona el producte final.",
    "p1": "Multiplica la producció d’un panell pel nombre de panells.",
    "p2": "Descompon 128 en 100 + 20 + 8. Situa cada producte parcial a la columna correcta.",
    "unlock": "Producció confirmada. El sistema solar torna a alimentar la nau.",
    "answers": [
      302592
    ],
    "inputs": [
      {
        "label": "Energia produïda",
        "unit": "J"
      }
    ],
    "solution": [
      "Multiplica l’energia d’un panell pels 128 panells.",
      "2.364 × 8 = 18.912; 2.364 × 20 = 47.280; 2.364 × 100 = 236.400.",
      "18.912 + 47.280 + 236.400 = 302.592 J. Desplaça correctament els productes de les desenes i les centenes."
    ],
    "image": "assets/trial-07-v3.webp",
    "alt": "Il·lustració de còmic espacial del sistema panells solars"
  },
  {
    "n": 8,
    "title": "Càrrega dels mòduls",
    "mins": 4,
    "story": "Els mòduls de suport necessiten rebre la mateixa quantitat d’energia.",
    "text": "Hi ha 57.960 J d’energia per repartir a parts iguals entre 24 mòduls. Quants joules rebrà cada mòdul?",
    "fields": "Energia rebuda per mòdul en J.",
    "work": "Fes la divisió escrita i comprova el resultat amb una multiplicació.",
    "p1": "Has de repartir tota l’energia entre 24 mòduls.",
    "p2": "Comença dividint 57 entre 24. A cada pas, comprova que el residu parcial sigui menor que 24.",
    "unlock": "Mòduls carregats. El suport de la tripulació torna a funcionar.",
    "answers": [
      2415
    ],
    "inputs": [
      {
        "label": "Energia per mòdul",
        "unit": "J"
      }
    ],
    "solution": [
      "Reparteix l’energia en 24 parts iguals.",
      "57.960 : 24 = 2.415 J per mòdul.",
      "57 : 24 dona 2 i residu 9. En baixar el 9 tens 99: dona 4 i residu 3. En baixar el 6 tens 36: dona 1 i residu 12. En baixar el 0 tens 120: dona 5 i residu 0.",
      "Comprovació: 2.415 × 24 = 57.960."
    ],
    "image": "assets/trial-08-v3.webp",
    "alt": "Il·lustració de còmic espacial del sistema càrrega dels mòduls"
  },
  {
    "n": 9,
    "title": "Circuit de comunicacions",
    "mins": 4,
    "story": "L’antena ja funciona, però NORA necessita comprovar si la bateria permet enviar els missatges de retorn.",
    "text": "La bateria del sistema de comunicacions té 25.000 J d’energia disponible. Per enviar un missatge a la Terra es consumeixen 1.248 J. La tripulació ha d’enviar 12 missatges i, durant l’enviament, la bateria no es recarrega.\nA. Quanta energia es consumirà per enviar els 12 missatges?\nB. Quanta energia quedarà a la bateria després d’enviar-los?",
    "fields": "Dos camps: energia consumida en J i energia restant en J.",
    "work": "Fes una multiplicació escrita i una resta vertical portant-ne. Conserva el resultat de la multiplicació per fer la resta.",
    "p1": "Primer calcula el consum dels 12 missatges. Després resta aquest consum de l’energia inicial de la bateria.",
    "p2": "Multiplica 1.248 per 12, amb els productes parcials ben alineats. Després resta el resultat de 25.000.",
    "unlock": "Consum verificat. NORA envia els 12 missatges i la Terra rep el vostre senyal.",
    "answers": [
      14976,
      10024
    ],
    "inputs": [
      {
        "label": "A · Energia consumida",
        "unit": "J"
      },
      {
        "label": "B · Energia restant",
        "unit": "J"
      }
    ],
    "solution": [
      "Calcula primer el consum total dels 12 missatges.",
      "1.248 × 12 = 14.976 J. Els productes parcials són 2.496 i 12.480.",
      "Després resta el consum de l’energia inicial: 25.000 − 14.976 = 10.024 J.",
      "Comprovació: 14.976 + 10.024 = 25.000."
    ],
    "image": "assets/trial-09-v3.webp",
    "alt": "Il·lustració de còmic espacial del sistema circuit de comunicacions"
  },
  {
    "n": 10,
    "title": "Càpsules de reserva",
    "mins": 5,
    "story": "Cal preparar les càpsules de suport per al tram final del viatge.",
    "text": "Hi ha 48.765 racions de reserva. Cada càpsula completa ha de contenir exactament 125 racions. Quantes càpsules completes es poden preparar? Quantes racions quedaran sense empaquetar?",
    "fields": "Dos camps: càpsules completes i racions sobrants.",
    "work": "Fes la divisió amb residu. Comprova dividend = divisor × quocient + residu i que el residu sigui menor que el divisor.",
    "p1": "El quocient indica les càpsules completes. El residu indica les racions sobrants.",
    "p2": "No arrodoneixis el quocient cap amunt: una càpsula incompleta no compta com a completa.",
    "unlock": "Reserva preparada. Les càpsules queden disponibles per al retorn.",
    "answers": [
      390,
      15
    ],
    "inputs": [
      {
        "label": "Càpsules completes",
        "unit": "càpsules"
      },
      {
        "label": "Racions sobrants",
        "unit": "racions"
      }
    ],
    "solution": [
      "Divideix les racions disponibles entre les 125 racions que necessita cada càpsula.",
      "48.765 : 125 dona quocient 390 i residu 15.",
      "Es poden preparar 390 càpsules completes i sobren 15 racions. No arrodoneixis a 391: no hi ha prou racions per omplir una altra càpsula.",
      "Comprovació: 125 × 390 + 15 = 48.765; el residu 15 és menor que 125."
    ],
    "image": "assets/trial-10-v3.webp",
    "alt": "Il·lustració de còmic espacial del sistema càpsules de reserva"
  },
  {
    "n": 11,
    "title": "Control de trajectòria",
    "mins": 4,
    "story": "El sistema de navegació demana una última comprovació abans d’acceptar la ruta.",
    "text": "Calcula el valor de l’expressió següent i mostra els passos intermedis.\n48 × 25 − 360 : 12",
    "fields": "Valor de l’expressió.",
    "work": "Resol la multiplicació i la divisió abans de fer la resta.",
    "p1": "La resta és l’última operació que has de fer.",
    "p2": "Pots descompondre 25 en 20 + 5 per comprovar el producte. Després calcula 360 : 12.",
    "unlock": "Trajectòria validada. La ruta cap a la Terra és segura.",
    "answers": [
      1170
    ],
    "inputs": [
      {
        "label": "Valor de l’expressió",
        "unit": ""
      }
    ],
    "solution": [
      "La multiplicació i la divisió es fan abans de la resta.",
      "48 × 25 = 1.200; 360 : 12 = 30.",
      "1.200 − 30 = 1.170."
    ],
    "image": "assets/trial-11-v3.webp",
    "alt": "Il·lustració de còmic espacial del sistema control de trajectòria"
  },
  {
    "n": 12,
    "title": "Motor de retorn",
    "mins": 6,
    "story": "Ja heu recuperat els altres onze sistemes. Només falta distribuir l’energia del motor.",
    "text": "Quatre acumuladors emmagatzemen 6.850 J, 4.975 J, 8.260 J i 3.915 J d’energia. La comprovació d’encesa consumeix 7.648 J. Tota l’energia restant es reparteix a parts iguals entre 16 impulsos del motor.\nA. Quanta energia hi ha abans de la comprovació?\nB. Quanta energia queda després de la comprovació?\nC. Quanta energia correspon a cada impuls?",
    "fields": "Tres camps: energia inicial en J, energia restant en J i energia per impuls en J.",
    "work": "Escriu una suma de quatre sumands, una resta i una divisió. Conserva els resultats intermedis.",
    "p1": "L’ordre és: sumar l’energia, restar el consum i repartir el que queda.",
    "p2": "No divideixis l’energia inicial. Primer descompta l’energia consumida per la comprovació.",
    "unlock": "Els càlculs del motor estan verificats. Ha arribat el moment d’intentar l’aterratge.",
    "answers": [
      24000,
      16352,
      1022
    ],
    "inputs": [
      {
        "label": "A · Energia inicial",
        "unit": "J"
      },
      {
        "label": "B · Energia restant",
        "unit": "J"
      },
      {
        "label": "C · Energia per impuls",
        "unit": "J"
      }
    ],
    "solution": [
      "Primer suma l’energia dels quatre acumuladors.",
      "6.850 + 4.975 + 8.260 + 3.915 = 24.000 J.",
      "Després descompta la comprovació: 24.000 − 7.648 = 16.352 J.",
      "Finalment reparteix l’energia restant: 16.352 : 16 = 1.022 J per impuls.",
      "Comprovació: 1.022 × 16 + 7.648 = 24.000."
    ],
    "image": "assets/trial-12-v3.webp",
    "alt": "Il·lustració de còmic espacial del sistema motor de retorn"
  }
];
