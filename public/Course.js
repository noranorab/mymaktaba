class Course{
    constructor(){}
    constructor(id, description, studentNumber, files){
        this.id = id;
        this.description = description;
        this.studentNumber = studentNumber;
        this.files = files;
    }

    get getDescription(){
        return this.description;
    }
    set setDescription(description){
        this.description = description;
    }

    get getId(){
        return this.id;
    }
    set setId(id){
        this.Id = id;
    }

    get getStudentNumber(){
        return this.studentNumber;
    }
    set setStudentNumber(studentNumber){
        this.studentNumber = studentNumber;
    }

    get getFiles(){
        return this.files;
    }
    set setFiles(files){
        this.files = files;
    }

}