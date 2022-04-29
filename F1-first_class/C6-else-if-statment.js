// Find a grade of a student

function grade(m){
    
    var marks=m;
    
    if((marks >=90) && (marks <=100)){
        document.write('Your grade is "A+"');
    }
    
    else if((marks >=80) && (marks <=90)){
        document.write('Your grade is "A"');
    }
    
    else if((marks >=70) && (marks <=80)){
        document.write('Your grade is "B"');
    }
    
    else if((marks >=60) && (marks <=70)){
        document.write('Your grade is "C"')
    }
    
    else if((marks >=50) && (marks <=60)){
        document.write('Your grade is "D"')
    }

    else if((marks >=40) && (marks <=50)){
        document.write('Your grade is "E"')
    }
    
    else{
        document.write('Your grade is "F"')
    }
}
grade(30);

// grade(10);

// var y=50;

// if(y>=80){
//     document.write('Your grade is A""');
// }

// else if(y>=70){
//     document.write('Your grade is "B"');
// }

// else if(y>=60){
//     document.write('Your grade is "C"');
// }

// else if(y>=50){
//     document.write('Your grade is "D"')
// }

// else if(y>=40){
//     document.write('Your grade is "E"')
// }

// else{
//     document.write('Your grade is "F"')
// }


