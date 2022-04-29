// Nested objectt


const student={
    name : 'ali',
    age : 12,
   
    marks:{
        english : 45,
        math : 67,
        Science : 54
    },

    grade :{
        english : 'A',
        math : 'B',
        science : 'C'
    },

    check: function(){
        document.write(this.marks.math)
    }

}
student.check()
document.write(student.grade.math);
