var config = {
    
  style: 'mapbox://styles/annamei1913/cl49mbgl3003k14nvp4483s62',
  accessToken: 'pk.eyJ1IjoiYW5uYW1laTE5MTMiLCJhIjoiY2wxbmh5dDJmMDFrZTNjbzhzZGloYjdsaCJ9.2d3SFzdAFD2O4tuUgAZ-pg',
  showMarkers: false,
  theme: 'light',
  use3dTerrain: false,
  // title
  title: 'Working Title Comes Here',
  subtitle: 'subtitle comes here',
  byline: 'test test test',
  footer: 'Footer text: Copyright Anna Meide, FHP, ...',
  
  chapters: [
    
    // introduction  
    {
        id: 'harrison1998', // in doku gucken, hat eher keinen einfluss
        alignment: 'left',
        title: '1 box zero: intoduction',
        image: '',
        // wie kann ich im text unterstreichen? 
        description: 'Here comes the text for the intoduction. <br><br> try out how much text looks good.',
        location: {
            // look for offset in documentation / center of display 16:9 passt
            center: [12.9184, 52.4496],
            zoom: 10.9,
            // pitch: 39.50, nice touch try out later
            // bearing: 36.00
            pitch: 0,
            bearing: 0
        },

        // write all layers in here which you want to hide
        onChapterEnter: [
            //{
                //layer: 'potsdam-city-fill',
                //opacity: 0
            //},

            {
                layer: 'farmland-landuse',
                opacity: 0
            },

            {
                layer: 'allotments-78oelq',
                opacity: 0
            },
            
            {
                layer: 'orchard-landuse',
                opacity: 0
            }
        ],


        onChapterExit: [
            //{
            //layer: 'potsdam-city-fill',
            //opacity: 0
        //},

        {
            layer: 'farmland-landuse',
            opacity: 1
        },

        {
            layer: 'allotments-78oelq',
            opacity: 0
        },
        
        {
            layer: 'orchard-landuse',
            opacity: 0
        } ]
    },


          // first text box agrar felder
          {
            id: 'harrison1998--1',
            alignment: 'left',
            title: '2 first textbox: chapter: agricultural fields',
            image: '',
            // wie kann ich im text unterstreichen? 
            description: 'Here comes the text for the first chapter.',
            location: {
                center: [12.9184, 52.4496],
                zoom: 14,
                pitch: 0,
                bearing: 0
                //pitch: 39.50,
                //bearing: 36.00
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
                layer: 'allotments-78oelq',
                opacity: 0
            },
            
            {
                layer: 'orchard-landuse',
                opacity: 0
            } 
        ],
            onChapterExit: [
                // {
                //     layer: 'gnpglaciers-2015',
                //     opacity: 0
                // }
            ]
        },

    
    {
          // first illustration

          id: 'glacier-np',
          alignment: 'full',
          title: 'first illustration: agricultural fields',
          
          // pictures are loaded from the assets folder
          image: './assets/0_testillustration.png',
          description: 'description of the illustration if wanted comes here',
          location: {
              center: [12.9184, 52.4496],
              zoom: 8,
              pitch: 0.00,
              bearing: 0.00
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
                layer: 'allotments-78oelq',
                opacity: 0
            },
            
            {
                layer: 'orchard-landuse',
                opacity: 0
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
        // second illustration
        
        id: 'glacier-np',
        alignment: 'full',
        title: 'second illustration: gardens',
        
        // pictures are loaded from the assets folder
        image: './assets/2_illustration.png',
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
          id: 'blackfoot1998',
          alignment: 'left',
          title: 'third chapter orchards',
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
        // second illustration
        
        id: 'glacier-np',
        alignment: 'full',
        title: 'third illustration: orchards',
        
        // pictures are loaded from the assets folder
        image: './assets/2_illustration.png',
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
          id: 'blackfoot2015',
          alignment: 'left',
          title: 'conclusion',
          image: '',
          description: 'here comes the conclusion text.',
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
          title: 'conclusion part 2',
          image: '',
          description: 'here comes the last part of the conclusion.',
          location: {
              center: [-114.15881, 48.93439],
              zoom: 13.51,
              pitch: 41.00,
              bearing: 78.33
          },
          onChapterEnter: [],
          onChapterExit: []
      },
    
      
      
      
  ]
};