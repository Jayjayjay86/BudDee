export const hbr = {
  core: {
    Next: 'הבא - ',
    headers: {
      bottomToolBar: {
        Home: 'בית',
        Plants: 'צמחים',
        Environments: 'סביבות',
        Settings: 'הגדרות',
        Back: 'חזור',
        Next: 'הבא',
        Save: 'שמור',
        SAVE: 'שמור',
      },
    },
    loading: {
      disclaimer: {
        DisplayPage: 'עמוד מוצג ב',
        NotOlder: 'לא מתחת לגיל 20?',
        Request:
          'אנו ב-Buddee מחייבים שתעמוד בדרישות הגיל החוקיות של האזור שלך כדי להציג את המידע המופיע באפליקציה זו.',
        DisclaimerText: 'אנא אשר תחילה כי אתה מעל גיל 20 וגם שאתה מסכים עם',
        TermsLink: 'תנאי השימוש',
        AcceptText: 'קבל',
        DeclineText: 'דחה',
        languages: [
          {key: 0, label: 'אנגלית'},
          {key: 1, label: 'תאילנדית'},
        ],
        DefaultLanguage: 'אנגלית',
      },
      loadingIndicator: {Loading: 'טוען'},
    },
    errors: {},
  },
  home: {
    journal: {Heading: 'יומן', Nothing: 'אין דברים להיום'},
    toolbox: {
      HeaderText: 'ארגז כלים',
      New: 'חדש',
      Action: 'פעולה',
      Plants: 'צמחים',
      Environment: 'סביבה',
      More: 'יותר',
      Tools: 'כלים',
    },
    calender: {name: 'he'},
  },
  actions: {
    newAction: {
      HeaderMessage: 'פעולה חדשה',
      Water: 'להשקות',
      MixNutes: 'לערבב תזונה',
      BugReport: 'דו"ח תקלה',
      Repot: 'להשתלשל מחדש',
      Trim: 'לחתוך',
      Train: 'לאמן',
      Defoliate: 'להסיר עלים',
      Flush: 'לשטוף',
      Harvest: 'לקצוץ',
      Destroy: 'להרוס',
      ActionLabel: 'שמור',
      SelectPlant: 'בחר צמח!',
      SelectAction: 'בחר פעולה!',
      WaterOptions: 'אפשרויות השקייה:',
      placeholder: {
        Description: 'תיאור',
        Amount: 'הזן כמות (ליטרים)',
        Ec: 'הזן Ec',
        Ph: 'הזן Ph',
        Time: 'הזן זמן (דקות)',
      },
    },
  },
  environments: {
    addEnv: {
      LightData: [
        {
          key: 0,
          label: 'תאורת LED',
        },
        {
          key: 1,
          label: 'נורות פלואורסנט קומפקטיות (CFL)',
        },
        {
          key: 2,
          label: 'סודיום בלחץ גבוה (HPS)',
        },
        {
          key: 3,
          label: 'הליד מתכתי',
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
      HeaderMessage: 'סביבה חדשה',
      Name: 'הזן שם',
      ActionLabel: 'שמור',
      RoomMeasurements: 'מדידות החדר:',
      OtherDetails: 'פרטים נוספים:',
      Aircon: 'מזגן',
      SealedRoom: 'חדר סגור',
      Dehumidifier: 'מפחית לחות',
      placeholder: {
        Sealed: 'חדר סגור',
        Dehumidifier: 'מפחית לחות',
        Aircon: 'מזגן',
        Resting: 'טמפרטורת מנוחה (מעלות צלזיוס)',
        Length: 'אורך (מטרים)',
        Width: 'רוחב (מטרים)',
        Height: 'גובה (מטרים)',
        Quantity: 'כמות',
        Watts: 'וואטים',
        Name: 'הזן שם סביבה',
        Light: 'בחר סוג',
      },
      lights: 'תאורה:',
    },
    environments: {
      NoEnv: 'אופס, לא נמצאו סביבות.',
      TapHere: 'לחץ כאן כדי להוסיף אחת.',
    },
  },
  plants: {
    create_env: {
      placeholder: {
        EnvironmentName: 'הזן שם סביבה',
        Select: 'בחר סוג',
      },
      HeaderMessage: 'צור סביבה',
      lightTypeData: [
        {key: 0, label: 'דיודת נפיצת אור (LED)'},
        {key: 1, label: 'נורה פלואורסנטית קומפקטית (CFL)'},
        {key: 2, label: 'נתרן בלחץ גבוה (HPS)'},
        {key: 3, label: 'מתכת הליד (Metal Halide)'},
        {key: 4, label: 'LEC'},
        {key: 5, label: 'T5'},
      ],
    },
    selectEnv: {Choose: 'בחר את הסביבה שלך'},
    addPlant: {
      beginningsData: [
        {key: 0, label: 'זרע'},
        {key: 1, label: 'שורש או קטע'},
      ],
      mediumData: [
        {key: 0, label: 'קוקוס'},
        {key: 1, label: 'אדמה'},
        {key: 2, label: 'צמחי רוק'},
      ],
      placeholder: {
        Select: 'בחר בבקשה',
        PleaseChoose: 'בחר את הזן שלך',
        Days: 'ימים',
        SelectMedium: 'בחר בינתיים',
      },
      CreateNew: 'צור זן חדש',
      PlantBegan: 'הצמח התחיל כ:',
      Strain: 'זן:',
      Create: 'צור צמחים',
      ChooseStage: 'בחר שלב נוכחי:',
      Vegetative: 'צמחוני',
      Flowering: 'פריחה',
      Hanging: 'תלוי',
      VegState: 'מצב צמחוני:',
      BeganOn: 'החלה בתאריך:',
      VegTime: 'זמן צמחוני:',
      PleaseSelect: 'בחר בבקשה',
      AmountPlants: 'כמות של צמחים:',
      Medium: 'בינתיים:',
      BloomingState: 'מצב פריחה:',
      LightsChanged: 'התאורה השתנתה בתאריך:',
      DryState: 'מצב ייבוש:',
      LightsOut: 'האורות כבו בתאריך:',
      FlowerTime: 'זמן פריחה:',
    },
    plants: {
      NoPlants: 'אופס, לא נמצאו צמחים.',
      TapHere: 'לחץ כאן כדי להוסיף אחד.',
    },
  },
  settings: {
    moreTools: {
      HeaderText: 'בקרות בית:',
      NewEnvironment: 'סביבה חדשה',
      NewPlant: 'צמח חדש',
      NewAction: 'פעולה חדשה',
      MoreTools: 'כלים נוספים:',
      Calculators: 'מחשבונים',
      Charts: 'תרשימים',
      Guides: 'מדריכים:',
      Faq: 'שאלות נפוצות',
      Library: 'ספרייה',
    },
    settings: {
      HeaderText: 'הגדרות מסד נתונים:',
      EraseAllData: 'מחק את כל הנתונים',
      GeneralSettings: 'הגדרות כלליות:',
      Language: 'שפה',
      English: 'אנגלית',
      Theme: 'ערכת נושא',
      LightMode: 'מצב אור',
      TemperatureUnits: 'יחידות טמפרטורה',
      Celsius: 'צלזיוס',
      MeasurementUnits: 'יחידות מידה',
      Metric: 'מטרי',
      CalendarSettings: 'הגדרות לוח שנה:',

      FirstDay: 'היום הראשון של השבוע',
      modes: [
        {key: 0, label: 'מצב אור'},
        {key: 1, label: 'מצב כהה'},
      ],
      languages: [
        {key: 'en', label: 'אנגלית'},
        {key: 'th', label: 'תאילנדית'},
        {key: 'fr', label: 'צרפתית'},
        {key: 'hbr', label: 'עברית'},
        {key: 'hin', label: 'הינדו'},
        {key: 'spn', label: 'ספרדית'},
        {key: 'gr', label: 'גרמנית'},
        {key: 'it', label: 'איטלקית'},
      ],
      firstdays: [
        {key: 0, label: 'ראשון'},
        {key: 1, label: 'שני'},
      ],
      tempertureUnits: [
        {key: 0, label: 'צלזיוס'},
        {key: 1, label: 'פרנהייט'},
      ],
    },
  },
  guides: {
    air: {
      HeaderText: 'אוויר',
      Next: 'לחות',
      p1: 'תנועה קבועה של האוויר חיונית לגידול מצליח בגינת פנים. העלים משתמשים ברוח כדי לנקות את עצמם ולהחליף גזים, עקרונות העצם והפתוגנים שונאים אוויר טרי והמספרה החכמה אומרת שאוויר טרי הוא חברך. זה נכון ביותר ברוב מובני המילה, טמפרטורה משחקת תפקיד בניהול האורגניזמים הזמינים דרך האוויר הטרי שמתגלגל באופן קבוע לתוך המערכת. מסננים ומסננים מומלצים כאשר מדובר באזורים חמים יותר עם בעיות יותר של יתושים וזבובים מאשר באזורים קרים יותר.',
      p2: 'כדי לחשב את תנועת האוויר בחדר שאינו מסוגל, עליך לאפשר לצרכי הכניסה-יציאה שלך להיות מוגדרים לפחות לצורך נקודת מחזור שלמה של כל שטח הסביבה (גובה x רוחב x אורך) לכל מחזור של 3 דקות, זה צריך להיות מנוגד עם אפשרות להוציא את החדר עם עד 3 מחזורים לכל מחזור של דקה אחת. זה יכול לאפשר לך לשמור על רמת שליטה בכל טווח של שלבים, תכנים לחות, פרזיטים, פתוגנים, חרקים, עובש, טבעת.',
    },
    checklist: {
      HeaderText: 'רשימות רישום',
      Next: 'אחזקת בית',
      checklist: [
        {
          subHeader: 'יסודות חדר גידול:',
          list: [
            'מגוון צנצנות שונות בגדלים שונים',
            'קרקע',
            'מכשירי השקייה',
            'מפחית לחות',
            'מערכת ניקוז',
            'כלים בסיסיים',
            'מסכות מילר/שחור לבן',
            'אימון צמחים',
            'מערכת ניקוז',
          ],
          subList: {
            header: 'אופציונלי:',
            list: ['מסנן פחם עם מאוורר פנימי', 'מפחית לחות', 'ניטרוגן'],
          },
        },
        {
          subHeader: 'לקיחת קרישים:',
          list: ['מספרי סכינים', 'מספרי מספריים', 'גורם שורש', 'קוביות צמחים'],
        },
        {
          subHeader: 'ערבול תרבויות:',
          list: ['קנקנים', 'בקבוקים', 'תוויות', 'כפות/כפות/מערבלים'],
        },
      ],
    },
    containers: {
      Containters: 'מיכלים',
      Next: 'גופרים',
      p1: 'בחירת הקונטיינר עבור המלאי והצמח, בסופו של דבר, תיקבע על ידי שיטת הגידול שבחרת. להלן כמה מהם אופציות הערות הידועות על ידינו, כל סגנון יש לו אזהרת שימוש אחרת.',
      list1: [
        'קופסאות אוויר:',
        'קופסאות חכמות:',
        'משטח (הידרופוניקה מלאה):',
        'רוקוול:',
        'מערכות קופסת איירופוניק:',
        'גרילה:',
        'מיטות חפירה:',
      ],
    },
    crops: {
      Next: 'טיפים כלליים',
      HeaderText: 'המשך יבול',
      p1: 'הכנה היא המפתח לקביעת התוצאות שלך עם הגידול הנוכחי שלך וכמובן כל ההתעסקות העתידית שלנו. לכן, מומלץ שנחפש הבהרות על אירועים עתידיים כמה שאפשר בכך שאנו מתכננים ומתכננים ואז מתכננים שוב, לאחר כל התכנון המתמיד אנו יכולים לבדוק את התכנון שלנו. אנו עושים זאת כדי שנוכל למקסם את הסיכויים שלנו לקבוע הצלחה שאנחנו יכולים להיות גאים בה ולחלוק בין מסחרית או באופן פרטי.',
      p2: 'בעלי היער הבא שלך מאחורי אלה שמסיימים יכול להיות מזויף וגם לדרוש יותר מקום ותכנון.',
    },
    cuttings: {
      HeaderText: 'לקיחת קרישים',
      p1: 'פעם ביום עליך לנקות את כיסוי הקופסא מלחות יתר שנגרמו מהלחות בקרקע או הנשימה מהצמחים, בכל מקרה המים צריכים להיות נקיים באופן קבוע כדי למנוע היווצרות עובש או בעיות אחרות.',
      p2: 'לאחר 7 ימים עשוי להיות עליך להשקות את הקרישים עם תמימות פתוחה, השורשים יציגו את עצמם תוך 4 ימים וזה יבטיח את הצלחתם.',
      p3: 'התחל בקיצוץ הקיצוץ הנדרש מהעץ, בדרך כלל העץ יהיה מגוזם לחלוטין אם זה צמח אם זה אם אם, אם מחתימים מהצמחים שתתכוונו לפרוח בקרוב.',
      p4: 'בינתיים תוכל לאסוף קישים למשך כ 5 דקות בכוס מים אם אתה לוקח הרבה בבת אחת, חתך את הענפים והכנס אותם למים כדי למנוע מחמצן מלהיכנס לגזע.',
      p5: 'אם גודל הקישים צריך להישמר יחיד( מה שהוא מאמץ טוב), קרש חיתוך של פריט כזה שבו האורך מסומן מראש והצמח יכול להיענף כדי לשמור על הקישים באותה גובה.',
      p6: ' קח את הצמח וגלול אותו בעדינות ביחד עם החזיר את העלים הנותרים וחתוך את קצות האצבעות כך שהם יהיו אחידים וכמה שיותר שווים.',
      p7: ' חתוך שוב את המספריים והופך את הסוף של הענף לפילוס כדי להגדיל את אזור המגע.',
      p8: 'טובל בהורמון השורשים, רק ככל שנדרש וכעומק החור שתכנס אליו את הצמח.',
      p9: 'לאחר מילוי התיק, זקוף את המכסה, אימת את המכסה ושמור אותו באזור התאורה הנכון.',
      Next: 'העברות (שתילות מחדש)',
    },
    general: {
      Next: 'חזור לספריה',
      headetText: 'טיפים כלליים',
      p1: 'הכנה היא המפתח לקביעת התוצאות שלך עם הגידול הנוכחי שלך וכמובן כל התעסקויות העתידיות שאנו מעורבים בהן. לכן, מומלץ שנחפש הבהרה על אירועים עתידיים כמה שאפשר בכך שאנו מתכננים ומתכננים ואז מתכננים שוב, לאחר כל התכנון המתמיד אנו יכולים לבדוק את התכנון שלנו. אנו עושים זאת כדי שנוכל למקסם את הסיכויים שלנו להשיג הצלחה שאנחנו יכולים להיות גאים בה ולשתף, בין אם מסחרית או באופן פרטי.',
      list: [],
    },
    housekeeping: {
      HouseKeeping: 'ניקיון ואחזקה',
      p1: 'ניהול בית נקי הוא חלק בלתי נפרד מכל מבנה תקדים או חקלאות, ונחשב לשיקול ראשון ועיקרי, התפשרויות חייבות להתמודד מיד ובלי תירוצים, עם היותו של עצמך, אזור הגידול שלך יהיה מטרה למגוון רב של מזיקים ופתוגנים. מזיקים מחפשים אוכל דרך שאריות אשפה, אבק וצמחים, בערכות אחרות חרקים מחפשים את הצמחים שמחפשים את המזיקים, ככל שאתה משאיר את הדברים יותר אורך זמן ביחס לאחזקת הבית, כך רחב יותר החלון שאתה משאיר לעצמך לאירוע בלתי אופייני, המתרחש בגינת הפנים.',
      p2: 'ללא ספק אחד הדברים הקלים והפשוטים ביותר שאתה יכול לעשות לעצמך כגדר הוא לשמור על אזורי העבודה שלך נקיים בכל עת, זה דורש המון מאמץ ולפעמים כמה זמן לניקוי כמו גם זמן ליצירת הבלגן שעשית במקום הראשון.',
    },
    humidity: {
      HeaderText: 'לחות',
      p1: 'הלחות היא כמות המים שנמצאת באוויר שמסתובב בחדר שלך כרגע, יש לה מקור ופיו בדיוק באותו הדרך שנהר היה יש מקור ופיו, רק שאין נתיב אמיתי מהאחד אל האחר. האוויר הוא אמביגואה אבל כמושג אחד, יכול להיות לא רק לחוי אלא גם להרגיש ולדבר על ידי הרבה אנשים.',
      p2: 'הבדל יחסי של לחץ האדים יותר נדון והתרשמות מתרשמת. טמפרטורה ולחות צריכות להיות סימביוטיות ביחס שלהן אחת עם השניה, ויש להן יותר ממצב אחד. עם הלילה שנמצא בו קרה יותר כך שהצמחים ישנים, הלחות יכולה להשתנות כדי לשקף גם את הזעפיות בטמפרטורות אלה, זה יאפשר לצמחים שלך לצמוח במהירות המהירה ביותר.',
      p3: 'סביבות סגורות יתרונות רבים מסיווג הלחות, במיוחד במהלך ההוסקה הם יוצאים לפייט מהחדר לפני שהם מגיעים למזגן מיני או ליחידת המזגן.',
      p4: 'סביבות שאינן מוצפות תזדקקו לעיתוי של חדר "ריאה" המטפל באוויר לפני מסעו דרך הגינה שלך, אמנם צורך במכונת סולם שתותקן במקום שבו היא לא תגרום נזק לצמחים או לטמפרטורות.',
      p5: 'תנאים רטובים תמיד ייראו חמים יותר מאשר הטמפרטורה תמיד תאפשר לך להאמין, במקרים קיצוניים תראה קיטור נראה כחם וטמפרטורות קרות משפיעות אחת על השניה.',
      p6: 'תנאים יבשים יורגשו עם השפתיים יובשו עם ארוכים וארוכים, צמחים שיובשו מהר יותר מאמינים במה שהצמח יספיק. תאפשר לך להאמין, במקרים קיצוניים תראה קיטור נראה כחם וטמפרטורות קרות משפיעות אחת על השניה.',
      p7: 'אם אתה גדל בסביבה טרופית, במיוחד בתוך אזור בנוי, תיחווה ללחות יחסית גבוהה בצמחים החיצוניים שלך. זה גם יהיה לרעה עבור מגוון חיי הצומח בכדי, קנביס ופרנניאלים אחרים לא מתקבלים כה טוב בתנאים קשים אלו.',
      p8: 'גידול באזורים קרים יכול להיות משתלם יותר אך עשוי לדרוש גם לוח זמנים ותיאום קפדני יותר לגבי העונות.',
      Next: 'חומרי מזון',
    },
    library: {
      list: [
        {key: 'checklist', label: 'סקירת התחלה'},
        {key: 'housekeeping', label: 'ניקיון ואחזקה'},
        {key: 'smell', label: 'ריח'},
        {key: 'strain', label: 'זנים'},
        {key: 'container', label: 'קופסאות'},
        {key: 'medium', label: 'חומרי הגידול'},
        {key: 'air', label: 'סיבוב אוויר'},
        {key: 'humidity', label: 'לחות'},
        {key: 'nute', label: 'חומרי מזון'},
        {key: 'phase', label: 'שלבים'},
        {key: 'watering', label: 'השקייה'},
        {key: 'cutting', label: 'לקיחת ניצולים/צמחים'},
        {key: 'repots', label: 'שתילת מחדש'},
        {key: 'pest', label: 'מזיקים ופתוגנים'},
        {key: 'crops', label: 'צמחים רוטטים'},
        {key: 'general', label: 'טיפים כלליים'},
      ],
      TapMore: 'הקש על אחד הקישורים למטה כדי לקרוא עוד.',
      SubHeaderText:
        'המידע שמופיע בספריה זו יהיה יותר מדי מספיק כדי להתחיל בדרכך, בביטחון עצמי ומודע כך שכאשר אתה נתקל במכשולים ואתגרים (ואתה תעשה זאת!), וגם יש לך את היכולת להתמודד עם בעיות אלה שסביבת הגידול שלך בוודאות תפוגע בהן.',
      HeaderText: 'ספריית BudDEE.',
    },
    light: {
      p1: 'ההכנה היא המפתח לקביעת התוצאות שלך עם הגידול הנוכחי שלך וכמובן כל התעסקויות העתידיות שאנו מעורבים בהן. לכן, מומלץ שנחפש הבהרה על אירועים עתידיים כמה שאפשר בכך שאנו מתכננים ומתכננים ואז מתכננים שוב, לאחר כל התכנון המתמיד אנו יכולים לבדוק את התכנון שלנו. אנו עושים זאת כדי שנוכל למקסם את הסיכויים שלנו להשיג הצלחה שאנחנו יכולים להיות גאים בה ולשתף, בין אם מסחרית או באופן פרטי.',
      p2: 'לקבלת הכי טובה ביותר, עליך להביא את הקו הבא של צמחים שנמצאים מאחורי הקו האחרון שלא נגמר, יכול להיות מרתק וגם ידרוש יותר מקום ותכנון.',
      HeaderText: 'תאורה',
      Next: 'סיבוב אוויר',
    },
    medium: {
      HeaderTxt: 'חומרי גידול',
      p1: ' בחירת התיל היא דומה מאוד לבחירת הקופסא במובן שהוא סופית יהיה נקבע על ידי השיטת הגידול שנבחרה, הידרו, האירו, עם אדמה/קוקו, פנימי/חיצוני.',
      Next: 'תאורה',
      list: [
        'אדמה:',
        'חימר:',
        'קוקו קוויר:',
        'קוקו פיט:',
        'הידרוטון:',
        'פרליט:',
      ],
    },
    nute: {
      p1: 'באזרח הפונה מכירת מכשירים חשובה עבור מגבלת נפיחות חידושי מים בארץ בה קוביות מים אלו הן הגורמים של מים נגיבים, והן כן מגיעות אליו, כפי שמתים לך היא בנקודת מוצא ובנקודת פה באותו האופן כמו נהר, אין באוויר ארוך אך יכול להיות אמנות נגזרת ונדונת על ידי הרבה.',
      p2: 'על פי דיחוי רמת גידול בינלאומית תיווצר עוד עבודות תקציב נושאות רבות לבחירה המבצר של היבוא בחריפין, כולם מחפשים חבילות מים ביחד עם ערבות המים, מאוישי יסוד, לא כאלו שלנו.',
      p3: 'רמת ה-pH של תמיסת המזון תהיה שונה בין 5.8 ל-6.5. הצמחים מספקים את הפחמימות הרבות מהתמיסה בריכוז של אטומי מימן. ה-pH נמצא בהשפעת טמפרטורה ויש קצת יותר אוויר במים בטמפרטורות קרירות.',
      p4: 'חומרים מזיקים הם מושג מבלבל, החיים צריכים אותם.',
      p5: 'מותגים מוכרים הם עסק מצליח בשווקים הגלובליים ויש מגוון רחב של מוצרים לבחירה בהתחלת המסע שלך.',
      p6: 'בודדי ממליץ על "בית וגן", "דאץ פרו", "ביו באז" כדי לציין כמה.',
      p7: 'הרבה מדע פסיאודו נתפס בגידול קנביס במיוחד כאשר ברוב המדינות של מצבו הטבעי, כמעט לא נעשה כלום והטבע מספק בכל פעם. אך במדינות שבהן חוקיות עשיית כמה היו אולי מובכים מאוד לאורך שנים (ממשיכים להיות אפילו היום אולי).',
      p8: 'ערבוב תזונתי משלך באמצעות מלחי דשן יהיה הדרך הזולה והמדריכה להבנת הפשטות שבגידול קנביס בעידן הנוכחי.',
      HeaderText: 'תזונה',
      Next: 'שלבים',
    },
    pest: {
      HeaderText: 'מזיקים ואתגרי פתוגנים',
      Next: 'צמיחה רצופה',
      p1: 'אנו ממליצים לא להשתמש בכימיקלים נזקים כמו חומרי הדברה, ככל האפשר.',
      p2: 'אנו ממליצים להחליף באופן פועל כל תפעול גדול של גידול בין רצועות ולנקות מקפיא על נכון בין רוחב שוקלים.',
      p3: 'קרית הקטיפות נקרא פרובלמית, אנו לא מאפשרים לבעיה להתקיים אם אנו רואים את זה. הם ארכניד, ואוהבים את הרוח לא יותר ולא פחות מהצמחים שלך ואפילו יכולים להשתמש בזה כנפה על זרימה אז פעם אחת שיש לך מספר, זה לא יאריך זמן רב יותר עד שיש לך עוד רבים.',
      p4: 'ריחות טחול מציינים שצריך להיות לך פחות או יותר מפיחים או מדוכנים עם קיימות, או בעיה רצינית ועמידת סטגנטיות.',
    },
    phases: {
      HeaderText: 'שלבים',
      Next: 'השקיית מים',
      p1: 'מצב התרוממות יכול להכיל שעות אור בטווח של 14-24.',
      p2: 'מצב פריחה (פריחה) יכול להכיל שעות אור בטווח של 12-13.',
      p3: 'זמן היא כוחה נדרשים להיות פוסקים אחרי כ-10-14 ימים לפחות עבור גורם הגדילה ולפני התחלת הפריחה. בזמן זה, הצמח יגדיל את מהירות הצמיחה שלו בהכנה לפרחים המיוחסים לו.',
      p4: 'בעוד שצמח נמצא בפריחה, אם יהיה צורך להשתנות לגזירה צמחית שוב, יש להעניק זמן לצמח לא רק להקים שוב את רמות הורמונים שיותאמו לפעולה ואף להנקות את עצמו מהורמונים הנותרים. זה יוביל לכך שתמיד ייתכן כי יהיה צמח המבודד מאירות פרח. חיתוכים שנעשו מצמחות פריחה גם יקבלו רמת צמיחה איטית יותר. הגודל הוא מדד מעניין בהשוואה לכל קרום בעבודה זו ואותו קרום.',
    },
    repots: {
      HeaderText: 'שתילה מחדש (השתלה מחדש)',
      Next: 'מזיקים ואתגרי פתוגנים',
      p1: 'אנו תמיד משתילים את המלאי שלנו לפני שהם מגיעים לתסמונת נפיחות בסביבותיהם וההשקיות נעשות בבעיה.',
    },
    smell: {
      HeaderText: 'ריח',
      Next: 'בחירת זן',
      p1: 'רוב האנשים לא יכולים או פשוט לא מעריכים את הריח הנוצר על ידי קנביס טרי, קנביס יבש, קנביס מעושן. לצד המסיבה הכלכלית יכולה להיות גם תוך כדי אישית שבה יכולים אתה או חברים או משפחה שלך להתרגל.',
      p2: 'האינטולרנסיה הנידונה מהחברה יצרה צורך להסתיר את הריחות המעורבים מהציבור הכללי, זה משמש גם כאמצעי מניעה עבור גינות אורבניות שעשויות להיות פוחדות ממניעת רכוש או ציוד מהמשטרה או גנבים.',
      p3: 'יהיה עליך לסנן את האוויר, כמות ראויה מספקת כדי שהחלקיקים האחראים לפלישת הריח יפזרו מהחדר דרך פח הפעיל (פח פח) ויסירו את הריח, ומפיצים את האוויר. המסנן צריך להיות מכוון עם תנאי החדר (גודל, טמפרטורה, לחות). ולהיות בגודל המתאים כי ייצור אפקט מצוק על הפליטה שלך אם אינך משתמש בסביבה מוזנחת.',
      p4: 'אם תמצא את עצמך מזוכים מספיק, בסביבה שלך אין צורך בכל דאגה או בעיה עם התפקיד שלך או עם הרחק מספיק, אז מסנני פח חד פעמיים אינם דרישה עבור קטיף סופי. אם כן אתה על תקציב ויכול לסבול מהריח, תעשה בלעדי.',
    },
    faq: {
      top20faq: [
        {
          question:
            'What are the basic requirements for growing marijuana indoors?',
          answer:
            'Adequate space, proper ventilation and access to electricity are of course key. Plant containers, Plant mediums such as soil, coco coir, rockwool, Matting). An adequate light source is paramount whether this is natural or artificial is discretional. A nutrient solution suitable for marijuana plants. A pH testing kit. Temperature and humidity monitoring tools. ',
          keyPoints: [
            'Adequate space',
            'Proper ventilation',
            'Access to electricity',
            'Plant Containers',
            'Plant Medium',
          ],
          moreinfo: '',
        },
        {
          keyPoints: ['Suitable Location.', 'Reliable Electricity Supply.'],
          question: 'How Can I set up an indoor grow room for marijuana?',
          answer:
            'Choose a suitable location with enough space and good access to electricity. Set up a proper ventilation and air circulation system. Ensure a consistent temperature and humidity. Install grow lights at appropriate heights and angles. Arrange plants in an organized layout for easy access and maintenance.',
          moreinfo: '',
        },
        {
          question:
            'What kind of lights should I use for indoor marijuana growing?',
          keyPoints: ['Country Dependent.', 'HPS/Metal Halide or an LED.'],
          answer:
            'High-intensity discharge (HID) lights such as HPS (High-Pressure Sodium) or MH (Metal Halide). LED (Light Emitting Diode) grow lights. Fluorescent lights (T5, CFL) for seedlings and vegetative growth. However due to power Consumption and technological advances, LED suffice for effective cultivation in locations where hps are not readily available',
          moreinfo: '',
        },
        {
          keyPoints: ['Fast Draining.', 'Containing Aggregate.'],
          question: 'What is the best soil mix for growing marijuana?',
          answer:
            'Well-draining soil with a balanced mix of nutrients. Organic soil blends with and arigate such as perlite or vermiculite for aeration (at least 40%-60%). pH-balanced soil around 6.0-6.5 for optimal nutrient uptake.',
          moreinfo: '',
        },
        {
          keyPoints: ['As Often as Practical.', 'Allow Plant to thirst.'],
          question: 'How often should I water my marijuana plants?',
          answer:
            'Watering when the top inch of soil feels dry is the golden standard. Avoid overwatering. Adjust watering frequency based on plant size, container size, and environmental conditions.',
          moreinfo: '',
        },
        {
          keyPoints: ['All Of Them.'],
          question:
            'What nutrients do marijuana plants need during different growth stages?',
          answer:
            'Nitrogen (N), Phosphorus (P) and Potassium (K) for flowering and bud development. Micronutrients such as calcium, magnesium, and iron for overall health.',
          moreinfo: '',
        },
        {
          keyPoints: ['Dehumidifier.', 'Defoliation.', 'Humidifier.'],
          question: 'How do I control humidity levels in my grow room?',
          answer:
            'Use a dehumidifier to reduce humidity levels if they are too high. Increase ventilation and air circulation. Monitor humidity levels with a hygrometer and adjust as needed.',
          moreinfo: '',
        },
        {
          question: 'What temperature range is optimal for marijuana plants?',
          answer:
            '70-85°F (21-29°C) during the day. 60-70°F (15-21°C) during the night.',
          moreinfo: '',
        },
        {
          keyPoints: ['Regular Inspection.', 'Good Housekeeping.'],
          question:
            'How do I best identify and prevent common pests and diseases in marijuana plants?',
          answer:
            'Regularly inspect plants for signs of pests such as spider mites, aphids, and whiteflies. Use organic or chemical pesticides as needed. Maintain proper sanitation and hygiene in the grow room to prevent disease spread.',
          moreinfo: '',
        },
        {
          keyPoints: ['Plan Ahead'],
          question:
            'When and how do I start pruning and training my marijuana plants?',
          answer:
            'Pruning during the vegetative stage to remove lower branches and improve airflow. Correct use of techniques such as "topping", "FIMing", and LST (Low-Stress Training) to promote a plant profile that suits your environments needs.',
          moreinfo: '',
        },
        {
          keyPoints: ['Paper Towel', 'Direct Planting.'],
          question:
            'What are the different methods for germinating marijuana seeds?',
          answer:
            'Paper towel method. Direct planting into a small pot with moist soil. Using a seedling tray with a humidity dome.',
          moreinfo: '',
        },
        {
          keyPoints: ['Regular Inspection During Bloom Phase.'],
          question: 'How do I sex marijuana plants and why is it important?',
          answer:
            'If using regular seeds or unkown strains and seeds, always ensure males dont mix with the females that you wish to flower, and that once flowering, all males are seperated.',
          moreinfo: '',
        },
        {
          keyPoints: ['Plant the pot before the plant.'],
          question: 'What is the best way to transplant marijuana plants?',
          answer:
            'Transplant seedlings into larger pots once they outgrow their current containers. Handle roots gently to avoid damage. Water plants after transplanting to reduce stress. A plant has outgrown its pot once its thirst outperform your abiliy to water.',
          moreinfo: '',
        },
        {
          keyPoints: ['No More Room For Bud Growth.', 'No More White Pistols'],
          question: 'How do I know when to harvest my marijuana plants?',
          answer:
            'Allow your plant to finish which is once all the pistols have established themselves',
          moreinfo: '',
        },
        {
          question:
            'What are the different methods for drying and curing marijuana buds?',
          answer:
            'Hang plants upside down in a dark, well-ventilated room with moderate humidity. Trim buds after drying and place them in airtight jars for curing. Burp jars regularly to release excess moisture and prevent mold growth.',
          moreinfo: '',
        },
        {
          question: '    How can I maximize the yield of my marijuana plants?',
          answer:
            'Provide optimal growing conditions including light, nutrients, and environment. Use training techniques to promote multiple bud sites and canopy evenness. Choose high-yielding strains suited to your growing setup.',
          moreinfo: '',
        },
        {
          question:
            'What are some common mistakes to avoid when growing marijuana?',
          answer:
            'Overwatering or underwatering. Ignoring pH levels of water and soil. Overfeeding or underfeeding nutrients. Poor ventilation leading to mold and pest problems. Not properly identifying and removing male plants during the flowering stage.',
          moreinfo: '',
        },
        {
          question:
            'How do I create a proper ventilation system for my grow room?',
          answer:
            'Install exhaust fans to remove stale air and heat. Use intake fans or vents to bring in fresh air. Consider using carbon filters to control odor.',
          moreinfo: '',
        },
        {
          question:
            'What are the legal considerations for growing marijuana at home?',
          answer:
            'Check local laws and regulations regarding the cultivation of marijuana. Obtain necessary permits or licenses if required. Ensure compliance with restrictions on plant quantity, height, and location.',
          moreinfo: '',
        },
        {
          question:
            'Where can I find reliable information and resources for marijuana cultivation?] ',
          answer:
            'Online forums and communities dedicated to cannabis cultivation. Books and guides on marijuana growing techniques. Local grow shops and dispensaries for advice and supplies.',
          moreinfo: '',
        },
      ],
      Instructional:
        'למטה נמצא מבחר שאלות נפוצות שנשאלות ברחבי האינטרנט, עם ההמלצות המוצעות של באדי מופיעות לפניהן.',
    },

    strain: {
      HeaderText: 'בחירת זן',
      Next: 'קונטיינרים',
      p1: 'הקנביס הטעים והחזק ביותר תמיד יהיה זה שסיים את התהליך כראוי, גדל בלי זיהום, כולל אפילו טביעות אצבעות. הקנביס הכי טוב יהיה מיובש מרגע הקטיף באופן עקבי בסביבה נקייה ואמינה, מותל בתליה עד שתכולת הלחות תהיה באיזון אופטימלי עם התרכובת האורגנית שלו. פרח הקנביס הזה יחזור על פרסומות אחרות עם תפוח חיי מדף מרשים.',
      p2: 'היופי נמצא בעין של המבין, וזה גם המקרה בהחלט בהתחשב בכמות התפוסות השונות שקיימות ברחבי העולם לגבי שוק המריחואנה, הלא חוקי והלא חוקי.',
      p3: 'גידול סטיביה בקלימות טרופיים במגורים אורבניים עם לחות גבוהה וקבועה של 12/12 יום ולילה יהיה לו סיכוי טוב יותר לשרוד לבדו, מאשר זרעיו הקצרים, הקטנים, העבים, הזיעים, המכווצים של האינדיקה.',
      p4: 'התקנות בפנים תאפשרו דרגה מסוימת של חופש עם קשר לבחירת זן. המרחק בין הדטום לאור הוא הגורם הכולל את הגורם המשפיע האולטימטיבי.',
      p5: 'מנקודת מבט כלכלית, זה כמעט תמיד הטוב ביותר ללכת עם מה שכבר קיים ולהכוון לעשות את הטוב ביותר או מה שיש לך מקומית.',
    },
    watering: {
      HeaderText: 'השקיית מים',
      Next: 'קיטום קוטעים',
      p1: 'ניקוי מלא של הקונטיינר יעודד פיזור שורש נוסף',
      p2: 'השקיית ידנית היא עבודה קשה ובהחלט תהיה זקוקה לתכנון מראש של מיקום הצמחים שלך כך שתוכל עדיין להגיע לאלה שעשויים להימצא בתוך קבוצה או קבוצה של צמחים',
      p3: 'קוקו תצטרך להשקות יותר באופן רגיל מאשר קרקע, וגם לדרוש מהתיל להיות מושלם על ידי לפחות טיפה של מים בריצפת התהלך, למרות ש-20% הוא ההמלצה, מספר זה הוא פסולת ומאמץ נוסף לנקות או להסיר מאוחר יותר.',
      p4: 'קרקע תהיה ותוכל להיות עשויה מעצמה ולדרוש לפחות מעט תוכן לחות בין השקיית מים.',
    },
  },
  database: {core: {}, actions: {}, options: {}, validation: {}},
  navigation: {nav_stack: {}, bottomTab: {Save: 'שמור', Next: 'הבא'}},
};
export const fr = {
  core: {
    Next: 'Suivant - ',
    headers: {
      bottomToolBar: {
        Home: 'Accueil',
        Plants: 'Plantes',
        Environments: 'Environnements',
        Settings: 'Paramètres',
        Back: 'Retour',
        Next: 'Suivant',
        Save: 'Enregistrer',
        SAVE: 'ENREGISTRER',
      },
    },
    loading: {
      disclaimer: {
        DisplayPage: 'Page Affichée en',
        NotOlder: 'Pas plus vieux que 20 ans ?',
        Request:
          "Nous chez Buddee demandons que vous respectiez les exigences d'âge légales de votre région pour visualiser les informations contenues dans cette application.",
        DisclaimerText:
          "Veuillez d'abord confirmer que vous avez plus de 20 ans et également que vous êtes d'accord avec les",
        TermsLink: "conditions d'utilisation",
        AcceptText: 'Accepter',
        DeclineText: 'Refuser',
        languages: [
          {key: 0, label: 'Anglais'},
          {key: 1, label: 'Thaïlandais'},
        ],
        DefaultLanguage: 'Anglais',
      },
      loadingIndicator: {Loading: 'Chargement'},
    },
    errors: {},
  },
  home: {
    journal: {Heading: 'Journal', Nothing: "Rien pour aujourd'hui"},
    toolbox: {
      HeaderText: 'Boîte à outils',
      New: 'Nouveau',
      Action: 'Action',
      Plants: 'Plantes',
      Environment: 'Environnement',
      More: 'Plus',
      Tools: 'Outils',
    },
    calender: {name: 'fr'},
  },
  plants: {
    create_env: {
      placeholder: {
        EnvironmentName: "Entrez le nom de l'environnement",
        Select: 'Sélectionner le type',
      },
      HeaderMessage: 'Créer un environnement',
      lightTypeData: [
        {key: 0, label: 'Diode électroluminescente (LED)'},
        {key: 1, label: 'Lampe fluorescente compacte (CFL)'},
        {key: 2, label: 'Sodium haute pression (HPS)'},
        {key: 3, label: 'Halogénure métallique'},
        {key: 4, label: 'LEC'},
        {key: 5, label: 'T5'},
      ],
    },
    selectEnv: {Choose: 'Choisissez votre environnement'},
    addPlant: {
      beginningsData: [
        {key: 0, label: 'Graine'},
        {key: 1, label: 'Clone ou Coupe'},
      ],
      mediumData: [
        {key: 0, label: 'Coco'},
        {key: 1, label: 'Terre'},
        {key: 2, label: 'Laine de roche'},
      ],
      placeholder: {
        Select: 'Veuillez sélectionner',
        PleaseChoose: 'Veuillez choisir une souche',
        Days: 'jours',
        SelectMedium: 'Sélectionner le milieu',
      },
      CreateNew: 'Créer une nouvelle souche',
      PlantBegan: 'La plante a commencé comme :',
      Strain: 'Souche :',
      Create: 'Créer des plantes',
      ChooseStage: "Choisissez l'étape actuelle :",
      Vegetative: 'Végétatif',
      Flowering: 'Floraison',
      Hanging: 'Suspendu',
      VegState: 'État végétatif :',
      BeganOn: 'Commencé le :',
      VegTime: 'Temps de végétation :',
      PleaseSelect: 'Veuillez sélectionner',
      AmountPlants: 'Nombre de plantes :',
      Medium: 'Milieu :',
      BloomingState: 'État de floraison :',
      LightsChanged: 'Lumières changées le :',
      DryState: 'État de séchage :',
      LightsOut: 'Lumières éteintes le :',
      FlowerTime: 'Temps de floraison :',
    },
    plants: {
      NoPlants: 'Oups, aucune plante trouvée.',
      TapHere: 'Appuyez ici pour en ajouter une.',
    },
  },
  environments: {
    addEnv: {
      LightData: [
        {
          key: 0,
          label: 'Diode électroluminescente (LED)',
        },
        {
          key: 1,
          label: 'Lampe fluorescente compacte (CFL)',
        },
        {
          key: 2,
          label: 'Lampe à sodium haute pression (HPS)',
        },
        {
          key: 3,
          label: 'Halogénure métallique',
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
      HeaderMessage: 'Nouvel environnement',
      Name: 'Entrer le nom',
      ActionLabel: 'ENREGISTRER',
      RoomMeasurements: 'Mesures de la pièce :',
      OtherDetails: 'Autres détails :',
      Aircon: 'Climatiseur',
      SealedRoom: 'Pièce étanche',
      Dehumidifier: 'Déshumidificateur',
      placeholder: {
        Sealed: 'Pièce étanche',
        Dehumidifier: 'Déshumidificateur',
        Aircon: 'Climatiseur',
        Resting: 'Température de repos (C)',
        Length: 'Longueur (M)',
        Width: 'Largeur (M)',
        Height: 'Hauteur (M)',
        Quantity: 'Quantité',
        Watts: 'Watts',
        Name: "Entrer le nom de l'environnement",
        Light: 'Sélectionner le type',
      },
      lights: 'Lumières :',
    },
    environments: {
      NoEnv: 'Oops, aucun environnement trouvé.',
      TapHere: 'Appuyez ici pour en ajouter un.',
    },
  },
  settings: {
    moreTools: {
      HeaderText: 'Contrôles de la maison :',
      NewEnvironment: 'Nouvel environnement',
      NewPlant: 'Nouvelle plante',
      NewAction: 'Nouvelle action',
      MoreTools: "Plus d'outils :",
      Calculators: 'Calculatrices',
      Charts: 'Graphiques',
      Guides: 'Guides :',
      Faq: 'FAQ',
      Library: 'Bibliothèque',
    },
    settings: {
      HeaderText: 'Paramètres de la base de données :',
      EraseAllData: 'Effacer toutes les données',
      GeneralSettings: 'Paramètres généraux :',
      Language: 'Langue',
      English: 'Anglais',
      Theme: 'Thème',
      LightMode: 'Mode lumière',
      TemperatureUnits: 'Unités de température',
      Celsius: 'Celsius',
      MeasurementUnits: 'Unités de mesure',
      Metric: 'Métrique',
      CalendarSettings: 'Paramètres du calendrier :',
      FirstDay: 'Premier jour de la semaine',
      modes: [
        {key: 0, label: 'Mode clair'},
        {key: 1, label: 'Mode sombre'},
      ],
      languages: [
        {key: 'en', label: 'Anglais'},
        {key: 'th', label: 'Thaï'},
        {key: 'fr', label: 'Français'},
        {key: 'hbr', label: 'Hébreu'},
        {key: 'hin', label: 'Hindi'},
        {key: 'spn', label: 'Espagnol'},
        {key: 'gr', label: 'Allemand'},
        {key: 'it', label: 'Italien'},
      ],
      firstdays: [
        {key: 0, label: 'Dimanche'},
        {key: 1, label: 'Lundi'},
      ],
      tempertureUnits: [
        {key: 0, label: 'Celsius'},
        {key: 1, label: 'Fahrenheit'},
      ],
    },
  },
  guides: {
    air: {
      HeaderText: 'Air',
      Next: 'Humidité',
      p1: "Le mouvement constant de l'air est vital dans un jardin d'intérieur prospère. Les feuilles utilisent la brise pour se nettoyer et échanger des gaz. La moisissure et les agents pathogènes détestent l'air frais en mouvement, et le dicton sage est que l'air frais est votre ami. Cela est vrai dans la plupart des sens du terme. La température joue un rôle dans la gestion des organismes disponibles à travers l'air frais constamment recyclé dans le système. Des écrans et des filtres sont conseillés dans les climats plus chauds avec plus de problèmes de moustiques et de mouches que dans les climats plus froids.",
      p2: "Pour calculer le mouvement de l'air dans une pièce non étanche, vous devriez permettre à votre système d'admission et d'évacuation d'être réglé pour au moins une recirculation totale de la surface entière de l'environnement (hauteur x largeur x longueur) par cycle de 3 minutes. Cela devrait être couplé avec une option pour ventiler la pièce jusqu'à 3 recirculations par cycle d'une minute. Cela vous permet de maintenir un certain niveau de contrôle tout au long d'une gamme de phases, de contenus en humidité, de parasites, d'agents pathogènes, d'insectes, de moisissures, de mildiou, de stagnation.",
    },
    checklist: {
      HeaderText: 'Listes de contrôle',
      Next: 'Entretien ménager',
      checklist: [
        {
          subHeader: 'Basiques de la salle de culture :',
          list: [
            'Assortiment de pots de différentes tailles',
            'Milieu de culture',
            "Dispositifs d'arrosage",
            'Déshumidificateur',
            'Système de drainage',
            'Outils de base',
            'Revêtement de feuille de mylar/noir et blanc',
            'Formation de plantes',
            'Système de drainage',
          ],
          subList: {
            header: 'Optionnel :',
            list: [
              'Filtre à charbon avec ventilateur en ligne',
              'Humidificateur',
              'Azote',
            ],
          },
        },
        {
          subHeader: 'Prise de boutures :',
          list: [
            'Scalpels',
            'Ciseaux',
            "Hormone d'enracinement",
            'Cubes de culture',
          ],
        },
        {
          subHeader: 'Mélange de nutriments :',
          list: [
            'Cruches',
            'Béchers',
            'Étiquettes',
            'Cuillères/Louches/Mixeurs',
          ],
        },
      ],
    },
    containers: {
      Containters: 'Conteneurs',
      Next: 'Milieux',
      p1: 'Le choix du conteneur pour le stock de racines et la plante sera finalement déterminé par votre méthode de culture choisie. Ci-dessous sont certains de ceux disponibles connus de nous, chaque style aura cependant un inconvénient.',
      list1: [
        'Pots aérés :',
        'Smart pots :',
        'Tapis de plateau (hydroponie totale) :',
        'Laine de roche :',
        'Systèmes de pots aéroponiques :',
        'Guerilla :',
        'Lits creusés :',
      ],
    },
    crops: {
      Next: 'Conseils généraux',
      HeaderText: 'Cultures en continu',
      p1: 'La préparation est la clé pour déterminer vos résultats avec votre culture actuelle et bien sûr tout futur projet dans lequel nous nous engageons. Par conséquent, il est conseillé de chercher à clarifier les événements futurs autant que possible, de planifier et de planifier encore et encore, après tout le planning continu, nous pourrions vérifier notre planification. Nous faisons cela afin de maximiser nos chances de réussir que nous pouvons être fiers de partager, que ce soit commercialement ou privément.',
      p2: "Avoir votre prochaine ligne de plantes derrière celles qui se terminent peut être intimidant et nécessiter également plus d'espace et de planification.",
    },
    cuttings: {
      HeaderText: 'Prise de boutures',
      p1: "Une fois par jour, vous devez nettoyer le couvercle du plateau de l'excès d'humidité causé soit par l'humidité du milieu, soit par la respiration des plantes, de toute façon, l'eau doit être régulièrement éliminée pour éviter toute formation de moisissure ou d'autres problèmes.",
      p2: "Après 7 jours, vous devrez peut-être arroser les boutures avec une solution d'eau pH, les racines se montreront dans les 4 jours et cela garantira qu'elles prospèrent toutes.",
      p3: "Commencez par couper la bouture prévue de l'arbre, normalement l'arbre sera complètement taillé s'il s'agit d'une plante mère, sinon vous pouvez être plus sélectif sur l'endroit où vous choisissez de couper, si vous coupez des plantes que vous avez l'intention de faire fleurir bientôt.",
      p4: "Vous pouvez collecter des boutures pendant 5 minutes environ dans un verre d'eau si vous en prenez plusieurs à la fois, coupez la branche et placez-la dans l'eau pour empêcher l'oxygène d'entrer dans la tige.",
      p5: 'Si la taille des boutures doit être uniforme (ce qui est une bonne pratique), une planche à découper de telle sorte que la longueur soit prémarquée et la plante peut être offerte pour maintenir les boutures à la même hauteur.',
      p6: "Prenez la plante et roulez-la doucement en tenant les feuilles restantes et coupez les extrémités de tous les doigts afin qu'ils soient uniformes et aussi égaux que possible.",
      p7: "prenez de nouveau le scalpel et faites une coupe en biseau à 45 degrés sur l'extrémité de la branche pour augmenter la surface.",
      p8: "Trempez dans l'hormone d'enracinement, autant que nécessaire et aussi profondément que le trou dans lequel vous insérerez la plante.",
      p9: "Une fois le plateau rempli, vaporisez le couvercle du plateau, réaffirmez le couvercle et rangez-le dans la zone d'éclairage appropriée.",
      Next: 'Transplants (rempotage)',
    },
    general: {
      Next: 'Retour à la bibliothèque',
      headetText: 'Conseils généraux',
      p1: 'La préparation est la clé pour déterminer vos résultats avec votre culture actuelle et bien sûr tout futur projet dans lequel nous nous engageons. Par conséquent, il est conseillé de chercher à clarifier les événements futurs autant que possible, de planifier et de planifier encore et encore, après tout le planning continu, nous pourrions vérifier notre planification. Nous faisons cela afin de maximiser nos chances de réussite, que nous pouvons être fiers de partager, que ce soit commercialement ou en privé.',
      list: [],
    },
    housekeeping: {
      HouseKeeping: 'Entretien ménager',
      p1: "Un bon entretien ménager est une partie intégrante de toute entreprise de construction ou d'agriculture progressive et est considéré comme d'une importance capitale. Les déversements doivent être traités rapidement sans excuse. Avec la bonne attitude, votre espace de culture sera une cible pour de nombreux ravageurs et pathogènes. Les ravageurs cherchent de la nourriture à travers les déchets, la poussière et les feuilles de plantes, d'autres insectes cherchent les plantes attirant les ravageurs. Plus vous laissez les choses sans concernant l'entretien ménager, plus large est la fenêtre que vous vous laissez pour un événement malheureux se produisant dans votre jardin intérieur.",
      p2: "Sans aucun doute, l'une des choses les plus faciles et les plus simples que vous puissiez faire en tant que cultivateur est de garder vos zones de travail propres en tout temps. Cela demande beaucoup d'efforts et parfois autant de temps pour nettoyer que pour créer le désordre que vous avez fait au départ.",
    },
    humidity: {
      HeaderText: 'Humidité',
      p1: "L'humidité est la quantité d'eau présente dans l'air circulant actuellement dans votre pièce. Elle a une source et une bouche de la même manière qu'une rivière, sauf qu'il n'y a pas de véritable chemin de l'un vers l'autre. L'air est ambigu mais, en tant que collectif, il peut non seulement être expérimenté mais aussi ressenti et discuté par beaucoup.",
      p2: "Le déficit de pression de vapeur sera discuté plus en détail et les graphiques pourront être observés. La température et l'humidité doivent être symbiotiques dans leur relation mutuelle et avoir plus d'une vitesse. Avec la nuit plus fraîche pendant que les plantes dorment, l'humidité peut changer pour refléter ces fluctuations de température, ce qui permettra la croissance la plus rapide possible pour vos plantes.",
      p3: "Les environnements scellés bénéficieront grandement de la déshumidification, surtout dans la mesure où elle éliminera l'humidité de la pièce avant d'atteindre la mini-split ou l'unité de climatisation.",
      p4: "Les environnements non scellés nécessiteraient très probablement l'utilisation d'une « pièce de respiration » qui traiterait l'air avant son passage dans votre jardin. Cela dit, un déshumidificateur placé dans une zone où il ne causerait aucun dommage aux plantes ou aux températures.",
      p5: "Les conditions humides apparaîtront finalement plus chaudes que la température ne le permettrait. Dans des cas extrêmes, vous observerez de la condensation apparaissant lorsque les températures chaudes et fraîches ont leur effet l'une sur l'autre.",
      p6: "Les conditions sèches se feront sentir avec les lèvres qui s'assèchent avec une durée de séjour prolongée, les plantes se dessèchent plus rapidement que ce que la plante absorbera. permettra de croire. Dans des cas extrêmes, vous observerez de la condensation apparaissant lorsque les températures chaudes et fraîches ont leur effet l'une sur l'autre.",
      p7: "Si vous cultivez dans un environnement tropical, surtout dans une zone construite, vous allez rencontrer une humidité relative élevée sur vos plantes extérieures. Bien que cela soit bénéfique pour une multitude de vie sur la planète, le cannabis et d'autres plantes ne se comportent pas aussi bien dans de telles conditions difficiles.",
      p8: ' Cultiver dans des climats plus frais peut être plus bénéfique mais pourrait également nécessiter un calendrier de plantation et de timing plus strict par rapport aux saisons.',
      Next: 'Nutriments',
    },
    library: {
      list: [
        {key: 'checklist', label: 'Liste de départ'},
        {key: 'housekeeping', label: 'Entretien ménager'},
        {key: 'smell', label: 'Odeur'},
        {key: 'strain', label: 'Cultivars'},
        {key: 'container', label: 'Conteneurs'},
        {key: 'medium', label: 'Milieux'},
        {key: 'air', label: "Circulation d'air"},
        {key: 'humidity', label: 'Humidité'},
        {key: 'nute', label: 'Nutriments'},
        {key: 'phase', label: 'Phases'},
        {key: 'cutting', label: 'Prise de boutures / Clonage'},
        {key: 'repots', label: 'Rempotage'},
        {key: 'pest', label: 'Ravageurs'},
        {key: 'crops', label: 'Cultures rotatives'},
        {key: 'general', label: 'Conseils généraux'},
      ],
      TapMore: "Appuyez sur l'un des liens ci-dessous pour en savoir plus.",
      SubHeaderText:
        'Les informations contenues dans cette bibliothèque seront plus que suffisantes pour vous lancer dans votre voyage, confiant et conscient, de sorte que lorsque vous rencontrerez des obstacles et des défis (et vous en rencontrerez !), vous aurez également les compétences pour surmonter ces problèmes auxquels votre environnement de culture sera inévitablement exposé.',
      HeaderText: 'La bibliothèque BudDEE.',
    },
    light: {
      p1: 'La préparation est la clé pour déterminer vos résultats avec votre culture actuelle et bien sûr tout futur projet dans lequel nous nous engageons. Par conséquent, il est conseillé de chercher à clarifier les événements futurs autant que possible, de planifier et de planifier encore et encore, après tout le planning continu, nous pourrions vérifier notre planification. Nous faisons cela afin de maximiser nos chances de réussite, que nous pouvons être fiers de partager, que ce soit commercialement ou en privé.',
      p2: "Avoir votre prochaine ligne de plantes derrière celles qui se terminent peut être intimidant et nécessiter également plus d'espace et de planification.",
      HeaderText: 'Éclairage',
      Next: "Circulation d'air",
    },
    medium: {
      HeaderTxt: 'Milieux',
      p1: 'Le choix du milieu est très similaire à celui de la sélection de conteneur dans la mesure où il sera finalement déterminé par votre méthode de culture choisie, que ce soit hydro, aéro, avec du sol/coco, en intérieur/extérieur.',
      Next: 'Éclairage',
      list: [
        'Sol :',
        'Argile :',
        'Fibre de coco :',
        'Tourbe de coco :',
        'Hydroton :',
        'Perlite :',
      ],
    },
    nute: {
      p1: "Buddee reconnaît le travail formidable de HydroBuddy, un atout précieux pour créer vos propres nutriments solubles en fonction de l'approvisionnement local en eau, quelle que soit la source d'eau à laquelle vous avez accès.",
      p2: "La conductivité électrique (EC) pour les plantes en croissance peut être de 0,8 à 1,1, avec une concentration en ppm ne dépassant pas 700. Des concentrations plus faibles sont nécessaires pour les jeunes plants et normalement, l'eau apportée avec le bon pH suffira.",
      p3: "Le pH de la solution nutritive variera entre 5,8 et 6,5. Les plantes absorbent le plus de nutriments de la solution à la concentration en ions hydrogène. Le pH est influencé par la température et il y a légèrement plus d'oxygène présent dans l'eau à des températures plus fraîches.",
      p4: 'Les nutriments sont un terme confus, la vie en a besoin (nutrition/nutriment).',
      p5: 'Les produits de marque sont un secteur florissant sur les marchés mondiaux et il existe un grand nombre de produits parmi lesquels choisir pour commencer vos voyages de culture.',
      p6: "Buddee recommande House and Garden, Dutch Pro, BioBuzz, pour n'en citer que quelques-uns.",
      p7: "Beaucoup de pseudo-sciences se sont emparées de la culture du cannabis, surtout dans la plupart des pays où son état naturel est préservé et où la nature fournit toujours. Cependant, dans les pays où la légalité de la culture du cannabis a pu être remise en question pendant de nombreuses années (et continue de l'être aujourd'hui peut-être).",
      p8: "Mélanger vos propres nutriments à l'aide de sels d'engrais sera le moyen le moins cher et le plus instructif de comprendre la simplicité avec laquelle la culture du cannabis se pratique de nos jours.",
      HeaderText: 'Nutriments',
      Next: 'Phases',
    },
    pest: {
      HeaderText: 'Ravageurs et pathogènes',
      Next: 'Cultures continuelles',
      p1: 'Nous recommandons de ne pas utiliser de produits chimiques nocifs tels que les insecticides, dans la mesure du possible.',
      p2: "Nous recommanderions de désinfecter soigneusement toute grande opération de culture entre les cycles et de nettoyer fréquemment tout ce qui est lié à l'intégrité opérationnelle.",
      p3: "Les acariens sont un véritable problème, nous ne laissons pas le problème s'installer si nous le voyons. Ce sont des arachnides, et aiment le vent autant que vos plantes et peuvent même l'utiliser comme un courant de déplacement, donc une fois que vous en avez quelques-uns, il ne faudra pas longtemps pour en avoir beaucoup plus.",
      p4: "L'oïdium signifie que vous avez besoin d'un ou plusieurs déshumidificateurs à un moment donné dans le voisinage, ou un problème sérieux d'humidité et de stagnation.",
    },
    phases: {
      HeaderText: 'Phases',
      Next: 'Arrosage',
      p1: 'Le mode végétatif peut consister en des heures de lumière variant de 14 à 24.',
      p2: 'Le mode floraison peut consister en des heures de lumière variant de 12 à 13.',
      p3: "Il faut environ entre 10 et 14 jours pour que l'hormone de croissance change et que la floraison commence. Pendant ce temps, la plante augmentera sa vitesse de croissance en préparation des bourgeons qui la précipiteront.",
      p4: "Pendant qu'une plante est en fleur, si le besoin se fait sentir de revenir à un état végétatif, il faut laisser le temps à la plante de rétablir non seulement les niveaux d'hormones correspondant à l'action requise mais aussi de se purger des hormones restantes. Cela signifierait tailler toute activité florale de la plante pour permettre une transition rapide. Les boutures prélevées sur des plantes en fleurs recevront également un taux de croissance plus lent. La taille est une mesure intéressante lors de la comparaison de cette culture avec une autre.",
    },
    repots: {
      HeaderText: 'Transplantation (rempotage)',
      Next: 'Ravageurs et pathogènes',
      p1: "Nous replantons toujours notre stock avant qu'ils ne deviennent trop voraces dans leur environnement et que l'arrosage ne pose problème.",
    },
    smell: {
      HeaderText: 'Odeur',
      Next: 'Sélection de variétés',
      p1: "La plupart des gens ne peuvent ou ne veulent tout simplement pas apprécier l'odeur créée par le cannabis frais, ni le cannabis séché, ni le cannabis fumé. Pour la partie concernée, cela peut être une raison motivée financièrement ou une raison plus personnelle où vous, vos amis ou votre famille pourriez être habitués.",
      p2: "Cette intolérance compréhensible de la société a créé un besoin de cacher les odeurs impliquées au grand public, ce qui sert également de mesure préventive pour les jardins urbains qui pourraient craindre une saisie de biens ou d'équipements, que ce soit par la police ou les voleurs.",
      p3: "Vous devrez filtrer l'air, une quantité raisonnablement suffisante pour que les particules responsables de l'émission de l'odeur soient évacuées de la pièce à travers du charbon actif (charbon de bois), éliminant ainsi l'odeur et expulsant l'air vicié. Le filtre devra être calibré avec les conditions de la pièce (taille, température, humidité) et être de taille suffisante car il créera un effet d'étranglement sur votre sortie d'air d'échappement si vous n'utilisez pas un environnement scellé.",
      p4: "Si vous avez la chance que votre environnement ne pose aucun problème de détection ou n'est pas détectable, alors la filtration au charbon n'est pas une nécessité pour une récolte optimale. Si vous êtes peut-être sur un budget et pouvez tolérer l'arôme, vous pouvez vous en passer.",
    },
    strain: {
      HeaderText: 'Sélection de variétés',
      Next: 'Conteneurs',
      p1: "Le cannabis le mieux goûté et le plus fort sera toujours celui qui a été fini correctement, autorisé à pousser sans contamination, y compris même les empreintes digitales. Les meilleurs bourgeons de cannabis auront été séchés dès le moment de la récolte de manière cohérente dans un environnement propre et fiable, suspendus jusqu'à ce que la teneur en humidité soit en équilibre optimal avec ses composés organiques. Cette fleur de cannabis durera plus longtemps que d'autres formes avec une durée de conservation impressionnante.",
      p2: "La beauté est dans l'œil de celui qui regarde, c'est aussi très souvent le cas pour déterminer ce qui est meilleur que l'autre, étant donné la diversité des perspectives qui existent dans le monde entier concernant le marché du cannabis, illicite et légal.",
      p3: 'Cultiver des sativas dans des climats tropicaux dans des habitations urbaines avec une humidité élevée et un cycle jour/nuit constant de 12/12 aura plus de chances de survie sans aide que leurs homologues indica, courts, trapus, buissonnants et condensés.',
      p4: "Les installations intérieures permettront un certain degré de liberté en ce qui concerne la sélection des variétés. L'espace entre le repère et la lumière est le facteur de gouvernance ultime.",
      p5: "D'un point de vue financier, il est le plus souvent préférable de suivre le courant et de viser à tirer le meilleur parti de ce que vous avez localement.",
    },
    watering: {
      HeaderText: 'Arrosage',
      Next: 'Prise de boutures',
      p1: 'Le vidage complet du conteneur encouragera une propagation racinaire plus importante.',
      p2: "L'arrosage manuel est fastidieux et bénéficierait certainement de la pré-planification de la position de vos plantes afin de pouvoir toujours atteindre celles qui peuvent être situées dans un groupe ou un ensemble de plantes.",
      p3: "La fibre de coco nécessitera un arrosage plus régulier que le sol et nécessitera également que le milieu soit entièrement lessivé par au moins une goutte d'eau en excès, bien que 20 % soit la recommandation, ce chiffre est un gaspillage et nécessite plus d'efforts pour le nettoyer ou le retirer plus tard.",
      p4: 'Le sol aura et sera composé de lui-même et nécessitera au moins une certaine teneur en humidité entre les arrosages.',
    },
    faq: {
      top20faq: [
        {
          question:
            'Quels sont les besoins de base pour cultiver du cannabis en intérieur ?',
          answer:
            "Un espace adéquat, une ventilation appropriée et un accès à l'électricité sont bien sûr essentiels. Des conteneurs de plantes, des milieux de culture tels que le sol, la fibre de coco, la laine de roche, le feutrage. Une source de lumière adéquate est primordiale, qu'elle soit naturelle ou artificielle. Une solution nutritive adaptée aux plantes de cannabis. Un kit de test de pH. Des outils de surveillance de la température et de l'humidité.",
          keyPoints: [
            'Espace adéquat',
            'Ventilation appropriée',
            "Accès à l'électricité",
            'Conteneurs de plantes',
            'Milieu de culture',
          ],
          moreinfo: '',
        },
        {
          question:
            'Comment puis-je aménager une chambre de culture en intérieur pour le cannabis ?',
          answer:
            "Choisissez un emplacement approprié avec suffisamment d'espace et un bon accès à l'électricité. Installez un système de ventilation et de circulation d'air approprié. Assurez une température et une humidité constantes. Installez des lampes de culture à des hauteurs et des angles appropriés. Disposez les plantes dans un agencement organisé pour un accès et un entretien faciles.",
          keyPoints: [
            'Emplacement approprié.',
            'Alimentation électrique fiable.',
          ],
          moreinfo: '',
        },
        {
          question:
            'Quels types de lampes dois-je utiliser pour la culture de cannabis en intérieur ?',
          answer:
            "Des lampes à décharge haute intensité (HID) telles que les lampes HPS (sodium haute pression) ou MH (halogénure métallique). Des lampes de culture LED (diode électroluminescente). Des lampes fluorescentes (T5, CFL) pour les semis et la croissance végétative. Cependant, en raison de la consommation d'énergie et des avancées technologiques, les LED suffisent pour une culture efficace dans les endroits où les lampes HPS ne sont pas facilement disponibles.",
          keyPoints: ['Dépend du pays.', 'HPS/Metal Halide ou une LED.'],
          moreinfo: '',
        },
        {
          question:
            'Quel est le meilleur mélange de sol pour la culture de cannabis ?',
          answer:
            'Un sol bien drainant avec un mélange équilibré de nutriments. Des mélanges de sols organiques avec de la perlite ou de la vermiculite pour une aération (au moins 40 % -60 %). Un sol équilibré en pH autour de 6,0-6,5 pour une absorption optimale des nutriments.',
          keyPoints: ['Drainage rapide.', 'Contenant des agrégats.'],
          moreinfo: '',
        },
        {
          question:
            'À quelle fréquence dois-je arroser mes plants de cannabis ?',
          answer:
            "L'arrosage lorsque le pouce de terre supérieur est sec est la norme d'or. Évitez l'excès d'arrosage. Ajustez la fréquence d'arrosage en fonction de la taille de la plante, de la taille du conteneur et des conditions environnementales.",
          keyPoints: [
            'Aussi souvent que possible.',
            'Laissez la plante avoir soif.',
          ],
          moreinfo: '',
        },
        {
          question:
            'Quels nutriments les plants de cannabis ont-ils besoin pendant les différentes étapes de croissance ?',
          answer:
            'Azote (N), phosphore (P) et potassium (K) pour la floraison et le développement des bourgeons. Des micronutriments tels que le calcium, le magnésium et le fer pour la santé générale.',
          keyPoints: ['Tous.'],
          moreinfo: '',
        },
        {
          question:
            "Comment contrôler les niveaux d'humidité dans ma chambre de culture ?",
          answer:
            "Utilisez un déshumidificateur pour réduire les niveaux d'humidité s'ils sont trop élevés. Augmentez la ventilation et la circulation de l'air. Surveillez les niveaux d'humidité avec un hygromètre et ajustez-les selon les besoins.",
          keyPoints: ['Déshumidificateur.', 'Défoliation.', 'Humidificateur.'],
          moreinfo: '',
        },
        {
          question:
            'Quelle plage de température est optimale pour les plants de cannabis ?',
          answer:
            '70-85°F (21-29°C) pendant la journée. 60-70°F (15-21°C) pendant la nuit.',
          moreinfo: '',
        },
        {
          keyPoints: ['Inspection régulière.', "Bonnes pratiques d'hygiène."],
          question:
            'Comment puis-je identifier et prévenir au mieux les parasites et maladies courants chez les plants de cannabis ?',
          answer:
            'Inspectez régulièrement les plantes à la recherche de signes de parasites tels que les acariens, les pucerons et les mouches blanches. Utilisez des pesticides biologiques ou chimiques au besoin. Maintenez une bonne hygiène et propreté dans la salle de culture pour prévenir la propagation des maladies.',
          moreinfo: '',
        },
        {
          keyPoints: ['Planification préalable'],
          question:
            'Quand et comment dois-je commencer à élaguer et à entraîner mes plants de cannabis ?',
          answer:
            "Taillez pendant la phase végétative pour enlever les branches inférieures et améliorer la circulation de l'air. Utilisez correctement des techniques telles que le topping, le FIMing et le LST (Low-Stress Training) pour favoriser un profil de plante adapté aux besoins de votre environnement.",
          moreinfo: '',
        },
        {
          keyPoints: ['Papier essuie-tout', 'Plantation directe.'],
          question:
            'Quels sont les différentes méthodes de germination des graines de cannabis ?',
          answer:
            "Méthode du papier essuie-tout. Plantation directe dans un petit pot avec un sol humide. Utilisation d'un plateau de semis avec un dôme d'humidité.",
          moreinfo: '',
        },
        {
          keyPoints: ['Inspection régulière pendant la phase de floraison.'],
          question:
            'Comment déterminer le sexe des plants de cannabis et pourquoi est-ce important ?',
          answer:
            'Si vous utilisez des graines régulières ou des variétés inconnues, assurez-vous toujours que les mâles ne se mélangent pas aux femelles que vous souhaitez faire fleurir, et que, une fois en floraison, tous les mâles sont séparés.',
          moreinfo: '',
        },
        {
          keyPoints: ['Planter le pot avant la plante.'],
          question:
            'Quelle est la meilleure façon de transplanter les plants de cannabis ?',
          answer:
            "Transplantez les plantules dans des pots plus grands une fois qu'elles ont dépassé leur conteneur actuel. Manipulez les racines délicatement pour éviter les dommages. Arrosez les plantes après le repiquage pour réduire le stress. Une plante a dépassé son pot lorsqu'elle a soif plus rapidement que votre capacité à arroser.",
          moreinfo: '',
        },
        {
          keyPoints: [
            'Plus de place pour la croissance des bourgeons.',
            'Plus de pistils blancs',
          ],
          question: 'Comment savoir quand récolter mes plants de cannabis ?',
          answer:
            'Laissez votre plante terminer sa floraison, ce qui se produit une fois que tous les pistils sont bien établis.',
          moreinfo: '',
        },
        {
          question:
            'Quelles sont les différentes méthodes de séchage et de curing des bourgeons de cannabis ?',
          answer:
            "Suspendez les plantes tête en bas dans une pièce sombre et bien ventilée avec une humidité modérée. Taillez les bourgeons après le séchage et placez-les dans des bocaux hermétiques pour le curing. Ouvrez régulièrement les bocaux pour libérer l'excès d'humidité et prévenir la croissance de moisissures.",
          moreinfo: '',
        },
        {
          question:
            'Comment maximiser le rendement de mes plants de cannabis ?',
          answer:
            "Fournissez des conditions de croissance optimales, notamment en termes de lumière, de nutriments et d'environnement. Utilisez des techniques d'entraînement pour favoriser plusieurs sites de bourgeons et une répartition uniforme de la canopée. Choisissez des variétés à haut rendement adaptées à votre configuration de culture.",
          moreinfo: '',
        },
        {
          question:
            'Quelles sont les erreurs courantes à éviter lors de la culture du cannabis ?',
          answer:
            "Arroser trop ou pas assez. Ignorer les niveaux de pH de l'eau et du sol. Suralimenter ou sous-alimenter en nutriments. Une ventilation insuffisante entraînant des problèmes de moisissure et de parasites. Ne pas identifier correctement et éliminer les plants mâles pendant la phase de floraison.",
          moreinfo: '',
        },
        {
          question:
            'Comment créer un système de ventilation adéquat pour ma salle de culture ?',
          answer:
            "Installez des ventilateurs d'extraction pour évacuer l'air vicié et la chaleur. Utilisez des ventilateurs ou des évents d'entrée pour faire entrer de l'air frais. Envisagez d'utiliser des filtres à charbon pour contrôler les odeurs.",
          moreinfo: '',
        },
        {
          question:
            'Quelles sont les considérations légales pour cultiver du cannabis à domicile ?',
          answer:
            'Consultez les lois et réglementations locales concernant la culture du cannabis. Obtenez les permis ou licences nécessaires si requis. Assurez-vous de respecter les restrictions sur la quantité de plantes, leur hauteur et leur emplacement.',
          moreinfo: '',
        },
        {
          question:
            'Où puis-je trouver des informations et des ressources fiables pour la culture du cannabis ?',
          answer:
            'Forums en ligne et communautés dédiés à la culture du cannabis. Livres et guides sur les techniques de culture du cannabis. Magasins de culture locaux et dispensaires pour des conseils et des fournitures.',
          moreinfo: '',
        },
      ],
    },
  },
  database: {core: {}, actions: {}, options: {}, validation: {}},
  navigation: {
    nav_stack: {},
    bottomTab: {Save: 'Enregistrer', Next: 'Suivant'},
  },
};
