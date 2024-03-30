
//leopard section
const leopardData = {
    h1Leopard: '',
    h2Leopard: '',
    descriptionLeopard: '',
    h2habitats: '',
    descriptionhabitats: '',
    h2Diet: '',
    decriptionDiet: '',
    h2Behavior: '',
    descriptionBehavior: '',
    h2Distribution: '',
    descriptionDistribution: '',
    h2Yala: '',
    descriptionYala: '',
    h2Wilpattu: '',
    descriptionWilpattu: '',
    h2HortonPlains: '',
    descriptionHortonPlains: '',
    h2Threats: '',
    h2HabitatLoss: '',
    descriptionHabitatLoss: '',
    h2PreventingActs: '',
    descriptionPreventingActs: '',
    h2Hunting: '',
    descriptionHunting: '',
    h2Preventing: '',
    descriptionPreventing: '',
    h2Leopocon: '',
    descriptionLeopocon: '',
    description2Leopocon: '',
};

// fetch the JSON data
fetch('leopard.json')
    .then(response => response.json())
    .then(data => {
        leopardData.h1Leopard = data.h1Leopard;
        leopardData.h2Leopard = data.h2Leopard;
        leopardData.descriptionLeopard = data.descriptionLeopard;
        leopardData.h2habitats = data.h2habitats;
        leopardData.descriptionhabitats = data.descriptionhabitats;
        leopardData.h2Diet = data.h2Diet;
        leopardData.decriptionDiet = data.decriptionDiet;
        leopardData.h2Behavior = data.h2Behavior;
        leopardData.descriptionBehavior = data.descriptionBehavior;
        leopardData.h2Distribution = data.h2Distribution;
        leopardData.descriptionDistribution = data.descriptionDistribution;
        leopardData.h2Yala = data.h2Yala;
        leopardData.descriptionYala = data.descriptionYala;
        leopardData.h2Wilpattu = data.h2Wilpattu;
        leopardData.descriptionWilpattu = data.descriptionWilpattu;        
        leopardData.h2HortonPlains = data.h2HortonPlains;        
        leopardData.descriptionHortonPlains = data.descriptionHortonPlains;        
        leopardData.h2Threats = data.h2Threats;        
        leopardData.h2HabitatLoss = data.h2HabitatLoss;        
        leopardData.descriptionHabitatLoss = data.descriptionHabitatLoss;        
        leopardData.h2PreventingActs = data.h2PreventingActs;        
        leopardData.descriptionPreventingActs = data.descriptionPreventingActs;        
        leopardData.h2Hunting = data.h2Hunting;        
        leopardData.descriptionHunting = data.descriptionHunting;        
        leopardData.h2Preventing = data.h2Preventing;
        leopardData.descriptionPreventing = data.descriptionPreventing;
        leopardData.h2Preventing = data.h2Preventing;
        leopardData.h2Leopocon = data.h2Leopocon;
        leopardData.descriptionLeopocon = data.descriptionLeopocon;
        leopardData.description2Leopocon = data.description2Leopocon;

        localStorage.setItem('leopardPageData', JSON.stringify(data));

    })
    .catch(error => console.error('Error fetching data:', error));