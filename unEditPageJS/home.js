
// endemic animal section 
        const endemicData = {
            animalList: [],
            h2Title: '',
            h2Birds: '',
            reptitlesTitle: '',
            birdDescription: '',
            reptilesDescription: '',
            parksList: [],
            parkH2 : '',
            h2IntroductionParks: '',
            h2ConservationParks: '',
            introductionParks: '',
            conservationParks: '',
            h1Lover: '',
            descriptionLover: ''
        };
        const headingH = {
            h1Title: '',

        };
    
        // fetch the JSON data
        fetch('home.json')
            .then(response => response.json())
            .then(data => {
                headingH.h1Title = data.h1Title;
                endemicData.h2Title = data.h2Title;
                endemicData.h2Birds = data.h2Birds;
                endemicData.birdDescription = data.birdDescription;
                endemicData.reptitlesTitle = data.reptitlesTitle;
                endemicData.reptilesDescription = data.reptilesDescription;
                endemicData.animalList = data.animalList;
                endemicData.parkH2 = data.parkH2;
                endemicData.h2IntroductionParks = data.h2IntroductionParks;
                endemicData.h2ConservationParks = data.h2ConservationParks;
                endemicData.conservationParks = data.conservationParks;
                endemicData.introductionParks = data.introductionParks;
                endemicData.parksList = data.parksList;
                endemicData.descriptionLover = data.descriptionLover;
                endemicData.h1Lover = data.h1Lover;
                
                localStorage.setItem('homePageData', JSON.stringify(data));
            })
            .catch(error => console.error('Error fetching data:', error));
// end of the endemic animal section