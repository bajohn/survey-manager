		
$(document).ready( function() {
		console.log('here')
		$("#login-submit-button").click(function()
		{
			console.log($('#login-emailBox').val());
			console.log($('#login-passwordBox').val());
			console.log('submit');
			
			var email = $('#login-emailBox').val();
		$.ajax({
			url: '/password_handler',
			method: 'POST',
			data: 
			{
				action: 'auth',
				email: email,
				password: $('#login-passwordBox').val()
			}
		}).done(function(resp) {
			resp = JSON.parse(resp);
			sessionStorage.setItem('email', email);
			sessionStorage.setItem('a_tkn', resp['a_tkn']);
			console.log(sessionStorage);
			
			loadPageAjax('/login');
			loadHeaderAjax('/header')
			
		});
				
			
		})
})