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

        // 1 textbox: introduction  
        {
            id: '1--introduction', // id HAS TO be unique
            alignment: 'left',
            title: '1 text box: intoduction',
            image: '',
            // wie kann ich im text unterstreichen? 
            description: 'Here comes the text for the intoduction. <br></br> try out how much text looks good.<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>...',
            location: {
                // look for offset in documentation / center of display 16:9 passt
                center: [12.9184, 52.4300],
                zoom: 10.9,
                // pitch: 39.50, nice touch try out later
                // bearing: 36.00
                pitch: 0,
                bearing: 0
            },

            // here come layers which you want to hide or show
            onChapterEnter: [
                {
                    layer: 'potsdam-city-fill',
                    opacity: 0.2
                },

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


            onChapterExit: []
        },


        // 2 text box: agricultural fields / 1
        {
            id: '2--textbox',
            alignment: 'left',
            title: '2 textbox: agricultural fields / 1',
            image: '',
            // wie kann ich im text unterstreichen? mit span und span style in css geht es nicht. 
            description: 'Here <span>comes the text</span> for the first chapter. <br></br><br></br><br></br><br></br>',
            location: {
                center: [12.9184, 52.4300],
                zoom: 10.9,
                pitch: 0,
                bearing: 0
                //pitch: 39.50,
                //bearing: 36.00
        },

            onChapterEnter: [
                {
                    layer: 'potsdam-city-fill',
                    opacity: 0.2
                },

                {
                    layer: 'farmland-landuse',
                    opacity: 0.5
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
            onChapterExit: []
        },

        // 3 text box: agricultural fields / 2
        {
            id: '3--textbox',
            alignment: 'left',
            title: '3 textbox: agricultural fields / 2',
            image: '',
            // wie kann ich im text unterstreichen? 
            description: 'Here comes the text for the first chapter. <br></br><br></br><br></br><br></br>',
            location: {
                center: [12.9184, 52.4300],
                zoom: 12,
                pitch: 0,
                bearing: 0
                //pitch: 39.50,
                //bearing: 36.00
        },

            onChapterEnter: [
                {
                    layer: 'potsdam-city-fill',
                    opacity: 0.2
                },

                {
                    layer: 'farmland-landuse',
                    opacity: 0.5
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
            onChapterExit: []
        },

        // 1 illustration: agricultural fields
        {
            id: '1--illustration',
            alignment: 'full', // ??? wie illu etwas kleiner 90% ging nicht.
            title: 'first illustration: agricultural fields',

            // pictures are loaded from the assets folder
            image: './assets/0_testillustration.png',
            description: 'description of the illustration if wanted comes here',
            location: {
                center: [12.9184, 52.4300],
                zoom: 12,
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

        // 4 text box: allotment gardens / 1
        {
            id: '4--textbox',
            alignment: 'left',
            title: '4 text box: allotment gardens / 1',
            image: '',
            description: 'Here comes the text for the next chapter.',
            location: {
                center: [12.9184, 52.4300],
                zoom: 10.9,
                pitch: 39.50,
                bearing: 36.00
            },

            onChapterEnter: [
                {
                    layer: 'potsdam-city-fill',
                    opacity: 0.2
                },

                {
                    layer: 'farmland-landuse',
                    opacity: 0
                },

                {
                    layer: 'allotments-78oelq',
                    opacity: 0.5
                },

                {
                    layer: 'orchard-landuse',
                    opacity: 0
                }
            ],
            onChapterExit: []
        },

        // 5 text box: allotment gardens / 2
        {
            id: '5--textbox',
            alignment: 'left',
            title: '4 text box: allotment gardens / 2',
            image: '',
            description: 'Here comes the text for the next chapter.',
            location: {
                center: [12.9184, 52.4300],
                zoom: 12,
                pitch: 39.50,
                bearing: 36.00
            },

            onChapterEnter: [
                {
                    layer: 'potsdam-city-fill',
                    opacity: 0.2
                },

                {
                    layer: 'farmland-landuse',
                    opacity: 0
                },

                {
                    layer: 'allotments-78oelq',
                    opacity: 0.5
                },

                {
                    layer: 'orchard-landuse',
                    opacity: 0
                }
            ],
            onChapterExit: []
        },

        
        {
            id: 'harrison2015',
            alignment: 'left',
            title: 'second text box: allotment fields',
            image: '',
            description: 'here comes the text. here comes the text.',
            location: {
                center: [12.9184, 52.4300],
                zoom: 10.9,
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
                center: [12.9184, 52.4300],
                zoom: 10.9,
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
                center: [12.9184, 52.4300],
                zoom: 10.9,
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
                center: [12.9184, 52.4300],
                zoom: 12,
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
                center: [12.9184, 52.4300],
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
                center: [12.9184, 52.4300],
                zoom: 13.51,
                pitch: 41.00,
                bearing: 78.33
            },
            onChapterEnter: [],
            onChapterExit: []
        },




    ]
};