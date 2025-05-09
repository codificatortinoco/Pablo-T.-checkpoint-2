class PlantCard extends HTMLElement{
    private commonName: string= ''; 
    private scientificName: string='';
    private img: string='';
    private type: string='';
    private origin: string='';
    private watering: string='';

    static get connectedCallback(){
        return ['commonName', 'scientificName', 'img', 'type', 'origin', 'watering' ]
    }
    attributeChangeCallback(prop: string, oldValue:string, newValue: string){
        if(oldValue !==newValue){
            switch(prop){
                case 'commonName': newValue= this.commonName; break;
                case 'scientificName': newValue= this.scientificName; break;
                case 'img': newValue= this.img; break;
                case 'type': newValue= this.type; break;
                case 'origin': newValue= this.origin; break;
                case 'watering': newValue= this.watering; break
            }
            this.render()
        }
    }
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }
    render(){
        if(!this.shadowRoot){
            return 
        }
        this.shadowRoot.innerHTML= ` <div class="plant-card">
        ${this.img ? `<img src="${this.img}" alt="img of ${this.commonName}" />` : ''}
        ${this.commonName ? `<p><strong>${this.commonName}</strong></p>` : ''}
        ${this.scientificName ? `<p>scientificName: ${this.scientificName}</p>` : ''}
          </div>
    `;
        }
    }
    export default PlantCard;
