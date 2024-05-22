export const hind = {
  core: {
    bottomToolBar: {
      Home: 'होम',
      Plants: 'पौधे',
      Environments: 'परिवेश',
      Settings: 'सेटिंग्स',
      Back: 'पीछे',
      Next: 'आगे',
      Save: 'सहेजें',
      SAVE: 'सहेजें',
    },
  },
  home: {
    journal: {Heading: 'जर्नल', Nothing: 'आज के लिए कुछ नहीं'},
    toolbox: {
      HeaderText: 'टूलबॉक्स',
      New: 'नया',
      Action: 'कार्रवाई',
      Plants: 'पौधे',
      Environment: 'पर्यावरण',
      More: 'अधिक',
      Tools: 'उपकरण',
    },
    calender: {name: 'hi'},
  },
  plants: {
    create_env: {
      placeholder: {
        EnvironmentName: 'पर्यावरण का नाम दर्ज करें',
        Select: 'प्रकार चुनें',
      },
      HeaderMessage: 'पर्यावरण बनाएं',
      lightTypeData: [
        {key: 0, label: 'प्रकाश उत्सर्जन डायोड (LED)'},
        {key: 1, label: 'कंपैक्ट फ्लोरेसेंट लाइट (CFL)'},
        {key: 2, label: 'उच्च दबाव सोडियम (HPS)'},
        {key: 3, label: 'मेटल हैलोजनाइड'},
        {key: 4, label: 'LEC'},
        {key: 5, label: 'T5'},
      ],
    },
    selectEnv: {Choose: 'अपने पर्यावरण का चयन करें'},
    addPlant: {
      beginningsData: [
        {key: 0, label: 'बीज'},
        {key: 1, label: 'क्लोन या कटिंग'},
      ],
      mediumData: [
        {key: 0, label: 'कोको'},
        {key: 1, label: 'मिट्टी'},
        {key: 2, label: 'रॉकवूल'},
      ],
      placeholder: {
        Select: 'कृपया चयन करें',
        PleaseChoose: 'कृपया एक जाति चुनें',
        Days: 'दिन',
        SelectMedium: 'मध्यम चुनें',
      },
      CreateNew: 'नई जाति बनाएं',
      PlantBegan: 'पौधा इस रूप में शुरू हुआ था:',
      Strain: 'जाति:',
      Create: 'पौधे बनाएं',
      ChooseStage: 'वर्तमान चरण चुनें:',
      Vegetative: 'सब्जीय',
      Flowering: 'फूलिंग',
      Hanging: 'लटकता हुआ',
      VegState: 'सब्जीय स्थिति:',
      BeganOn: 'इस दिन जीना शुरू किया गया था:',
      VegTime: 'सब्जीय समय:',
      PleaseSelect: 'कृपया चयन करें',
      AmountPlants: 'पौधों की मात्रा:',
      Medium: 'मध्यम:',
      BloomingState: 'फूलने की स्थिति:',
      LightsChanged: 'रोशनी बदली गई थी इस दिन:',
      DryState: 'सुखने की स्थिति:',
      LightsOut: 'रोशनी बंद हो गई थी इस दिन:',
      FlowerTime: 'फूलने का समय:',
    },
    plants: {
      NoPlants: 'ओह, कोई पौधे नहीं मिले।',
      TapHere: 'एक जोड़ने के लिए यहाँ टैप करें।',
    },
  },
  settings: {
    moreTools: {
      HeaderText: 'होम नियंत्रण:',
      NewEnvironment: 'नया पर्यावरण',
      NewPlant: 'नया पौधा',
      NewAction: 'नई कार्रवाई',
      MoreTools: 'अधिक उपकरण:',
      Calculators: 'कैलकुलेटर्स',
      Charts: 'चार्ट्स',
      Guides: 'मार्गदर्शिकाएँ:',
      Faq: 'FAQ',
      Library: 'लाइब्रेरी',
    },
    settings: {
      HeaderText: 'डेटाबेस सेटिंग्स:',
      EraseAllData: 'सभी डेटा हटाएं',
      GeneralSettings: 'सामान्य सेटिंग्स:',
      Language: 'भाषा',
      English: 'अंग्रेज़ी',
      Theme: 'थीम',
      LightMode: 'रोशनी का मोड',
      TemperatureUnits: 'तापमान इकाइयां',
      Celsius: 'सेल्सियस',
      MeasurementUnits: 'मापन इकाइयां',
      Metric: 'मीट्रिक',
      CalendarSettings: 'कैलेंडर सेटिंग्स:',
      FirstDay: 'सप्ताह का पहला दिन',
      firstdays: [
        {key: 0, label: 'रविवार'},
        {key: 1, label: 'सोमवार'},
      ],
      tempertureUnits: [
        {key: 0, label: 'सेल्सियस'},
        {key: 1, label: 'फारेनहाइट'},
      ],
    },
  },
  database: {core: {}, actions: {}, options: {}, validation: {}},
  navigation: {nav_stack: {}, bottomTab: {Save: 'सहेजें', Next: 'आगे'}},
};
export const spn = {
  core: {
    Next: 'Siguiente - ',
    headers: {
      bottomToolBar: {
        Home: 'Inicio',
        Plants: 'Plantas',
        Environments: 'Entornos',
        Settings: 'Configuración',
        Back: 'Atrás',
        Next: 'Siguiente',
        Save: 'Guardar',
        SAVE: 'GUARDAR',
      },
    },
    loading: {
      disclaimer: {
        DisplayPage: 'Página mostrada en',
        NotOlder: '¿No mayor de 20?',
        Request:
          'En Buddee requerimos que cumplas con los requisitos de edad legal de tu área para ver la información contenida en esta aplicación.',
        DisclaimerText:
          'Por favor, primero confirma que tienes más de 20 años y también que estás de acuerdo con los',
        TermsLink: 'términos de uso.',
        AcceptText: 'Aceptar',
        DeclineText: 'Rechazar',
        languages: [
          {key: 0, label: 'Inglés'},
          {key: 1, label: 'Tailandés'},
        ],
        DefaultLanguage: 'Inglés',
      },
      loadingIndicator: {Loading: 'Cargando'},
    },
    errors: {},
  },
  actions: {
    newAction: {
      HeaderMessage: 'Nueva Acción',
      Water: 'Agua',
      MixNutes: 'Mezclar Nutrientes',
      BugReport: 'Reportar Error',
      Repot: 'Trasplantar',
      Trim: 'Recortar',
      Train: 'Entrenar',
      Defoliate: 'Desfoliar',
      Flush: 'Lavado de Raíces',
      Harvest: 'Cosechar',
      Destroy: 'Destruir',
      ActionLabel: 'GUARDAR',
      SelectPlant: '¡Selecciona una Planta!',
      SelectAction: '¡Selecciona una Acción!',
      WaterOptions: 'Opciones de Riego:',
      placeholder: {
        Description: 'Descripción',
        Amount: 'Ingrese la cantidad (litros)',
        Ec: 'Ingrese EC',
        Ph: 'Ingrese pH',
        Time: 'Ingrese el tiempo tomado (minutos)',
      },
    },
  },
  guides: {
    air: {
      HeaderText: 'Aire',
      Next: 'Humedad',
      p1: 'El constante movimiento del aire es vital en un próspero jardín interior. Las hojas utilizan la brisa para limpiarse a sí mismas e intercambiar gases, el moho y los patógenos odian el aire fresco en movimiento y el dicho sabio es que el aire fresco es tu amigo. Esto es cierto en la mayoría de los sentidos de la palabra, la temperatura juega un papel en el manejo de los organismos disponibles a través del aire fresco que se recicla constantemente en el sistema. Se recomiendan pantallas y filtros cuando se encuentre en climas más cálidos con más problemas de mosquitos y moscas que en climas más fríos.',
      p2: 'Para calcular el movimiento del aire en una habitación sin sellar, debe permitir que su entrada y salida se configuren para al menos una recirculación total del área completa del entorno (altura x ancho x longitud) por ciclo de 3 minutos, esto debería ir acompañado de una opción para inundar la habitación con hasta 3 recirculaciones por ciclo de 1 minuto. Esto puede permitirle mantener un nivel de control a lo largo de una variedad de fases, contenidos de humedad, parásitos, patógenos, insectos, moho, mildiu, estancamiento.',
    },
    checklist: {
      HeaderText: 'Listas de Verificación',
      Next: 'Mantenimiento del Hogar',
      checklist: [
        {
          subHeader: 'Conceptos Básicos de la Sala de Cultivo:',
          list: [
            'Variedad de macetas de diferentes tamaños',
            'Medio de cultivo',
            'Dispositivos de riego',
            'Desumidificador',
            'Sistema de drenaje',
            'Herramientas básicas',
            'Plástico reflectante (negro y blanco)',
            'Entrenamiento de plantas',
            'Sistema de drenaje',
          ],
          subList: {
            header: 'Opcional:',
            list: [
              'Filtro de carbono con un ventilador en línea',
              'Humidificador',
              'Nitrógeno',
            ],
          },
        },

        {
          subHeader: 'Toma de Esquejes:',
          list: [
            'Bisturís',
            'Tijeras',
            'Hormona de enraizamiento',
            'Cubos de plantas',
          ],
        },
        {
          subHeader: 'Mezcla de Nutrientes:',
          list: [
            'Jarras',
            'Probetas',
            'Etiquetas',
            'Cucharas/Cucharones/Mezcladores',
          ],
        },
      ],
    },
    containers: {
      Containters: 'Contenedores',
      Next: 'Medios de Cultivo',
      p1: 'La elección del contenedor para la raíz y la planta se decidirá en última instancia por el método de cultivo elegido. A continuación, se muestran algunos de los disponibles conocidos por nosotros, cada estilo tendrá una advertencia.',

      list1: [
        'Macetas de aire:',
        'Macetas inteligentes:',
        'Estera de bandeja (hidroponía completa):',
        'Rocas de lana:',
        'Sistemas de macetas aeropónicas:',
        'Guerrilla:',
        'Camas cavadas:',
      ],
    },
    crops: {
      Next: 'Consejos Generales',
      HeaderText: 'Cultivos Continuos',
      p1: 'La preparación es clave para determinar sus resultados con su cultivo actual y, por supuesto, cualquier futuro emprendimiento en el que nos involucremos. Por lo tanto, es recomendable que busquemos aclaración de eventos futuros tanto como sea práctico para que podamos planificar y planificar aún más, y luego planificar nuevamente. Después de todo, planificamos continuamente para maximizar nuestras posibilidades de asegurar un éxito del que podamos estar orgullosos y compartir, ya sea comercialmente o de manera privada.',
      p2: 'Tener su próxima línea de plantas detrás de las que están terminando puede ser desalentador y también requerir más espacio y planificación.',
    },
    cuttings: {
      HeaderText: 'Tomar Esquejes',
      p1: 'Una vez al día debes limpiar la tapa de la bandeja del exceso de humedad causado ya sea por la humedad en el medio o por la respiración de las plantas, de cualquier manera, el agua debe ser eliminada regularmente para evitar la aparición de moho u otros problemas.',
      p2: 'Después de 7 días, es posible que necesite regar los esquejes con una solución de agua con pH, las raíces se mostrarán en un plazo de 4 días y esto garantizará que todas prosperen.',
      p3: 'Comience cortando el esqueje deseado del árbol, normalmente el árbol será podado por completo si es una planta madre, de lo contrario, puede ser más selectivo sobre dónde elegir cortar, si corta de plantas que planea florecer pronto.',
      p4: 'Puede recolectar esquejes durante unos 5 minutos en un vaso de agua si está tomando muchos a la vez, corte la rama y colóquela en el agua para evitar que entre oxígeno en el tallo.',
      p5: 'Si el tamaño de los esquejes debe mantenerse uniforme (lo cual es una buena práctica), se puede utilizar una tabla de cortar en la que la longitud esté premarcada y la planta se pueda ofrecer para mantener los esquejes a la misma altura.',
      p6: 'Tome la planta y enrolle suavemente junto con sosteniendo las hojas restantes y corte los extremos de todos los dedos para que sean uniformes y lo más parejos posible.',
      p7: 'tome el bisturí nuevamente y haga un corte de 45 grados en el extremo de la rama para aumentar la superficie.',
      p8: 'sumérjase en la hormona de enraizamiento, solo lo necesario y tan profundo como el agujero en el que insertará la planta.',
      p9: 'Una vez que la bandeja esté llena, rocíe la tapa de la bandeja, reafirme la tapa y guarde en el área de iluminación correcta.',
      Next: 'Trasplantes (repicado)',
    },
    general: {
      Next: 'Volver a la Biblioteca',
      HeaderText: 'Consejos Generales',
      p1: 'La preparación es clave para determinar tus resultados con tu cultivo actual y, por supuesto, cualquier futuro emprendimiento en el que nos involucremos. Por lo tanto, es recomendable buscar aclaraciones sobre eventos futuros tanto como sea posible, planificar y planificar más y luego planificar nuevamente. Después de todo, la planificación continua nos permite maximizar nuestras posibilidades de asegurar un éxito del que podamos estar orgullosos y compartir, ya sea comercialmente o de forma privada.',
      list: [],
    },
    housekeeping: {
      HouseKeeping: 'Mantenimiento del Hogar',
      p1: 'El buen mantenimiento del hogar es una parte integral de cualquier empresa o operación progresiva de construcción o agricultura y se considera de suma importancia. Los derrames deben ser tratados de inmediato sin excusa, con la actitud correcta, su área de cultivo será un objetivo para muchos insectos y patógenos. Los insectos buscan comida a través de restos, polvo y follaje de plantas, otros insectos buscan los insectos que buscan las plantas, cuanto más tiempo dejes las cosas con respecto al mantenimiento del hogar, más amplia será la ventana que te dejas para un acontecimiento desafortunado que ocurre dentro de tu jardín interior.',
      p2: 'Sin lugar a dudas, una de las cosas más fáciles y simples que puedes hacer por ti mismo como cultivador es mantener tus áreas de trabajo limpias en todo momento. Requiere mucho esfuerzo y a veces tanto tiempo limpiar como crear el desorden que hiciste en primer lugar.',
    },
    humidity: {
      HeaderText: 'Humedad',
      p1: 'La humedad es la cantidad de agua presente en el aire que circula actualmente por tu habitación, tiene una fuente y una boca muy similar a la de un río, excepto que no hay un camino verdadero desde ninguno de los dos hacia el otro. El aire es ambiguo pero, como colectivo, no solo puede ser experimentado sino también sentido y discutido por muchos.',
      p2: 'El Déficit de Presión de Vapor se discutirá más y se pueden observar los gráficos. La temperatura y la humedad deben ser simbióticas en su relación entre sí y tener más de una marcha. Con la noche siendo más fresca ya que las plantas están durmiendo, la humedad puede cambiar para reflejar también estas fluctuaciones de temperatura, esto permitirá el crecimiento más rápido posible para tus plantas.',
      p3: 'Los entornos sellados se beneficiarán enormemente de la deshumidificación, especialmente porque eliminará la humedad de la habitación antes de llegar al mini split del aire acondicionado.',
      p4: 'Es probable que los entornos no sellados requieran el uso de una "sala de pulmón" que trate el aire antes de su viaje a través de tu jardín. Dicho esto, un deshumidificador colocado en un área donde no dañará las plantas o las temperaturas.',
      p5: 'Las condiciones húmedas aparecerán en última instancia más calientes de lo que la temperatura permitiría que creas, en casos extremos observarás la condensación apareciendo como temperaturas más cálidas y más frías tienen su efecto entre sí.',
      p6: 'Las condiciones secas se sentirán con los labios secándose con una tenencia extendida y prolongada, las plantas se secarán más rápido de lo que la planta absorberá. permitiría que creas, en casos extremos observarás la condensación apareciendo como temperaturas más cálidas y más frías tienen su efecto entre sí.',
      p7: 'Si estás cultivando en un entorno tropical, especialmente dentro de un área urbanizada, experimentarás una alta humedad relativa en tus plantas exteriores. Esto, si bien es beneficioso para una variedad de vida en el planeta, el cannabis y otras plantas perennes no se desempeñan tan bien en condiciones tan adversas.',
      p8: 'Cultivar en climas más frescos puede ser más beneficioso pero también podría requerir un horario y tiempo de siembra más estrictos con respecto a las estaciones.',
      Next: 'Nutrientes',
    },
    library: {
      list: [
        {key: 'checklist', label: 'Lista de Inicio'},
        {key: 'housekeeping', label: 'Mantenimiento del Hogar'},
        {key: 'smell', label: 'Olor'},
        {key: 'strain', label: 'Cepas'},
        {key: 'container', label: 'Contenedores'},
        {key: 'medium', label: 'Medios de Cultivo'},
        {key: 'air', label: 'Circulación del Aire'},
        {key: 'air', label: 'Humedad'},
        {key: 'humidity', label: 'Nutrientes'},
        {key: 'nute', label: 'Fases'},
        {key: 'phase', label: 'Riego'},
        {key: 'cutting', label: 'Toma de Esquejes/Clones'},
        {key: 'cutting', label: 'Trasplante'},
        {key: 'checklist', label: 'Plagas'},
        {key: 'checklist', label: 'Cultivos Rotativos'},
        {key: 'checklist', label: 'Consejos Generales'},
      ],
      TapMore: 'Toca uno de los enlaces a continuación para leer más.',
      SubHeaderText:
        'La información contenida en esta biblioteca será más que suficiente para comenzar tu viaje, seguro y consciente para que cuando te enfrentes a obstáculos y desafíos (¡y lo harás!), también tengas las habilidades para superar estos problemas a los que inevitablemente se enfrentará tu entorno de cultivo.',
      HeaderText: 'La Biblioteca de BudDEE.',
    },
    light: {
      p1: 'La preparación es clave para determinar tus resultados con tu cultivo actual y, por supuesto, cualquier futuro emprendimiento en el que nos involucremos. Por lo tanto, es recomendable buscar aclaraciones sobre eventos futuros tanto como sea posible, planificar y planificar más y luego planificar nuevamente. Después de todo, la planificación continua nos permite maximizar nuestras posibilidades de asegurar un éxito del que podamos estar orgullosos y compartir, ya sea comercialmente o de forma privada.',
      p2: 'Tener tu próxima línea de plantas detrás de las que están terminando puede ser desalentador y también requerir más espacio y planificación.',
      HeaderText: 'Luces',
      Next: 'Circulación del Aire',
    },
    medium: {
      HeaderTxt: 'Medios de Cultivo',
      p1: 'La elección del medio es muy similar a la selección del contenedor en que finalmente será decidido por tu método de cultivo elegido, ya sea hidropónico, aeropónico, con tierra/coco, interior/exterior.',
      Next: 'Luces',
      list: [
        'Tierra:',
        'Arcilla:',
        'Coco:',
        'Turba de coco:',
        'Hidrotono:',
        'Perlita:',
      ],
    },
    nute: {
      p1: 'Buddee reconoce el gran trabajo de HydroBuddy, un valioso activo para crear tus propios nutrientes solubles basados en el suministro local de agua, cualquiera que sea la fuente de agua a la que tengas acceso.',
      p2: 'La EC para plantas en crecimiento vegetativo puede estar entre 0.8 y 1.1, con un ppm que no debe exceder los 700; concentraciones más bajas son necesarias para las plántulas y normalmente el agua llevada al pH correcto será suficiente.',
      p3: 'El pH de la solución de nutrientes variará entre 5.8 y 6.5. Las plantas absorben la mayoría de los nutrientes de la solución en la concentración de átomos de hidrógeno. El pH está influenciado por la temperatura y hay ligeramente más oxígeno presente en el agua a temperaturas más frescas.',
      p4: 'Los nutrientes son un término confuso, la vida los necesita (nutrición/ellos).',
      p5: 'Los productos de marca son un negocio próspero en los mercados globales y hay una gran cantidad de productos para elegir para comenzar tus viajes de cultivo.',
      p6: 'Buddee recomienda House and Garden, Dutch Pro, BioBuzz, por nombrar algunos.',
      p7: 'Mucha seudociencia se ha apoderado del cultivo de cannabis, especialmente en la mayoría de los países donde en su estado natural se hace muy poco y la naturaleza proporciona siempre. Sin embargo, en países donde la legalidad de hacer algo ha sido cuestionable durante muchos años (continúa siéndolo incluso hoy quizás).',
      p8: 'Mezclar tus propios nutrientes usando sales fertilizantes será la forma más económica e instructiva de obtener una comprensión de la simplicidad con la que el cultivo de cannabis se ha convertido en la era actual.',
      HeaderText: 'Nutrientes',
      Next: 'Fases',
    },
    pest: {
      HeaderText: 'Plagas y Patógenos',
      Next: 'Cultivos Continuados',
      p1: 'Recomendamos no usar productos químicos dañinos como los pesticidas, siempre que sea posible.',
      p2: 'Recomendamos desinfectar completamente cualquier operación de cultivo grande entre ejecuciones y limpiar frecuentemente todo lo relacionado con la integridad operativa.',
      p3: 'Los ácaros son un problema real, no permitimos que el problema se apodere si lo vemos. Son arácnidos y les encanta el viento no más ni menos que a tus plantas e incluso pueden usarlo como corriente de movimiento, así que una vez que tienes unos pocos, no pasará mucho tiempo hasta que tengas muchos más.',
      p4: 'El mildiú polvoriento significa que necesitas uno o más deshumidificadores en algún momento en la vecindad, o un problema serio de humedad y estancamiento.',
    },
    phases: {
      HeaderText: 'Fases',
      Next: 'Riego',
      p1: 'El modo vegetativo puede consistir en horas de luz que van desde 14 hasta 24.',
      p2: 'El modo de floración puede consistir en horas de luz que van desde 12 hasta 13.',
      p3: 'Aproximadamente entre 10 y 14 días tarda la hormona de crecimiento en cambiar y comenzar la floración. En este tiempo, la planta aumentará su velocidad de crecimiento en preparación para los brotes que la precipitarán.',
      p4: 'Mientras una planta está en floración, si surge la necesidad de volver a un estado vegetativo, se debe permitir que la planta no solo restablezca los niveles hormonales para que correspondan con la acción requerida, sino también que purgue los hormonas restantes. Esto significaría podar cualquier actividad de flor de la planta para permitir una transición rápida. Los esquejes tomados de plantas en floración también recibirán una tasa de crecimiento más lenta. El tamaño es una métrica interesante al comparar esto y ese cultivo.',
    },
    repots: {
      HeaderText: 'Trasplante (repotting)',
      Next: 'Plagas y Patógenos',
      p1: 'Siempre replantamos nuestro stock antes de que se vuelvan voraces en sus entornos y el riego se convierta en un problema.',
    },
    smell: {
      HeaderText: 'Olor',
      Next: 'Selección de Cepas',
      p1: 'La mayoría de las personas no pueden o simplemente no pueden apreciar el olor creado por el cannabis fresco, ni el cannabis seco, ni el cannabis fumado. Para la parte preocupada, puede ser una razón motivada financieramente o una más personal en la que tú o tus amigos o familiares pueden estar acostumbrados.',
      p2: 'Esta intolerancia comprensible de la sociedad ha creado la necesidad de ocultar los olores involucrados al público en general, esto también sirve como medida preventiva para el jardín urbano que podría temer una incautación de bienes o equipo por parte de la policía o ladrones.',
      p3: 'Necesitarás filtrar el aire, una cantidad razonable para que las partículas responsables de emitir el olor sean eliminadas de la habitación a través del carbón activado (carbón), eliminando así el olor y expulsando el aire de escape. El filtro deberá ser calibrado con las condiciones de la habitación (tamaño, temperatura, humedad) y ser de un tamaño adecuado ya que creará un efecto de asfixia en tu escape de salida si no estás utilizando un entorno sellado.',
      p4: 'Si tienes la suerte suficiente de que tu entorno no genere preocupaciones ni tenga problemas para ser detectado o está lo suficientemente alejado, entonces la filtración de carbono no es un requisito para una cosecha definitiva. Si tal vez estás ajustado de presupuesto y puedes tolerar el aroma, puedes prescindir de ello.',
    },
    strain: {
      HeaderText: 'Selección de Cepas',
      Next: 'Contenedores',
      p1: 'El cannabis con el mejor sabor y más fuerte siempre será el que se haya terminado correctamente, permitido crecer sin contaminación, incluidas incluso las huellas dactilares. Los mejores cogollos de cannabis habrán sido secados desde el punto de cosecha de manera consistente en un entorno limpio y confiable, colgados hasta que el contenido de humedad esté en equilibrio óptimo con sus compuestos orgánicos. Esta flor de cannabis durará más que otras formas con una impresionante vida útil.',
      p2: 'La belleza está en el ojo del espectador, esto también es muy cierto en la determinación de lo que es mejor que otro, dada la cantidad de diferentes perspectivas que existen globalmente con respecto al mercado de la marihuana, ilícito y legítimo.',
      p3: 'Cultivar sativas en climas tropicales en viviendas urbanas con alta humedad y un ciclo de día y noche consistente de 12/12 tendrá una mejor probabilidad de supervivencia sin ayuda, que sus contrapartes indica, cortas, gruesas, sudorosas y condensadas.',
      p4: 'Las configuraciones en interiores permitirán cierto grado de libertad con respecto a la selección de cepas. El espacio entre el punto de datos y la luz es el factor de gobierno final.',
      p5: 'Desde una posición financiera, generalmente es mejor ir con lo que sea y tratar de hacer lo mejor con lo que tienes localmente.',
    },
    watering: {
      HeaderText: 'Riego',
      Next: 'Tomar Esquejes',
      p1: 'La purga completa del contenedor fomentará una mayor propagación de raíces',
      p2: 'El riego manual es arduo y definitivamente beneficiaría de la planificación previa de la posición de tus plantas para que aún puedas alcanzar aquellas que pueden estar ubicadas dentro de un grupo de plantas.',
      p3: 'El coco necesitará ser regado con más regularidad que la tierra, y también requerirá que el medio se haya lixiviado completamente con al menos una gota de agua en el drenaje, aunque se recomienda el 20%, este número es un desperdicio y más esfuerzo para limpiar o eliminar más tarde.',
      p4: 'La tierra tendrá y estará compuesta de sí misma y requerirá al menos cierto contenido de humedad entre riegos.',
    },
  },
  settings: {
    moreTools: {
      HeaderText: 'Controles de Hogar:',
      NewEnvironment: 'Nuevo Ambiente',
      NewPlant: 'Nueva Planta',
      NewAction: 'Nueva Acción',
      MoreTools: 'Más Herramientas:',
      Calculators: 'Calculadoras',
      Charts: 'Gráficos',
      Guides: 'Guías:',
      Faq: 'Preguntas Frecuentes',
      Library: 'Biblioteca',
    },
    settings: {
      HeaderText: 'Configuración de la Base de Datos:',
      EraseAllData: 'Borrar Todos los Datos',
      GeneralSettings: 'Configuración General:',
      Language: 'Idioma',
      English: 'Inglés',
      Theme: 'Tema',
      LightMode: 'Modo Claro',
      TemperatureUnits: 'Unidades de Temperatura',
      Celsius: 'Celsius',
      MeasurementUnits: 'Unidades de Medida',
      Metric: 'Métrico',
      CalendarSettings: 'Configuración del Calendario:',
      FirstDay: 'Primer Día de la Semana',
      languages: [
        {key: 0, label: 'Inglés'},
        {key: 0, label: 'Tailandés'},
        {key: 0, label: 'Francés'},
        {key: 0, label: 'Hebreo'},
        {key: 0, label: 'Hindú'},
        {key: 0, label: 'Español'},
        {key: 0, label: 'Alemán'},
        {key: 0, label: 'Italiano'},
      ],
      firstdays: [
        {key: 0, label: 'Domingo'},
        {key: 1, label: 'Lunes'},
      ],
      tempertureUnits: [
        {key: 0, label: 'Celsius'},
        {key: 1, label: 'Fahrenheit'},
      ],
    },
  },
  home: {
    journal: {Heading: 'Diario', Nothing: 'Nada Por Hoy'},
    toolbox: {
      HeaderText: 'Caja de Herramientas',
      New: 'Nuevo',
      Action: 'Acción',
      Plants: 'Plantas',
      Environment: 'Entorno',
      More: 'Más',
      Tools: 'Herramientas',
    },
    calender: {Header: 'Calendario', name: 'en'},
  },
  plants: {
    create_env: {
      placeholder: {
        EnvironmentName: 'Ingrese el Nombre del Entorno',
        Select: 'Seleccione el Tipo',
      },
      HeaderMessage: 'Crear Entorno',
      lightTypeData: [
        {
          key: 0,
          label: 'Diodo Emisor de Luz (LED)',
        },
        {
          key: 1,
          label: 'Luz Fluorescente Compacta (CFL)',
        },
        {
          key: 2,
          label: 'Sodio de Alta Presión (HPS)',
        },
        {
          key: 3,
          label: 'Haluro Metálico',
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
    },
    selectEnv: {Choose: 'Seleccione su Entorno'},
    addPlant: {
      beginningsData: [
        {
          key: 0,
          label: 'Semilla',
        },
        {
          key: 1,
          label: 'Clon o Esqueje',
        },
      ],
      mediumData: [
        {
          key: 0,
          label: 'Coco',
        },
        {
          key: 1,
          label: 'Tierra',
        },
        {
          key: 2,
          label: 'Rocas de Lana',
        },
      ],
      placeholder: {
        Select: 'Por Favor Seleccione',
        PleaseChoose: 'Por Favor Elija una Cepa',
        Days: 'días',
        SelectMedium: 'Seleccione el Medio',
      },
      CreateNew: 'Crear Nueva Cepa',
      PlantBegan: 'La planta comenzó como:',
      Strain: 'Cepa:',
      Create: 'Crear Plantas',
      ChooseStage: 'Elija la Etapa Actual:',
      Vegetative: 'Vegetativa',
      Flowering: 'Floración',
      Hanging: 'Colgando',
      VegState: 'Estado Vegetativo:',
      BeganOn: 'Comenzó la Vida El:',
      VegTime: 'Tiempo de Crecimiento:',
      PleaseSelect: 'Por Favor Seleccione',
      AmountPlants: 'Cantidad de Plantas:',
      Medium: 'Medio:',
      BloomingState: 'Estado de Floración:',
      LightsChanged: 'Luces Cambiadas El:',
      DryState: 'Estado de Secado:',
      LightsOut: 'Apagado de Luces El:',
      FlowerTime: 'Tiempo de Floración:',
    },
    plants: {
      NoPlants: 'Ups, No Se Encontraron Plantas.',
      TapHere: 'Toque aquí para agregar una.',
    },
  },
  calculators: {calculators: {}, charts: {}},
  environments: {
    addEnv: {
      LightData: [
        {
          key: 0,
          label: 'Diodo Emisor de Luz (LED)',
        },
        {
          key: 1,
          label: 'Luz Fluorescente Compacta (CFL)',
        },
        {
          key: 2,
          label: 'Sodio de Alta Presión (HPS)',
        },
        {
          key: 3,
          label: 'Haluro Metálico',
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
      HeaderMessage: 'Nuevo Entorno',
      Name: 'Ingresar Nombre ',
      ActionLabel: 'Guardar',
      RoomMeasurements: 'Mediciones del Cuarto:',
      OtherDetails: 'Otros Detalles:',
      Aircon: 'Aire Acondicionado',
      SealedRoom: 'Cuarto Sellado',
      Dehumidifier: 'Desumidificador',
      placeholder: {
        Sealed: 'Cuarto Sellado',
        Dehumidifier: 'Desumidificador',
        Aircon: 'Aire Acondicionado',
        Resting: 'Temperatura de Descanso (°C)',
        Length: 'Longitud (m)',
        Width: 'Ancho (m)',
        Height: 'Altura (m)',
        Quantity: 'Cantidad',
        Watts: 'Vatios',
        Name: 'Ingresar Nombre del Entorno',
        Light: 'Seleccionar Tipo',
      },
      lights: 'Luces:',
    },
    environments: {
      NoEnv: 'Oops, No se Encontraron Entornos.',
      TapHere: 'Toca aquí para agregar uno.',
    },
  },
  faq: {
    top20faq: [
      {
        question:
          '¿Cuáles son los requisitos básicos para cultivar marihuana en interiores?',
        answer:
          'Espacio adecuado, ventilación adecuada y acceso a electricidad son clave. Contenedores de plantas, medios de cultivo como tierra, fibra de coco, lana de roca, esterilla). Una fuente de luz adecuada es fundamental, ya sea natural o artificial, es discrecional. Una solución de nutrientes adecuada para las plantas de marihuana. Un kit de prueba de pH. Herramientas para monitorear la temperatura y la humedad.',
        keyPoints: [
          'Espacio adecuado',
          'Ventilación adecuada',
          'Acceso a electricidad',
          'Contenedores de plantas',
          'Medios de cultivo',
        ],
        moreinfo: '',
      },
      {
        keyPoints: ['Ubicación adecuada.', 'Suministro eléctrico confiable.'],
        question:
          '¿Cómo puedo configurar una sala de cultivo interior para marihuana?',
        answer:
          'Elija una ubicación adecuada con suficiente espacio y buen acceso a la electricidad. Configure un sistema adecuado de ventilación y circulación de aire. Asegure una temperatura y humedad consistentes. Instale luces de cultivo a alturas y ángulos apropiados. Organice las plantas en un diseño organizado para facilitar el acceso y el mantenimiento.',
        moreinfo: '',
      },
      {
        question:
          '¿Qué tipo de luces debo usar para el cultivo de marihuana en interiores?',
        keyPoints: ['Dependiente del país.', 'HPS/Metal Halide o un LED.'],
        answer:
          'Luces de descarga de alta intensidad (HID) como HPS (Sodio de Alta Presión) o MH (Haluro Metálico). Luces de cultivo LED (Diodo Emisor de Luz). Luces fluorescentes (T5, CFL) para plántulas y crecimiento vegetativo. Sin embargo, debido al consumo de energía y los avances tecnológicos, los LED son suficientes para el cultivo efectivo en ubicaciones donde las HPS no están fácilmente disponibles.',
        moreinfo: '',
      },
      {
        keyPoints: ['Drenaje rápido.', 'Agente de contención.'],
        question: '¿Cuál es la mejor mezcla de tierra para cultivar marihuana?',
        answer:
          'Tierra bien drenada con una mezcla equilibrada de nutrientes. Mezclas de tierra orgánica con agregados para aireación como perlita o vermiculita (al menos 40%-60%). Tierra equilibrada en pH alrededor de 6.0-6.5 para una absorción óptima de nutrientes.',
        moreinfo: '',
      },
      {
        keyPoints: [
          'Tan a menudo como sea práctico.',
          'Permitir que la planta tenga sed.',
        ],
        question: '¿Con qué frecuencia debo regar mis plantas de marihuana?',
        answer:
          'Regar cuando la pulgada superior de la tierra se sienta seca es el estándar de oro. Evita el riego excesivo. Ajusta la frecuencia de riego según el tamaño de la planta, el tamaño del contenedor y las condiciones ambientales.',
        moreinfo: '',
      },
      {
        keyPoints: ['Todos ellos.'],
        question:
          '¿Qué nutrientes necesitan las plantas de marihuana durante las diferentes etapas de crecimiento?',
        answer:
          'Nitrógeno (N), Fósforo (P) y Potasio (K) para la floración y el desarrollo de cogollos. Micronutrientes como calcio, magnesio y hierro para la salud general.',
        moreinfo: '',
      },
      {
        keyPoints: ['Desumidificador.', 'Desfoliación.', 'Humidificador.'],
        question:
          '¿Cómo controlo los niveles de humedad en mi sala de cultivo?',
        answer:
          'Utiliza un deshumidificador para reducir los niveles de humedad si son demasiado altos. Aumenta la ventilación y la circulación de aire. Monitorea los niveles de humedad con un higrómetro y ajusta según sea necesario.',
        moreinfo: '',
      },
      {
        question:
          '¿Cuál es el rango de temperatura óptimo para las plantas de marihuana?',
        answer:
          '70-85°F (21-29°C) durante el día. 60-70°F (15-21°C) durante la noche.',
        moreinfo: '',
      },
      {
        keyPoints: ['Inspección regular.', 'Buena limpieza.'],
        question:
          '¿Cómo puedo identificar y prevenir mejor las plagas y enfermedades comunes en las plantas de marihuana?',
        answer:
          'Inspecciona regularmente las plantas en busca de signos de plagas como ácaros, pulgones y moscas blancas. Usa pesticidas orgánicos o químicos según sea necesario. Mantén una adecuada limpieza e higiene en la sala de cultivo para prevenir la propagación de enfermedades.',
        moreinfo: '',
      },
      {
        keyPoints: ['Planifica con anticipación'],
        question:
          '¿Cuándo y cómo debo comenzar a podar y entrenar mis plantas de marihuana?',
        answer:
          'Poda durante la etapa vegetativa para eliminar ramas inferiores y mejorar el flujo de aire. Usa técnicas como "topping", "FIMing" y LST (entrenamiento de bajo estrés) para promover un perfil de planta que se adapte a las necesidades de tu entorno.',
        moreinfo: '',
      },
      {
        keyPoints: ['Toalla de papel', 'Siembra directa.'],
        question:
          '¿Cuáles son los diferentes métodos para germinar semillas de marihuana?',
        answer:
          'Método de la toalla de papel. Siembra directa en una maceta pequeña con tierra húmeda. Usando una bandeja de plántulas con una cúpula de humedad.',
        moreinfo: '',
      },
      {
        keyPoints: ['Inspección regular durante la fase de floración.'],
        question:
          '¿Cómo puedo determinar el sexo de las plantas de marihuana y por qué es importante?',
        answer:
          'Si estás usando semillas regulares o semillas y cepas desconocidas, asegúrate siempre de que los machos no se mezclen con las hembras que deseas florecer, y que una vez en floración, todos los machos estén separados.',
        moreinfo: '',
      },
      {
        keyPoints: ['Planta la maceta antes que la planta.'],
        question:
          '¿Cuál es la mejor manera de trasplantar plantas de marihuana?',
        answer:
          'Trasplanta las plántulas a macetas más grandes una vez que superen sus contenedores actuales. Manipula las raíces con cuidado para evitar daños. Riega las plantas después del trasplante para reducir el estrés. Una planta ha superado su maceta cuando su sed supera tu capacidad de regar.',
        moreinfo: '',
      },
      {
        keyPoints: [
          'No hay más espacio para el crecimiento de cogollos.',
          'No hay más pistilos blancos',
        ],
        question: '¿Cómo sé cuándo cosechar mis plantas de marihuana?',
        answer:
          'Permite que tu planta termine, que es una vez que todos los pistilos se hayan establecido',
        moreinfo: '',
      },
      {
        question:
          '¿Cuáles son los diferentes métodos para secar y curar los cogollos de marihuana?',
        answer:
          'Cuelga las plantas boca abajo en una habitación oscura y bien ventilada con humedad moderada. Recorta los cogollos después del secado y colócalos en frascos herméticos para el curado. Abre los frascos regularmente para liberar el exceso de humedad y prevenir el crecimiento de moho.',
        moreinfo: '',
      },
      {
        question:
          '¿Cómo puedo maximizar el rendimiento de mis plantas de marihuana?',
        answer:
          'Proporciona condiciones óptimas de crecimiento, incluida la luz, los nutrientes y el entorno. Usa técnicas de entrenamiento para promover múltiples sitios de cogollos y una cobertura uniforme. Elige cepas de alto rendimiento adecuadas para tu configuración de cultivo.',
        moreinfo: '',
      },
      {
        question:
          '¿Cuáles son algunos errores comunes que debo evitar al cultivar marihuana?',
        answer:
          'Regar en exceso o en exceso. Ignorar los niveles de pH del agua y el suelo. Sobrealimentación o subalimentación de nutrientes. Mala ventilación que lleva a problemas de moho y plagas. No identificar ni eliminar correctamente las plantas macho durante la etapa de floración.',
        moreinfo: '',
      },
      {
        question:
          '¿Cómo puedo crear un sistema de ventilación adecuado para mi sala de cultivo?',
        answer:
          'Instala ventiladores de extracción para eliminar el aire viciado y el calor. Utiliza ventiladores de entrada o ventilaciones para introducir aire fresco. Considera el uso de filtros de carbón para controlar el olor.',
        moreinfo: '',
      },
      {
        question:
          '¿Cuáles son las consideraciones legales para cultivar marihuana en casa?',
        answer:
          'Consulta las leyes y regulaciones locales sobre el cultivo de marihuana. Obtén los permisos o licencias necesarios si es requerido. Asegúrate de cumplir con las restricciones sobre la cantidad de plantas, altura y ubicación.',
        moreinfo: '',
      },
      {
        question:
          '¿Dónde puedo encontrar información y recursos confiables para el cultivo de marihuana?',
        answer:
          'Foros y comunidades en línea dedicados al cultivo de cannabis. Libros y guías sobre técnicas de cultivo de marihuana. Tiendas de cultivo locales y dispensarios para obtener consejos y suministros.',
        moreinfo: '',
      },
    ],
    Instructional:
      'A continuación se presentan una selección de preguntas frecuentes realizadas en Internet, con el consejo sugerido de Buddee antes mencionado.',
  },
  navigation: {nav_stack: {}, bottomTab: {Save: 'Guardar', Next: 'Siguiente'}},
};
