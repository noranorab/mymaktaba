class Student{
    static id = 0;
    lastName='';
    firstName='';
    contact='';
    date_inscription='';
    course = null;
    constructor(firstName, lastName, contact, date_inscription, course){
        this.id= Student.id++;
        this.firstName=firstName;
        this.lastName=lastName;
        this.contact=contact;
        this.date_inscription=date_inscription;
        this.course=course;
    }

    get getId(){
        return this.id;
    }
    set setId(id){
        this.id = id;
    }

    get getName(){
        return this.name;
    }
    set setName(name){
        this.name =name;
    }

    get getSurname(){
        return this.surname;
    }
    set setSurname(surname){
        this.surname = surname;
    }

    get getContact(){
        return this.contact;
    }
    set setContact(contact){
        this.contact=contact;
    }

    get getDate_inscription(){
        return this.getDate_inscription;
    }
    set setDate_inscription(dateInsc){
        this.date_inscription=dateInsc;
    }

    get getCourse(){
        return this.course;
    }
    set setCourse(course){
        this.course = course;
    }

}