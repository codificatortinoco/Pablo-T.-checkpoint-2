import {Plants} from '../types/Plant';
import {getPlants} from '../services/Plants'
class PlantContainer extends HTMLElement{
    private plants: Plants[]=[]
    private isLoading: boolean= true
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    async connectedCallback(){
        this.plants = await getPlants();
        this.isLoading = false;
        this.render();
    }

    render(){
        if(!this.shadowRoot){
            return
    }
     this.shadowRoot.innerHTML=  `
     ${this.isLoading? 
                `<div class="loading">Loading Plants...</div>` :
                !this.plants.length ? 
                    `<div class="error">No Plants found. Please try again.</div>` :
                    `<div class="container">
                        ${this.plants.map(plant => plant ? `
                            <div class="plant-card" data-plant-id="${plant.id}">
                                <img src="${plant.img|| ''}" alt="${plant.commonName}">
                                <h3>${plant.commonName.toUpperCase()}</h3>
                                <h3>${plant.scientificName.toUpperCase()}</h3>
                            </div>
                        ` : '').join('')}
                    </div>`
            } `
}
}
export default PlantContainer