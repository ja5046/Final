$('.list-group-item').each(function() {
  $(this).before($('<span>').text("Task: "));
});
