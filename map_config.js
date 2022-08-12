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
    'The scrollytelling project <em>The Seed Tracker</em> was created as part of the <em>Power of Maps. Maps of Power</em> course during the summer term 2022 at the <a href="https://design.fh-potsdam.de/University">University of Applied Sciences Potsdam</a> under the supervision of Prof. Sebastian Meier. You can find the project documentation on <a href="https://github.com/annameide/map-scrollytelling">GitHub</a>. <br></br>The science fiction short story is loosely based on the data journalism book <a href="https://www.kiwi-verlag.de/buch/toralf-staud-nick-reimer-deutschland-2050-9783462000689"><em>Deutschland 2050</em></a>, the Twitter accounts of climate journalist <a href="https://twitter.com/AnnikaJoeres">Annika Joeres</a>, Fridays for Future activist <a href="https://twitter.com/Luisamneubauer">Luisa Neubauer</a>, the <a href="https://twitter.com/tazKlima">Taz Klima</a> division and an expert interview with a former <a href="https://www.bund.net/">BUND</a> employee.<br></br>&copy; Anna Meide',

  chapters: [
    // 1. textbox
    {
      id: "1--textbox", // id HAS TO be unique
      alignment: "left",
      title: "Klimabunker Nr. 42",
      image: "",
      description:
        "Aurora arrived in her accomodations in Potsdam midsummer. The weather was relatively mild – the average 45°C, scorching sunlight and a looming sandstorm on the horizon.",
      location: {
        // look for offset in documentation / center of display 16:9 passt
        center: [12.9, 52.4399],
        zoom: 10.9,
        pitch: 0,
        bearing: 0,
      },

      // here come layers which you want to hide or show
      onChapterEnter: [
        {
          layer: "leibnitzinstitut",
          opacity: 0,
        },

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

        {
          layer: "brandenburg",
          opacity: 0,
        },

        {
          layer: "allotments-78oelq",
          opacity: 0,
        },
      ],
      onChapterExit: [],
    },

    // 2. textbox
    {
      id: "2--textbox",
      alignment: "right",
      title: "",
      image: "",
      description:
        "The address on the keychain read “Potsdamer Havel – Klimabunker Nr. 42, 14473 Potsdam”. More than a decade has passed since the Great Climate Evacuation and the draining of city lakes to provide enough living space for the remaining world population. The scarce resource water was harvested and rationalized by the European Branch of the United Nations. Today water for ordinary civilians was only available for drinking. <br></br> Aurora turned the key and took the elevator underground to the naturally conditioned sub levels of the Klimabunker. The elevator walls were covered in stickers, one of which was advertising Potsdam’s famous melons. “Grown locally – enjoyed globally” the golden slogan glittered softly in the pale, artificial LED-light. “Melons from Central Europe...” Aurora thought “When did this become ‘normal’?” she asked herself.",
      location: {
        // look for offset in documentation / center of display 16:9 passt
        center: [13.0567, 52.3888],
        zoom: 14,
        pitch: 0,
        bearing: 0,
      },

      // here come layers which you want to hide or show
      onChapterEnter: [
        {
          layer: "leibnitzinstitut",
          opacity: 0,
        },

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

    // 1. illustration
    {
      id: "_1--illustration",
      alignment: "left",
      title: "",

      // pictures are loaded from the assets folder
      image: "./assets/1_illustration.png",
      description: "",
      location: {
        center: [13.0567, 52.3888],
        zoom: 14,
        pitch: 0.0,
        bearing: 0.0,
      },

      onChapterEnter: [
        {
          layer: "leibnitzinstitut",
          opacity: 0,
        },

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

    // 3. text box
    {
      id: "3--textbox",
      alignment: "left",
      title: "",
      image: "",
      description:
        "Aurora has been working as a seed tracker for the UNDRR (United Nations Office for Disaster Risk Reduction) for three years now. As a trained botanist she took part in the “'Flora's Mercy” project. Her job was to travel still inhabitable areas of Europe and collect data on indigenous plant life present in a particular region and time.",
      location: {
        center: [12.9184, 53.0],
        zoom: 7.5,
        pitch: 0,
        bearing: 0,
      },

      onChapterEnter: [
        {
          layer: "leibnitzinstitut",
          opacity: 0,
        },

        {
          layer: "potsdam-city-fill",
          opacity: 0.5,
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

        {
          layer: "habitat",
          opacity: 0,
        },
      ],
      onChapterExit: [],
    },

    // 4. text box
    {
      id: "4--textbox",
      alignment: "left",
      title: "",
      image: "",
      description:
        "The disaster to be reduced was famine and malnutrition. At the onset of the 21. century in addition to man-made climate change came man-made diversity deficiency. At least 75% of the world’s crops have been lost, mainly through the breeding of F1-hybrids. Monocultures replaced diversity: of 7.000 edible crop species, fewer than 200 contributed to global food production. Wheat, rice and corn provided 60% of the world's calories and were optimized for output, not climate adaptation, which made them vulnerable to disasters.",
      location: {
        center: [12.9184, 53.0],
        zoom: 3.5,
        pitch: 0,
        bearing: 0,
        //pitch: 39.50,
        //bearing: 36.00
      },

      onChapterEnter: [
        {
          layer: "potsdam-city-fill",
          opacity: 0.5,
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

        {
          layer: "habitat",
          opacity: 0,
        },
      ],
      onChapterExit: [],
    },

    // 5. text box
    {
      id: "5--textbox",
      alignment: "left",
      title: "",
      image: "",
      description:
        "And now the world was in dire need of more diverse plant genetic resources. Science had to imitate nature in its free play, which was very resource consuming. The reserves of the world's gene banks for seeds were being used up faster than anticipated due to the completely unpredictable effects of climate change and extreme events such as the major insect die-off. Planning certainty was over.",
      location: {
        center: [12.9184, 52.43],
        zoom: 1.5,
        pitch: 0,
        bearing: 0,
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

        {
          layer: "brandenburg",
          opacity: 0,
        },

        {
          layer: "habitat",
          opacity: 0,
        },
      ],
      onChapterExit: [],
    },

    // 6. text box
    {
      id: "6--textbox",
      alignment: "right",
      title: "The Brandenburg Steppe",
      image: "",
      description:
        "2072 the world fell victim to the same scientific facts as 2022 - climate change became the greatest challenge ever faced by mankind. The 1.5 degree threshold was exceeded in 2026 and plunged the entire planet ecologically and socially into the “Risk Age”, a dangerous and uncontrollable mix of environmental and security risks. And policymakers still did not listen to science.",
      location: {
        center: [13.1, 52.43],
        zoom: 7.7,
        pitch: 39.5,
        bearing: 20.0,
      },

      onChapterEnter: [
        {
          layer: "potsdam-city-fill",
          opacity: 0.7,
        },

        {
          layer: "brandenburg",
          opacity: 0.5,
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
        {
          layer: "habitat",
          opacity: 0,
        },
      ],
      onChapterExit: [],
    },

    // 7. text box
    {
      id: "7--textbox",
      alignment: "left",
      title: "",
      image: "",
      description:
        "Aurora hooked up her Siri-Helmet to the underground WiFi. <br></br>“Ok, Siri. Let’s see what happened here. Tell me what climate change factors had a particularly strong impact on the Brandenburg region.” <br></br> Siri rendered a list and read it out loud: Warmer annual mean temperature | Sharp decrease in precipitation such as rain and snow | Forest dieback and devastating forest fires | Increasing storm events with tornadoes and hail | Heat waves and heat stress in spring and summer | Increase in weather extremes such as prolonged droughts and short but violent heavy rains resulting in floods | Loss of groundwater | Immigration of heat-loving animal and plant species, spread of neobiota bringing new pathogens and pests | Unpredictable weather events. <br></br>“Sounds familiar” Aurora thought “one either drowned or was scorched by the sun.",
      location: {
        center: [13.1, 52.43],
        zoom: 7.7,
        pitch: 39.5,
        bearing: 20.0,
      },

      onChapterEnter: [
        {
          layer: "potsdam-city-fill",
          opacity: 0.7,
        },

        {
          layer: "brandenburg",
          opacity: 0.5,
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

        {
          layer: "habitat",
          opacity: 0,
        },
      ],
      onChapterExit: [],
    },

    // 2. illustration
    {
      id: "_2--illustration",
      alignment: "center",
      title: "",
      image: "./assets/2_illustration.png",
      description: "",
      location: {
        center: [13.0567, 52.3888],
        zoom: 12,
        pitch: 0.0,
        bearing: 0.0,
      },

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

    // 8. text box
    {
      id: "8--textbox",
      alignment: "left",
      title: "",
      image: "",
      description:
        "The research confirmed Aurora’s assumptions – Brandenburg was once a temperate zone with fairytale like forests. But but repeated droughts and devastating forest fires turned it irretrievably into a steppe.",
      location: {
        center: [13.1, 52.43],
        zoom: 7.7,
        pitch: 39.5,
        bearing: 20.0,
      },

      onChapterEnter: [
        {
          layer: "potsdam-city-fill",
          opacity: 0.7,
        },

        {
          layer: "brandenburg",
          opacity: 0.5,
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

        {
          layer: "habitat",
          opacity: 0,
        },
      ],
      onChapterExit: [],
    },

    // 9. text box
    {
      id: "9--textbox",
      alignment: "right",
      title: "",
      image: "",
      description:
        "Aurora was sent to Potsdam because her boss got a tip about an association active in the early 2020s dedicated to the preservation of ancient crops. If she could track them down, she might get a whole treasure trove of lost edible crop seeds. She decided to go to once vital planting sites across the city and talk to people there.",
      location: {
        center: [13.15, 52.43],
        zoom: 11.4,
        pitch: 51.5,
        bearing: -26.4,
      },
      onChapterEnter: [
        {
          layer: "potsdam-city-fill",
          opacity: 0.5,
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

        {
          layer: "brandenburg",
          opacity: 0,
        },

        {
          layer: "habitat",
          opacity: 0,
        },

        {
          layer: "leibnitzinstitut",
          opacity: 0,
        },
      ],
      onChapterExit: [],
    },

    // 10. text box
    {
      id: "10--textbox",
      alignment: "left",
      title: "The chickpea and the Drone",
      image: "",
      description:
        "Aurora put on her sun protection suit and drove to Bornim. In the northwest of Potsdam were the so-called open-laboratory fields, which functioned like time machines and allowed large-scale experiments with different crops in the climate of the future or the past. <br></br> Agricultural scientists from the Leibnitz Institute reconstructed environmental conditions, using enormous amounts of energy to revive varieties that had long been extinct. They gave their very best to adapt the crops to present conditions in a fast-forward mode.",
      location: {
        center: [12.9184, 52.43],
        zoom: 11,
        pitch: 0,
        bearing: 0,
      },
      onChapterEnter: [
        {
          layer: "potsdam-city-fill",
          opacity: 0.5,
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

        {
          layer: "brandenburg",
          opacity: 0,
        },

        {
          layer: "habitat",
          opacity: 0,
        },

        {
          layer: "leibnitzinstitut",
          opacity: 0,
        },
      ],
      onChapterExit: [],
    },

    // 11. text box
    {
      id: "11--textbox",
      alignment: "left",
      title: "",
      image: "",
      description:
        "On the confiscated World Food Program fields however, pure monocultures were grown . Aurora put on her helmet. Holograms of wheat swaying in the wind were superimposed over the plastic-penetrated, artificially irrigated chickpea fields monitored by drones. <br></br> Googles DataVizZard AI generated a detailed hologram of the surroundings using satellite images, smartphone photos from the ‘20s and other geolocation meta data. <br></br>'Wheat is good. We might grow it in Alaska if adopted correctly.' - Aurora thought. <br></br>A recovery team had to be ordered quickly. Perhaps old varieties could be tracked down in the deeper sandy, rocky earth layers.",
      location: {
        center: [13.008, 52.4373],
        zoom: 16,
        pitch: 0,
        bearing: 0,
      },
      onChapterEnter: [
        {
          layer: "potsdam-city-fill",
          opacity: 0,
        },

        {
          layer: "leibnitzinstitut",
          opacity: 1,
        },

        {
          layer: "farmland-landuse",
          opacity: 0.3,
        },

        {
          layer: "parks-leisure",
          opacity: 0,
        },

        {
          layer: "orchard-landuse",
          opacity: 0,
        },

        {
          layer: "brandenburg",
          opacity: 0,
        },

        {
          layer: "habitat",
          opacity: 0,
        },
      ],
      onChapterExit: [],
    },

    // 12. text box
    {
      id: "12--textbox",
      alignment: "left",
      title: "",
      image: "",
      description:
        "Over time, cereals such as wheat and rye, as well as corn, disappeared completely from Brandenburg agriculture. The soil became too dry and the harvests were increasingly poor in nutrients, so that the danger of malnutrition became greater. <br></br> Chickpeas were the main crop grown now. Millet, buckwheat, soybeans and sweet potatoes also found their way in. By 2072, crops were growing in Potsdam that had previously been native to the Middle East or North Africa. Germany, which until the 2020s had been famous for its bread-baking culture, became increasingly known for hummus. The Middle East and North Africa were not so lucky. These regions became lifeless, sterile deserts. <br></br>Aurora went inside the institute but the scientists had no useful information for her.",
      location: {
        center: [12.9184, 52.43],
        zoom: 11,
        pitch: 0,
        bearing: 0,
      },
      onChapterEnter: [
        {
          layer: "potsdam-city-fill",
          opacity: 0.5,
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

        {
          layer: "brandenburg",
          opacity: 0,
        },

        {
          layer: "habitat",
          opacity: 0,
        },

        {
          layer: "leibnitzinstitut",
          opacity: 0,
        },
      ],
      onChapterExit: [],
    },

    // 3. illustration
    {
      id: "_3--illustration",
      alignment: "center",
      title: "",
      image: "./assets/3_illustration.png",
      description: "",
      location: {
        center: [13.008, 52.4373],
        zoom: 15,
        pitch: 0,
        bearing: 0,
      },

      onChapterEnter: [
        {
          layer: "potsdam-city-fill",
          opacity: 0.0,
        },

        {
          layer: "leibnitzinstitut",
          opacity: 0,
        },

        {
          layer: "allotments",
          opacity: 0,
        },

        {
          layer: "orchard-landuse",
          opacity: 0,
        },
      ],
      onChapterExit: [],
    },

    // 13. text box
    {
      id: "13--textbox",
      alignment: "right",
      title: "ICU Tree Patients",
      image: "",
      description:
        "Siri went on with her story and explained that back in the ‘20s Potsdam was famous for it’s UNESCO Natural World Heritage.<br></br>“A place like the famous Park Sanssouci must have inspired a ton of people to collect some flowers and maybe even seeds” - Aurora thought.",
      location: {
        center: [13.15, 52.425],
        zoom: 11.3,
        pitch: 41.0,
        bearing: -20,
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

        {
          layer: "brandenburg",
          opacity: 0,
        },

        {
          layer: "habitat",
          opacity: 0,
        },

        {
          layer: "leibnitzinstitut",
          opacity: 0,
        },
      ],
      onChapterExit: [],
    },

    // 14. text box
    {
      id: "14--textbox",
      alignment: "left",
      title: "",
      image: "",
      description:
        "By 2030, all public parks had already been repurposed as orchards. Trees that could not bear edible fruit were abandoned. Purely aesthetic enjoyment of nature was frowned upon and partially prohibited. <br></br>Strolling through heavily robotized plantations of date palms, fig and ginko trees Aurora gazed at the rain dance performances. Government-funded research groups around the world devoted themselves to these ‘alternative techniques’ in a desperate attempt to preserve the remaining plantable areas of the earth for as long as possible.",
      location: {
        center: [13.0288, 52.4035],
        zoom: 15,
        pitch: 41.0,
        bearing: -20,
      },
      onChapterEnter: [
        {
          layer: "potsdam-city-fill",
          opacity: 0,
        },

        {
          layer: "farmland-landuse",
          opacity: 0,
        },

        {
          layer: "parks-leisure",
          opacity: 0.5,
        },

        {
          layer: "orchard-landuse",
          opacity: 0,
        },

        {
          layer: "brandenburg",
          opacity: 0,
        },

        {
          layer: "habitat",
          opacity: 0,
        },

        {
          layer: "leibnitzinstitut",
          opacity: 0,
        },
      ],
      onChapterExit: [],
    },

    // 4. illustration
    {
      id: "_4--illustration",
      alignment: "center",
      title: "",
      image: "./assets/4_illustration.png",
      description: "",
      location: {
        center: [13.0288, 52.4035],
        zoom: 15,
        pitch: 41.0,
        bearing: -20,
      },

      onChapterEnter: [
        {
          layer: "leibnitzinstitut",
          opacity: 0,
        },

        {
          layer: "allotments",
          opacity: 0,
        },

        {
          layer: "orchard-landuse",
          opacity: 0,
        },
      ],
      onChapterExit: [],
    },
    // 15. text box
    {
      id: "15--textbox",
      alignment: "right",
      title: "",
      image: "",
      description:
        "Siri went on. Since the beginning of the regular heat summers beginning 2019, the groundwater level in the region dropped dramatically. Soil dried up to its deep layers. As a result, most of the old-growth trees such as oaks, linden trees, birches, horse chestnuts and needle trees died completely. Tornadoes accelerated the process by mercilessly uprooting century-old old trees. Younger trees fell victim to pests and staff shortages, to refill the water sacks. Trees simply became too high-maintenance. In the end, they abandoned the old tree types and turned to new ones.",
      location: {
        center: [13.095, 52.4052],
        zoom: 15,
        pitch: 51.0,
        bearing: -20,
      },
      onChapterEnter: [
        {
          layer: "potsdam-city-fill",
          opacity: 0,
        },

        {
          layer: "farmland-landuse",
          opacity: 0,
        },

        {
          layer: "parks-leisure",
          opacity: 0.5,
        },

        {
          layer: "orchard-landuse",
          opacity: 0,
        },

        {
          layer: "brandenburg",
          opacity: 0,
        },

        {
          layer: "habitat",
          opacity: 0,
        },

        {
          layer: "leibnitzinstitut",
          opacity: 0,
        },
      ],
      onChapterExit: [],
    },

    // 16. text box
    {
      id: "16--textbox",
      alignment: "right",
      title: "",
      image: "",
      description:
        "Aurora turned on the holographic projections of the past. The digital holographic images were beautiful and stunning but one could not touch or smell them nor burry one’s face in it. Gradually, the beloved sight of Nordic-looking fairy-tale forests disappeared from the region. The once familiar deep green was replaced by Mediterranean to steppe-like landscapes and colors. <br></br>Unfortunately none of the dancers had any ties to the local past or otherwise useful data for the seed tracker. ",
      location: {
        center: [13.0946, 52.4272],
        zoom: 15.5,
        pitch: 51.0,
        bearing: -20,
      },
      onChapterEnter: [
        {
          layer: "potsdam-city-fill",
          opacity: 0,
        },

        {
          layer: "farmland-landuse",
          opacity: 0,
        },

        {
          layer: "parks-leisure",
          opacity: 0.5,
        },

        {
          layer: "orchard-landuse",
          opacity: 0,
        },

        {
          layer: "brandenburg",
          opacity: 0,
        },

        {
          layer: "habitat",
          opacity: 0,
        },

        {
          layer: "leibnitzinstitut",
          opacity: 0,
        },
      ],
      onChapterExit: [],
    },

    // 17. text box
    {
      id: "17--textbox",
      alignment: "left",
      title: "Fruit Sunburn",
      image: "",
      description:
        "The last place on Aurora’s list were the former allotment gardens and orchards. <br></br>'Siri, tell me the story about Potsdam's allotment gardens.' – said Aurora into the voice interface. And Siri’s digital mind was always ready to go. <br></br>What once were popular and desired allotments have become urban climate gardens. In extensive citizen science projects, politicians engaged all knowledgeable people to grow only edible plants and collect data on what survived in the new extreme conditions. Those were not requests, but legislative decrees.",
      location: {
        center: [12.9184, 52.43],
        zoom: 10.5,
        pitch: 41.0,
        bearing: 0,
      },
      onChapterEnter: [
        {
          layer: "potsdam-city-fill",
          opacity: 0.5,
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
          opacity: 0.5,
        },

        {
          layer: "brandenburg",
          opacity: 0,
        },

        {
          layer: "habitat",
          opacity: 0,
        },

        {
          layer: "leibnitzinstitut",
          opacity: 0,
        },

        {
          layer: "allotments-78oelq",
          opacity: 0.5,
        },
      ],
      onChapterExit: [],
    },

    // 18. text box
    {
      id: "18--textbox",
      alignment: "left",
      title: "",
      image: "",
      description:
        "The former cultivation of apples, pears, plums and cherries in orchards like Werder Frucht or Alexandrovka and allotment gardens like Kleingartenverein Pfingstberg became impossible. Unpredictable and erratic cold snaps at flowering time, violent hail and fruit sunburn due to weeks of scorching heat from an absolutely cloudless sky led to certain harvest failures. <br></br>'I wish I could take a bite like Snow White right now' – Aurora laughed, touching a holographic apple with her fingertips.",
      location: {
        center: [13.055, 52.413],
        zoom: 16,
        pitch: 41.0,
        bearing: 90,
      },
      onChapterEnter: [
        {
          layer: "potsdam-city-fill",
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
          opacity: 0.7,
        },

        {
          layer: "brandenburg",
          opacity: 0,
        },

        {
          layer: "habitat",
          opacity: 0,
        },

        {
          layer: "leibnitzinstitut",
          opacity: 0,
        },

        {
          layer: "allotments-78oelq",
          opacity: 0.5,
        },
      ],
      onChapterExit: [],
    },

    // 19. text box
    {
      id: "19--textbox",
      alignment: "left",
      title: "",
      image: "",
      description:
        "2072 Cultivation shifted to apricots, kiwis, nectarines, ginger, sea buckthorn, physalis, melons and sun-loving grape varieties. <br></br>“Wouldn’t say no to a Finnish Cabernet Sauvignon” – Aurora murmured to herself, sweating in her sunprotection suite. 2072 it was Skandinavia that provided the world with wine.",
      location: {
        center: [13.0609, 52.4225],
        zoom: 17,
        pitch: 41.0,
        bearing: 78.33,
      },
      onChapterEnter: [
        {
          layer: "potsdam-city-fill",
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
          opacity: 0.5,
        },

        {
          layer: "brandenburg",
          opacity: 0,
        },

        {
          layer: "habitat",
          opacity: 0,
        },

        {
          layer: "leibnitzinstitut",
          opacity: 0,
        },

        {
          layer: "allotments-78oelq",
          opacity: 0.5,
        },
      ],
      onChapterExit: [],
    },

    // 5. illustration
    {
      id: "_5--illustration",
      alignment: "center",
      title: "",

      // pictures are loaded from the assets folder
      image: "./assets/5_illustration.png",
      description: "",
      location: {
        center: [13.0609, 52.4225],
        zoom: 17,
        pitch: 41.0,
        bearing: 78.33,
      },

      onChapterEnter: [
        {
          layer: "leibnitzinstitut",
          opacity: 0,
        },

        {
          layer: "potsdam-city-fill",
          opacity: 0,
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

    // 6. illustration
    {
      id: "_6--illustration",
      alignment: "center",
      title: "",
      image: "./assets/6_illustration.png",
      description: "",
      location: {
        center: [13.0609, 52.4225],
        zoom: 17,
        pitch: 41.0,
        bearing: 78.33,
      },

      onChapterEnter: [
        {
          layer: "leibnitzinstitut",
          opacity: 0,
        },

        {
          layer: "potsdam-city-fill",
          opacity: 0,
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

    // 20. text box
    {
      id: "20--textbox",
      alignment: "left",
      title: "",
      image: "",
      description:
        "Harvesting and tending to the plants were largely taken over by robots, as the heat at midday became a danger for the often elderly population. Harvesting robots and drones, which used object recognition algorithms to detect ripeness and pests, whirred in circles. <br></br>It took Aurora a while to locate a human gardener for consultation. ",
      location: {
        center: [13.0609, 52.4225],
        zoom: 17,
        pitch: 41.0,
        bearing: 78.33,
      },
      onChapterEnter: [],
      onChapterExit: [],
    },

    // 21. text box
    {
      id: "21--textbox",
      alignment: "left",
      title: "A Bug Break a Day keeps the Doctor away",
      image: "",
      description:
        "The gardener she found was enjoying his ‘Bug Break’. Protein bars made from insects – the world depended on them for sufficient nutrition. After Aurora had introduced herself and her reason for being there, the two started talking.",
      location: {
        center: [13.1, 52.428],
        zoom: 15,
        pitch: 60.0,
        bearing: 0,
      },
      onChapterEnter: [],
      onChapterExit: [],
    },

    // 22. text box
    {
      id: "22--textbox",
      alignment: "left",
      title: "",
      image: "",
      description:
        "The gardener actually knew the association, Aurora was looking for. <br></br>“Some  members endeavor to preserve and recultivate useful plants even today.” – he told her. “Even though it is illegal to use the water for it. <br></br>In the 20’s, the association accomodated about 2.000 almost extinct crop varieties. In addition, it provided knowledge about cultivation, care and use of crops in an easily accessible manner. People coordinated preservation networks, which together grew hundreds of different plant  varieties each year. This was, of course, before the draconian water rationalization of the 1930s and the federalization of gardens.",
      location: {
        center: [13.1, 52.428],
        zoom: 15,
        pitch: 60.0,
        bearing: 0,
      },
      onChapterEnter: [],
      onChapterExit: [],
    },

    // 23. text box
    {
      id: "23--textbox",
      alignment: "left",
      title: "",
      image: "",
      description:
        "The goal was to preserve the genetic diversity for future plant breeding. Because they anticipated that only a critical mass of varieties could spark a revival of diversity. <br></br> 'Earth’s flora and fauna have something decidedly ahead of us humans. They have already experienced changing global climates more than once, and because no one has interfered with them, they and their descendants have survived. For humanity, this is largely uncharted territory. Nature has no human sense of time. For our planet, millions of years to rgenerate mean nothing. Time is not a tangible category for it. But is is for us humans ... .' – the gardener concluded.",
      location: {
        center: [13.1, 52.428],
        zoom: 15,
        pitch: 60.0,
        bearing: 0,
      },
      onChapterEnter: [],
      onChapterExit: [],
    },

    // 24. text box
    {
      id: "24--textbox",
      alignment: "left",
      title: "",
      image: "",
      description:
        "“Would you care for an apple from Potsdam that is not genetically altered to contain 3.000 kcal but also tastes like dust?” – he smiled and handed Aurora an apple variety she has never seen before. <br></br>Aurora has never been so happy about an illegal underground organization, her mind filled up with possibilities ... <br></br>WHUUUUUUUUUUUUUU!!!<br></br>The howl of the environmental siren burst into her imagined utopia. A sand tornado was approaching. Aurora had to return quickly to Klimabunker Nr. 42. She put on her sand storm respiratory mask and took the apple.",
      location: {
        center: [12.9184, 52.43],
        zoom: 10.5,
        pitch: 0,
        bearing: 0,
      },
      onChapterEnter: [
        {
          layer: "potsdam-city-fill",
          opacity: 0.3,
        },

        {
          layer: "farmland-landuse",
          opacity: 0.5,
        },

        {
          layer: "parks-leisure",
          opacity: 0.5,
        },

        {
          layer: "orchard-landuse",
          opacity: 0.5,
        },

        {
          layer: "brandenburg",
          opacity: 0,
        },

        {
          layer: "habitat",
          opacity: 0,
        },

        {
          layer: "leibnitzinstitut",
          opacity: 0,
        },

        {
          layer: "allotments-78oelq",
          opacity: 0.5,
        },
      ],
      onChapterExit: [],
    },
  ],
};
