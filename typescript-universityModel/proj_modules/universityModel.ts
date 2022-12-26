class University {
    
    students!:string[];   
    teachers!:string[];
    sections!:string[];
   
constructor(student:string,teacher:string,section:string){
    this.students.push(student);
    this.teachers.push(teacher);
    this.sections.push(section);
}


}


 class Human{
    naame!: string;
    age!: number;
    constructor(naame:string,age:number){
        this.naame = naame;
        this.age = age;
    }
}

class Teacher extends Human{
    teacherId!: string;
    subjectTeaches!: string[]
    namesOfSectionTeach!: string[]
    constructor(naame:string,age:number,teacherid:string,subjectTeach:string,nameOfSection:string){
        super(naame,age)
        this.teacherId = teacherid;
        this.subjectTeaches.push(subjectTeach);
        this.namesOfSectionTeach.push(nameOfSection)
    }
 }

 class Student extends Human {
    studentId!: string;
    section_no!: string;
    constructor(naame:string,age:number,studentid:string,sectionno:string){
        super(naame,age);
        this.studentId = studentid;
        this.section_no = sectionno; 
    }
 }


 class Section {

    students!: {naame: string ,age: number,studentId: string,section_no: string}[];
    teachers!: {naame: string ,age: number,teacherId:string,subjectTeaches:string[],namesOfSectionTeach:string[]}[];
    startTime!: string;
    endTime!: string;
    subjects!: string[]
    constructor(teachers:{naame: string ,age: number,teacherId:string,subjectTeaches:string[],namesOfSectionTeach:string[]}[],students: {naame: string,age: number,studentId: string,section_no:string}[],subjects:string[],starttime:string,endtime:string){
      
        this.teachers = teachers;
        this.startTime = starttime;
        this.endTime = endtime;
        this,subjects = subjects; 
        this.students = students;
    }
 } 




  

 
 


