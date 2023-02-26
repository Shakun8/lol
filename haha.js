<script>
$(document).ready(function(){
    $("#result").hide();
    $('#login_submit').click(function()
    {
        var formData = JSON.stringify($("#login").serializeArray());
        $.ajax({
            type: "POST",
                url: "login.php",
                dataType: "json",
                data: '{"username": "' + $('#uname').val() + '", "password" : "' + $('#password').val() + '"}',
                contentType: 'application/json',
                cache:false,
                success : function(result) {
                        console.log(result);
                    $("#login-form").hide();
                    $("#result").show();
                    if(result.status === "success" ){
                        $('#message').html(result.message);
                        $('#message').addClass('alert alert-success');
                                                              } else {
                        $('#message').html(result.message);
                        $('#message').addClass('alert alert-danger');
                    }

                }
        });
        return false; 
    });
});
</script>
