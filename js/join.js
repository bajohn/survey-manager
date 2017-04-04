
var passwordsMatch = false;

function passwordMatch()
{

	if($('#create-passwordBox').val() ==$('#confirmBox').val() && $('#confirmBox').val().length >7)
	{
		passwordsMatch = true;
		$('#password-check').removeClass();
		$('#password-check').addClass('fa fa-check-circle-o password-check-passes');
		$('#join-submit-button').removeClass('grayed-out');
	}
	else
	{
		passwordsMatch = false;
		$('#password-check').removeClass();
		$('#join-submit-button').addClass('grayed-out');
		$('#password-check').addClass('fa fa-times-circle-o password-check-fails');
	}
}




$(document).ready( function() {
		$("#join-submit-button").click(function()
		{
			if(passwordsMatch)
			{
		
				$.ajax({
					url: '/password_handler',
					method: 'POST',
					data: 
					{
						action: 'create',
						email: $('#create-emailBox').val(),
						password: $('#create-passwordBox').val()
					}
				}).done(function(resp) {
					resp = JSON.parse(resp);
					if(resp.success=='false')
					{
						$('#errorBox').text(resp.message);
					}
					else
					{
						sessionStorage.setItem('email', resp['email']);
						sessionStorage.setItem('a_tkn', resp['a_tkn']);
						loadPageAjax('/homepage');
						loadHeaderAjax('/header');
					}

						
				});
			}
			
		})
		

		
		$('#create-passwordBox').keyup(function() {
			passwordMatch()
		})
		$('#confirmBox').keyup(function() {
			passwordMatch()
		})
		
		
		
	
	
})