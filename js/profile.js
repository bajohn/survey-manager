

$(document).ready( function() {
	
	
	
		
		$('#survey-submit').click(function()
		{
			console.log($('#ridesBox').val());
			console.log($('#foodBox').val());
			console.log('submit');
			
			var userData = 
			{
				email: sessionStorage.getItem('email'),
				a_tkn: sessionStorage.getItem('a_tkn'),
		
				name : $('#nameBox').val(),
				phone : $('#phoneBox').val(),
				
				rides : $("#ridesBox")[0].checked? 1 : 0,
				food :  $("#foodBox")[0].checked? 1 : 0,
				care : $('#careBox')[0].checked? 1 : 0,
				house : $('#houseBox')[0].checked? 1 : 0,
				transl : $('#translBox')[0].checked? 1 : 0,
				court : $('#courtBox')[0].checked? 1 : 0,
				
				nw : $('#nwBox')[0].checked ? 1 : 0,
				ne : $('#neBox')[0].checked ? 1 : 0,
				sw : $('#swBox')[0].checked? 1 : 0,
				se : $('#seBox')[0].checked? 1 : 0,
				va : $('#vaBox')[0].checked? 1 : 0,
				md : $('#mdBox')[0].checked? 1 : 0,
				
				
				howhear : $('#howheard').val(),
				comments : $('#comments').val()



			}
			console.log(userData)
			$.ajax({
				url: '/survey',
				method: 'POST',
				data: userData,
				contentType: "application/x-www-form-urlencoded; charset=utf-8",
			}).done(function(resp) {
			console.log(resp);
			
			resp = JSON.parse(resp);
			if(resp.success=="true")
			{
				if(sessionStorage.getItem('language')=='arabic')
				{
					$('#respBox').text('شكرا جزيلا! تحياتنا وسلامنا');
				}
				else if(sessionStorage.getItem('language')=='french')
				{
					$('#respBox').text('Merci!  Très amicalement.');
				}
				else if(sessionStorage.getItem('language')=='spanish')
				{
					$('#respBox').text('¡Gracias!');
				}
				else
				{
					$('#respBox').text('Your response has been recorded! Filling out the survey again will replace your last set of answers.');
				}

			}
			else
			{
				$('#respBox').css('color', 'red');
				$('#respBox').text('Error, please contact support.');
				
			}
				
		 });
				
			
		})
		

		
		$('#create-passwordBox').keyup(function() {
			passwordMatch()
		})
		$('#confirmBox').keyup(function() {
			passwordMatch()
		})
		
		
		
	
	
})