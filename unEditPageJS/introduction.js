
// Introduction section 
const introductionData = {
    h1Intro: '',
    h2Intro: '',
    descriptionIntro: '',
    h1Wonder: '',
    descriptionWonder: '',
    h1Sinharaja: '',
    h1Location: '',
    descriptionLocation: '',
    h1Integrity: '',
    descriptionIntegrity: '',
    h1Minneriya: '',
    h1MinneriyaLocation: '',
    descriptionMinneriyaLocation: '',
    h1WonderMinneriya: '',
    descriptionWonderMinneriya: ''

}


// fetch the JSON data
fetch('introduction.json')
    .then(response => response.json())
    .then(data => {
        introductionData.h1Intro = data.h1Intro;
        introductionData.h2Intro = data.h2Intro;
        introductionData.descriptionIntro = data.descriptionIntro;
        introductionData.h1Wonder = data.h1Wonder;
        introductionData.descriptionWonder = data.descriptionWonder;
        introductionData.h1Sinharaja = data.h1Sinharaja;
        introductionData.h1Location = data.h1Location;
        introductionData.descriptionLocation = data.descriptionLocation;
        introductionData.h1Integrity = data.h1Integrity;
        introductionData.descriptionIntegrity = data.descriptionIntegrity;
        introductionData.h1Minneriya = data.h1Minneriya;
        introductionData.h1MinneriyaLocation = data.h1MinneriyaLocation;
        introductionData.descriptionMinneriyaLocation = data.descriptionMinneriyaLocation;
        introductionData.h1WonderMinneriya = data.h1WonderMinneriya;
        introductionData.descriptionWonderMinneriya = data.descriptionWonderMinneriya;
        
        localStorage.setItem('introductionPageData', JSON.stringify(data));


    })
    .catch(error => console.error('Error fetching data:', error));
// end of the introduction section