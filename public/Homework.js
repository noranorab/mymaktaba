class Homework extends Course{
    constructor(){super()};
    constructor(description, status, nbrReturned){
        super.description=description;
        this.status=status;
        this.nbrReturned=nbrReturned;
    }
    get getStatus(){
        return this.status;
    }
    set setStatus(status){
        this.status=status;
    }

    get getNbrReturned(){
        return this.nbrReturned;
    }
    set setNbrReturned(nbr){
        this.nbrReturned=nbr;
    }


}