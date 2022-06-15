var config = {
  style: 'mapbox://styles/annamei1913/cl49mbgl3003k14nvp4483s62',
  accessToken: 'pk.eyJ1IjoiYW5uYW1laTE5MTMiLCJhIjoiY2wxbmh5dDJmMDFrZTNjbzhzZGloYjdsaCJ9.2d3SFzdAFD2O4tuUgAZ-pg',
  showMarkers: false,
  theme: 'light',
  use3dTerrain: false,
  // title
  title: 'Working Title Comes Here',
  subtitle: 'subtitle comes here',
  byline: '',
  footer: 'Footer text: Copyright Anna Meide, FHP, ...',
  
  chapters: [
    
    // introduction  
    {
        id: 'harrison1998',
        alignment: 'left',
        title: 'box zero: intoduction',
        image: '',
        // wie kann ich im text unterstreichen? 
        description: 'Here comes the text for the intoduction. <br><br> try out how much text looks good.',
        location: {
            center: [13.0623, 52.3934],
            zoom: 11,
            // pitch: 39.50, nice touch try out later
            // bearing: 36.00
            pitch: 0,
            bearing: 0
        },

        // hier die felder polygone anzeigen (und reinzoomen???)
        onChapterEnter: [],
        onChapterExit: [
             {
                 layer: 'potsdam-city-fill',
                 opacity: 0
             }
        ]
    },

          // first text box
          {
            id: 'harrison1998',
            alignment: 'left',
            title: 'first textbox: chapter one: agricultural fields',
            image: '',
            // wie kann ich im text unterstreichen? 
            description: 'Here comes the text for the first chapter.',
            location: {
                center: [-113.72917, 48.58938],
                zoom: 12.92,
                pitch: 39.50,
                bearing: 36.00
            },
  
            // hier die felder polygone anzeigen (und reinzoomen???)
            onChapterEnter: [],
            onChapterExit: [
                // {
                //     layer: 'gnpglaciers-2015',
                //     opacity: 0
                // }
            ]
        },

    
    {
          // first illustration
          // ??? muss die id geändert werden?

          id: 'glacier-np',
          alignment: 'full',
          title: 'first illustration: agricultural fields',
          
          // pictures are loaded from the assets folder
          image: './assets/0_testillustration.png',
          description: 'description of the illustration if wanted comes here',
          location: {
              center: [-113.91666, 48.66451],
              zoom: 8,
              pitch: 0.00,
              bearing: 0.00
          },

          onChapterEnter: [
              {
                  layer: 'gnpglaciers-1998',
                  opacity: 0.25
              },
              {
                  layer: 'glaciernp-boundary',
                  opacity: 0.25
              }
          ],
          onChapterExit: [
              {
                  layer: 'glaciernp-boundary',
                  opacity: 0
              }
          ]
      },


      {
        id: 'harrison1998',
        alignment: 'left',
        title: 'copy: first textbox: chapter one: agricultural fields',
        image: '',
        // wie kann ich im text unterstreichen? 
        description: 'Here comes the text for the first chapter.',
        location: {
            center: [-113.72917, 48.58938],
            zoom: 12.92,
            pitch: 39.50,
            bearing: 36.00
        },

        // hier die felder polygone anzeigen (und reinzoomen???)
        onChapterEnter: [],
        onChapterExit: [
            // {
            //     layer: 'gnpglaciers-2015',
            //     opacity: 0
            // }
        ]
    },

      // second text box
      {
          id: 'harrison2015',
          alignment: 'left',
          title: 'second text box: allotment fields',
          image: '',
          description: 'here comes the text. here comes the text.',
          location: {
              center: [-113.72917, 48.58938],
              zoom: 12.92,
              pitch: 39.50,
              bearing: 36.00
          },
          
          // hier allotment fields polygone anzeigen
          onChapterEnter: [
              {
                  layer: 'gnpglaciers-2015',
                  opacity: 0.25
              }
          ],
          onChapterExit: [
              {
                  layer: 'gnpglaciers-2015',
                  opacity: 0
              }
          ]
      },
      {
          id: 'blackfoot1998',
          alignment: 'left',
          title: 'Blackfoot Glacier, 1998',
          image: '',
          description: 'Blackfoot Glacier is the second largest of the remaining 25 glaciers in Glacier National Park, Montana. Blackfoot Glacier is just to the north of Blackfoot Mountain and near Jackson Glacier. When first documented in 1850, the glacier also included the now separate Jackson Glacier and together, they covered 1,875 acres (7.59 km2). In 1850, there were an estimated 150 glaciers in the park. Glaciologists have stated that by the year 2030, all the glaciers in the park may disappear.',
          location: {
              center: [-113.66573, 48.59181],
              zoom: 12.92,
              pitch: 51.50,
              bearing: -26.40
          },
          onChapterEnter: [],
          onChapterExit: []
      },
      {
          id: 'blackfoot2015',
          alignment: 'left',
          title: 'Blackfoot Glacier, 2015',
          image: '',
          description: 'Between 1998 and 2015, Blackfoot Glacier lost 31 acres of surface area (about 8%).',
          location: {
              center: [-113.66573, 48.59181],
              zoom: 12.92,
              pitch: 51.50,
              bearing: -26.40
          },
          onChapterEnter: [
              {
                  layer: 'gnpglaciers-2015',
                  opacity: 0.25
              }
          ],
          onChapterExit: [
              {
                  layer: 'gnpglaciers-2015',
                  opacity: 0
              }
          ]
      },
      {
          id: 'agassiz1998',
          alignment: 'left',
          title: 'Agassiz Glacier, 1998',
          image: '',
          description: 'Agassiz Glacier is in Glacier National Park in the U.S. state of Montana. It is named after Louis Agassiz, a Swiss-American glaciologist. The glacier is situated in a cirque to the southeast of Kintla Peak west of the Continental Divide. Agassiz Glacier is one of several glaciers that have been selected for monitoring by the U.S. Geological Survey\'s Glacier Monitoring Research program, which is researching changes to the mass balance of glaciers in and surrounding Glacier National Park.',
          location: {
              center: [-114.15881, 48.93439],
              zoom: 13.51,
              pitch: 41.00,
              bearing: 78.33
          },
          onChapterEnter: [],
          onChapterExit: []
      },
      {
          id: 'agassiz2015',
          alignment: 'left',
          title: 'Agassiz Glacier, 2015',
          image: '',
          description: 'Between 1998 and 2015, Agassiz Glacier lost 108 acres of surface area (about 37%).',
          location: {
              center: [-114.15881, 48.93439],
              zoom: 13.51,
              pitch: 41.00,
              bearing: 78.33
          },
          onChapterEnter: [
              {
                  layer: 'gnpglaciers-2015',
                  opacity: 0.25,
              }
          ],
          onChapterExit: [
              {
                  layer: 'gnpglaciers-2015',
                  opacity: 0
              }
          ]
      },
      {
          id: 'rainbow1998',
          alignment: 'left',
          title: 'Rainbow Glacier, 1998',
          image: '',
          description: 'Rainbow Glacier is in Glacier National Park in the U.S. state of Montana. The glacier is situated immediately to the east of Rainbow Peak at an elevation between 8,500 feet (2,600 m) and 8,000 feet (2,400 m) above sea level. The glacier has visible crevasses in satellite imagery. Rainbow Glacier has shown modest retreat compared to other glaciers in Glacier National Park.',
          location: {
              center: [-114.08659, 48.88039],
              zoom: 13.09,
              pitch: 50.00,
              bearing: -53.60
          },
          onChapterEnter: [],
          onChapterExit: []
      },
      {
          id: 'rainbow2015',
          alignment: 'left',
          title: 'Rainbow Glacier, 2015',
          image: '',
          description: 'Between 1998 and 2015, Rainbow Glacier lost 17 acres of surface area (about 6%).',
          location: {
              center: [-114.08659, 48.88039],
              zoom: 13.09,
              pitch: 50.00,
              bearing: -53.60
          },
          onChapterEnter: [
              {
                  layer: 'gnpglaciers-2015',
                  opacity: 0.25
              }
          ],
          onChapterExit: [
              {
                  layer: 'gnpglaciers-2015',
                  opacity: 0
              }
          ]
      },
      {
          id: 'kintla1998',
          alignment: 'left',
          title: 'Kintla Glacier, 1998',
          image: '',
          description: 'Kintla Glacier is in Glacier National Park in the U.S. state of Montana. The glacier is situated on a plateau 2 miles (3.2 km) southwest of Kintla Peak at an elevation between 8,700 feet (2,700 m) and 7,700 feet (2,300 m) above sea level. The glacier has numerous crevasses and is actually two glaciers.',
          location: {
              center: [-114.18755, 48.92880],
              zoom: 13.09,
              pitch: 48.50,
              bearing: 164.00
          },
          onChapterEnter: [],
          onChapterExit: []
      },
      {
          id: 'kintla2015',
          alignment: 'left',
          title: 'Kintla Glacier, 2015',
          image: '',
          description: 'Between 1998 and 2015, Harrison Glacier lost 24 acres of surface area (about 10%).',
          location: {
              center: [-114.18755, 48.92880],
              zoom: 13.09,
              pitch: 48.50,
              bearing: 164.00
          },
          onChapterEnter: [
              {
                  layer: 'gnpglaciers-2015',
                  opacity: 0.25
              }
          ],
          onChapterExit: [
              {
                  layer: 'gnpglaciers-2015',
                  opacity: 0
              }
          ]
      },
      {
          id: 'sperry1998',
          alignment: 'left',
          title: 'Sperry Glacier, 1998',
          image: '',
          description: 'Sperry Glacier is a glacier on the north slopes of Gunsight Mountain west of the Continental Divide in Glacier National Park in the U.S. state of Montana. Although many geologic features of Glacier National Park were formed during the much longer period of glaciation ending over 10,000 years ago, Sperry Glacier — like all the glaciers in the park today — is a product of the recent Little Ice Age, the period of cooler average temperatures starting in about the 13th century and concluding in the mid-19th century.',
          location: {
              center: [-113.75672, 48.62433],
              zoom: 13.68,
              pitch: 34.50,
              bearing: 106.40
          },
          onChapterEnter: [],
          onChapterExit: []
      },
      {
          id: 'sperry2015',
          alignment: 'left',
          title: 'Sperry Glacier, 2015',
          image: '',
          description: 'Between 1998 and 2015, Harrison Glacier lost 37 acres of surface area (about 16%).',
          location: {
              center: [-113.75672, 48.62433],
              zoom: 13.68,
              pitch: 34.50,
              bearing: 106.40
          },
          onChapterEnter: [
              {
                  layer: 'gnpglaciers-2015',
                  opacity: 0.25
              }
          ],
          onChapterExit: [
              {
                  layer: 'gnpglaciers-2015',
                  opacity: 0
              }
          ]
       }
  ]
};