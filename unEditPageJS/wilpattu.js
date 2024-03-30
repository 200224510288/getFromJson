
// Introduction section 
const wilpattu = {
    h1AboutWilpattu: '',
    h2AboutWilpattu: '',
    descriptionAboutWilpattu: '',
    h2WildlifeWilpattu: '',
    descriptionWilpattu: '',
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
    h3Tour: '',
    h3Tour2: '',
    descriptionTour: '',    
    h3Camping: '',
    h3Camping2: '',
    descriptionCamping: '',
    h1OurRequest: '',
    h1Remember: '',
    rulesList:[]
};


// fetch the JSON data
fetch('wilpattu.json')
    .then(response => response.json())
    .then(data => {
        wilpattu.h1AboutWilpattu = data.h1AboutWilpattu;
        wilpattu.h2AboutWilpattu = data.h2AboutWilpattu;
        wilpattu.descriptionAboutWilpattu = data.descriptionAboutWilpattu;
        wilpattu.h2WildlifeWilpattu = data.h2WildlifeWilpattu;
        wilpattu.descriptionWilpattu = data.descriptionWilpattu;
        wilpattu.h1OurEndemic = data.h1OurEndemic;
        wilpattu.h2OurEndemic = data.h2OurEndemic;
        wilpattu.animalList = data.animalList;
        wilpattu.h2Birdlife = data.h2Birdlife;
        wilpattu.descriptionBirdlife = data.descriptionBirdlife;
        wilpattu.h2Reptiles = data.h2Reptiles;
        wilpattu.descriptionReptiles = data.descriptionReptiles;
        wilpattu.h1Adventures = data.h1Adventures;
        wilpattu.h3JeepSafari = data.h3JeepSafari;
        wilpattu.h3JeepSafari2 = data.h3JeepSafari2;
        wilpattu.descriptionJeepSafari = data.descriptionJeepSafari;
        wilpattu.h3Tour = data.h3Tour;
        wilpattu.h3Tour2 = data.h3Tour2;
        wilpattu.descriptionTour = data.descriptionTour;
        wilpattu.h3Camping = data.h3Camping;
        wilpattu.h3Camping2 = data.h3Camping2;
        wilpattu.descriptionCamping = data.descriptionCamping;
        wilpattu.rulesList = data.rulesList;
        wilpattu.h1OurRequest = data.h1OurRequest;
        wilpattu.h1Remember = data.h1Remember;

        localStorage.setItem('wilpattuPageData', JSON.stringify(data));


    })
    .catch(error => console.error('Error fetching data:', error));
// end of the introduction section