var config = {
  style: "mapbox://styles/annamei1913/cl49mbgl3003k14nvp4483s62",
  accessToken:
    "pk.eyJ1IjoiYW5uYW1laTE5MTMiLCJhIjoiY2wxbmh5dDJmMDFrZTNjbzhzZGloYjdsaCJ9.2d3SFzdAFD2O4tuUgAZ-pg",
  showMarkers: false,
  theme: "light",
  use3dTerrain: false,
  // title
  title: "The Seed Tracker",
  subtitle: "A sci-fi short story inspired by data journalism",
  byline: "",
  footer:
    'The scrollytelling project <em>Working Title here</em> was created as part of the <em>Power of Maps. Maps of Power</em> course during the summer term 2022 at the <a href="https://design.fh-potsdam.de/University">University of Applied Sciences Potsdam</a> under the supervision of Prof. Sebastian Meier. You can find a detailed project documentation and the geodata sets on <a href="https://github.com/annameide/map-scrollytelling">GitHub</a>.<br></br>&copy; Anna Meide',

  chapters: [
    // 1 textbox: introduction
    {
      id: "1--introduction", // id HAS TO be unique
      alignment: "left",
      title: "Potsdamer Havel Lebensbunker Nr. 42",
      image: "",
      // wie kann ich im text unterstreichen?
      description:
        "Aurora arrived in her accomodations in Neo-Potsdam, Germany midsummer. The weather was relatively mild – glistening sunlight, average 42 degrees Celsius and a raging sandstorm, which admittedly made it hard to breath. <br></br>“Potsdamer Havel Lebensbunker Nr. 42” read the Address on the provided keychain. A silent “wow” crossed Auroras mind, it has been this for almost 10 years around the world now but for her it was still a strange feeling to live in a dried out lake. Especially because she still remembered her grandmothers photographs showing her swimming in this same lake back in 2022. In the present the precious water was harvested and rationalized by the european government. Water for ordinary civilians was only available for drinking. “Well,” - Aurora said “that’s summer of 2072 for you. And 50 years of climate catastrophy...”, opened the elevator door and went down to the cooler sub levels of the Lebensbunker.<br></br>Aurora has been working as a preservation botanist for the European Space Agency (ESA) “Floras Mercy” project close to a decade now. Travelling the still inhabitable areas of earth/europe, collecting data on all the indigenous plant life present in a particular region and time, exploring how a particular place adopted to climate change. The next three weeks would be dedicated to “Central Europe in the Twenties” – that is if the tornado season spared the region enough power to keep the internet online.",
      location: {
        // look for offset in documentation / center of display 16:9 passt
        center: [13.0538, 52.3888],
        zoom: 14,
        // pitch: 39.50, nice touch try out later
        // bearing: 36.00
        pitch: 0,
        bearing: 0,
      },

      // here come layers which you want to hide or show
      onChapterEnter: [
        {
          layer: "potsdam-city-fill",
          opacity: 0.4,
        },

        {
          layer: "habitat",
          opacity: 1,
        },

        {
          layer: "farmland-landuse",
          opacity: 0,
        },

        {
          layer: "parks-leisure",
          opacity: 0,
        },

        {
          layer: "orchard-landuse",
          opacity: 0,
        },
      ],
      onChapterExit: [],
    },

    // 1 illustration: introduction
    {
      id: "_01--illustration",
      alignment: "right",
      title: "",

      // pictures are loaded from the assets folder
      image: "./assets/2_testillu.png",
      description: "",
      location: {
        center: [12.9184, 52.43],
        zoom: 12,
        pitch: 0.0,
        bearing: 0.0,
      },

      onChapterEnter: [
        //{
        //layer: 'potsdam-city-fill',
        //opacity: 0
        //},

        //{
        //  layer: 'farmland-landuse',
        //opacity: 0
        //},

        {
          layer: "allotments-78oelq",
          opacity: 0,
        },

        {
          layer: "orchard-landuse",
          opacity: 0,
        },
      ],
      onChapterExit: [],
    },

    // 1.2 textbox: introduction
    {
      id: "12--introduction", // id HAS TO be unique
      alignment: "left",
      title: "The Brandenburg steppe",
      image: "",
      // wie kann ich im text unterstreichen?
      description:
        'The welcome basket contained the obligatory bottle of water and one of the famous Potsdam Melons. The slogan “Grown locally – consumed globally” however, only conveyed a partial truth about the food supply of the remaining world population. 2072 the same was true that had already become apparent in 2022 - climate change became the greatest challenge ever faced by mankind. The 1.5 degree threshold was already exceeded in 2026 and plunged the entire earth ecologically and socially into turbulent times. The research community warned of this "risk age," a dangerous and uncontrollable mix of environmental and security risks. But policymakers did not listen to science. <br></br>Aurora hooked up her Siri-Helmet to the underground WiFi. “Ok, Siri. Let’s see what happend here. Show me what climate change impacts have had a particularly strong impact on the Brandenburg region?” <br></br>Siri rendered a list and started to read out loud in her calm voice: “Warmer annual mean temperature, sharp decrease in precipitation such as rain and snow, forest dieback and devastating forest fires, increasing storm events with tornadoes and hail, heat waves and heat stress in spring and summer, increase in weather extremes such as prolonged droughts and short but violent heavy rains resulting in flooding, loss of groundwater, immigration of heat-loving animal and plant species, spread of neobiota bringing new pathogens and pests. to make matters worse, weather events were no longer predictable. <br></br>“That sounds familliar.” Aurora thought to herself “One eather drowned or dried out.” <br></br>A comparison of the satellite images confirmed Auroras assumption that Brandenburg was a temperate zone before climate change transformed the region into a steppe.',
      location: {
        // look for offset in documentation / center of display 16:9 passt
        center: [12.9184, 52.43],
        zoom: 10.9,
        // pitch: 39.50, nice touch try out later
        // bearing: 36.00
        pitch: 0,
        bearing: 0,
      },

      // here come layers which you want to hide or show
      onChapterEnter: [
        {
          layer: "potsdam-city-fill",
          opacity: 0.4,
        },

        {
          layer: "habitat",
          opacity: 0,
        },

        {
          layer: "farmland-landuse",
          opacity: 0,
        },

        {
          layer: "parks-leisure",
          opacity: 0,
        },

        {
          layer: "orchard-landuse",
          opacity: 0,
        },
      ],
      onChapterExit: [],
    },

    // 2 text box: agricultural fields / 1
    {
      id: "2--textbox",
      alignment: "left",
      title: "The chickpea and the drone",
      image: "",
      // wie kann ich im text unterstreichen? mit span und span style in css geht es nicht.
      description:
        "Here <span>comes the text</span> for the first chapter. <br></br><br></br><br></br><br></br>",
      location: {
        center: [12.9184, 52.43],
        zoom: 10.9,
        pitch: 0,
        bearing: 0,
        //pitch: 39.50,
        //bearing: 36.00
      },

      onChapterEnter: [
        {
          layer: "potsdam-city-fill",
          opacity: 0.3,
        },

        {
          layer: "farmland-landuse",
          opacity: 0.7,
        },

        {
          layer: "parks-leisure",
          opacity: 0,
        },

        {
          layer: "orchard-landuse",
          opacity: 0,
        },
      ],
      onChapterExit: [],
    },

    // 3 text box: agricultural fields / 2
    {
      id: "3--textbox",
      alignment: "left",
      title: "3 textbox: agricultural fields / 2",
      image: "",
      // wie kann ich im text unterstreichen?
      description:
        "Here comes the text for the first chapter. <br></br><br></br><br></br><br></br>",
      location: {
        center: [12.9184, 52.43],
        zoom: 12,
        pitch: 0,
        bearing: 0,
        //pitch: 39.50,
        //bearing: 36.00
      },

      onChapterEnter: [
        {
          layer: "potsdam-city-fill",
          opacity: 0.2,
        },

        {
          layer: "farmland-landuse",
          opacity: 0.7,
        },

        {
          layer: "allotments-78oelq",
          opacity: 0,
        },

        {
          layer: "orchard-landuse",
          opacity: 0,
        },
      ],
      onChapterExit: [],
    },

    // 1 illustration: agricultural fields
    {
      id: "_1--illustration",
      alignment: "right",
      title: "",

      // pictures are loaded from the assets folder
      image: "./assets/0_testillustration",
      description: "",
      location: {
        center: [12.9184, 52.43],
        zoom: 12,
        pitch: 0.0,
        bearing: 0.0,
      },

      onChapterEnter: [
        //{
        //layer: 'potsdam-city-fill',
        //opacity: 0
        //},

        //{
        //  layer: 'farmland-landuse',
        //opacity: 0
        //},

        {
          layer: "allotments-78oelq",
          opacity: 0,
        },

        {
          layer: "orchard-landuse",
          opacity: 0,
        },
      ],
      onChapterExit: [],
    },

    // 4 text box: parks / 1
    {
      id: "4--textbox",
      alignment: "left",
      title: "4 text box: UNESCO parks / 1",
      image: "",
      description: "Here comes the text for the next chapter.",
      location: {
        center: [12.9184, 52.43],
        zoom: 10.9,
        pitch: 39.5,
        bearing: 36.0,
      },

      onChapterEnter: [
        {
          layer: "potsdam-city-fill",
          opacity: 0.3,
        },

        {
          layer: "farmland-landuse",
          opacity: 0,
        },

        {
          layer: "parks-leisure",
          opacity: 0.7,
        },

        {
          layer: "orchard-landuse",
          opacity: 0,
        },
      ],
      onChapterExit: [],
    },

    // 5 text box: parks / 2
    {
      id: "5--textbox",
      alignment: "left",
      title: "5 text box: UNESCO parks / 2",
      image: "",
      description: "Here comes the text for the next chapter.",
      location: {
        center: [12.9184, 52.43],
        zoom: 12,
        pitch: 39.5,
        bearing: 36.0,
      },

      onChapterEnter: [
        {
          layer: "potsdam-city-fill",
          opacity: 0.3,
        },

        {
          layer: "farmland-landuse",
          opacity: 0,
        },

        {
          layer: "parks-leisure",
          opacity: 0.7,
        },

        {
          layer: "orchard-landuse",
          opacity: 0,
        },
      ],
      onChapterExit: [],
    },

    // second illustration
    {
      id: "glacier-np",
      alignment: "full",
      title: "",

      // pictures are loaded from the assets folder
      image: "./assets/2_illustration.png",
      description: "",
      location: {
        center: [12.9184, 52.43],
        zoom: 10.9,
        pitch: 0.0,
        bearing: 0.0,
      },

      onChapterEnter: [
        {
          layer: "potsdam-city-fill",
          opacity: 0.3,
        },

        {
          layer: "farmland-landuse",
          opacity: 0,
        },

        {
          layer: "parks-leisure",
          opacity: 0.7,
        },

        {
          layer: "orchard-landuse",
          opacity: 0,
        },
      ],
      onChapterExit: [],
    },

    // 6 text box: orchards / 1
    {
      id: "6--textbox",
      alignment: "left",
      title: "6 text box: orchards alexandrovka / 1",
      image: "",
      description:
        "Blackfoot Glacier is the second largest of the remaining 25 glaciers in Glacier National Park, Montana. Blackfoot Glacier is just to the north of Blackfoot Mountain and near Jackson Glacier. When first documented in 1850, the glacier also included the now separate Jackson Glacier and together, they covered 1,875 acres (7.59 km2). In 1850, there were an estimated 150 glaciers in the park. Glaciologists have stated that by the year 2030, all the glaciers in the park may disappear.",
      location: {
        center: [12.9184, 52.43],
        zoom: 10.9,
        pitch: 51.5,
        bearing: -26.4,
      },
      onChapterEnter: [
        {
          layer: "potsdam-city-fill",
          opacity: 0.3,
        },

        {
          layer: "farmland-landuse",
          opacity: 0,
        },

        {
          layer: "parks-leisure",
          opacity: 0,
        },

        {
          layer: "orchard-landuse",
          opacity: 0.7,
        },
      ],
      onChapterExit: [],
    },

    // 7 text box: orchards / 2
    {
      id: "7--textbox",
      alignment: "left",
      title: "7 text box: orchards alexandrovka / 2",
      image: "",
      description:
        "Blackfoot Glacier is the second largest of the remaining 25 glaciers in Glacier National Park, Montana. Blackfoot Glacier is just to the north of Blackfoot Mountain and near Jackson Glacier. When first documented in 1850, the glacier also included the now separate Jackson Glacier and together, they covered 1,875 acres (7.59 km2). In 1850, there were an estimated 150 glaciers in the park. Glaciologists have stated that by the year 2030, all the glaciers in the park may disappear.",
      location: {
        center: [12.9184, 52.43],
        zoom: 12,
        pitch: 51.5,
        bearing: -26.4,
      },
      onChapterEnter: [
        {
          layer: "potsdam-city-fill",
          opacity: 0.3,
        },

        {
          layer: "farmland-landuse",
          opacity: 0,
        },

        {
          layer: "parks-leisure",
          opacity: 0,
        },

        {
          layer: "orchard-landuse",
          opacity: 0.7,
        },
      ],
      onChapterExit: [],
    },

    // third illustration
    {
      id: "glacier-np",
      alignment: "full",
      title: "",

      // pictures are loaded from the assets folder
      image: "./assets/2_illustration.png",
      description: "",
      location: {
        center: [12.9184, 52.43],
        zoom: 12,
        pitch: 0.0,
        bearing: 0.0,
      },

      onChapterEnter: [
        {
          layer: "gnpglaciers-1998",
          opacity: 0.25,
        },
        {
          layer: "glaciernp-boundary",
          opacity: 0.25,
        },
      ],
      onChapterExit: [
        {
          layer: "glaciernp-boundary",
          opacity: 0,
        },
      ],
    },

    // 8 text box: conclusion / 1
    {
      id: "8--textbox",
      alignment: "left",
      title: "8 text box: conclusion / 1",
      image: "",
      description: "here comes the conclusion text....",
      location: {
        center: [12.9184, 52.43],
        zoom: 10.5,
        pitch: 51.5,
        bearing: -26.4,
      },
      onChapterEnter: [
        {
          layer: "potsdam-city-fill",
          opacity: 0.3,
        },

        {
          layer: "farmland-landuse",
          opacity: 0.7,
        },

        {
          layer: "parks-leisure",
          opacity: 0.7,
        },

        {
          layer: "orchard-landuse",
          opacity: 0.7,
        },
      ],
      onChapterExit: [],
    },

    // 9 text box: conclusion / 2
    {
      id: "9--textbox",
      alignment: "left",
      title: "9 text box: conclusion / 2",
      image: "",
      description: "here comes the last part of the conclusion.",
      location: {
        center: [12.9184, 52.43],
        zoom: 10.5,
        pitch: 41.0,
        bearing: 78.33,
      },
      onChapterEnter: [],
      onChapterExit: [],
    },
  ],
};
