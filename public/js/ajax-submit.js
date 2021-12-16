$(document).ready(function(){
  getLove()
  setUpHandlers()
})

function getLove() {
  let loveContainer = $("#todoTemplate")
  loveContainer.html('')
    var todoTemplate = Handlebars.compile(
    $('#todoTemplate').html());

    $.ajax('/data/love', {
					success: function(data){
            console.log('data: ', data)
						loveContainer.append(todoTemplate(data))
            setUpHandlers()
					}
				});


}
function setUpHandlers() {
  console.log('foo')

    $('.btn-danger').on('click', function(evt){
      let action = '/love';
      let data = {nameOne: $("#Name-one").val(), nameTwo: $("#Name-two").val()}
        $.ajax({
            url: action,
            type: 'POST',
            data: data,
            success: function(data){
              console.log('comment output: ', data)
                if(data.success){
                  getLove()
                } else {
                  console.log('error')
                }
            },
            error: function(){
              console.log('error')
            }
        });
    });
}
