export const en = {
  core: {
    Cancel: 'Cancel',
    Confirm: 'Confirm',
    Code: 'en',
    Next: 'Next - ',
    headers: {
      bottomToolBar: {
        Home: 'Home',
        Plants: 'Plants',
        Environments: 'Environments',
        Settings: 'Settings',
        Back: 'Back',
        Next: 'Next',
        Save: 'Save',
        SAVE: 'SAVE',
      },
    },
    loading: {
      disclaimer: {
        DisplayPage: 'Page Displayed in',
        NotOlder: 'Not Older than 20?',
        Request:
          'We at Buddee require that you meet the legal age requiremnets of your area to view the information contained within this app.',
        DisclaimerText:
          'Please firstly confirm that you are indeed over 20 years of age and also that you are in agreement with the,',
        TermsLink: 'terms of use.',
        AcceptText: 'Accept',
        DeclineText: 'Decline',

        DefaultLanguage: 'English',
      },
      loadingIndicator: {Loading: 'Loading'},
    },

    errors: {},
  },
  actions: {
    plantAmountChoice: [
      {key: 'all', label: 'All'},
      {key: 'some', label: 'Some'},
    ],
    newAction: {
      Plant: 'Plant',
      Environment: 'Environment',
      HeaderMessage: 'Record Work',
      Water: 'Water',
      BugReport: 'Bug Report',
      Repot: 'Repot',
      Trim: 'Trim',
      Train: 'Train',
      Defoliate: 'Defoliate',
      Flush: 'Flush',
      Harvest: 'Harvest',
      Destroy: 'Destroy',
      ActionLabel: 'SAVE',
      SelectPlant: 'Select Batch/Plant!',
      SelectAction: 'Select An Action!',
      WaterOptions: 'Water Options:',
      placeholder: {
        Description: 'Add A Description (optional)',
        Amount: 'Enter amount (liters)',
        Ec: 'Enter Ec',
        Ph: 'Enter Ph',
        Time: 'Enter time taken (minutes)',
      },
      DestroyRoom: 'Destroy All Plants',
      WaterRoom: 'Water Room',
      MakeNutrient: 'Make Nutrient Solution',
      MixSolution: 'Mix Solution',
      DefoliateRoom: 'Defoliate Room',
      CleanRoom: 'Clean Room',
      ChangeLightSetting: 'Change Light Setting',
      FlushRoom: 'Flush Room',
      Other: 'Other',
      HarvestRoom: 'Harvest Room',
    },
  },
  calculators: {
    calculators: {
      HeaderText: 'Calculators',
      Co2: 'Co2 Calculator',
      Final: 'Final Yeild Calculator',
      Lighting: 'Lighting Calculator',
      Water: 'Water Usage Calculator',
      Electric: 'Electricity Calculator',
      elec: {
        Watts: 'Watts:',
        Day: 'Days FLower:',
        Week: 'Weeks Veg:',
        Rate: 'Rate (Kw/H):',
        Button: 'Calculate Electricity Cost',
        Answer: 'Answer:',
      },
      light: {
        Width: 'Width (m)',
        Length: 'Length (m)',
        Height: 'Height from ground (m)',
        Est: 'Estimated Wattage:',
        Watts: 'watts',
      },
      co2: {
        EnvLength: 'Environment Length (m):',
        EnvWidth: 'Environment Width (m):',
        EnvHeight: 'Environment Height (m):',
        Button: 'Calculate CO2 Needed',
        Result: '`CO2 Needed: ',
        Ppm: 'ppm',
      },
      yield: {
        Wattage: 'Wattage:',
        VegWeeks: 'Veg Weeks:',
        FlowerDays: 'Flower Days:',
        Button: 'Calculate Final Yield',
        Est: 'Estimated Final Yield:',
        Grams: 'grams',
      },
      water: {
        TimeVeg: 'Time Veg. (Weeks)',
        TimeFlower: 'Time Flower (Days)',
        PlantAge: 'Plant Age At Start Of Veg. (Days)',
        Number: 'Number Of Plants',
        NuteVeg: 'Nutrients Per Liter In Veg. (ml)',
        NuteFlower: 'Nutrients Per Liter In Flower (ml)',
        Button: 'Calculate',
        Est: 'Estimated Water Needed:',
        Liters: 'liters',
        EstNuteVeg: 'Estimated Nutrients Needed In Veg.:',
        EstNuteFlower: 'Estimated Nutrients Needed In Flower:',
        Ml: 'ml',
      },
    },
    charts: {
      HeaderText: 'Charts',
      Ph: 'Ph Chart',
      Vpd: 'Vpd Chart',
      VpdExplain: 'Vpd Explained',
    },
  },
  environments: {
    addEnv: {
      LightData: [
        {
          key: 0,
          label: 'Light Emitting Diode (LED)',
        },
        {
          key: 1,
          label: 'Compact Fluorescent Light (CFL)',
        },
        {
          key: 2,
          label: 'High Pressure Sodium (HPS)',
        },
        {
          key: 3,
          label: 'Metal Halide',
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
      HeaderMessage: 'Create Environment',
      Name: 'Enter Name ',
      ActionLabel: 'SAVE',
      RoomMeasurements: 'Room Measurements:',
      OtherDetails: 'Other Details:',
      Aircon: 'Aircon',
      SealedRoom: 'Sealed Room',
      Dehumidifier: 'Dehumidifer',
      placeholder: {
        Sealed: 'Sealed Room',
        Dehumidifier: 'Dehumidifier',
        Aircon: 'Aircon',
        Resting: 'Resting Temperature (C)',
        Length: 'Length (M)',
        Width: 'Width (M)',
        Height: 'Height (M)',
        Quantity: 'Quantity',
        Watts: 'Watts',
        NamePlace: 'Name:',
        Name: 'Enter An Environment Name',
        Light: 'Select A Type',
        Hours: 'Enter The Amount Of Light Here...',
      },
      Lights: 'Lights:',
    },
    environments: {
      Envs: 'Environments',
      NoEnv: 'Opps, No Environments Found.',
      TapHere: 'Tap here to add one.',
    },
    env_list: {
      Plants: 'Plants',
      Lights: 'Lights:',
      Phase: 'Phase',
      Flowering: 'Flowering',
      Vegging: 'Vegetating',
      PlantsLow: 'plants',
      AddJournal: 'Add To Journal',
      Edit: 'edit',
      LightHours: 'Hours Of Light:',
      Placeholder: "'0 (off)'",
    },
  },
  guides: {
    BackLibrary: 'Back To Libary',
    BackHome: 'Back to home',
    TapHere: 'Tap Here To Read More...',
    TlDr: "TL;DR - Too long, Didn't read.",

    air: {
      tldr: [
        'Fresh air is your friend',
        'Air Refresh Rates',
        'Plants need breeze',
      ],
      HeaderText: 'Air',
      Next: 'Humidity',
      p1: 'The Constant movement of air is vital in a thrieving indoor garden. The leaves use the breeze to cleanse themselves and exchange gases, mould and pathogens hate moving fresh air and the wise saying is fresh air is your friend. This is true to most sense of the word, temperature plays a role in manageing the organisms availble through fresh air being constantly cycled into the system. screens and filters are advisable when in hotter climates with more mosquito and fly problems than colder climates.',
      p2: 'To calculate air movement in an unsealed room, you should allow your intake-outate to be set for at least one total recirculation of the environments entire area (height x width x length) per 3 minute cycle, this should be coupled with an option to blast the room with up to 3recirculations per 1 minute cycle. This can allow yourself to maintain a level of control throughout a range of phases, moisture contents, parasites, pathogens, bugs, mould, mildew, stagnation.',

      p3: 'Proper air movement is essential for preventing the buildup of heat and humidity, which can lead to the development of mold, mildew, and other fungal diseases. Stagnant air can also inhibit transpiration and nutrient uptake in plants, resulting in stunted growth and reduced yields.',
      p5: 'Temperature and humidity levels also play a vital role in cannabis cultivation, influencing various physiological processes such as transpiration, photosynthesis, and nutrient uptake. Maintaining stable temperature and humidity levels within the recommended ranges helps to prevent heat stress, moisture-related issues, and other environmental stressors that can compromise plant health and yield. ',
      p4: 'By promoting air circulation with fans or ventilation systems, growers can create a more uniform and stable microclimate, minimizing the risk of environmental stressors and promoting healthy plant development. In addition to airflow, air quality is another crucial factor that growers must consider. Poor air quality, characterized by high levels of pollutants, pathogens, or airborne contaminants, can negatively impact plant health and productivity.',
      p6: 'Additionally, proper temperature and humidity control can promote optimal resin production, terpene expression, and cannabinoid potency in cannabis flowers. Water content in the growing medium is another critical factor that directly affects plant health and growth. Cannabis plants require consistent and adequate hydration to support essential physiological processes such as nutrient absorption, cell expansion, and metabolism. Insufficient water availability can lead to dehydration, wilting, and nutrient deficiencies, while excessive water content can cause root rot, oxygen deprivation, and other water-related issues. By monitoring and adjusting irrigation practices based on plant needs and environmental conditions, growers can ensure proper water management and optimize plant health and productivity. Cleanliness and hygiene are fundamental principles of successful cannabis cultivation, contributing to disease prevention, pest management, and overall crop quality. Maintaining a clean and sanitized growing environment helps to minimize the risk of contamination, pathogens, and pest infestations, reducing the need for chemical interventions and ensuring the health and safety of both plants and growers. Regular sanitation practices, such as disinfection of equipment, tools, and growing surfaces, as well as proper waste management and hygiene protocols, are essential for preventing the spread of diseases and maintaining a healthy cultivation environment. Consistency is key to achieving consistent and predictable results in cannabis cultivation. By maintaining stable environmental conditions, including air quality, temperature, humidity, water content, and cleanliness, growers can create an optimal growing environment conducive to healthy plant growth and development. Consistent management practices, regular monitoring, and proactive adjustments based on plant response and environmental changes are essential for achieving optimal yields, quality, and potency in cannabis crops.',
    },
    checklist: {
      HeaderText: 'Checklists',
      Next: 'House Keeping',
      checklist: [
        {
          subHeader: 'Grow Room Basics:',
          list: [
            'Different Sized Plant Pots (potting up)',
            'Medium (soil,coco,NFT,rockwool)',
            'Watering Devices (automatic/manual)',
            'Drainage system (Bowsers, Plates, Trays, Inline-Pumps)',
            'Basic Tools (hammer, stapler, drill)',
            'Mylar sheeting/black and white',
            'Plant Training tools (green wire, netting, crimps)',
            'Acid (Nitric/Potassium)',
            'Bottled Plant Nutrients (A-B)',
          ],
          subList: {
            header: 'Optional:',
            list: [
              'Dehumidifiers',
              'Carbon Filter With An Inline fan',
              'Humidifier',
              'Nitrogen',
            ],
          },
        },

        {
          subHeader: 'Taking Cuttings:',
          list: [
            'Scalpels',
            'Scissors',
            'Root hormone',
            'Plant Cubes',
            'Cutting Board',
            'Coco Plugs/Rockwool Cubes/Soil Cubes',
          ],
        },
        {
          subHeader: 'Mixing Nutrients:',
          list: ['Jugs', 'Beakers', 'Labels', 'Spoons/Ladels/Mixers'],
        },
        {
          subHeader: 'Housekeeping Tools:',
          list: [':Broom', 'Hoover', 'Sponges', 'Mop', 'Rags'],
        },
      ],
    },
    containers: {
      tldr: [
        'Airpots best for soil/coco. ',
        'Roots need stability/Oxygen',
        'light, breatheable mixture.',
      ],
      HeaderText: 'Containers',
      Next: 'Mediums',
      p1: ' The Choice of container for the root stock and plant, will ultimately be decided by your chosen growing method. below are some of theavailble ones known by us, each style will have a caveat though.',
      p2: "Stunted Growth and Wilting: When cannabis plants do not receive enough water, they may exhibit signs of wilting and stunted growth. This occurs because water is essential for nutrient uptake and photosynthesis, both of which are crucial for plant growth and development. Nutrient Deficiencies: Inadequate water uptake can impair the plant's ability to absorb essential nutrients from the soil or growing medium. This can lead to nutrient deficiencies, characterized by symptoms such as yellowing leaves, leaf curling, and slowed growth. Increased Susceptibility to Stress and Pests: Dehydrated plants are more susceptible to environmental stressors, such as high temperatures or fluctuations in humidity. Additionally, stressed plants may attract pests such as spider mites or aphids, further exacerbating the damage. Root Damage and Desiccation: In severe cases of water deprivation, the plants roots may become damaged or desiccated, compromising their ability to absorb water and nutrients effectively. This can lead to root rot or other root-related issues, further hampering the plants health and growth.",
      list1: [
        {
          id: 'Airpots:',
          desc: 'Airpots are containers with holes in the side too allow a great amount of air to reach the root-stock, this essentially prunes the root in a similar way to how you would if you was to repot your mother plant after an extended use, with an airpot, that is less of a necessaisty as watering becomes in later stages of motherhood',
          image: '',
        },
        {
          id: 'Smart pots:',
          desc: 'Very similar to airpots and work in a similar way, employing air pruning to keep the rootzone healthy and aerated',
          image: '',
        },
        {
          id: 'Matting (NFT):',
          desc: 'These long rolls of matting allow the roots in an nft system cube to rset upon it and allow the roots to grow within it, watering timing is essential for the best results and as the plant increases in demand so should the thirst',
          image: '',
        },
        {
          id: 'Rockwool:',
          desc: 'rock is the standard cutting medium, its clean and easy to usem can translplant to biger cubes or go into pots, versatile, someitmes expensive compared with coco cubes if using for clones.',
          image: '',
        },
        {
          id: 'Aeroponic Pot Systems:',
          desc: 'Not tested personally by us, they allow limited results compared to a larger pot.',
          image: '',
        },
        {
          id: 'Guerilla:',
          desc: 'dig a hole outdoors and hope and prey for a result',
          image: '',
        },
        {
          id: 'Dug beds:',
          desc: '',
          image:
            'using a myriad of natural sources, create a rich and pleniful cocktail of organic nutrients that will last the comple span of your growing phases ',
        },
      ],
    },
    crops: {
      Next: 'General Tips',
      HeaderText: 'Continous Cycles',
      tldr: ['Preparation is key.', 'Ready for the date, before it.'],
      p1: 'Preparation is key in determining your results with your current grow and off course any future endeavours we invole ourselves in. therefore, it is advisable that we seek clarification of future events as much as pracival in that we plan and plan some more and then plan again, after all the continual planning we might check our planning. We do this so that we can maximise our changes at sucuring a success we can be both proud of and share whether commercially or privatly.',
      p2: 'Having your next line of plants behind the ones that are finihsing can be daunting and also require more room and planning.',
      p3: 'a well constructed and operational automatic system will save you time and headaches',
    },
    cuttings: {
      HowTo: ' Tap To Find Out How.',
      steps: [
        'Prepare all equipment and create a space to work in that is free from clutter',
        'Cut the plant branch leaving at least two nodes to work with',
        'Trim the cutting at a 45-degree angle just below a node to promote root growth. ',
        'Remove the lower leaves from the cutting to reduce transpiration and prevent excess moisture loss. Leave only a few leaves at the top of the cutting to photosynthesize and support new growth.',
        'Applying Rooting Hormone: Dip the cut end of the cutting into a rooting hormone powder or gel to stimulate root development and improve the success rate of rooting. Rooting hormones contain auxins, which encourage the formation of roots.',
        'Plant the prepared cutting in a small container filled with a well-draining rooting medium, such as perlite, vermiculite, or a soilless seedling mix. Ensure that the rooting medium is moist but not waterlogged.',
        'Place the container with the cutting in a propagator or a humidity dome to maintain high humidity levels around the cutting.',
        'Place the cutting in a location with bright, indirect light. Avoid placing the cutting in direct sunlight, as this can cause excessive transpiration and stress on the cutting.',
        'Rooting typically takes 1-3 weeks, depending on environmental conditions and the cultivar. Be patient and avoid disturbing the cutting during this time',
      ],
      tldr: [
        'Work quickly.',
        'use sharp tools.',
        'Avoid pinching stems.',
        'Not to wet, Not to dry.',
        'PhD water is enough',
      ],
      HeaderText: 'Taking Cuttings',
      p1: '  Once a day you must clear the tray lid of excess moisture caused from   either teh moisture in the medium, or the breathing from the plants, eitherway the water must be clearwed regularry to stop mould or other problems arising.',
      p2: 'after 7 days you may need to water the cutting with a phd water solution, the roots wil be displaying themselves within 4 days and this will ensure they all thrive.',
      p3: 'Begin by cutting the inteneded cutting from the tree, noramlly the tree will be completely pruned if its a mother plant, otherwise you can be more selecting of where you choose to cut, if cutting from plants you intend to bloom shortly.',
      p4: 'you can collect cuttings for 5 minutes or so in a glass of water if your taking many at once, cut the branch and place into the water to stop oxygen from entering the stem.',
      p5: 'If the size of the cuttings should be kept uniform( which is good practice), a chopping board of such item whereby the length is pre marked and the plant can be offered up to in order to keep cuttings the same height.',
      p6: ' take the plant and gently roll it together with holding the remaining leaves and cut the ends of all of the fingers so that they are uniform and as even as can be.',
      p7: 'take the scalpel again and make a 45 degree slice on the end of the branch to incraese the surface area.',
      p8: 'dip into the root hormone, only as much as nessecary and as deep as the hole youll be inserting the plant into is.',
      p9: 'Once the tray is filled, mist the lid of the tray, re affirm the lid and stow away in the correct lighting area.',
      p10: 'Taking cuttings involves removing a portion of a healthy plants stem or shoot and encouraging it to develop roots and grow into a new plant. The process typically begins with selecting a healthy and vigorous mother plant with desirable characteristics such as growth habit, flower color, or aroma. ',
      p11: 'A clean, sharp blade is used to make a diagonal cut just below a node (where leaves or branches emerge) on the selected stem. Hormone rooting powder or gel may be applied to the cut end to stimulate root growth before placing the cutting in a rooting medium such as water, soil, or a specialized rooting mix.',
      p12: "The appearance of burnt tips on the mother plant after cloning is usual. even at a reduced nutrient strength. this is an effct of the stress of being cut. When a plant experiences stress or loss of pressure, it may redirecets its resources to repair and regrowth. This will manifest itself as 'nutrient burn', which is characterized mainly by the tips of the leaves turning brown or appearing burnt",
      Next: 'Transplants (repotting)',
    },
    faq: {
      More: 'Press For More Info...',
      Hide: 'Hide',
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
            'Enthusism',
          ],
          moreinfo: [
            'dont be disapointed with failure, only learn from it, there is always a lesson to learn from our mistakes that will help us tame your mistakes.',
          ],
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
        'Below are a selection of frequently asked questions asked around the internet with buddees suggested advice preceding.',
    },
    general: {
      Next: 'Back To Library',
      HeaderText: 'General Tips',
      p1: 'Preparation is key in determining your results with your current grow and off course any future endeavours we invole ourselves in.',
      p2: 'Therefore, it is advisable that we seek clarification of future event as much as pracival in that we plan and plan some more and then plan again, after all the continual planning we might check our planning. We do this so that we can maximise our changes at sucuring a success we can be both proud of and share whether commercially or privately.',
      p3: 'Creating the ideal environment is crucial for maximizing plant growth and development. This includes controlling factors such as temperature, humidity, light intensity, and air circulation. Maintaining a consistent environment throughout the grow cycle helps promote healthy growth, minimize stress, and prevent issues such as mold, pests, and nutrient deficiencies.',
      p4: 'A and B nutrient formulas provide essential macronutrients and micronutrients necessary for plant growth and development. These formulas are typically balanced to provide the correct ratios of nutrients needed at different stages of the plants life cycle. By using a simplified nutrient regimen, growers can streamline their feeding schedules and minimize the risk of nutrient imbalances or overfeeding.',
      p5: 'Understanding the specific requirements of the chosen cannabis strain, along with the characteristics of the lighting system and duration of the growth cycle, is essential for achieving optimal results. Different strains may have varying nutrient needs, growth patterns, and flowering times. Tailoring the growing environment and nutrient regimen to suit the specific requirements of the strain can help maximize its potential. Adjusting light intensity, spectrum, and photoperiod according to the stage of growth (vegetative vs. flowering) can enhance plant health, cannabinoid production, and overall yield.',
      p6: 'Despite simplifying the cultivation process, its essential to monitor plant health and growth closely. Regular observation allows growers to detect any issues early and make necessary adjustments to maintain optimal conditions. Keeping detailed records of environmental parameters, nutrient applications, and plant responses can help growers fine-tune their approach over time and achieve consistent results.',
      p7: 'By focusing on creating an optimal growing environment and providing essential nutrients, growers can produce high-quality cannabis with robust cannabinoid and terpene profiles. Maximizing yield involves optimizing plant health, promoting vigorous growth, and ensuring efficient nutrient uptake. With the right approach, growers can achieve impressive yields while maintaining product quality and consistency. In conclusion, simplifying the cultivation process by prioritizing environmental control and using basic nutrient formulas can be highly effective in maximizing the profile and yield of cannabis plants. By focusing on the essentials and optimizing key variables, growers can achieve excellent results with greater efficiency and consistency.',

      list: [
        'Make special efforts to keep the strains you love.',
        'Gardening/farming is ardous work, be prepared to get it done!',
      ],
    },
    housekeeping: {
      tldr: [
        'Make a mess, clean it quick',
        'Keep tidy at all times',
        'Clean pots before/after use',
        'Clean room between cycles',
        'Dont bring "outside" In',
      ],
      HeaderText: 'House Keeping',
      p1: 'Good house keeping is an integral part of any progressive contruction or farming outfit or operation and is considered of utmost importance, spillages must be dealt with promptly without excuse, with the right attitude, your growing area will be a target to many pests and pathogens.',
      p2: 'Pests seek food through scraps dust and plant folliage, other bugs seek the pests seeking plants, the longer you leave things with concern to house keeping, the wider the window you leave yourself for an unfortuante happening, happening within your indoor garden.',
      p3: 'Without a doubt one of the easiest and simpliest things you can do for yourself as a grower is to keep your work areas clean at all times, it takes alot of effort and sometimes just as much time cleaning up as it does take to craete the mess you made in the first place.',
      Next: 'Smell',
    },
    humidity: {
      tldr: ['65 RH and 24 C.'],
      HeaderText: 'Humidity',
      p1: 'Humidity is the amount of water that is present in the air currently circulating your room, it has a source and a mouth very much in the same way as a river would except theres no true path from either twoard the other. air is ambigous but as a collective, can be not only experienced but felt and discussed by many.',
      p2: 'Temperature and humidity must symbiotic in their relationship with each other, and have more than one gear. With the night time being cooler as plants are sleeping teh humidity can change to reflect theses temperature fluxuations also, this will enable the fastest growth possible for your plants.',
      p3: 'Sealed environments will benefit greatly from dehumidification, especially in that it will be removing the moisture from the room before hitting the mini split of airconditioning unit.',
      p4: 'Unsealed environments would most likely require the use of a "lung room" that would be treating the air before its journey through your garden, That being said, a dehumidifier place in an area where it would not do any damage to plants or temperatures.',
      p5: 'Wet conditions will ultimately appear hotter that the temperature would allow your to beleive, in extreme cases youll observe condensation appearing as hot and cooler temperatures have their effec on each other.',
      p6: 'Dry conditions will be felt with the lips drying out with extend and prolonged tenure, plants drying out faster than what the plant will absorb. would allow your to beleive, in extreme cases youll observe condensation appearing as hot and cooler temperatures have their effec on each other.',
      p7: 'If your growing in a tropical environment, especially within a built up area, your going to be experiencing a high relative humidity on your outside plants. This whilst is beneficial to a breadth of life on the planet, cannabis and other periniels do not fare quite so well in such harsh conditions.',
      p8: ' Growing in cooler climates can be more benefiacal but might also require sticter planting schedule and timing with reards to the seasons.',
      Next: 'Nutrients',
    },
    library: {
      list: [
        {key: 'checklist', label: 'Starting Checklist'},
        {key: 'housekeeping', label: 'House Keeping'},
        {key: 'smell', label: 'Smell'},
        {key: 'strain', label: 'Strains'},
        {key: 'container', label: 'Containers'},
        {key: 'medium', label: 'Mediums'},
        {key: 'lights', label: 'Lights'},
        {key: 'air', label: 'Air Circulation'},
        {key: 'humidity', label: 'Humidity'},
        {key: 'nute', label: 'Nutrients'},
        {key: 'phases', label: 'Phases'},
        {key: 'watering', label: 'Watering'},
        {key: 'cutting', label: 'Taking Cuttings/Clones'},
        {key: 'repots', label: 'Repotting'},
        {key: 'pest', label: 'Pests'},
        {key: 'crops', label: 'Rotational Crops'},
        {key: 'harvest', label: 'Harvest'},
        {key: 'drying', label: 'Drying'},
        {key: 'after', label: 'After Care'},
        {key: 'general', label: 'General Tips'},
      ],
      TapMore: 'Tap one of the links below to read more.',
      SubHeaderText:
        ' Information contained within this library will be more than enough to begin you on your journey, self-confidentand aware so that when you come up to obstacles and challenges (and you will!), and also have the skill-set to overcome these problems that your growing environment will undoubtedly find itself supceptible to.',
      HeaderText: 'The BudDEE Library.',
    },
    light: {
      tldr: ['Cheap Price, Cheap Performance', 'Electricity isnt free'],
      p1: 'Preparation is key in determining your results with your current grow and off course any future endeavours we invole ourselves in. therefore, it is advisable that we seek clarification of future events as much as pracival in that we plan and plan some more and then plan again, after all the continual planning we might check our planning. We do this so that we can maximise our changes at sucuring a success we can be both proud of and share whether commercially or privatly.',
      p2: 'Having your next line of planst behind the ones that are finihsing can de daunting and also require more room and planning.',
      HeaderText: 'Lights',
      Next: 'Air Circulation',
      lights: [
        {
          id: 'T5 Fluorescent Lights:',
          'Spectrum:':
            'T5 fluorescent lights typically provide a balanced spectrum with peaks in the blue and red wavelengths, suitable for the full growth cycle of plants.',
          'Intensity:':
            'Moderate to high intensity, depending on the wattage and distance from plants.',
          'Efficiency:':
            'T5 fluorescent lights are relatively efficient and produce minimal heat compared to other lighting options.',
          'Lifespan:':
            'Typically have a lifespan of around 10,000 to 20,000 hours.',
          'Coverage:':
            'Provide good coverage and uniform light distribution, suitable for small to medium-sized grow spaces.',
        },
        {
          id: 'Compact Fluorescent Lights (CFL):',
          'Spectrum:':
            'CFL bulbs are available in various color temperatures, including warm white, cool white, and daylight, allowing for customizable light spectra.',
          'Intensity:':
            'Moderate intensity, suitable for supplemental lighting or small-scale grow operations.',
          'Efficiency:':
            'CFL bulbs are energy-efficient and produce less heat compared to incandescent bulbs.',
          'Lifespan:':
            'Generally have a lifespan of around 6,000 to 15,000 hours.',
          'Coverage:':
            'Suitable for small grow spaces or as supplemental lighting alongside other light sources.',
        },
        {
          id: 'LED (Light Emitting Diode) Lights:',
          'Spectrum:':
            'LED grow lights offer customizable spectra with specific wavelengths tailored to different stages of plant growth.',
          'Intensity:':
            'High intensity with efficient light output, providing optimal conditions for plant growth.',
          'Efficiency:':
            'LED lights are highly energy-efficient and produce minimal heat, resulting in cost savings and reduced risk of heat stress for plants.',
          'Lifespan:':
            'Typically have a lifespan of around 50,000 to 100,000 hours, significantly longer than traditional lighting options.',
          'Coverage:':
            'LED grow lights offer versatile coverage options and can be used in various grow setups, from small indoor gardens to large-scale operations.',
        },
        {
          id: 'High-Pressure Sodium (HPS) Lights:',
          'Spectrum:':
            'HPS lights emit a spectrum rich in orange-red wavelengths, which are ideal for promoting flowering and fruiting in plants.',
          'Intensity:':
            'High intensity, providing strong light penetration and coverage for larger grow spaces.',
          'Efficiency:':
            'HPS lights are less energy-efficient compared to LED lights but are still widely used for their effectiveness in promoting flowering.',
          'Lifespan:':
            'Generally have a lifespan of around 10,000 to 20,000 hours.',
          'Coverage:':
            'Suitable for larger grow spaces and commercial operations due to their high intensity and light penetration capabilities.',
        },
        {
          id: 'Metal Halide (MH) Lights',
          'Spectrum:':
            'MH lights emit a bluish-white spectrum rich in blue wavelengths, which are beneficial for vegetative growth and foliage development.',
          'Intensity:':
            'Moderate to high intensity, suitable for the vegetative stage of plant growth.',
          'Efficiency:':
            'MH lights are relatively energy-efficient and produce moderate heat compared to HPS lights.',
          'Lifespan:':
            'Typically have a lifespan of around 6,000 to 15,000 hours.',
          'Coverage:':
            'Often used in combination with HPS lights in dual-spectrum lighting setups, providing balanced light coverage for the entire growth cycle of plants.',
        },
      ],
    },
    medium: {
      tldr: ['Master whatever you choose'],
      HeaderText: 'Mediums',
      p1: ' The Choice of medium is very similar to that of the container selection in that it will ultimately be decided by your chosen growing method, either hydro, aero, with soil/coco, indoor/outdoor.',
      p2: 'Soil is perhaps the most traditional and widely used medium for growing cannabis. It offers a familiar and forgiving environment for plants, providing essential nutrients, moisture retention, and microbial activity. High-quality soil blends are enriched with organic matter, beneficial microbes, and essential nutrients, promoting robust root development and overall plant health. Soil-based cultivation is relatively straightforward and suitable for novice growers, requiring minimal equipment and expertise. Coco coir, derived from the husks of coconuts, has gained popularity among cannabis cultivators in recent years. It offers the benefits of both soil and hydroponic systems, combining excellent water retention with improved aeration and drainage. Coco coir is pH-neutral and inert, allowing growers to precisely control nutrient levels and pH levels in the root zone. Additionally, coco coir promotes faster growth and increased yields compared to traditional soil mediums. However, it requires more frequent irrigation and nutrient monitoring to prevent salt buildup and maintain optimal growing conditions. Hydroponic systems eliminate the need for soil altogether, allowing plants to grow in a nutrient-rich water solution. Hydroponics offer several advantages, including faster growth rates, increased nutrient uptake, and greater control over environmental factors such as pH and nutrient levels. There are various hydroponic systems available, including deep water culture (DWC), nutrient film technique (NFT), and aeroponics, each with its unique characteristics and requirements. While hydroponic cultivation can produce impressive yields and high-quality cannabis, it requires more specialized equipment, technical expertise, and regular maintenance. Each medium has its pros and cons, and the choice ultimately depends on factors such as grower experience, available resources, and cultivation goals. Soil-based cultivation is ideal for beginners and those seeking a more natural and hands-on approach to growing cannabis. Coco coir offers a balance between soil and hydroponic systems, providing improved drainage and nutrient control. Hydroponic systems are well-suited for experienced growers looking to maximize yields and optimize plant growth through precise environmental control. In conclusion, the choice of medium significantly impacts the success and outcome of cannabis cultivation. Whether growers opt for soil, coco coir, or hydroponics, each medium offers unique advantages and challenges, catering to a diverse range of preferences and cultivation styles. By understanding the characteristics and requirements of each medium, growers can select the most suitable option for their specific needs and achieve successful harvests of high-quality cannabis.',
      Next: 'Lights',
      list: [
        'Soil:',
        'Clay:',
        'Coco coir:',
        'Coco peat:',
        'Hydroton:',
        'Perlite:',
      ],
    },
    nute: {
      tldr: ['Make your own', 'Test Thoroughly', 'Simple is always best'],
      p1: 'Buddee Recognises the great work of hydrobuddy. a valable asset in creating your own soluable nutrients based upon the local supply of water whichever eater source you have access to.',
      p2: 'ec for vegging plants can be from 0.8 - 1-1 with ppm not needing to excede 700, lowerer concentrations are required for babies and normally waterbrought to the correct pH will suffice.',
      p3: 'The pH of the nutrient solution will be varying between 5.8 and 6.5. the plants absorb the most nutrients from the solution at the concentration of hydrogen atoms. the pH is influenced by temperature and there is slightly moreoxtgen present in water at cooler temperatures.',
      p4: ' Nutrients are a confusing term, life needs it(nutrition)/them(nutrients).',
      p5: 'Branded products are a thriving business in the global markets and there are a great number of products to choose from to start your growing journies with.',
      p6: 'Buddee recommends House and garden, Dutch Pro, Bio Buzz but to name a few.',
      p7: 'Alot of psudeo science has taken hold of growing canabis especially as in most countries of its natural state, very little is done and nature provides everytime. however with countries where the legality of doing some may have been questionable for many years ( continuing to be even today perhaps).',
      p8: 'Mixing your own nutrients using fertizlier salts, will be the cheapest and instuctive way of getting an understanding for the simplicity that growing cannabis has come in todays age.',
      p9: 'Nutrients are essential elements required by plants for their growth, development, and overall health. Among these nutrients, macronutrients like nitrogen (N), phosphorus (P), and potassium (K), often referred to as NPK, are crucial for plant growth. Additionally, micronutrients such as calcium (Ca), magnesium (Mg), sulfur (S), iron (Fe), manganese (Mn), zinc (Zn), copper (Cu), boron (B), and molybdenum (Mo) are required in smaller quantities but are equally important for various physiological processes within plants When it comes to the availability of nutrients in water, the waters hardness or softness plays a significant role. Hard water contains high concentrations of minerals like calcium and magnesium ions, whereas soft water contains fewer minerals. The mineral content in water can affect nutrient availability to plants and impact their growth in different ways. In hard water, the excess calcium and magnesium ions can bind with certain nutrients in the soil or growing medium, making them less available to plants. This can lead to nutrient deficiencies and hinder plant growth, despite having an apparently nutrient-rich environment. For example, excess calcium can interfere with the uptake of potassium, leading to potassium deficiency symptoms like yellowing leaves and stunted growth. To overcome nutrient availability issues in hard water, growers often employ strategies such as adjusting pH levels, using chelated nutrients, or incorporating specialized fertilizers designed for hard water conditions. Chelated nutrients contain organic molecules that bind to mineral ions in water, making them more available to plants and less prone to precipitation or binding with other ions. On the other hand, soft water, while generally more suitable for nutrient uptake due to its lower mineral content, may lack essential minerals like calcium and magnesium. Calcium, for instance, plays a crucial role in cell wall structure, enzyme activation, and overall plant health. Magnesium is essential for chlorophyll production and photosynthesis. Without an adequate supply of these nutrients, plants may exhibit symptoms of deficiency, such as leaf yellowing or poor growth. To address nutrient deficiencies in soft water, growers can supplement with calcium and magnesium through various means, including adding amendments like dolomite lime or gypsum to the growing medium, using fertilizers containing these minerals, or adjusting nutrient solutions accordingly. In conclusion, understanding the impact of water hardness on nutrient availability is crucial for successful plant cultivation. Whether dealing with hard or soft water, growers must carefully monitor nutrient levels and employ appropriate strategies to ensure plants receive the essential nutrients they need for optimal growth and development. Adjusting nutrient formulations, using chelated nutrients, and supplementing with specific minerals can help overcome challenges posed by water hardness and ensure healthy plant growth.',
      HeaderText: 'Nutrients',
      Next: 'Phases',
    },
    pest: {
      tldr: [
        'Become the predator.',
        'They dont magically appear.',
        'Check often.',
        'Never leave it to late.',
        'Keep outside, outside.',
      ],
      HeaderText: 'Pests And Pathogens',
      Next: 'Continuating Crops',
      p1: 'Once spider mite have eestablished themselves inside your environment, simply adjusting the humidity or airflow is not going to be enough to eradicate them. We recommend against using harmful chemicals such as bugicides, wherever possible, which only leaves few alternatives.',
      p2: 'Predator bugs are of known assitance and can destroy x amoutn of eggs/mites per hour. human intervention is down to the eye, level of commitment to total eradication',
      p3: 'Spider-Mite are a real problem, they thrive in hot dry conditions the two-spotted spider mite can hatch within 3 days and become sexually mature just 5 days later. her optimal temperature is 27C, 24 is not to cold neither. A single female can lay up to 20! eggs per day and live for 7-14 days. They are a real threat to your garden.',
      p4: 'Powedery mildew means you need one or more dehumidifiers at some point in the vinicity, or a serious mositure problem and stagnation.',
      p5: 'Repeat Treatments: Spider mite infestations may require multiple treatments over several weeks to achieve effective control. Monitor treated plants closely and repeat treatments as necessary to suppress mite populations and prevent reinfestation.',
      p6: 'Preventive Measures: Implement preventive measures to reduce the risk of future spider mite infestations. These include quarantining new plants before introducing them to your grow space, maintaining plant health through proper watering and nutrition, and practicing good hygiene to minimize the introduction of pests.',
      p7: 'We would recommend throughly de pesting any large growing operation inbetween runs and frequently clean all and everything related with operational integrity.',
    },
    phases: {
      tldr: ['12/12 flower, 18/6 veg ', 'seeds >24 cuttings', 'Be punctual'],
      HeaderText: 'Phases',
      Next: 'Watering',
      p1: 'vegetating mode can consist on light hours ranging from 14-24.',
      p2: ' flowering (blooming) mode can consist on light hours ranging from 12-13.',
      p3: ' It takes roughly between 10-14 days for the growth hormone to change and for the flowering to begin. In this time, the plant shall increase its growth speed in preparation for the buds that will preciptate it.',
      p4: 'Whilst a plant is in flower, should the need arise to revert back to a vegetative state, time should be allowed for the plant to not only reestablish hormone levels to correspond with the require action but also to purge itself of the remaining hormones. This would mean that pruning any flower activity from the plant to enable a fast transition. Cuttings taking from flowering plants shall also receive a slower growth rate. size is an interesting metric when comparring this and that crop',
      p5: 'Seedling Stage: During the seedling stage, plants are delicate and require gentle, diffused light to prevent them from becoming stressed or burned. Providing low to medium light intensity helps seedlings establish strong root systems and develop sturdy stems and leaves without stretching or becoming leggy. Using fluorescent or LED grow lights positioned at a distance from seedlings helps maintain optimal light levels without overwhelming them.  ',
      p6: 'Vegetative Stage: In the vegetative stage, plants focus on foliage growth and require higher light intensities to support robust photosynthesis and nutrient uptake. Moderate to high light levels, equivalent to around 400-600 µmol/m²/s of photosynthetically active radiation (PAR), promote lush green foliage, compact growth, and strong branching. Metal halide MH, T5 fluorescent, or full-spectrum LED grow lights are suitable for providing the intense light required during the vegetative phase. ',
      p7: 'Pre-flowering Stage: As plants transition from the vegetative stage to the pre-flowering stage, they benefit from a gradual increase in light intensity to encourage the development of flower buds. Maintaining consistent light levels and ensuring even distribution of light across the canopy helps promote uniform flowering and bud formation. Adjusting the light spectrum to include more red wavelengths can stimulate flowering and initiate the reproductive phase of growth.',
      p8: 'Flowering Stage: During the flowering stage, plants require the highest light intensity to support the production of flowers, fruits, or buds. Intense light levels ranging from 600-1000 µmol/m²/s of PAR are recommended to maximize flower development, resin production, and overall yield. High-pressure sodium (HPS) or specialized LED grow lights with spectrums tailored for flowering are commonly used to provide the intense light required for this stage. Late Flowering and Ripening Stage: Towards the end of the flowering stage, as plants enter the late flowering and ripening phase, it is essential to maintain consistent light levels to ensure proper ripening and maturation of fruits or flowers. Gradually reducing light intensity and adjusting the light spectrum to include more far-red wavelengths can help promote ripening and enhance flavor, aroma, and potency. In summary, providing the correct light strength throughout the growth cycle of plants is crucial for optimizing their development and maximizing yield. Understanding the specific light requirements at each stage of growth and selecting appropriate lighting systems accordingly can contribute to healthy, vigorous plants and bountiful harvests.',
    },
    repots: {
      tldr: ['Do it'],
      HeaderText: 'Transplantation',
      Next: 'Pests & Pathogens',
      p1: 'We always replant out stock before they get to voracious in their environments and watering becomes a problem.',
    },
    smell: {
      tldr: ['We like the smell'],
      HeaderText: 'Odour',
      Next: 'Strain Selection',
      p1: ' Most people wont or simply cannot appreciate the odour created by fresh cannabis, nor dried cannabis, nor smoked cannabis. To the concernable party it can be a financially motivatied reason behind or a more personally invloled one where by you or friends or family may e accustomed.',
      p2: 'This understandable intolerence from society has created a need to hide the smells involved from the general public, this also serves as a preventative measure for urban garden whom might be afraid of a seizure of goods or equipment from either from police or theives.',
      p3: ' You will need to filtrate the air, a reasonable enough amount so that the particles which are responsible from emitting the odour are flushed from the room through activated carbon (charcoal) thus removing the smell, and ejecting exhause air. The Filter will need to be calibrated with the room conditons (size, temperature, humidity). and be of an adequate size as it will created a choking effect on your outlet exhause if not using a sealed environment.',
      p4: ' If you find yourself lucky enough, in that your environment does not raise any concerns or have a problem with being detected or remote enough perhaps, then carbon filtration is not a requirement for an aultimate harvest. If perhaps your on a budget and can tolerate the aroma, do without.',
    },
    strain: {
      tldr: ['They are all good.', 'Beauty is in the eye.'],
      HeaderText: 'Strain Selection',
      Next: 'Containers',
      p1: 'The best tasting and strongest cannabis is always goingto be the one that was finihsed correctly, allowed to grow without contaimination, including even fingerprints. The best cannabis bis will have been dried from point of harvest consistently in a reliable clean enviornment, hung untill the moisture content is of optimum balance with its organic compound. This cannabis flower will outlast other forms with an impressive shelflife.',
      p2: ' Beauty is in the eye of the beholder, this is also very much the case with the determination of what is better than another, given the amoutn of different perspective that exist globally regarding the marijuana market, Illicit and Legit.',
      p3: 'Growing sativas in tropical climates in urabn dwellings with high humidity and consistent 12/12 day and night will have a better chance of survival unaided, than their short stocky, bushy, sweaty, condensed indica counterparts',
      p4: 'Indoor setups will allow a certain degree of freedom with regard to strain selection. the space between the datum and the light is the ultimate gouverning factor.',
      p5: 'From a financial position, it most often best to go with what ever the flow is and aim to make the best or what you have locally.',
      p6: 'The perception of cannabis strains can vary significantly from one individual to another, and personal taste and preferences play a crucial role in how each strain is experienced and appreciated. While certain strains may be celebrated and revered by some, others may have entirely different impressions based on their unique sensory perceptions, past experiences, and physiological responses.',
      p7: 'One of the primary factors influencing the perception of cannabis strains is individual taste preferences. Just like with food and beverages, people have distinct preferences when it comes to flavor profiles. Some may gravitate towards strains with fruity, sweet, or floral aromas, while others may prefer earthy, spicy, or diesel-like scents. These preferences are shaped by a variety of factors, including genetics, cultural influences, and personal experiences.',
      p8: 'As a result, what one person finds appealing in a strain may not necessarily resonate with someone else. Moreover, the effects of cannabis strains can vary widely depending on factors such as cannabinoid and terpene profiles, dosage, and individual tolerance levels. While one person may find a particular strain to be energizing and uplifting, another individual might experience it as sedating and relaxing. These subjective effects are influenced by factors such as mood, mindset, and external environment, further emphasizing the personalized nature of cannabis experiences. Cultural and societal influences also play a significant role in how cannabis strains are perceived. In regions where certain strains have been cultivated and consumed for generations, there may be strong cultural associations and traditions surrounding their use. Additionally, social norms and stigma can impact how individuals view and interact with different strains, influencing their perceptions and preferences. Furthermore, individual physiology and biochemistry contribute to the variability in how strains are perceived. Factors such as metabolism, endocannabinoid system function, and genetic predispositions can influence how individuals respond to specific cannabinoids and terpenes present in different strains. As a result, two people consuming the same strain may have entirely different experiences based on their unique biological makeup. In conclusion, the perception of cannabis strains is highly subjective and influenced by individual taste preferences, physiological responses, cultural influences, and social factors. What one person finds enjoyable and beneficial in a strain may not necessarily resonate with someone else. As cannabis legalization and acceptance continue to expand globally, it is essential to recognize and respect the diverse range of experiences and preferences among cannabis consumers. Ultimately, the beauty of cannabis lies in its ability to offer something unique and personal to each individual, reflecting the rich tapestry of human diversity and experience.',
    },
    watering: {
      tldr: ['Save your back = Automatic'],
      HeaderText: 'Watering',
      Next: 'Taking Cuttings',
      p1: 'Full purging of the container will encourage further root spread',
      p2: 'Watering manual is ardous and definately wouldenefit from pre planning your plants position so that you can still reach ones that may be located within a cluster or group of plants',
      p3: 'Coco will need watering more regulatry that soil, and also require the medium to be fully leached by at laest a drop of water in runoff, although 20% is the recommendation, this number is a waste and more effort to clean or remove later on.',
      p4: 'Soil will have and be made of iteslef and require at least some moisture content between watering.',
    },
    harvests: {
      tldr: ['Let Your plants completely finish'],
      HeaderText: 'Harvesting',
      Next: 'Drying',
      list: [
        {
          id: 'Indicator of Maturity:',
          desc: 'White pistils are one of the primary indicators of a cannabis plants maturity and readiness for harvest. Initially, these pistils are bright white and stand upright, but as the plant matures, they gradually change color and begin to curl and darken. Waiting for the majority, if not all, of the pistils to have turned brown or amber indicates that the plant has reached its peak maturity and is approaching the optimal time for harvest.',
          image: '',
        },
        {
          id: 'Trichome Development:',
          desc: 'While pistils are a visible indicator of maturity, the true assessment of readiness for harvest comes from observing the trichomes, the tiny resin glands that cover the surface of the buds. Trichomes contain the cannabinoids, terpenes, and other compounds responsible for the plants effects and aroma. By examining the trichomes under a magnifying loupe or microscope, growers can assess their color, clarity, and density to determine the optimal harvest time.',
          image: '',
        },
        {
          id: 'Maximizing Cannabinoid Content:',
          desc: 'Allowing the pistils to fully develop and mature ensures that the plant has maximized its cannabinoid content, including THC, CBD, and other beneficial compounds. Harvesting too early, when the majority of pistils are still white and the trichomes are predominantly clear or translucent, can result in a less potent and flavorful final product.',
          image: '',
        },
        {
          id: 'Enhancing Aroma and Flavor:',
          desc: 'Waiting for the pistils to have formed buds and matured contributes to the development of complex flavors and aromas in the harvested buds. As the pistils change color and the trichomes mature, the terpene profile of the buds evolves, leading to richer, more nuanced flavors and aromas that enhance the overall sensory experience.',
          image: '',
        },
        {
          id: 'Optimizing Yield and Quality:',
          desc: 'Harvesting cannabis plants when the pistils have fully formed buds and the trichomes have reached their desired maturity levels ensures an optimal balance between yield and quality. Patience in waiting for the plants to reach peak maturity before harvest can result in higher yields of potent, flavorful buds with desirable effects. In conclusion, waiting for all the white pistils to have formed buds before harvest is a critical step in maximizing the potency, flavor, and overall quality of cannabis flowers. By allowing the plants to fully mature and observing the changes in pistil color and trichome development, growers can ensure a successful and rewarding harvest.',
          image: '',
        },
      ],
    },
    drying: {
      tldr: ['Branches should snap before trim'],
      HeaderText: 'Drying',
      Next: 'After Care',
      p1: 'Hanging the plant and minimizing contact with any smokable part is a preferred method in the cannabis market for several reasons, benefiting both producers and end-users alike. This practice ensures optimal quality, potency, and shelf life of the final product, addressing various concerns related to contamination, degradation, and overall consumer satisfaction.',
      p1WhyList: [
        {
          id: 'Prevents Contamination:',
          desc: 'Hanging the plant during drying minimizes contact with surfaces that may introduce contaminants such as dust, dirt, or pathogens. By suspending the plant in the air, growers reduce the risk of microbial growth or contamination that could compromise the quality and safety of the product.',
          image: '',
        },
        {
          id: 'Enhances Flavor and Aroma:',
          desc: 'Proper drying and curing methods, including hanging the plant, contribute to the development of complex flavors and aromas in the final product. By allowing the buds to dry slowly and evenly, growers can enhance the terpene profile of the cannabis, resulting in a more flavorful and aromatic experience for consumers.',
          image: '',
        },
        {
          id: 'Improves Shelf Life:',
          desc: 'Hanging the plant and implementing appropriate drying and curing techniques can extend the shelf life of cannabis flowers. Properly dried and cured buds are less prone to mold and microbial growth, reducing the risk of spoilage and ensuring that the product remains fresh and potent for a longer period.',
          image: '',
        },
        {
          id: 'Maintains Appearance and Structure:',
          desc: '  Hanging the plant preserves the natural structure and appearance of the buds, preventing compression or deformation that may occur with alternative drying methods. Consumers value visually appealing cannabis flowers with intact trichomes and well-defined structures, and hanging the plant helps maintain these desirable characteristics. In conclusion, hanging the plant and minimizing contact with any smokable part is preferred in the cannabis market due to its positive impact on quality, potency, and shelf life. By implementing proper drying and curing techniques, growers can ensure that their products meet consumer expectations for flavor, aroma, and overall enjoyment while reducing the risk of contamination and degradation.',
          image: '',
        },
      ],
      p2: 'Waiting until the plant is dry before trimming is indeed preferred for several reasons, including shelf life preservation and prevention of spoilage when handling live material. By allowing the plant to dry adequately before trimming, growers can ensure optimal quality and longevity of the final product while minimizing the risk of contamination or degradation.',
      p2WhyList: [
        {
          id: 'Preservation of Shelf Life:',
          desc: ' Prevents Contamination:',
          image:
            'Trimming the plant while it is still moist can introduce moisture to the trimmed surfaces, creating an environment conducive to microbial growth and spoilage. Allowing the plant to dry thoroughly before trimming helps preserve the shelf life of the trimmed buds by reducing the risk of mold or mildew development.',
        },
        {
          id: 'Prevention of Spoilage:',
          desc: 'Cutting live, moist plant material increases the likelihood of spoilage during the trimming process, especially if the trimmers hands or tools come into contact with the buds. Dry plant material is less susceptible to contamination and spoilage, making it preferable for trimming to minimize the risk of product loss or degradation.',
          image: '',
        },
        {
          id: 'Ease of Handling:',
          desc: 'Dry, properly dried cannabis plants are easier to handle and manipulate during the trimming process. The buds are firmer and less likely to be damaged or crushed during handling, resulting in a higher-quality final product.',
          image: '',
        },
        {
          id: 'Branch Snap Test:',
          desc: 'A commonly used method to determine if the plant is ready for trimming is the branch snap test. When the branches are sufficiently dry, they become brittle and snap easily when bent, indicating that the plant has reached an optimal level of dryness for trimming. While the branches may appear dry on the outside, it is essential to ensure that the internal moisture content is sufficiently low to prevent spoilage during storage.',
          image: '',
        },
        {
          id: 'Consistent Environment:',
          desc: 'Maintaining a consistent drying environment is crucial to ensure uniform drying and prevent over-drying or under-drying of the plant material. By monitoring humidity levels, temperature, and airflow, growers can create an optimal drying environment that promotes even drying and preserves the quality of the final product. In summary, waiting until the plant is dry before trimming is preferred to preserve shelf life, prevent spoilage, and ensure ease of handling during the trimming process. By implementing proper drying techniques and monitoring environmental conditions, growers can produce high-quality cannabis products with optimal flavor, potency, and longevity.',
          image: '',
        },
      ],
    },
    aftercare: {
      tldr: ['Container Size is key'],
      HeaderText: 'After Care',
      Next: 'General Tips',
      p1: 'Top-grade cannabis buds often have a moisture content ranging from 6% to 9%. This range ensures that the buds are neither too dry nor too moist, allowing them to burn evenly, produce smooth smoke, and preserve their aroma and flavor profiles.',
      p2: 'Cannabis buds with the ideal moisture content are firm but not overly dry or brittle. They maintain their natural texture and density, indicating that the plant material has been properly cured and stored. Buds that are too dry can crumble easily and may lack the desired potency and aroma, while buds that are too moist can feel spongy and may be prone to mold and mildew growth.',
      p3: 'Properly hydrated cannabis buds retain their terpene profile, which contributes to their distinctive aroma and flavor characteristics. The moisture content helps preserve the delicate balance of terpenes, ensuring that the buds maintain their full spectrum of flavors and aromas. Overly dry buds may have a harsh or stale taste, while excessively moist buds can develop off-flavors and may exhibit signs of fermentation or decay.',
      p4: 'The moisture content of cannabis buds can impact their potency and efficacy. Buds that are too dry may have lower cannabinoid concentrations and potency levels, leading to a less intense psychoactive effect or therapeutic benefit. Conversely, buds that are too moist may have a higher risk of microbial contamination, which can compromise their safety and efficacy.',
      p5: 'Maintaining the optimal moisture content is essential for the long-term storage of cannabis buds. Buds that are too dry may lose potency and flavor over time, while buds that are too moist may be susceptible to mold and mildew growth, rendering them unfit for consumption. Properly cured and stored cannabis buds with the ideal moisture content can maintain their quality and freshness for an extended period, ensuring a superior experience for consumers. In summary, top-grade cannabis products exhibit a moisture content that falls within the optimal range of 6% to 9%. This moisture level contributes to the buds texture, aroma, flavor, potency, and long-term storage stability, enhancing the overall quality and consumer satisfaction of the product.',
      p6: 'Glass containers are preferred for storing dried cannabis buds due to their inert nature, which minimizes the risk of contamination and allows for easy monitoring of the buds. Thick plastic tubes with airtight seals can also serve as effective storage containers, especially for short-term storage or transportation purposes. However, plastic containers may leach chemicals over time, potentially affecting the taste and aroma of the buds.',
      p7: 'The amount of space in the storage container can affect humidity levels and airflow around the buds. Overcrowding the container can lead to increased humidity and decreased airflow, which may promote mold growth. It is essential to leave some empty space in the container to allow for proper airflow and prevent compression of the buds, which can affect their texture and quality.',
      p8: 'Exposure to light, especially sunlight and UV rays, can degrade cannabinoids and terpenes over time, leading to a loss of potency and aroma. Storing dried cannabis buds in opaque or UV-resistant containers and keeping them in a dark, cool place can help minimize light exposure and preserve their quality.',
      p9: 'Temperature fluctuations can affect the stability of cannabinoids and terpenes in dried cannabis buds. Storing buds in a cool, dark place, such as a pantry or cupboard, can help maintain a consistent temperature and prevent degradation.',
      p10: 'Airtight seals are essential for preventing moisture and air from entering the storage container and affecting the quality of the buds. Containers with screw-on lids or silicone gaskets provide a secure seal that helps maintain optimal humidity levels and preserve the freshness of the buds. In conclusion, proper storage of dried cannabis buds involves controlling humidity levels, selecting the right container, leaving enough space for airflow, minimizing light exposure, maintaining a consistent temperature, and ensuring airtight seals. By following these guidelines, growers and consumers can preserve the quality and potency of their cannabis products for an extended period.',
    },
  },
  home: {
    journal: {Heading: 'Journal', Nothing: 'Nothing For Today'},
    toolbox: {
      HeaderText: 'Toolbox',
      New: 'New',
      Action: 'Action',
      Plants: 'Plants',
      Environment: 'Environment',
      More: 'More',
      Tools: 'Tools',
    },
    calender: {Header: 'Calender', name: 'en'},
  },
  plants: {
    Plants: 'Plants',
    NewAction: 'New Action',
    Vegetating: 'Vegetating',
    Flowering: 'Flowering',
    PotSize: 'Pot Size:',
    create_env: {
      placeholder: {
        EnvironmentName: 'Enter Environment Name',
        Select: 'Select Type',
      },
      HeaderMessage: 'Create Environment',
      lightTypeData: [
        {
          key: 0,
          label: 'Light Emitting Diode (LED)',
        },
        {
          key: 1,
          label: 'Compact Fluorescent Light (CFL)',
        },
        {
          key: 2,
          label: 'High Pressure Sodium (HPS)',
        },
        {
          key: 3,
          label: 'Metal Halide',
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
    selectEnv: {Choose: 'Choose Your Environment'},
    addPlant: {
      beginningsData: [
        {
          key: 0,
          label: 'Seed',
        },
        {
          key: 1,
          label: 'Clone or Cutting',
        },
      ],
      mediumData: [
        {
          key: 0,
          label: 'Coco',
        },
        {
          key: 1,
          label: 'Soil',
        },
        {
          key: 2,
          label: 'Rockwool',
        },
      ],
      placeholder: {
        Select: 'Please Select',
        PleaseChoose: 'Please Choose a Strain',
        Days: 'days',
        SelectMedium: 'Select Medium',
      },
      CreateNew: 'Create New Strain',
      PlantBegan: 'Plant began as:',
      Strain: 'Strain:',
      Create: 'Create Plants',
      ChooseStage: 'Choose Current Stage:',
      Vegetative: 'Vegetative',
      Flowering: 'Flowering',
      Hanging: 'Hanging',
      VegState: 'Vegetative State:',
      BeganOn: 'Began Life On:',
      VegTime: 'Vegging Time:',
      PleaseSelect: 'Please Select',
      AmountPlants: 'Amount Of Plants:',
      Medium: 'Medium:',
      BloomingState: 'Blooming State:',
      LightsChanged: 'Lights Changed On:',
      DryState: 'Drying State:',
      LightsOut: 'Lights Out On:',
      FlowerTime: 'Flowering Time:',
      CreatedOn: 'Created On',
      LightOut: 'Lights Changed On',
      LightOff: 'Lights Off On',
    },
    plants: {
      NoPlants: 'Opps, No Plants Found.',
      TapHere: 'Tap here to add one.',
    },
    plant: {
      Plant: 'Plant',
      Batch: 'Batch Id:',
      Strain: 'Strain:',
      Age: 'Age:',
      Started: 'Started On:',
      Confirm: 'Confirm Deletion?',
      Cancel: 'Cancel',
      DoYou: 'Do you really wish to delete',
      Create: 'Create Strain',
    },
  },
  settings: {
    moreTools: {
      HeaderText: 'Home Controls:',
      NewEnvironment: 'New Environment',
      NewPlant: 'New Plant',
      NewAction: 'New Action',
      MoreTools: 'More Tools:',
      Calculators: 'Calculators',
      Charts: 'Charts',
      Guides: 'Guides: ',
      Faq: 'Faq',
      Library: 'Library',
    },
    settings: {
      HeaderText: 'Database Settings:',
      EraseAllData: 'Erase All Data',
      GeneralSettings: 'General Settings:',
      Language: 'Language',
      English: 'English',
      Theme: 'Theme',
      DarkMode: 'Dark-Mode',
      LightMode: 'Light-mode',
      TemperatureUnits: 'Temperature Units',
      Celsius: 'Celsius',
      MeasurementUnits: 'Measurement Units',
      Metric: 'Metric',
      CalendarSettings: 'Calendar Settings:',
      FirstDay: 'First Day Of The Week',
      modes: [
        {key: 'light', label: 'Light-Mode'},
        {key: 'dark', label: 'Dark-Mode'},
      ],
      languages: [
        {key: 'en', label: 'English'},
        {key: 'th', label: 'Thai'},
        {key: 'fr', label: 'French'},
        {key: 'hbr', label: 'Hebrew'},
        {key: 'hin', label: 'Hindu'},
        {key: 'spn', label: 'Spanish'},
        {key: 'gr', label: 'German'},
        {key: 'it', label: 'Italian'},
      ],
      firstdays: [
        {key: 0, label: 'Sunday'},
        {key: 1, label: 'Monday'},
      ],
      tempertureUnits: [
        {key: 'c', label: 'Celcius'},
        {key: 'f', label: 'Fahrenheiht'},
      ],
    },
  },
  database: {core: {}, actions: {}, options: {}, validation: {}},
  navigation: {nav_stack: {}, bottomTab: {Save: 'Save', Next: 'Next'}},
};
