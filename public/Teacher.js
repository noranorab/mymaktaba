class Teacher{
    nbrStudents = 0;
    static id = 0;
    firstName = '';
    lastName = '';
    studentsList = [];
    Constructor(){}
    Constructor(firstName, lastName, studentsList){
        this.id= Teacher.id++;
        this.firstName=firstName;
        this.lastName=lastName;
        this.studentsList=studentsList;
        this.nbrStudents++;
    }
    get getId(){
        return this.id;
    }
    get getFirstName(){
        return this.firstName;
    }
    set setFirstName(name){
        this.firstName=name;
    }
    get getLastName(){return this.lastName;}
    set setLastName(name){this.lastName=name;}
    get getStudentsList(){return this.studentsList;}
    set setStudentsList(lst){
        this.studentsList=lst;
    }
    addStudent(student){
        this.studentsList.push(student);
    }
    searchStudent(id){
        for (const x of this.studentsList){
            if (x.getId == id){
                return x;
            }
        }
        return null;
    }
    deleteStudent(id){
        this.studentsList.filter(student => student.id !== id);
    }
}
