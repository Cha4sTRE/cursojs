export default class persona{
    constructor(sexo,edad,raza,religion,etnia,nacionalidad){
        
        this.sexo=sexo;
        this.edad=edad;
        this.raza=raza;
        this.religion=religion;
        this.etnia=etnia;
        this.nacionalidad=nacionalidad;

    }
    necesidades(bebe,consume){
        console.log(`hay que tomar ${bebe} y comer ${consume} para sobrevivir`)
    }
}

