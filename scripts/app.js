"use strict";
function Student(name){
  this.name = name;
}

function School(name, specialty){
  if(!(this instanceof School)){
    return new School(name, specialty);
  }
  this.name = name;
  this.specialty = specialty;
}

School.prototype.promote = function(){
  return "Learn "+ this.specialty + " at " + this.name;
}

function Course(name){
  this.name = name;
}

var steven = new Student("Steven");
var flatiron = new School("The Flatiron School", "Programming");
var javascript = new Course("JavaScript");
