;(function (){

  'use strict';

  var allStudents = new app.Collections.StudentCollection();

  allStudents.fetch().done( function () {

    // allStudents.each(function (model) {
    //   addStudentToView(model.attributes);
    // });

  });


  // var addStudent = function (e) {

  //   e.preventDefault();

  //   var studentName = $(this).find('input').val();

  //   var s = new app.Models.Student({
  //     name: studentName
  //   });

  //   allStudents.add(s).save().success( function (data) {
  //     addStudentToView(data);
  //   });

  //   this.reset(); // Reset our form


  // };

  // var addStudentToView = function (x) {

  //   // var studentHtml = "<li id='" + student._id + "'>";
  //   //     studentHtml += student.name;
  //   //     studentHtml += "</li>";

  //   var studentHtml = template.student(x);

  //   $('#students').prepend(studentHtml);

  // };



  // // Form Submit Listener
  // $('#addStudent').on('submit', addStudent);

// }());
