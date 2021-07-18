
const Student = function() {};
Student.prototype.setMathScore = function(age){
    this.math = math;
    return this;
}
Person.prototype.setEnglishScore = function(weight){
    this.english = english;
    return this;
}
Person.prototype.getMathAndEnglish = function(){
    return `{math: ${this.math}, english: ${this.english}}`;
}

const student = new Student();
const score = student.setMathScore(130).setEnglishScore(118).getMathAndEnglish();
console.log(score); // {math: 130, english: 118}

