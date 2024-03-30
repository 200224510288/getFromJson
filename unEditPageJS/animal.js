
// animal section 
const animalData = {
    h1Mammals: '',
    descriptionMammals: '',
    h2Mammals: '',
    h3MammalsLeo: '',
    descriptionMammalsLeo: '',
    h3MammalsElephant: '',
    descriptionMammalsElephant: '',
    
    h1Birds: '',
    descriptionBirds: '',
    h2Birds: '',
    h3BirdsCrimson: '',
    descriptionBirdsCrimson: '',
    h3BirdsOwl: '',
    descriptionBirdsOwl: '',
    h3BirdsDrongo: '',
    descriptionBirdsDrongo: '',
};

// fetch the JSON data
fetch('animal.json')
    .then(response => response.json())
    .then(data => {
        animalData.h1Mammals = data.h1Mammals;
        animalData.descriptionMammals = data.descriptionMammals;
        animalData.h2Mammals = data.h2Mammals;
        animalData.h3MammalsLeo = data.h3MammalsLeo;
        animalData.descriptionMammalsLeo = data.descriptionMammalsLeo;
        animalData.h3MammalsElephant = data.h3MammalsElephant;
        animalData.descriptionMammalsElephant = data.descriptionMammalsElephant;
        animalData.h2Birds = data.h2Birds;        
        animalData.h1Birds = data.h1Birds;
        animalData.descriptionBirds = data.descriptionBirds;
        animalData.h3BirdsCrimson = data.h3BirdsCrimson;
        animalData.descriptionBirdsCrimson = data.descriptionBirdsCrimson;
        animalData.h3BirdsOwl = data.h3BirdsOwl;
        animalData.descriptionBirdsOwl = data.descriptionBirdsOwl;
        animalData.h3BirdsDrongo = data.h3BirdsDrongo;
        animalData.descriptionBirdsDrongo = data.descriptionBirdsDrongo;

        localStorage.setItem('animalPageData', JSON.stringify(data));

    })
    .catch(error => console.error('Error fetching data:', error));
// end of the introduction section