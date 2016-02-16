


// var box = document.getElementById("#write");

  var leftover = document.getElementById("subText");
  var box = document.getElementById("write");
  // console.log(25 - remainder);
  // leftover.innerHTML = ("you have " + (25 - remainder) + " characters left");
//
//   box.onkeyup = function() {
//     var remainder = box.value.length;
//     // console.log("you have " + (remainder) + " characters");
// };
// var remainder = box.value.length;

// var = list.lastElementChild;

var items = document.getElementById("list");


box.onkeydown = function() {

  if( box.value.length === 0){
    $("#list").append("<li><input class='box1' id='write' maxlength='25'></li>");
    // $("#list").append("<li><input class='box1' id='write' maxlength='25'></li>");
    console.log(box.value.length);
    console.log("One");

  };

};

box.onkeyup = function() {

  if( box.value.length === 0){
    items.remove("items.lastElementChild");
    console.log(box.value.length);

  };

};





//
// box.onkeyup = function() {
//
//   if( box.value.length === 0){
//     // $("#list").remove("items.lastElementChild");
//     items.remove("items.lastElementChild");
//     console.log(box.value.length);
//   };
//
// };





//   $(function(){
//     'use strict';
//
//
//   $(".box1").keypress(function(){
//
//     if( $(".box1").val() <= 1){
//       $("#list").append("<br><input type='text' value='' class='box2'>");
//     }
//       console.log($(".box1").val())
//   });
//
// });













// //
// // $(document).ready(function() {
// //         $("li").after("<input id='write' maxlength='25'>");
// // });
// $(function(){
//   'use strict';
//
//
// $(".box1").keydown(function(){
//
//   var box = document.getElementById("write");
//   var remainder = box.value.length;
//   console.log(remainder);
//
//   // if( $(".box1").length = 1){
//   //   $("#list").append("<br><input type='text' value='' class='box2'>");
//   // }
//
// });

// $(".box1").keydown(function(){
//
//   if( $(".box1").val() = 0){
//     $("#list").remove(".box2");
//   }
//
// });
// });
//


// var box = document.getElementById("write");
// var amount = box.value.length;
//
// console.log(amount);
//
// if  0 {
//
// }
//
// box.onkeyup = function() {
//   $("li").after("<input maxlength='25'>");
// };



//
// box.onkeyup = function() {
//
//   $("li").after("<input id='write' maxlength='25'>");
//
//
//   // $("li").after("<li><input id="write" maxlength="25"></li>");
//
//   // var remainder = box.value.length;
//   // leftover.innerHTML = ("you have " + (25 - remainder) + " characters left");
// };
