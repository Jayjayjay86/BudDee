export const gmn = {
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