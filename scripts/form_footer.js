$(function(){
    $(".ajaxForm").submit(function(e){
        e.preventDefault();
        var href = $(this).attr("action");
        $.ajax({
            type: "POST",
            dataType: "json",
            url: href,
            data: $(this).serialize(),
            success: function(response){
                if($('#name_form').val().length != 0  && $('#phone_form').val().length != 0  && $('#email_form').val().length != 0  && $('#textarea_form').val().length != 0 && document.getElementById('checkbox_form').checked &&response.status == "success"){
                    alert("We received your submission, thank you!");
                }else{
                    alert("An error occured: " + response.message);
                }
            }
        });
    });
});