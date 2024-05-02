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
export const gn = {
  core: {
    Next: 'Weiter - ',
    headers: {
      bottomToolBar: {
        Home: 'Startseite',
        Plants: 'Pflanzen',
        Environments: 'Umgebungen',
        Settings: 'Einstellungen',
        Back: 'Zurück',
        Next: 'Weiter',
        Save: 'Speichern',
        SAVE: 'SPEICHERN',
      },
    },
    loading: {
      disclaimer: {
        DisplayPage: 'Seite angezeigt in',
        NotOlder: 'Nicht älter als 20?',
        Request:
          'Wir bei Buddee benötigen, dass Sie die gesetzlichen Altersanforderungen Ihrer Region erfüllen, um die Informationen in dieser App anzeigen zu können.',
        DisclaimerText:
          'Bitte bestätigen Sie zunächst, dass Sie älter als 20 Jahre sind und auch damit einverstanden sind,',
        TermsLink: 'Nutzungsbedingungen',
        AcceptText: 'Akzeptieren',
        DeclineText: 'Ablehnen',
        languages: [
          {key: 0, label: 'Englisch'},
          {key: 1, label: 'Thailändisch'},
        ],
        DefaultLanguage: 'Englisch',
      },
      loadingIndicator: {Loading: 'Wird geladen'},
    },
    errors: {},
  },
  home: {
    journal: {Heading: 'Journal', Nothing: 'Nichts für heute'},
    toolbox: {
      HeaderText: 'Werkzeugkasten',
      New: 'Neu',
      Action: 'Aktion',
      Plants: 'Pflanzen',
      Environment: 'Umwelt',
      More: 'Mehr',
      Tools: 'Werkzeuge',
    },
    calender: {name: 'de'},
  },
  plants: {
    create_env: {
      placeholder: {
        EnvironmentName: 'Umweltnamen eingeben',
        Select: 'Typ auswählen',
      },
      HeaderMessage: 'Umgebung erstellen',
      lightTypeData: [
        {key: 0, label: 'Licht emittierende Diode (LED)'},
        {key: 1, label: 'Kompaktleuchtstofflampe (CFL)'},
        {key: 2, label: 'Hochdruck-Natrium (HPS)'},
        {key: 3, label: 'Metallhalogenid'},
        {key: 4, label: 'LEC'},
        {key: 5, label: 'T5'},
      ],
    },
    selectEnv: {Choose: 'Wählen Sie Ihre Umgebung'},
    addPlant: {
      beginningsData: [
        {key: 0, label: 'Samen'},
        {key: 1, label: 'Klon oder Schneiden'},
      ],
      mediumData: [
        {key: 0, label: 'Kokosnuss'},
        {key: 1, label: 'Boden'},
        {key: 2, label: 'Steinwolle'},
      ],
      placeholder: {
        Select: 'Bitte auswählen',
        PleaseChoose: 'Bitte wählen Sie eine Sorte',
        Days: 'Tage',
        SelectMedium: 'Medium auswählen',
      },
      CreateNew: 'Neue Sorte erstellen',
      PlantBegan: 'Pflanze begann als:',
      Strain: 'Sorte:',
      Create: 'Pflanzen erstellen',
      ChooseStage: 'Aktuelle Stufe wählen:',
      Vegetative: 'Vegetativ',
      Flowering: 'Blüte',
      Hanging: 'Aufhängen',
      VegState: 'Vegetativer Zustand:',
      BeganOn: 'Lebensbeginn am:',
      VegTime: 'Vegetationszeit:',
      PleaseSelect: 'Bitte auswählen',
      AmountPlants: 'Anzahl der Pflanzen:',
      Medium: 'Medium:',
      BloomingState: 'Blühzustand:',
      LightsChanged: 'Lichter gewechselt am:',
      DryState: 'Trockenzustand:',
      LightsOut: 'Lichter aus am:',
      FlowerTime: 'Blütezeit:',
    },
    plants: {
      NoPlants: 'Ups, keine Pflanzen gefunden.',
      TapHere: 'Tippen Sie hier, um eine hinzuzufügen.',
    },
  },
  settings: {
    moreTools: {
      HeaderText: 'Startsteuerungen:',
      NewEnvironment: 'Neue Umgebung',
      NewPlant: 'Neue Pflanze',
      NewAction: 'Neue Aktion',
      MoreTools: 'Weitere Werkzeuge:',
      Calculators: 'Rechner',
      Charts: 'Diagramme',
      Guides: 'Anleitungen:',
      Faq: 'FAQ',
      Library: 'Bibliothek',
    },
    settings: {
      HeaderText: 'Datenbankeinstellungen:',
      EraseAllData: 'Alle Daten löschen',
      GeneralSettings: 'Allgemeine Einstellungen:',
      Language: 'Sprache',
      English: 'Englisch',
      Theme: 'Design',
      DarkMode: 'Dunkelmodus',
      LightMode: 'Hellmodus',
      TemperatureUnits: 'Temperatureinheiten',
      Celsius: 'Celsius',
      MeasurementUnits: 'Maßeinheiten',
      Metric: 'Metrisch',
      CalendarSettings: 'Kalendereinstellungen:',
      FirstDay: 'Erster Tag der Woche',
      modes: [
        {key: 0, label: 'Hellmodus'},
        {key: 1, label: 'Dunkelmodus'},
      ],
      languages: [
        {key: 0, label: 'Englisch'},
        {key: 1, label: 'Thailändisch'},
        {key: 2, label: 'Französisch'},
        {key: 3, label: 'Hebräisch'},
        {key: 4, label: 'Hindu'},
        {key: 5, label: 'Spanisch'},
        {key: 6, label: 'Deutsch'},
        {key: 7, label: 'Italienisch'},
      ],
      firstdays: [
        {key: 0, label: 'Sonntag'},
        {key: 1, label: 'Montag'},
      ],
      temperatureUnits: [
        {key: 0, label: 'Celsius'},
        {key: 1, label: 'Fahrenheit'},
      ],
    },
  },
  environments: {
    addEnv: {
      LightData: [
        {
          key: 0,
          label: 'Licht emittierende Diode (LED)',
        },
        {
          key: 1,
          label: 'Kompaktleuchtstofflampe (CFL)',
        },
        {
          key: 2,
          label: 'Hochdruck-Natriumdampflampe (HPS)',
        },
        {
          key: 3,
          label: 'Metallhalogenid',
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
      HeaderMessage: 'Neue Umgebung',
      Name: 'Name eingeben',
      ActionLabel: 'SPEICHERN',
      RoomMeasurements: 'Raummaße:',
      OtherDetails: 'Andere Details:',
      Aircon: 'Klimaanlage',
      SealedRoom: 'Versiegelter Raum',
      Dehumidifier: 'Luftentfeuchter',
      placeholder: {
        Sealed: 'Versiegelter Raum',
        Dehumidifier: 'Luftentfeuchter',
        Aircon: 'Klimaanlage',
        Resting: 'Ruhe-Temperatur (C)',
        Length: 'Länge (m)',
        Width: 'Breite (m)',
        Height: 'Höhe (m)',
        Quantity: 'Menge',
        Watts: 'Watts',
        Name: 'Umgebungsnamen eingeben',
        Light: 'Typ auswählen',
      },
      lights: 'Lichter:',
    },
    environments: {
      NoEnv: 'Oops, keine Umgebungen gefunden.',
      TapHere: 'Tippen Sie hier, um eine hinzuzufügen.',
    },
  },
  guides: {
    air: {
      HeaderText: 'Luft',
      Next: 'Luftfeuchtigkeit',
      p1: 'Die ständige Bewegung der Luft ist in einem blühenden Indoor-Garten unerlässlich. Die Blätter nutzen die Brise, um sich zu reinigen und Gase auszutauschen. Schimmel und Pathogene mögen keine bewegte Frischluft, und die kluge Redensart besagt, dass frische Luft dein Freund ist. Dies trifft in den meisten Fällen zu, da die Temperatur eine Rolle bei der Verwaltung der Organismen spielt, die durch ständig zirkulierende Frischluft verfügbar sind. Bildschirme und Filter sind ratsam, wenn es in heißeren Klimazonen mit mehr Mücken- und Fliegenproblemen als in kälteren Klimazonen verwendet wird.',
      p2: 'Um die Luftbewegung in einem unversiegelten Raum zu berechnen, sollten Sie Ihre Einlass-Auslass-Einstellungen für mindestens eine vollständige Umluft des gesamten Raumvolumens (Höhe x Breite x Länge) pro 3-Minuten-Zyklus einstellen. Dies sollte mit der Option gekoppelt sein, den Raum mit bis zu 3 Umläufen pro 1-Minuten-Zyklus zu durchfluten. Dies ermöglicht es Ihnen, eine Kontrolle über eine Reihe von Phasen, Feuchtigkeitsgehalten, Parasiten, Pathogenen, Schädlingen, Schimmel, Mehltau und Stagnation aufrechtzuerhalten.',
    },
    checklist: {
      HeaderText: 'Checklisten',
      Next: 'Haushaltsführung',
      checklist: [
        {
          subHeader: 'Grundlagen des Anbauzimmers:',
          list: [
            'Sortiment verschiedener Pflanzentöpfe',
            'Medium',
            'Gießgeräte',
            'Luftentfeuchter',
            'Entwässerungssystem',
            'Grundwerkzeuge',
            'Mylar-Folie/Schwarz-Weiß',
            'Pflanzentraining',
          ],
          subList: {
            header: 'Optional:',
            list: [
              'Kohlefilter mit einem Inline-Ventilator',
              'Luftbefeuchter',
              'Stickstoff',
            ],
          },
        },
        {
          subHeader: 'Stecklinge nehmen:',
          list: ['Skalpelle', 'Schere', 'Wurzelhormon', 'Pflanzwürfel'],
        },
        {
          subHeader: 'Nährstoffe mischen:',
          list: ['Kannen', 'Becher', 'Etiketten', 'Löffel/Schöpflöffel/Mixer'],
        },
      ],
    },
    containers: {
      Containters: 'Behälter',
      Next: 'Medien',
      p1: 'Die Wahl des Behälters für das Wurzelwerk und die Pflanze wird letztendlich von Ihrer gewählten Anbaumethode bestimmt. Nachfolgend sind einige von uns bekannte verfügbare Behältertypen aufgeführt, von denen jeder Stil jedoch einen Vorbehalt hat.',
      list1: [
        'Airpots:',
        'Smart Töpfe:',
        'Tablettmatte (vollständige Hydrokultur):',
        'Steinwolle:',
        'Aeroponic Pot Systeme:',
        'Guerilla:',
        'Ausgegrabene Beete:',
      ],
    },
    crops: {
      Next: 'Allgemeine Tipps',
      HeaderText: 'Kontinuierliche Ernten',
      p1: 'Die Vorbereitung ist der Schlüssel zur Bestimmung Ihrer Ergebnisse mit Ihrem aktuellen Anbau und natürlich auch bei zukünftigen Unternehmungen, an denen wir uns beteiligen. Daher ist es ratsam, dass wir so viel wie möglich Klarheit über zukünftige Ereignisse suchen, indem wir so viel wie möglich planen und dann noch mehr planen und dann noch einmal planen, nach all dem fortwährenden Planen könnten wir unseren Plan überprüfen. Wir tun dies, um unsere Chancen zu maximieren, einen Erfolg zu erzielen, auf den wir stolz sein können und den wir sowohl kommerziell als auch privat teilen können.',
      p2: 'Wenn Ihre nächsten Pflanzen hinter denen liegen, die fertig sind, kann dies einschüchternd sein und erfordert auch mehr Platz und Planung.',
    },
    cuttings: {
      HeaderText: 'Stecklinge nehmen',
      p1: 'Einmal am Tag müssen Sie den Tablettdeckel von überschüssiger Feuchtigkeit befreien, die durch die Feuchtigkeit im Medium oder das Atmen der Pflanzen verursacht wird. So oder so muss das Wasser regelmäßig entfernt werden, um Schimmel oder andere Probleme zu vermeiden.',
      p2: 'Nach 7 Tagen müssen Sie möglicherweise die Stecklinge mit einer pH-ausgeglichenen Wassermischung gießen, die Wurzeln werden sich innerhalb von 4 Tagen zeigen, und dies wird sicherstellen, dass sie alle gedeihen.',
      p3: 'Beginnen Sie damit, den beabsichtigten Steckling vom Baum abzuschneiden. Normalerweise wird der Baum vollständig beschnitten, wenn es sich um eine Mutterpflanze handelt, andernfalls können Sie wählerischer sein, wo Sie schneiden möchten, wenn Sie von Pflanzen schneiden, die Sie kurzzeitig blühen lassen möchten.',
      p4: 'Sie können Stecklinge etwa 5 Minuten lang in einem Glas Wasser sammeln, wenn Sie viele auf einmal nehmen. Schneiden Sie den Ast ab und legen Sie ihn ins Wasser, um zu verhindern, dass Sauerstoff in den Stiel gelangt.',
      p5: 'Wenn die Größe der Stecklinge einheitlich sein soll (was eine gute Praxis ist), sollte ein Schneidebrett oder ein ähnlicher Gegenstand verwendet werden, bei dem die Länge vorab markiert ist und die Pflanze angeboten werden kann, um die Stecklinge auf derselben Höhe zu halten.',
      p6: 'Nehmen Sie die Pflanze und rollen Sie sie vorsichtig zusammen, wobei Sie die übrig gebliebenen Blätter halten, und schneiden Sie die Enden aller Finger ab, damit sie gleichmäßig und so gleichmäßig wie möglich sind.',
      p7: 'Nehmen Sie das Skalpell erneut und machen Sie einen 45-Grad-Schnitt an das Ende des Zweigs, um die Oberfläche zu vergrößern.',
      p8: 'Tauchen Sie in das Wurzelhormon ein, nur so tief wie das Loch, in das Sie die Pflanze einsetzen werden.',
      p9: 'Sobald das Tablett gefüllt ist, besprühen Sie den Deckel des Tabletts, bestätigen Sie den Deckel erneut und verstauen Sie ihn an der richtigen Beleuchtungsstelle.',
      Next: 'Umpflanzen (Umtopfen)',
    },
    general: {
      Next: 'Zurück zur Bibliothek',
      headetText: 'Allgemeine Tipps',
      p1: 'Vorbereitung ist der Schlüssel, um Ihre Ergebnisse bei Ihrem aktuellen Anbau und natürlich auch bei zukünftigen Unternehmungen zu bestimmen, an denen wir uns beteiligen. Daher ist es ratsam, dass wir uns so viel Klarheit über zukünftige Ereignisse verschaffen, wie möglich, indem wir so viel wie möglich planen und dann noch mehr planen und dann noch einmal planen. Schließlich könnten wir unsere Planung überprüfen. Wir tun dies, um unsere Chancen auf einen Erfolg zu maximieren, auf den wir stolz sein können und den wir sowohl kommerziell als auch privat teilen können.',
      list: [],
    },
    housekeeping: {
      HouseKeeping: 'Haushaltsführung',
      p1: 'Gute Haushaltsführung ist ein integraler Bestandteil jeder fortschrittlichen Baustelle oder Betriebsabwicklung und wird als äußerst wichtig angesehen. Verschüttungen müssen umgehend und ohne Ausrede behandelt werden. Mit der richtigen Einstellung wird Ihre Anbaufläche zu einem Ziel vieler Schädlinge und Pathogene. Schädlinge suchen nach Nahrung durch Essensreste, Staub und Pflanzenblätter, andere Insekten suchen die Pflanzen, die wiederum die Schädlinge suchen. Je länger Sie Dinge in Bezug auf die Haushaltsführung vernachlässigen, desto größer wird das Zeitfenster, das Sie für ein unglückliches Ereignis offen lassen, das sich in Ihrem Indoor-Garten ereignen könnte.',
      p2: 'Eine der einfachsten und einfachsten Maßnahmen, die Sie als Züchter für sich selbst ergreifen können, ist es, Ihre Arbeitsbereiche jederzeit sauber zu halten. Es erfordert viel Aufwand und manchmal genauso viel Zeit, den aufgeräumten Zustand zu erhalten, wie es dauert, das Durcheinander zu beseitigen, das Sie zuerst verursacht haben.',
    },
    humidity: {
      HeaderText: 'Luftfeuchtigkeit',
      p1: 'Luftfeuchtigkeit ist die Menge an Wasser, die sich derzeit in der Luft in Ihrem Raum befindet, und sie hat eine Quelle und einen Mund ganz ähnlich wie ein Fluss, nur dass es keinen wahren Weg von einem zum anderen gibt. Luft ist unbestimmt, aber als Kollektiv kann sie nicht nur erlebt, sondern auch von vielen gefühlt und diskutiert werden.',
      p2: 'Der Dampfdruckdefizit wird weiter unten diskutiert und die Diagramme können beobachtet werden. Temperatur und Luftfeuchtigkeit müssen in ihrer Beziehung zueinander symbiotisch sein und mehr als einen Gang haben. In der Nacht, wenn es kühler ist und die Pflanzen schlafen, kann sich die Luftfeuchtigkeit ändern, um diese Temperaturschwankungen widerzuspiegeln. Dies ermöglicht das schnellstmögliche Wachstum Ihrer Pflanzen.',
      p3: 'Versiegelte Umgebungen profitieren sehr von der Entfeuchtung, insbesondere insofern, als sie die Feuchtigkeit aus dem Raum entfernt, bevor sie auf die Mini-Split-Klimaanlage trifft.',
      p4: 'Unversiegelte Umgebungen würden höchstwahrscheinlich die Verwendung eines "Lungenraums" erfordern, der die Luft vor ihrem Weg durch Ihren Garten behandelt. Abgesehen davon sollte ein Luftentfeuchter an einem Ort platziert werden, an dem er keinen Schaden anrichten kann, weder an Pflanzen noch an Temperaturen.',
      p5: 'Feuchte Bedingungen werden letztendlich heißer erscheinen als die Temperatur, die es Ihnen erlauben würde, zu glauben. In extremen Fällen werden Sie Kondensation als Folge der Wechselwirkung zwischen warmen und kühleren Temperaturen beobachten.',
      p6: 'Trockene Bedingungen werden durch das Austrocknen der Lippen über einen längeren Zeitraum hinweg und eine schnellere Austrocknung der Pflanzen als das, was die Pflanze aufnehmen würde, erlebt.',
      p7: 'Wenn Sie in einer tropischen Umgebung anbauen, insbesondere in einem bebauten Gebiet, werden Sie eine hohe relative Luftfeuchtigkeit bei Ihren Außenpflanzen erleben. Während dies für eine Vielzahl von Lebewesen auf dem Planeten vorteilhaft ist, gedeihen Cannabis und andere Stauden nicht so gut in solch harten Bedingungen.',
      p8: 'Das Anbauen in kälteren Klimazonen kann vorteilhafter sein, erfordert jedoch möglicherweise einen strengeren Pflanzzeitplan und eine genauere Abstimmung auf die Jahreszeiten.',
      Next: 'Nährstoffe',
    },
    library: {
      list: [
        {key: 'checklist', label: 'Start-Checkliste'},
        {key: 'housekeeping', label: 'Haushaltsführung'},
        {key: 'smell', label: 'Geruch'},
        {key: 'strain', label: 'Sorten'},
        {key: 'container', label: 'Behälter'},
        {key: 'medium', label: 'Substrate'},
        {key: 'air', label: 'Luftzirkulation'},
        {key: 'air', label: 'Luftfeuchtigkeit'},
        {key: 'humidity', label: 'Nährstoffe'},
        {key: 'nute', label: 'Phasen'},
        {key: 'phase', label: 'Bewässerung'},
        {key: 'cutting', label: 'Stecklinge nehmen/Klone'},
        {key: 'repots', label: 'Umtopfen'},
        {key: 'pest', label: 'Schädlinge'},
        {key: 'crops', label: 'Rotationskulturen'},
        {key: 'general', label: 'Allgemeine Tipps'},
      ],
      TapMore: 'Tippen Sie auf einen der folgenden Links, um mehr zu lesen.',
      SubHeaderText:
        'Die Informationen in dieser Bibliothek werden mehr als ausreichend sein, um Sie auf Ihrem Weg zu beginnen, selbstbewusst und aufmerksam, so dass Sie, wenn Sie auf Hindernisse und Herausforderungen stoßen (und das werden Sie!), auch über die Fähigkeiten verfügen, diese Probleme zu überwinden, denen sich Ihre Anbauumgebung zweifellos ausgesetzt sehen wird.',
      HeaderText: 'Die BudDEE-Bibliothek.',
    },
    light: {
      p1: 'Vorbereitung ist der Schlüssel, um Ihre Ergebnisse bei Ihrem aktuellen Anbau und natürlich auch bei zukünftigen Unternehmungen zu bestimmen, an denen wir uns beteiligen. Daher ist es ratsam, dass wir uns so viel Klarheit über zukünftige Ereignisse verschaffen, wie möglich, indem wir so viel wie möglich planen und dann noch mehr planen und dann noch einmal planen. Schließlich könnten wir unsere Planung überprüfen. Wir tun dies, um unsere Chancen auf einen Erfolg zu maximieren, auf den wir stolz sein können und den wir sowohl kommerziell als auch privat teilen können.',
      p2: 'Eine weitere Pflanzenreihe hinter denjenigen, die gerade enden, zu haben, kann entmutigend sein und auch mehr Platz und Planung erfordern.',
      HeaderText: 'Beleuchtung',
      Next: 'Luftzirkulation',
    },
    medium: {
      HeaderTxt: 'Substrate',
      p1: 'Die Wahl des Substrats ähnelt sehr der Auswahl des Behälters, da sie letztendlich von Ihrer gewählten Anbaumethode abhängt, entweder Hydro, Aero, mit Erde/Coco, drinnen/draußen.',
      Next: 'Beleuchtung',
      list: [
        'Erde:',
        'Ton:',
        'Kokosfaser:',
        'Kokosfasern:',
        'Hydroton:',
        'Perlit:',
      ],
    },
    nute: {
      p1: 'Buddee erkennt die großartige Arbeit von HydroBuddy an, ein wertvolles Werkzeug zur Herstellung Ihrer eigenen löslichen Nährstoffe basierend auf der lokalen Wasserversorgung, unabhängig von der Wasserversorgung, auf die Sie Zugriff haben.',
      p2: 'Die EC für vegetative Pflanzen kann zwischen 0,8 und 1,1 liegen, wobei der PPM-Wert nicht über 700 liegen sollte. Für Sämlinge sind niedrigere Konzentrationen erforderlich, und normalerweise reicht es aus, das Wasser auf den richtigen pH-Wert einzustellen.',
      p3: 'Der pH-Wert der Nährlösung variiert zwischen 5,8 und 6,5. Die Pflanzen nehmen die meisten Nährstoffe aus der Lösung bei der Konzentration von Wasserstoffatomen auf. Der pH-Wert wird von der Temperatur beeinflusst, und bei kühleren Temperaturen ist etwas mehr Sauerstoff im Wasser vorhanden.',
      p4: 'Nährstoffe sind ein verwirrender Begriff, das Leben braucht sie (Nahrung/Nährstoffe).',
      p5: 'Markenprodukte sind ein florierendes Geschäft auf den globalen Märkten, und es gibt eine große Anzahl von Produkten, aus denen Sie Ihre Anbaureisen beginnen können.',
      p6: 'Buddee empfiehlt House & Garden, Dutch Pro, BioBizz, um nur einige zu nennen.',
      p7: 'Eine Menge Pseudowissenschaft hat vom Anbau von Cannabis Besitz ergriffen, insbesondere in den meisten Ländern seines natürlichen Zustands, wird sehr wenig getan, und die Natur sorgt jedes Mal. In Ländern, in denen die Rechtmäßigkeit einer solchen Handlung viele Jahre lang in Frage gestellt wurde (was auch heute noch der Fall sein könnte).',
      p8: 'Die Mischung Ihrer eigenen Nährstoffe mit Düngesalzen ist der billigste und lehrreichste Weg, um ein Verständnis für die Einfachheit zu erhalten, die der Cannabisanbau heute hat.',
      HeaderText: 'Nährstoffe',
      Next: 'Phasen',
    },
    pest: {
      HeaderText: 'Schädlinge und Pathogene',
      Next: 'Fortsetzung der Anbaukulturen',
      p1: 'Wir empfehlen, wenn möglich, auf den Einsatz von schädlichen Chemikalien wie Insektiziden zu verzichten.',
      p2: 'Wir würden empfehlen, zwischen den Durchläufen eine gründliche Entlausung jeder größeren Anbauoperation durchzuführen und alle und alles, was mit der betrieblichen Integrität zusammenhängt, häufig zu reinigen.',
      p3: 'Spinnmilben sind ein echtes Problem, wir lassen das Problem nicht eskalieren, wenn wir es sehen. Sie sind Spinnentiere und lieben den Wind genauso sehr oder wenig wie Ihre Pflanzen und können ihn sogar als Transportmittel für ihre Bewegungen nutzen, daher werden aus ein paar bald viele.',
      p4: 'Meißelförmiger Mehltau bedeutet, dass Sie irgendwann einen oder mehrere Luftentfeuchter in der Nähe benötigen oder ein ernsthaftes Feuchtigkeitsproblem und Stagnation haben.',
    },
    phases: {
      HeaderText: 'Phasen',
      Next: 'Bewässerung',
      p1: 'Die vegetative Phase kann Lichtstunden im Bereich von 14-24 umfassen.',
      p2: 'Die Blühphase kann Lichtstunden im Bereich von 12-13 umfassen.',
      p3: 'Es dauert ungefähr zwischen 10 und 14 Tagen, bis sich das Wachstumshormon ändert und die Blüte beginnt. In dieser Zeit wird die Pflanze ihre Wachstumsgeschwindigkeit erhöhen, um sich auf die Knospen vorzubereiten, die sich bilden werden.',
      p4: 'Während eine Pflanze blüht, sollte bei Bedarf Zeit eingeplant werden, um die Pflanze nicht nur dabei zu unterstützen, die Hormonspiegel wieder auf das für die gewünschte Aktion erforderliche Niveau zu bringen, sondern auch, um sich von den verbleibenden Hormonen zu reinigen. Dies bedeutet, dass jegliche Blumenaktivität von der Pflanze entfernt werden muss, um einen schnellen Übergang zu ermöglichen. Stecklinge, die von blühenden Pflanzen genommen wurden, erhalten ebenfalls eine langsamere Wachstumsrate. Die Größe ist ein interessantes Maß, wenn man dies und jenes vergleicht.',
    },
    repots: {
      HeaderText: 'Umtopfen',
      Next: 'Schädlinge & Pathogene',
      p1: 'Wir verpflanzen unsere Bestände immer, bevor sie in ihrer Umgebung zu gierig werden und das Gießen ein Problem wird.',
    },
    smell: {
      HeaderText: 'Geruch',
      Next: 'Sortenauswahl',
      p1: 'Die meisten Menschen können oder wollen den Geruch von frischem Cannabis, getrocknetem Cannabis oder gerauchtem Cannabis einfach nicht schätzen. Für die betroffene Partei kann es einen finanziell motivierten Grund oder einen persönlicheren Grund geben, weshalb Sie, Ihre Freunde oder Ihre Familie sich daran gewöhnen können.',
      p2: 'Diese verständliche Intoleranz der Gesellschaft hat die Notwendigkeit geschaffen, die damit verbundenen Gerüche vor der Öffentlichkeit zu verbergen. Dies dient auch als präventive Maßnahme für urbane Gärten, die möglicherweise Angst vor einer Beschlagnahme von Gütern oder Ausrüstungen durch die Polizei oder Diebe haben.',
      p3: 'Sie müssen die Luft filtern, eine ausreichende Menge, damit die Partikel, die für die Ausbreitung des Geruchs verantwortlich sind, durch Aktivkohle (Holzkohle) aus dem Raum gespült werden und den Auslassluftstrom verlassen. Der Filter muss mit den Raumbedingungen (Größe, Temperatur, Luftfeuchtigkeit) kalibriert werden und sollte ausreichend groß sein, da er sonst einen Erstickungseffekt auf Ihren Abluftausgang erzeugt, wenn keine abgedichtete Umgebung verwendet wird.',
      p4: 'Wenn Sie das Glück haben, dass Ihre Umgebung keine Bedenken hervorruft oder kein Problem damit hat, erkannt zu werden oder vielleicht abgelegen genug ist, ist eine Kohlenstofffiltration keine Voraussetzung für eine optimale Ernte. Wenn Sie vielleicht ein begrenztes Budget haben und den Duft tolerieren können, verzichten Sie darauf.',
    },
    strain: {
      HeaderText: 'Sortenauswahl',
      Next: 'Behälter',
      p1: 'Der am besten schmeckende und stärkste Cannabis wird immer derjenige sein, der korrekt abgeschlossen wurde, ohne Kontamination, einschließlich sogar Fingerabdrücke. Der beste Cannabis wird von dem Zeitpunkt der Ernte an in einer zuverlässigen, sauberen Umgebung konsistent getrocknet, bis der Feuchtigkeitsgehalt ein optimales Gleichgewicht mit seinen organischen Verbindungen erreicht. Diese Cannabisblume wird andere Formen mit einer beeindruckenden Haltbarkeit übertreffen.',
      p2: 'Schönheit liegt im Auge des Betrachters, und das gilt auch für die Bestimmung dessen, was besser ist als ein anderes, angesichts der Vielzahl unterschiedlicher Perspektiven, die weltweit auf dem Marihuana-Markt existieren, sei es illegal oder legal.',
      p3: 'Das Anbauen von Sativas in tropischen Klimazonen in städtischen Gebieten mit hoher Luftfeuchtigkeit und konstanten 12/12-Tagen und -Nächten hat eine bessere Überlebenschance als ihre kurzen, gedrungenen, buschigen, verschwitzten, kompakten Indica-Kollegen.',
      p4: 'Indoor-Einstellungen bieten eine gewisse Freiheit bei der Auswahl der Sorten. Der Abstand zwischen dem Ausgangspunkt und dem Licht ist der ultimative bestimmende Faktor.',
      p5: 'Aus finanzieller Sicht ist es oft am besten, sich mit dem Strom zu bewegen und das Beste aus dem zu machen, was Sie lokal haben.',
    },
    watering: {
      HeaderText: 'Bewässerung',
      Next: 'Stecklinge nehmen',
      p1: 'Eine vollständige Entleerung des Behälters fördert eine weitere Wurzelausbreitung.',
      p2: 'Die manuelle Bewässerung ist mühsam und profitiert definitiv davon, den Standort Ihrer Pflanzen im Voraus zu planen, damit Sie immer noch Pflanzen erreichen können, die möglicherweise in einer Gruppe oder Ansammlung von Pflanzen stehen.',
      p3: 'Coco benötigt eine regelmäßigere Bewässerung als Erde und erfordert auch, dass das Medium vollständig gespült wird, wobei mindestens ein Tropfen Wasser im Ablauf vorhanden ist, obwohl 20% empfohlen werden, diese Zahl ist eine Verschwendung und erfordert später mehr Aufwand zur Reinigung oder Entfernung.',
      p4: 'Erde wird aus sich selbst bestehen und erfordert zwischen den Bewässerungen zumindest eine gewisse Feuchtigkeitsmenge.',
    },
    faq: {
      top20faq: [
        {
          question:
            'Was sind die grundlegenden Anforderungen für den Indoor-Anbau von Marihuana?',
          answer:
            'Ausreichend Platz, ordnungsgemäße Belüftung und Zugang zu Strom sind natürlich entscheidend. Pflanzbehälter, Pflanzenmedien wie Erde, Kokosfasern, Steinwolle, Matten. Eine angemessene Lichtquelle ist von entscheidender Bedeutung, ob diese natürlich oder künstlich ist, ist diskretionär. Eine Nährlösung, die für Marihuanapflanzen geeignet ist. Ein pH-Testkit. Temperatur- und Feuchtigkeitsüberwachungswerkzeuge.',
          keyPoints: [
            'Ausreichend Platz',
            'Richtige Belüftung',
            'Zugang zu Strom',
            'Pflanzbehälter',
            'Pflanzenmedium',
          ],
          moreinfo: '',
        },
        {
          keyPoints: ['Geeigneter Standort.', 'Zuverlässige Stromversorgung.'],
          question: 'Wie richte ich einen Indoor-Growroom für Marihuana ein?',
          answer:
            'Wählen Sie einen geeigneten Standort mit ausreichend Platz und gutem Zugang zu Strom. Richten Sie ein ordnungsgemäßes Belüftungs- und Luftumweltsystem ein. Stellen Sie eine gleichbleibende Temperatur und Luftfeuchtigkeit sicher. Installieren Sie Grow-Lichter in geeigneten Höhen und Winkeln. Ordnen Sie die Pflanzen in einem organisierten Layout an, um einen einfachen Zugang und eine einfache Wartung zu ermöglichen.',
          moreinfo: '',
        },
        {
          question:
            'Welche Art von Licht sollte ich für den Indoor-Marihuana-Anbau verwenden?',
          keyPoints: ['Landabhängig.', 'HPS/Metalldampflampe oder LED.'],
          answer:
            'Hochintensive Entladungslampen (HID) wie HPS (Hochdrucknatrium) oder MH (Metallhalogenid). LED (Light Emitting Diode) Pflanzenlampen. Leuchtstofflampen (T5, CFL) für Sämlinge und vegetatives Wachstum. Aufgrund des Stromverbrauchs und technologischer Fortschritte reichen LED für einen effektiven Anbau an Orten aus, an denen HPS nicht leicht verfügbar sind.',
          moreinfo: '',
        },
        {
          keyPoints: ['Schnell abfließend.', 'Enthält Aggregat.'],
          question: 'Was ist die beste Bodenmischung für den Marihuana-Anbau?',
          answer:
            'Gut durchlässiger Boden mit einer ausgewogenen Mischung aus Nährstoffen. Organische Bodenmischungen mit und arigaten wie Perlite oder Vermiculite für die Belüftung (mindestens 40%-60%). pH-ausgeglichener Boden um 6.0-6.5 für optimale Nährstoffaufnahme.',
          moreinfo: '',
        },
        {
          keyPoints: [
            'So oft wie praktisch möglich.',
            'Pflanze dursten lassen.',
          ],
          question: 'Wie oft sollte ich meine Marihuana-Pflanzen gießen?',
          answer:
            'Gießen, wenn die oberste Zoll des Bodens trocken ist, ist der goldene Standard. Überwässerung vermeiden. Die Bewässerungsfrequenz je nach Pflanzengröße, Behältergröße und Umgebungsbedingungen anpassen.',
          moreinfo: '',
        },
        {
          keyPoints: ['Alle von ihnen.'],
          question:
            'Welche Nährstoffe benötigen Marihuanapflanzen während verschiedener Wachstumsphasen?',
          answer:
            'Stickstoff (N), Phosphor (P) und Kalium (K) für Blüte und Knospenentwicklung. Mikronährstoffe wie Kalzium, Magnesium und Eisen für die allgemeine Gesundheit.',
          moreinfo: '',
        },
        {
          keyPoints: ['Luftentfeuchter.', 'Entlaubung.', 'Luftbefeuchter.'],
          question:
            'Wie kontrolliere ich die Luftfeuchtigkeit in meinem Growroom?',
          answer:
            'Verwenden Sie einen Luftentfeuchter, um die Luftfeuchtigkeit zu reduzieren, wenn sie zu hoch ist. Erhöhen Sie die Belüftung und Luftzirkulation. Überwachen Sie die Luftfeuchtigkeit mit einem Hygrometer und passen Sie sie bei Bedarf an.',
          moreinfo: '',
        },
        {
          question:
            'Welcher Temperaturbereich ist optimal für Marihuanapflanzen?',
          answer: '70-85°F (21-29°C) tagsüber. 60-70°F (15-21°C) nachts.',
          moreinfo: '',
        },
        {
          keyPoints: ['Regelmäßige Inspektion.', 'Gute Haushaltsführung.'],
          question:
            'Wie identifiziere und verhindere ich am besten häufige Schädlinge und Krankheiten bei Marihuanapflanzen?',
          answer:
            'Pflanzen regelmäßig auf Anzeichen von Schädlingen wie Spinnmilben, Blattläusen und Weißenfliegen überprüfen. Organische oder chemische Pestizide bei Bedarf verwenden. Für eine ordnungsgemäße Hygiene im Growroom sorgen, um die Ausbreitung von Krankheiten zu verhindern.',
          moreinfo: '',
        },
        {
          keyPoints: ['Vorausplanen'],
          question:
            'Wann und wie fange ich am besten mit dem Beschneiden und Training meiner Marihuanapflanzen an?',
          answer:
            'Während der vegetativen Phase zur Entfernung unterer Äste und Verbesserung der Luftzirkulation beschneiden. Korrekte Anwendung von Techniken wie "Topping", "FIMing" und LST (Low-Stress Training), um ein Pflanzenprofil zu fördern, das den Bedürfnissen Ihrer Umgebung entspricht.',
          moreinfo: '',
        },
        {
          keyPoints: ['Küchenpapier', 'Direktes Pflanzen.'],
          question:
            'Welche verschiedenen Methoden gibt es zur Keimung von Marihuana-Samen?',
          answer:
            'Methode mit Küchenpapier. Direktes Pflanzen in einen kleinen Topf mit feuchter Erde. Verwendung eines Anzuchtkastens mit einer Feuchtigkeitskuppel.',
          moreinfo: '',
        },
        {
          keyPoints: ['Regelmäßige Inspektion während der Blütephase.'],
          question:
            'Wie bestimme ich das Geschlecht von Marihuanapflanzen und warum ist das wichtig?',
          answer:
            'Wenn Sie reguläre Samen oder unbekannte Sorten und Samen verwenden, stellen Sie sicher, dass männliche Pflanzen nicht mit den weiblichen Pflanzen vermischt werden, die Sie blühen lassen möchten, und dass alle männlichen Pflanzen einmal blühen, getrennt werden.',
          moreinfo: '',
        },
        {
          keyPoints: ['Pflanze den Topf vor der Pflanze.'],
          question: 'Wie verpflanze ich am besten Marihuanapflanzen?',
          answer:
            'Sämlinge in größere Töpfe verpflanzen, sobald sie ihre aktuellen Behälter übertreffen. Wurzeln vorsichtig behandeln, um Beschädigungen zu vermeiden. Pflanzen nach dem Umtopfen gießen, um den Stress zu reduzieren. Eine Pflanze hat ihren Topf überschritten, sobald ihr Durst Ihre Fähigkeit zu gießen übertrifft.',
          moreinfo: '',
        },
        {
          keyPoints: [
            'Kein Platz mehr für Knospenwachstum.',
            'Keine weißen Pistolen mehr',
          ],
          question:
            'Wie weiß ich, wann ich meine Marihuanapflanzen ernten soll?',
          answer:
            'Lassen Sie Ihre Pflanze fertig werden, was bedeutet, dass alle Pistolen sich etabliert haben.',
          moreinfo: '',
        },
        {
          question:
            'Welche verschiedenen Methoden gibt es zum Trocknen und Aushärten von Marihuana-Knospen?',
          answer:
            'Pflanzen kopfüber in einem dunklen, gut belüfteten Raum mit mäßiger Luftfeuchtigkeit aufhängen. Knospen nach dem Trocknen beschneiden und sie in luftdichten Gläsern zur Aushärtung aufbewahren. Gläser regelmäßig lüften, um überschüssige Feuchtigkeit freizusetzen und Schimmelwachstum zu verhindern.',
          moreinfo: '',
        },
        {
          question:
            'Wie kann ich den Ertrag meiner Marihuanapflanzen maximieren?',
          answer:
            'Bieten Sie optimale Wachstumsbedingungen einschließlich Licht, Nährstoffen und Umgebung. Verwenden Sie Trainingsmethoden, um mehrere Knospenstellen und eine gleichmäßige Überdachung zu fördern. Wählen Sie ertragreiche Sorten, die zu Ihrem Anbausetup passen.',
          moreinfo: '',
        },
        {
          question:
            'Was sind einige häufige Fehler, die beim Anbau von Marihuana vermieden werden sollten?',
          answer:
            'Überwässerung oder Unterwässerung. Ignorieren der pH-Werte von Wasser und Boden. Über- oder Unterdüngung von Nährstoffen. Schlechte Belüftung, die zu Schimmel- und Schädlingsproblemen führt. Männliche Pflanzen während der Blütephase nicht ordnungsgemäß identifizieren und entfernen.',
          moreinfo: '',
        },
        {
          question:
            'Wie erstelle ich ein geeignetes Belüftungssystem für meinen Anbauraum?',
          answer:
            'Installieren Sie Abluftventilatoren, um verbrauchte Luft und Wärme abzuführen. Verwenden Sie Zuluftventilatoren oder Lüftungen, um Frischluft zuzuführen. Erwägen Sie den Einsatz von Aktivkohlefiltern zur Geruchskontrolle.',
          moreinfo: '',
        },
        {
          question:
            'Welche rechtlichen Aspekte sind beim Anbau von Marihuana zu Hause zu beachten?',
          answer:
            'Überprüfen Sie die lokalen Gesetze und Vorschriften zum Anbau von Marihuana. Beschaffen Sie sich erforderliche Genehmigungen oder Lizenzen, falls erforderlich. Stellen Sie sicher, dass Sie die Beschränkungen hinsichtlich Pflanzenanzahl, Höhe und Standort einhalten.',
          moreinfo: '',
        },
        {
          question:
            'Wo finde ich zuverlässige Informationen und Ressourcen für den Marihuanananbau?',
          answer:
            'Online-Foren und Communities, die sich dem Cannabisanbau widmen. Bücher und Anleitungen zu Marihuanazuchttechniken. Lokale Growshops und Apotheken für Ratschläge und Zubehör.',
          moreinfo: '',
        },
      ],
      Instructional:
        'Im Folgenden finden Sie eine Auswahl häufig gestellter Fragen, die im Internet kursieren, zusammen mit den von Buddee vorgeschlagenen Ratschlägen.',
    },
  },
  database: {core: {}, actions: {}, options: {}, validation: {}},
  navigation: {nav_stack: {}, bottomTab: {Save: 'Speichern', Next: 'Weiter'}},
};
