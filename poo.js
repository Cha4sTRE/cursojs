console.group('programacion orientada a objetos')
    console.log('-------prototipos--------')
    /*
    clases:modelo a seguir
    objetos:es una instancia de una clase
    -atributos:son variables dentro de un objetos
    -metodos:son las acciones que un objeto puede realizar(son funciones dentro de un objeto)
    */

    //funcion constructora
    function Persona(raza,edad){
        //atributos
        this.raza=raza;
        this.edad=edad;

        //prototypo dentro de funcion constructora
        Persona.prototype.hablar=function(){
            console.log('hablo')
        }
    }

    function Animal(genero,tipo,color){
        this.genero= genero;
        this.tipo= tipo;
        this.color= color;

        //prototipo
        Animal.prototype.cualidad= function(){
            console.log('respiracion')
        }


    }

    //herencia

    function Perro(genero,tipo,color,raza){
        this.super= Animal;
        this.super(genero,tipo,color);
        this.raza= raza;
    }
    Perro.prototype.cualidad= function(){
        console.log('ladrar')
    }

    //instancias heredadas
    Perro.prototype= new Animal;
    Perro.prototype.constructor=Perro;

    const camila= new Perro('hembra','mamifero','cafe','pinshir')
    console.log(camila)
    //instancia
    const juan=new Persona('moreno','17')
    console.log(juan)

console.groupEnd()

console.group('clases')
    /*clases de js es una forma mas facil de declarar un objeto */

    class pc{
        constructor(cpu,gpu,ram){
            this.cpu= cpu;
            this.gpu= gpu;
            this.ram= ram;
        }
        //metodos
        Fin(){
            console.log('pcc comun')
        }

    }
    //herencia con clases
    class pcGamer extends pc{
        constructor(cpu,gpu,ram,rgb){
            super(cpu,gpu,ram)
            this.rgb= rgb;
            this.mother= null;
        }
        Fin(){
            console.log('mi proposito es para entretener')
        }

        /*metodos estaticos
        se puede ejecutar sin nesecidad de instanciar una clase */

        static tipoDeUso(){
            console.log('sirvo para generar contenido, pruebas de estres, hostin de servidores, videojuegos, ect.')
        }

        //getters y setters
        //nos permiten obtener y establecer los atrivutos de nuestra clase
        get getMother(){
            return this.mother;
        }
        set setMother(mother){
            this.mother= mother;
        }

    }
    pcGamer.tipoDeUso()
    const pcInformatica= new pc('intel i5 3000','intel grafic noseq','4gb')
    const bestia= new pcGamer('ryzen 9 5000','RTX 3090','32 gb',true)
    console.log(bestia)
    bestia.Fin()
    console.log(pcInformatica)
    pcInformatica.Fin()
    bestia.setMother= 'aurus'
    console.log(bestia.getMother)
    
console.groupEnd()