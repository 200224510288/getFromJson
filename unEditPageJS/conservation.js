
// conservation section 
const conservationData = {
    h1Conservation: '',
    h2Conservation: '',
    descriptionConservation: '',
    h2Responsibilities: '',
    descriptionResponsibilities: '',
    h1Location: '',
    directonList: [],
    h2Location: '',
    h1Concern: '',
    descriptionConcern: '',

}


// fetch the JSON data
fetch('conservation.json')
    .then(response => response.json())
    .then(data => {
        conservationData.h1Conservation = data.h1Conservation;
        conservationData.h2Conservation = data.h2Conservation;
        conservationData.descriptionConservation = data.descriptionConservation;
        conservationData.h2Responsibilities = data.h2Responsibilities;
        conservationData.descriptionResponsibilities = data.descriptionResponsibilities;
        conservationData.h1Location = data.h1Location;
        conservationData.directonList = data.directonList;
        conservationData.h2Location = data.h2Location;
        conservationData.h1Concern = data.h1Concern;
        conservationData.descriptionConcern = data.descriptionConcern;

        localStorage.setItem('conservationPageData', JSON.stringify(data));

    })
    .catch(error => console.error('Error fetching data:', error));
// end of the introduction section