
class Model{
    #allapot;
    #allapotLista = [];
    #lepes;
    constructor(){
        this.#allapot = "";
        this.#allapotLista = ["","","","","","","","",""]
        this.#lepes = 0;
    }

    getAllapotLista(){
        return [...this.#allapotLista];
    }

    setAllapot(index){
        this.#lepes++;
        if (this.#allapot === '' || this.#allapot === 'O') {
            this.#allapot = 'X';    
        } else if (this.#allapot === 'X') {
            this.#allapot = 'O';    
        }
        this.#allapotLista[index] = this.#allapot;
    }

    getAllapot(){
        return this.#allapot;
    }

    kovetkezoAllapot(){
        if (this.#allapot === 'X') {
            return 'O';
        }
        return 'X';
    }

    vegeVanE(){
        let eredmeny = this.#vizszintesEll() + "@" + this.#fuggolegesEll() + "@" + this.#atloEll();
        if (eredmeny.indexOf("XXX")>-1) {
            return "X nyert";
        }else if(eredmeny.indexOf("OOO")>-1){
            return "O nyert";
        } else if (this.#lepes >= 9) {
            return "Döntetlen";
        }
        return "nincsvége";
    }

    #vizszintesEll(){
        let vText="";
        for (let i = 0; i < this.#allapotLista.length; i++) {
            vText += this.#allapotLista[i];
            if (i%3===2) {
                vText += "@";
            }
        }
        return vText;
    }

    #fuggolegesEll() {
        let ellY = "";
        for (let index = 0; index < 3; index++) {
            ellY +=
                this.#allapotLista[index] +
                this.#allapotLista[index + 3] +
                this.#allapotLista[index + 6];

            ellY += "@";
        }

        return ellY;
    }

    #atloEll() {
        let ell = this.#allapotLista[0] + this.#allapotLista[4] + this.#allapotLista[8] + "@";
        ell += this.#allapotLista[2] + this.#allapotLista[4] + this.#allapotLista[6];

        return ell;
    }
} export default Model