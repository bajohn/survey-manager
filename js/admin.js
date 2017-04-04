		$(function()
		{
		
		var userData = 
			{
				email: sessionStorage.getItem('email'),
				a_tkn: sessionStorage.getItem('a_tkn'),
			}
			console.log(userData)
			$.ajax({
				url: '/survey',
				method: 'GET',
				data: userData,
			}).done(function(resp) {
			console.log(resp);
			
			
			$('#dataout').text('			 Data below is raw from database. Paste into a tool like http://jsonprettyprint.com/ to make easier to read.\n' + JSON.stringify(JSON.parse(resp), null, 2));
				
		 });
		 
		});