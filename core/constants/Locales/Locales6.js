export const it = {
  core: {
    Next: 'Avanti - ',
    headers: {
      bottomToolBar: {
        Home: 'Casa',
        Plants: 'Piante',
        Environments: 'Ambienti',
        Settings: 'Impostazioni',
        Back: 'Indietro',
        Next: 'Avanti',
        Save: 'Salva',
        SAVE: 'SALVA',
      },
    },
    loading: {
      disclaimer: {
        DisplayPage: 'Pagina Visualizzata in',
        NotOlder: 'Non più vecchio di 20 anni?',
        Request:
          'Noi di Buddee richiediamo che tu rispetti i requisiti di età legale della tua area per visualizzare le informazioni contenute in questa app.',
        DisclaimerText:
          "Per favore conferma prima di essere maggiorenne di 20 anni e anche che sei d'accordo con i",
        TermsLink: "termini d'uso",
        AcceptText: 'Accetta',
        DeclineText: 'Declina',
        languages: [
          {key: 0, label: 'Inglese'},
          {key: 1, label: 'Thailandese'},
        ],
        DefaultLanguage: 'Inglese',
      },
      loadingIndicator: {Loading: 'Caricamento'},
    },
    errors: {},
  },
  actions: {
    newActions: {
      newAction: {
        HeaderMessage: 'Nuova Azione',
        Water: 'Annaffiare',
        MixNutes: 'Mescolare Nutrienti',
        BugReport: 'Segnalazione Bug',
        Repot: 'Trapiantare',
        Trim: 'Potare',
        Train: 'Addestrare',
        Defoliate: 'Defogliare',
        Flush: 'Sciacquare',
        Harvest: 'Raccogliere',
        Destroy: 'Distruggere',
        ActionLabel: 'SALVA',
        SelectPlant: 'Seleziona una Pianta!',
        SelectAction: "Seleziona un'azione!",
        WaterOptions: 'Opzioni di Annaffiatura:',
        placeholder: {
          Description: 'Descrizione',
          Amount: 'Inserisci quantità (litri)',
          Ec: 'Inserisci Ec',
          Ph: 'Inserisci Ph',
          Time: 'Inserisci tempo impiegato (minuti)',
        },
      },
    },
  },
  environments: {
    addEnv: {
      LightData: [
        {
          key: 0,
          label: 'Diodo Emettitore di Luce (LED)',
        },
        {
          key: 1,
          label: 'Lampada Fluorescente Compatta (CFL)',
        },
        {
          key: 2,
          label: 'Sodio ad Alta Pressione (HPS)',
        },
        {
          key: 3,
          label: 'Ioduri Metallici',
        },
        {
          key: 4,
          label: 'LEC',
        },
        {
          key: 5,
          label: 'T5',
        },
      ],
      HeaderMessage: 'Nuovo Ambiente',
      Name: 'Inserisci Nome ',
      ActionLabel: 'Salva',
      RoomMeasurements: 'Misure della Stanza:',
      OtherDetails: 'Altri Dettagli:',
      Aircon: 'Aria Condizionata',
      SealedRoom: 'Stanza Sigillata',
      Dehumidifier: 'Deumidificatore',
      placeholder: {
        Sealed: 'Stanza Sigillata',
        Dehumidifier: 'Deumidificatore',
        Aircon: 'Aria Condizionata',
        Resting: 'Temperatura di Riposo (°C)',
        Length: 'Lunghezza (m)',
        Width: 'Larghezza (m)',
        Height: 'Altezza (m)',
        Quantity: 'Quantità',
        Watts: 'Watt',
        Name: 'Inserisci Nome Ambiente',
        Light: 'Seleziona Tipo',
      },
      lights: 'Luci:',
    },
    environments: {
      NoEnv: 'Oops, Nessun Ambiente Trovato.',
      TapHere: 'Tocca qui per aggiungerne uno.',
    },
  },
  home: {
    journal: {Heading: 'Diario', Nothing: 'Niente per oggi'},
    toolbox: {
      HeaderText: 'Strumenti',
      New: 'Nuovo',
      Action: 'Azione',
      Plants: 'Piante',
      Environment: 'Ambiente',
      More: 'Altro',
      Tools: 'Strumenti',
    },
    calender: {name: 'it'},
  },
  plants: {
    create_env: {
      placeholder: {
        EnvironmentName: 'Inserisci nome ambiente',
        Select: 'Seleziona tipo',
      },
      HeaderMessage: 'Crea Ambiente',
      lightTypeData: [
        {key: 0, label: 'Diodo Emissione Luce (LED)'},
        {key: 1, label: 'Luce Fluorescente Compatta (CFL)'},
        {key: 2, label: 'Sodio ad Alta Pressione (HPS)'},
        {key: 3, label: 'Metallo Halide'},
        {key: 4, label: 'LEC'},
        {key: 5, label: 'T5'},
      ],
    },
    selectEnv: {Choose: 'Scegli il tuo ambiente'},
    addPlant: {
      beginningsData: [
        {key: 0, label: 'Seme'},
        {key: 1, label: 'Clone o Taglio'},
      ],
      mediumData: [
        {key: 0, label: 'Cocco'},
        {key: 1, label: 'Terra'},
        {key: 2, label: 'Lana di Roccia'},
      ],
      placeholder: {
        Select: 'Seleziona per favore',
        PleaseChoose: 'Per favore scegli un ceppo',
        Days: 'giorni',
        SelectMedium: 'Seleziona Medio',
      },
      CreateNew: 'Crea Nuovo Ceppo',
      PlantBegan: 'Pianta iniziata come:',
      Strain: 'Ceppo:',
      Create: 'Crea Piante',
      ChooseStage: 'Scegli Stadio Attuale:',
      Vegetative: 'Vegetativo',
      Flowering: 'Fioritura',
      Hanging: 'Appeso',
      VegState: 'Stato Vegetativo:',
      BeganOn: 'Cominciata la vita il:',
      VegTime: 'Tempo di Vegetazione:',
      PleaseSelect: 'Seleziona per favore',
      AmountPlants: 'Quantità di Piante:',
      Medium: 'Medio:',
      BloomingState: 'Stato di Fioritura:',
      LightsChanged: 'Luci Cambiate il:',
      DryState: 'Stato di Asciugatura:',
      LightsOut: 'Luci Spente il:',
      FlowerTime: 'Tempo di Fioritura:',
    },
    plants: {
      NoPlants: 'Ops, Nessuna pianta trovata.',
      TapHere: 'Tocca qui per aggiungerne una.',
    },
  },
  settings: {
    moreTools: {
      HeaderText: 'Controlli Home:',
      NewEnvironment: 'Nuovo Ambiente',
      NewPlant: 'Nuova Pianta',
      NewAction: 'Nuova Azione',
      MoreTools: 'Altri Strumenti:',
      Calculators: 'Calcolatori',
      Charts: 'Grafici',
      Guides: 'Guide:',
      Faq: 'Domande frequenti',
      Library: 'Libreria',
    },
    settings: {
      HeaderText: 'Impostazioni del Database:',
      EraseAllData: 'Cancella Tutti i Dati',
      GeneralSettings: 'Impostazioni Generali:',
      Language: 'Lingua',
      English: 'Inglese',
      Theme: 'Tema',
      LightMode: 'Modalità Luminosa',
      TemperatureUnits: 'Unità di Misura della Temperatura',
      Celsius: 'Celsius',
      MeasurementUnits: 'Unità di Misura',
      Metric: 'Metrico',
      CalendarSettings: 'Impostazioni del Calendario:',
      FirstDay: 'Primo Giorno della Settimana',
      languages: [
        {key: 0, label: 'Inglese'},
        {key: 0, label: 'Thai'},
        {key: 0, label: 'Francese'},
        {key: 0, label: 'Ebraico'},
        {key: 0, label: 'Indù'},
        {key: 0, label: 'Spagnolo'},
        {key: 0, label: 'Tedesco'},
        {key: 0, label: 'Italiano'},
      ],
      firstdays: [
        {key: 0, label: 'Domenica'},
        {key: 1, label: 'Lunedì'},
      ],
      tempertureUnits: [
        {key: 0, label: 'Celsius'},
        {key: 1, label: 'Fahrenheit'},
      ],
    },
  },
  guides: {
    faq: {
      top20faq: [
        {
          question:
            'Quali sono i requisiti di base per coltivare la marijuana in casa?',
          answer:
            "Spazio adeguato, ventilazione corretta e accesso all'elettricità sono ovviamente fondamentali. Contenitori per le piante, mezzi di coltivazione come terra, fibra di cocco, lana di roccia. Una fonte di luce adeguata è fondamentale, che sia naturale o artificiale è discrezionale. Una soluzione nutritiva adatta alle piante di marijuana. Un kit per il controllo del pH. Strumenti per il monitoraggio della temperatura e dell'umidità.",
          keyPoints: [
            'Spazio adeguato',
            'Ventilazione corretta',
            "Accesso all'elettricità",
            'Contenitori per le piante',
            'Mezzi di coltivazione',
          ],
          moreinfo: '',
        },
        {
          question:
            'Come posso allestire una stanza per coltivare la marijuana al chiuso?',
          answer:
            "Scegli una posizione adatta con abbastanza spazio e un buon accesso all'elettricità. Configura un sistema adeguato di ventilazione e circolazione dell'aria. Assicura una temperatura e un'umidità costanti. Installa luci di crescita a altezze e angoli appropriati. Organizza le piante in un layout organizzato per un facile accesso e manutenzione.",
          keyPoints: [
            'Posizione adatta',
            'Fornitura affidabile di elettricità',
          ],
          moreinfo: '',
        },
        {
          question:
            'Che tipo di luci dovrei usare per coltivare la marijuana al chiuso?',
          answer:
            'Luci ad alta intensità di scarica (HID) come HPS (sodio ad alta pressione) o MH (metal halide). Luci di crescita a LED (diodi emettitori di luce). Luci fluorescenti (T5, CFL) per piantine e crescita vegetativa. Tuttavia, a causa del consumo energetico e dei progressi tecnologici, i LED sono sufficienti per una coltivazione efficace nei luoghi dove le lampade HPS non sono facilmente disponibili.',
          keyPoints: ['Dipendente dal paese', 'HPS/Metal Halide o un LED'],
          moreinfo: '',
        },
        {
          question:
            'Qual è il miglior mix di terreno per coltivare la marijuana?',
          answer:
            "Terreno ben drenante con un mix bilanciato di nutrienti. Miscele di terreno organico con e arigate come perlite o vermiculite per l'aerazione (almeno 40%-60%). Terreno pH-bilanciato intorno a 6.0-6.5 per un'ottimale assunzione di nutrienti.",
          keyPoints: ['Drenaggio veloce', 'Contenente aggregati'],
          moreinfo: '',
        },
        {
          question:
            'Quanto spesso dovrei annaffiare le mie piante di marijuana?',
          answer:
            "L'irrigazione quando il primo pollice di terra si sente asciutto è lo standard d'oro. Evitare l'irrigazione eccessiva. Regolare la frequenza dell'irrigazione in base alla dimensione della pianta, alla dimensione del contenitore e alle condizioni ambientali.",
          keyPoints: [
            'Tutte le volte che è pratico',
            'Permettere alla pianta di avere sete',
          ],
          moreinfo: '',
        },
        {
          question:
            'Di quali nutrienti hanno bisogno le piante di marijuana durante le diverse fasi di crescita?',
          answer:
            'Azoto (N), Fosforo (P) e Potassio (K) per la fioritura e lo sviluppo dei boccioli. Micronutrienti come calcio, magnesio e ferro per la salute generale.',
          keyPoints: ['Tutti loro'],
          moreinfo: '',
        },
        {
          question:
            'Come posso controllare i livelli di umidità nella mia stanza di crescita?',
          answer:
            "Usare un deumidificatore per ridurre i livelli di umidità se sono troppo alti. Aumentare la ventilazione e la circolazione dell'aria. Monitorare i livelli di umidità con un igrometro e regolare secondo necessità.",
          keyPoints: ['Deumidificatore', 'Defogliamento', 'Umidificatore'],
          moreinfo: '',
        },
        {
          question:
            "Qual è l'intervallo di temperatura ottimale per le piante di marijuana?",
          answer:
            '70-85°F (21-29°C) durante il giorno. 60-70°F (15-21°C) durante la notte.',
          moreinfo: '',
        },
        {
          question:
            'Come identificare e prevenire al meglio parassiti e malattie comuni nelle piante di marijuana?',
          answer:
            'Ispeziona regolarmente le piante per segni di parassiti come acari, afidi e mosche bianche. Usa pesticidi organici o chimici se necessario. Mantieni una corretta igiene nella stanza di coltivazione per prevenire la diffusione di malattie.',
          keyPoints: ['Ispezione regolare', 'Buona pulizia'],
          moreinfo: '',
        },
        {
          question:
            "Quando e come iniziare la potatura e l'allenamento delle mie piante di marijuana?",
          answer:
            "Potatura durante la fase vegetativa per rimuovere i rami inferiori e migliorare il flusso d'aria. Utilizzo corretto di tecniche come 'topping', 'FIMing' e LST (Low-Stress Training) per promuovere un profilo di pianta adatto alle esigenze del tuo ambiente.",
          keyPoints: ['Pianificazione preventiva'],
          moreinfo: '',
        },
        {
          question:
            'Quali sono i diversi metodi per germogliare semi di marijuana?',
          answer:
            "Metodo della carta assorbente. Piantatura diretta in un piccolo vaso con terra umida. Utilizzo di un vassoio per germogli con una cupola per l'umidità.",
          keyPoints: ['Carta assorbente', 'Piantatura diretta'],
          moreinfo: '',
        },
        {
          question:
            'Come posso determinare il sesso delle piante di marijuana e perché è importante?',
          answer:
            'Se si utilizzano semi regolari o ceppi e semi sconosciuti, assicurarsi sempre che i maschi non si mescolino con le femmine che si desidera far fiorire e che, una volta in fase di fioritura, tutti i maschi siano separati.',
          keyPoints: ['Ispezione regolare durante la fase di fioritura'],
          moreinfo: '',
        },
        {
          question:
            'Qual è il miglior modo per trapiantare le piante di marijuana?',
          answer:
            'Trapianta le piantine in vasi più grandi una volta che hanno superato i loro contenitori attuali. Manipola le radici con delicatezza per evitare danni. Annaffia le piante dopo il trapianto per ridurre lo stress. Una pianta ha superato il suo vaso una volta che la sua sete supera la tua capacità di annaffiare.',
          keyPoints: ['Pianta il vaso prima della pianta'],
          moreinfo: '',
        },
        {
          question:
            'Come posso sapere quando raccogliere le piante di marijuana?',
          answer:
            'Permetti alla tua pianta di finire, che è quando tutti i pistilli si sono stabiliti.',
          keyPoints: [
            'Nessun altro spazio per la crescita delle gemme',
            'Nessun altro pistillo bianco',
          ],
          moreinfo: '',
        },
        {
          question:
            'Quali sono i diversi metodi per essiccare e curare le gemme di marijuana?',
          answer:
            "Appendi le piante a testa in giù in una stanza buia e ben ventilata con umidità moderata. Taglia le gemme dopo l'essiccazione e mettile in barattoli ermetici per la cura. Aria regolarmente i barattoli per rilasciare l'eccesso di umidità e prevenire la formazione di muffa.",
          moreinfo: '',
        },
        {
          question:
            'Come posso massimizzare il rendimento delle mie piante di marijuana?',
          answer:
            'Fornisci condizioni di crescita ottimali inclusi luce, nutrienti e ambiente. Usa tecniche di allenamento per promuovere più siti di gemme e uniformità della chioma. Scegli ceppi ad alto rendimento adatti alla tua configurazione di crescita.',
          moreinfo: '',
        },
        {
          question:
            'Quali sono gli errori comuni da evitare durante la coltivazione della marijuana?',
          answer:
            "Annaffiare troppo o troppo poco. Ignorare i livelli di pH dell'acqua e del terreno. Sovraalimentare o sottoalimentare i nutrienti. Cattiva ventilazione che porta a problemi di muffa e parassiti. Non identificare correttamente e rimuovere le piante maschili durante la fase di fioritura.",
          moreinfo: '',
        },
        {
          question:
            'Come posso creare un sistema di ventilazione adeguato per la mia stanza di coltivazione?',
          answer:
            "Installa ventilatori di scarico per rimuovere l'aria stagnante e il calore. Usa ventilatori o prese d'aria per far entrare aria fresca. Considera l'uso di filtri al carbone per controllare gli odori.",
          moreinfo: '',
        },
        {
          question:
            'Quali sono le considerazioni legali per coltivare marijuana a casa?',
          answer:
            "Verifica le leggi e i regolamenti locali riguardanti la coltivazione della marijuana. Ottieni le autorizzazioni o le licenze necessarie se richieste. Assicurati di rispettare le restrizioni sulla quantità di piante, l'altezza e la posizione.",
          moreinfo: '',
        },
        {
          question:
            'Dove posso trovare informazioni e risorse affidabili per la coltivazione della marijuana?',
          answer:
            'Forum online e comunità dedicate alla coltivazione della cannabis. Libri e guide sulle tecniche di coltivazione della marijuana. Negozi locali di coltivazione e dispensari per consigli e forniture.',
          moreinfo: '',
        },
      ],
    },
    air: {
      HeaderText: 'Aria',
      Next: 'Umidità',
      p1: 'Il costante movimento dell aria è vitale in un giardino indoor che prospera. Le foglie utilizzano la brezza per pulirsi e scambiare gas, muffe e patogeni odiano l aria fresca in movimento e il saggio detto aria fresca è tua amica è vero in senso lato. La temperatura gioca un ruolo nel gestire gli organismi disponibili attraverso l aria fresca che viene costantemente riciclata nel sistema. Schermi e filtri sono consigliati in climi più caldi con più problemi di zanzare e mosche rispetto ai climi più freddi.',
      p2: 'Per calcolare il movimento dell aria in una stanza non sigillata, è necessario consentire che il flusso di entrata-uscita sia impostato per almeno una ricircolazione totale dell intera area dell ambiente (altezza x larghezza x lunghezza) per un ciclo di 3 minuti, questo dovrebbe essere abbinato a un opzione per far esplodere la stanza con fino a 3 ricircolazioni per un ciclo di 1 minuto. Questo ti consente di mantenere un livello di controllo in tutte le fasi, contenuti di umidità, parassiti, patogeni, insetti, muffe, umidità stagnante.',
    },
    checklist: {
      HeaderText: 'Elenco di controllo',
      Next: 'Pulizia',
      checklist: [
        {
          subHeader: 'Cose fondamentali della stanza di crescita:',
          list: [
            'Assortimento di vasi per piante di diverse dimensioni',
            'Mezzo di coltivazione',
            'Dispositivi per l irrigazione',
            'Deumidificatore',
            'Sistema di drenaggio',
            'Strumenti di base',
            'Telo in mylar/bianco e nero',
            'Addestramento delle piante',
            'Sistema di drenaggio',
          ],
          subList: {
            header: 'Opzionale:',
            list: [
              'Filtro al carbone con un ventilatore esterno',
              'Umidificatore',
              'Azoto',
            ],
          },
        },

        {
          subHeader: 'Prendere le talee:',
          list: [
            'Bisturi',
            'Forbici',
            'Ormoni per le radici',
            'Cubetti per le piante',
          ],
        },
        {
          subHeader: 'Miscelazione dei nutrienti:',
          list: [
            'Bicchieri graduati',
            'Beacker',
            'Etichette',
            'Cucchiai/Mescolatori',
          ],
        },
      ],
    },
    containers: {
      Containters: 'Contenitori',
      Next: 'Terreni',
      p1: 'La scelta del contenitore per il materiale radicale e la pianta sarà ultimamente decisa dal metodo di coltivazione scelto. Di seguito sono riportati alcuni dei contenitori disponibili conosciuti da noi, ogni stile avrà un avvertimento.',
      list1: [
        'Vasi ad aria:',
        'Vasi smart:',
        'Tappetino per vassoi (idroponica completa):',
        'Lana di roccia:',
        'Sistemi di vaso aeroponico:',
        'Guerrilla:',
        'Letti scavati:',
      ],
    },
    crops: {
      Next: 'Suggerimenti generali',
      HeaderText: 'Coltivazioni continue',
      p1: 'La preparazione è fondamentale per determinare i risultati della tua coltivazione attuale e, naturalmente, di qualsiasi futuro progetto in cui ci impegniamo. quindi, è consigliabile cercare chiarimenti sugli eventi futuri il più possibile in modo che pianifichiamo e pianifichiamo ancora e poi pianifichiamo di nuovo, dopotutto la pianificazione continua potremmo controllare la nostra pianificazione. Facciamo questo per massimizzare le nostre possibilità di assicurarci un successo di cui essere orgogliosi e che possiamo condividere sia commercialmente che privatamente.',
      p2: 'Avere la tua prossima linea di piante dietro quelle che stanno finendo può essere spaventoso e richiedere più spazio e pianificazione.',
    },
    cuttings: {
      HeaderText: 'Prendere le talee',
      p1: 'Una volta al giorno è necessario pulire il coperchio del vassoio dall eccesso di umidità causato sia dall umidità nel mezzo che dalla respirazione delle piante, in entrambi i casi l acqua deve essere eliminata regolarmente per evitare che si formino muffe o altri problemi.',
      p2: 'dopo 7 giorni potresti aver bisogno di annaffiare le talee con una soluzione d acqua con pH, le radici si mostreranno entro 4 giorni e questo assicurerà che tutte prosperino.',
      p3: 'Inizia tagliando la talea dal ramo, di solito l albero verrà completamente potato se è una pianta madre, altrimenti puoi essere più selettivo su dove scegli di tagliare, se tagli le piante che intendi fiorire presto.',
      p4: 'puoi raccogliere le talee per 5 minuti circa in un bicchiere d acqua se ne prendi molte contemporaneamente, taglia il ramo e mettilo nell acqua per evitare che l ossigeno entri nel gambo.',
      p5: 'Se le dimensioni delle talee devono essere mantenute uniformi (cosa buona), un tagliere di tale oggetto dove la lunghezza è pre-marcata e la pianta può essere offerta in modo da mantenere le talee alla stessa altezza.',
      p6: 'prendi la pianta e arrotolala delicatamente tenendo le foglie rimanenti e taglia le estremità di tutte le dita in modo che siano uniformi e il più possibile regolari.',
      p7: 'prendi di nuovo il bisturi e fai un taglio a 45 gradi all estremità del ramo per aumentare la superficie.',
      p8: 'immergi nell ormone per le radici, solo il necessario e profondo quanto il buco in cui inserirai la pianta.',
      p9: 'Una volta che il vassoio è riempito, spruzza il coperchio del vassoio, riafferma il coperchio e riponilo nell area di illuminazione corretta.',
      Next: 'Trapianti (rinvaso)',
    },
    general: {
      Next: 'Torna alla libreria',
      headetText: 'Suggerimenti generali',
      p1: 'La preparazione è fondamentale per determinare i risultati della tua coltivazione attuale e, naturalmente, di qualsiasi futuro progetto in cui ci impegniamo. Pertanto, è consigliabile cercare chiarimenti sugli eventi futuri il più possibile, in modo da pianificare e pianificare ancora e poi pianificare di nuovo. Dopo tutto, con la pianificazione continua potremmo controllare la nostra pianificazione. Facciamo questo per massimizzare le nostre possibilità di assicurarci un successo di cui essere orgogliosi e che possiamo condividere sia commercialmente che privatamente.',
      list: [],
    },
    housekeeping: {
      HouseKeeping: 'Pulizia',
      p1: 'Una buona pulizia è parte integrante di qualsiasi operazione progressiva di costruzione o agricoltura ed è considerata di massima importanza. Gli sversamenti devono essere gestiti prontamente senza scuse, con la giusta attitudine, la tua area di crescita sarà un obiettivo per molti parassiti e patogeni. I parassiti cercano cibo attraverso avanzi di cibo, polvere e fogliame delle piante, altri insetti cercano i parassiti che cercano le piante, più a lungo lasci le cose in merito alla pulizia, più ampio sarà il periodo che ti lasci per un evento sfortunato che si verifica nel tuo giardino indoor.',
      p2: 'Senza dubbio, una delle cose più facili e semplici che puoi fare per te stesso come coltivatore è mantenere pulite le tue aree di lavoro in ogni momento, richiede molto sforzo e a volte tanto tempo pulire quanto ci vuole per creare il disordine che hai causato in primo luogo.',
    },
    humidity: {
      HeaderText: 'Umidità',
      p1: "L'umidità è la quantità di acqua presente nell'aria attualmente in circolazione nella tua stanza, ha una sorgente e una bocca molto simile a un fiume tranne che non c'è un vero percorso da entrambi verso l'altro. L'aria è ambigua ma, come collettivo, può essere non solo sperimentata ma anche sentita e discussa da molti.",
      p2: 'Il Deficit di Pressione di Vapore verrà discusso ulteriormente e i grafici possono essere osservati. La temperatura e l umidità devono essere simbiotiche nel loro rapporto reciproco e devono avere più di una marcia. Con la notte più fresca mentre le piante dormono, l umidità può cambiare per riflettere anche le fluttuazioni di temperatura, questo consentirà la crescita più rapida possibile delle tue piante.',
      p3: 'Gli ambienti sigillati beneficeranno enormemente della deumidificazione, soprattutto perché rimuoverà l umidità dalla stanza prima di raggiungere il mini split dell unità di condizionamento dell aria.',
      p4: 'Gli ambienti non sigillati probabilmente richiederanno l uso di una stanza polmonare che tratterebbe l aria prima del suo passaggio attraverso il tuo giardino. Detto questo, un deumidificatore posto in un area dove non farebbe danni alle piante o alle temperature.',
      p5: 'Le condizioni umide alla fine appariranno più calde di quanto la temperatura consenta di credere, nei casi estremi osserverai la condensa che appare come temperature calde e più fresche hanno i loro effetti l una sull altra.',
      p6: 'Le condizioni secche saranno avvertite con le labbra che si seccano con una permanenza estesa e prolungata, le piante si seccano più velocemente di quanto la pianta assorbirà. consentirebbe di credere, nei casi estremi osserverai la condensa che appare come temperature calde e più fresche hanno i loro effetti l una sull altra.',
      p7: 'Se stai coltivando in un ambiente tropicale, soprattutto all interno di un area urbanizzata, avrai un umidità relativa elevata sulle piante esterne. Questo, sebbene sia benefico per una vasta gamma di vita sul pianeta, la cannabis e altre perenni non si comportano altrettanto bene in condizioni così rigide.',
      p8: 'Coltivare in climi più freddi può essere più benefico ma potrebbe anche richiedere un calendario di piantagione e un tempismo più rigidi per quanto riguarda le stagioni.',
      Next: 'Nutrienti',
    },
    library: {
      list: [
        {key: 'checklist', label: 'Checklist Iniziale'},
        {key: 'housekeeping', label: 'Pulizia'},
        {key: 'smell', label: 'Odore'},
        {key: 'strain', label: 'Varietà'},
        {key: 'container', label: 'Contenitori'},
        {key: 'medium', label: 'Terreni di Coltivazione'},
        {key: 'air', label: 'Circolazione dell Aria'},
        {key: 'air', label: 'Umidità'},
        {key: 'humidity', label: 'Nutrienti'},
        {key: 'nute', label: 'Fasi'},
        {key: 'phase', label: 'Irrigazione'},
        {key: 'cutting', label: 'Prendere Talee/Cloni'},
        {key: 'repots', label: 'Trapianto'},
        {key: 'pest', label: 'Parassiti'},
        {key: 'crops', label: 'Colture Rotazionali'},
        {key: 'general', label: 'Suggerimenti Generali'},
      ],
      TapMore: 'Tocca uno dei link qui sotto per leggere altro.',
      SubHeaderText:
        'Le informazioni contenute in questa libreria saranno più che sufficienti per iniziare il tuo viaggio, sicuro di te e consapevole in modo da poter affrontare gli ostacoli e le sfide che incontrerai (e lo farai!), e avere anche le competenze per superare questi problemi ai quali il tuo ambiente di crescita si troverà indubbiamente suscettibile.',
      HeaderText: 'La Libreria di BudDEE.',
    },
    light: {
      p1: 'La preparazione è fondamentale per determinare i risultati della tua coltivazione attuale e, naturalmente, di qualsiasi futuro progetto in cui ci impegniamo. Pertanto, è consigliabile cercare chiarimenti sugli eventi futuri il più possibile, in modo da pianificare e pianificare ancora e poi pianificare di nuovo. Dopo tutto, con la pianificazione continua potremmo controllare la nostra pianificazione. Facciamo questo per massimizzare le nostre possibilità di assicurarci un successo di cui essere orgogliosi e che possiamo condividere sia commercialmente che privatamente.',
      p2: 'Avere la tua prossima linea di piante dietro a quelle che stanno finendo può essere scoraggiante e richiedere più spazio e pianificazione.',
      HeaderText: 'Luci',
      Next: 'Circolazione dell Aria',
    },
    medium: {
      HeaderTxt: 'Terreni di Coltivazione',
      p1: 'La scelta del terreno di coltura è molto simile a quella della selezione dei contenitori in quanto sarà ultimamente decisa dal metodo di coltivazione scelto, sia idroponico, aeroponico, con terra/cocco, indoor/outdoor.',
      Next: 'Luci',
      list: [
        'Terra:',
        'Argilla:',
        'Cocco:',
        'Torba di Cocco:',
        'Idrotonico:',
        'Perlite:',
      ],
    },
    nute: {
      p1: 'BudDEE riconosce il grande lavoro di HydroBuddy, una risorsa preziosa nella creazione dei tuoi nutrienti solubili basati sull approvvigionamento locale di acqua, ovunque tu abbia accesso.',
      p2: 'Il valore EC per le piante in fase vegetativa può essere compreso tra 0,8 e 1,1, con ppm non superiore a 700, concentrazioni inferiori sono richieste per i neonati e normalmente l acqua portata al pH corretto sarà sufficiente.',
      p3: 'Il pH della soluzione nutritiva varierà tra 5,8 e 6,5. Le piante assorbono la maggior parte dei nutrienti dalla soluzione alla concentrazione di atomi di idrogeno. Il pH è influenzato dalla temperatura e nell acqua a temperature più basse è presente leggermente più ossigeno.',
      p4: 'I nutrienti sono un termine confuso, la vita ha bisogno di nutrimento/nutrienti.',
      p5: 'I prodotti di marca sono un settore fiorente nei mercati globali e ci sono un gran numero di prodotti tra cui scegliere per iniziare i tuoi viaggi di crescita.',
      p6: 'BudDEE raccomanda House and Garden, Dutch Pro, Bio Buzz per citarne alcuni.',
      p7: 'Molte pseudo-scienze hanno preso piede nella coltivazione della cannabis, soprattutto perché in molti paesi del suo stato naturale, viene fatto molto poco e la natura provvede sempre. Tuttavia, nei paesi in cui la legalità di fare qualcosa potrebbe essere stata dubbia per molti anni (continuando ad esserlo anche oggi forse).',
      p8: 'Mescolare i tuoi nutrienti usando sali fertilizzanti sarà il modo più economico e istruttivo per capire la semplicità che la coltivazione della cannabis ha raggiunto ai giorni nostri.',
      HeaderText: 'Nutrienti',
      Next: 'Fasi',
    },
    pest: {
      HeaderText: 'Parassiti e Patogeni',
      Next: 'Colture Rotazionali',
      p1: 'Sconsigliamo l uso di sostanze chimiche dannose come gli insetticidi, sempre che possibile.',
      p2: 'Consigliamo di disinfestare accuratamente qualsiasi grande operazione di coltivazione tra un ciclo e l altro e di pulire frequentemente tutto ciò che è legato all integrità operativa.',
      p3: 'I ragni rossi sono un vero problema, non lasciamo che il problema si aggravi se lo vediamo. Sono aracnidi e amano il vento non più o meno delle tue piante e possono persino usarlo come corrente di movimento, quindi una volta che ne hai alcuni, non passerà molto tempo prima che ne abbiano molti altri.',
      p4: 'La muffa polverosa significa che hai bisogno di uno o più deumidificatori in qualche momento nelle vicinanze, o un serio problema di umidità e stagnazione.',
    },
    phases: {
      HeaderText: 'Fasi',
      Next: 'Irrigazione',
      p1: 'La modalità vegetativa può consistere in ore di luce che vanno da 14 a 24.',
      p2: 'La modalità di fioritura può consistere in ore di luce che vanno da 12 a 13.',
      p3: 'Ci vogliono circa tra 10 e 14 giorni affinché l ormone della crescita cambi e inizi la fioritura. In questo periodo, la pianta aumenterà la sua velocità di crescita in preparazione per i boccioli che la precipiteranno.',
      p4: 'Mentre una pianta è in fiore, se dovesse sorgere la necessità di ritornare a uno stato vegetativo, deve essere concessa del tempo affinché la pianta non solo ristabilisca i livelli ormonali corrispondenti all azione richiesta, ma si purghi anche dei restanti ormoni. Ciò significherebbe potare qualsiasi attività di fioritura dalla pianta per consentire una rapida transizione. I tagli prelevati da piante in fiore riceveranno anche una crescita più lenta. La dimensione è una metrica interessante quando si confronta questa e quella coltura.',
    },
    repots: {
      HeaderText: 'Trapianto (cambiare vaso)',
      Next: 'Parassiti e Patogeni',
      p1: 'Ripiantiamo sempre le nostre piante prima che diventino troppo voraci nel loro ambiente e l irrigazione diventi un problema.',
    },
    smell: {
      HeaderText: 'Odore',
      Next: 'Selezione delle Varietà',
      p1: 'Molte persone non possono o semplicemente non riescono ad apprezzare l odore creato dalla cannabis fresca, né quella essiccata, né quella fumata. Per chi è preoccupato, può essere un motivo finanziario o più personalmente coinvolto, dove tu, amici o familiari, potresti essere abituati.',
      p2: 'Questa intolleranza comprensibile della società ha creato la necessità di nascondere gli odori al pubblico in generale, questo serve anche come misura preventiva per i giardini urbani che potrebbero temere il sequestro di merci o attrezzature da parte della polizia o dei ladri.',
      p3: 'Dovrai filtrare l aria, in una quantità sufficientemente ragionevole in modo che le particelle responsabili dell emissione dell odore vengano rimosse dalla stanza attraverso il carbone attivo (carbone), eliminando così l odore ed espellendo l aria di scarico. Il filtro dovrà essere calibrato con le condizioni della stanza (dimensioni, temperatura, umidità) e avere una dimensione adeguata poiché creerà un effetto di soffocamento sul tuo scarico di uscita se non stai utilizzando un ambiente sigillato.',
      p4: 'Se ti ritrovi abbastanza fortunato, nel senso che il tuo ambiente non solleva alcuna preoccupazione o non ha problemi nel essere rilevato o è abbastanza remoto, allora la filtrazione del carbone non è necessaria per un raccolto ottimale. Se sei magari a corto di budget e puoi tollerare l aroma, puoi farne a meno.',
    },
    strain: {
      HeaderText: 'Selezione delle Varietà',
      Next: 'Contenitori',
      p1: 'La cannabis dal miglior sapore e la più forte sarà sempre quella che è stata finita correttamente, permessa di crescere senza contaminazioni, comprese persino le impronte digitali. Le migliori gemme di cannabis sono state essiccate dal punto di raccolta in modo coerente in un ambiente pulito e affidabile, appese fino a quando il contenuto di umidità è in equilibrio ottimale con i suoi composti organici. Questo fiore di cannabis durerà più a lungo di altre forme con una sorprendente durata.',
      p2: 'La bellezza è negli occhi di chi guarda, questo è anche molto vero nel determinare cosa è meglio di un altro, dato il numero di prospettive diverse che esistono globalmente sul mercato della marijuana, illecito e legale.',
      p3: 'Coltivare sativa in climi tropicali in abitazioni urbane con alta umidità e 12/12 costanti giorno e notte avrà una migliore possibilità di sopravvivenza senza aiuti, rispetto ai loro omologhi indica, corti, tozzi, sudati e condensati.',
      p4: 'Le configurazioni indoor consentiranno un certo grado di libertà nella selezione delle varietà. lo spazio tra il dato e la luce è il fattore di governo definitivo.',
      p5: 'Dal punto di vista finanziario, è spesso meglio seguire il flusso e puntare a ottenere il meglio o ciò che hai localmente.',
    },
    watering: {
      HeaderText: 'Irrigazione',
      Next: 'Prendere Talee',
      p1: 'Il completo svuotamento del contenitore incoraggerà ulteriormente la diffusione delle radici',
      p2: 'L irrigazione manuale è faticosa e sicuramente beneficerà dalla pianificazione anticipata della posizione delle tue piante in modo da poter comunque raggiungere quelle che potrebbero essere situate all interno di un gruppo o cluster di piante',
      p3: 'Il Cocco richiederà un irrigazione più regolare rispetto al terreno e richiederà anche che il substrato sia completamente sciacquato da almeno una goccia di acqua in deflusso, anche se il 20% è la raccomandazione, questo numero è uno spreco e più sforzo per pulire o rimuovere in seguito.',
      p4: 'Il terreno avrà e sarà composto di se stesso e richiederà almeno una certa percentuale di umidità tra un irrigazione e l altra.',
    },
  },
  database: {core: {}, actions: {}, options: {}, validation: {}},
  navigation: {nav_stack: {}, bottomTab: {Save: 'Salva', Next: 'Avanti'}},
};