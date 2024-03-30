// yala section 
const yala = {
    h1AboutYala: '',
    h2AboutYala: '',
    descriptionAboutYala: '',
    h2WildlifeYala: '',
    descriptionWildlifeYala: '',
    h1OurEndemic: '',
    h2OurEndemic: '',
    animalList: [],
    h2Birdlife: '',
    descriptionBirdlife: '',
    h2Reptiles: '',
    descriptionReptiles: '',
    h1Adventures: '',
    h3JeepSafari: '',
    h3JeepSafari2: '',
    descriptionJeepSafari: '',
    
    h3Accommodation: '',
    h3Accommodation2: '',
    descriptionAccommodation: '',
    
    h3Camping: '',
    h3Camping2: '',
    descriptionCamping: '',
    h1OurRequest: '',
    h1Remember: '',
    rulesList:[],
}


// fetch the JSON data
fetch('yala.json')
    .then(response => response.json())
    .then(data => {
        yala.h1AboutYala = data.h1AboutYala;
        yala.h2AboutYala = data.h2AboutYala;
        yala.descriptionAboutYala = data.descriptionAboutYala;
        yala.h2WildlifeYala = data.h2WildlifeYala;
        yala.descriptionWildlifeYala = data.descriptionWildlifeYala;
        yala.h1OurEndemic = data.h1OurEndemic;
        yala.h2OurEndemic = data.h2OurEndemic;
        yala.animalList = data.animalList;

        yala.h2Birdlife = data.h2Birdlife;
        yala.descriptionBirdlife = data.descriptionBirdlife;
        yala.h2Reptiles = data.h2Reptiles;
        yala.descriptionReptiles = data.descriptionReptiles;
        yala.h1Adventures = data.h1Adventures;
        yala.h3JeepSafari = data.h3JeepSafari;

        yala.h3JeepSafari2 = data.h3JeepSafari2;
        yala.descriptionJeepSafari = data.descriptionJeepSafari;
        yala.h3Accommodation = data.h3Accommodation;
        yala.h3Accommodation2 = data.h3Accommodation2;

        yala.descriptionAccommodation = data.descriptionAccommodation;
        yala.h3Camping = data.h3Camping;
        yala.h3Camping2 = data.h3Camping2;
        yala.descriptionCamping = data.descriptionCamping;
        yala.rulesList = data.rulesList;
        yala.h1OurRequest = data.h1OurRequest;
        yala.h1Remember = data.h1Remember;

        localStorage.setItem('yalaPageData', JSON.stringify(data));


    })
    .catch(error => console.error('Error fetching data:', error));
// end of the yala section
