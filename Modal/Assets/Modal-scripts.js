$(function () {
  'use strict';

  $('#clickMe').on('click', function () {
    // $(this).text('Hi');
    $('.modal-container').addClass('showing');
  });

  $('.exit-modal, .modal-container').on('click', function () {
    $('.modal-container').removeClass('showing');
  });

  $('.modal').click(function (e) {
    e.stopPropagation();
  });

});

// $( ".fa-times-circle" ).hover(function() {
//     $("i").removeClass('fa-times-circle');
//     $("i").addClass('fa-times-circle-o');
//   } function(){
//     $("i").addClass('fa-times-circle');
//     $("i").removeClass('fa-times-circle-o');
//   }
// );
