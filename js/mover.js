

function pageChanger(html)
{
	
		$("#page-container").animate({
			"opacity": 0.25
			}, 200, function() {
				$("#page-container").html(html)
				$("#page-container").animate({
					"opacity": 1.0
				}, 200, function()
				{
			
				})
			})
		
		
}

function headerChanger(html)
{
	
		$("#header-container").animate({
			"opacity": 0.25
			}, 200, function() {
				$("#header-container").html(html);
				$("#header-container").animate({
					"opacity": 1.0
				}, 200, function()
				{
			
				})
			})
		
		
}

function footerChanger(html)
{

		$("#footer-container").animate({
			"opacity": 0.25
			}, 200, function() {
				$("#footer-container").html(html);
				$("#footer-container").animate({
					"opacity": 1.0
				})
					
			});
		
		
}
function loadPageAjax(url)
{
	console.log(		sessionStorage.getItem('email'),
		 sessionStorage.getItem('a_tkn'));
	$.ajax({
		url: url,
		data:
		{
			email: sessionStorage.getItem('email'),
			a_tkn: sessionStorage.getItem('a_tkn'),
			language: sessionStorage.getItem('language')
		}
	}).done(function(resp) {
		pageChanger(resp);
	});
}

function loadHeaderAjax(url)
{
	$.ajax({
		url: url,
		data:
		{
			email: sessionStorage.getItem('email'),
			a_tkn: sessionStorage.getItem('a_tkn'),
			language: sessionStorage.getItem('language')
		}
	}).done(function(resp) {
		headerChanger(resp);
	});
}

function loadFooterAjax()
{
	$.ajax({
		url: '/footer',
		data:
		{
		}
	}).done(function(resp) {
		footerChanger(resp);
	});
}

function hashPageLoad()
{
	//load a page based on the browser's hash 
	if(window.location.hash=='#login')
		{
			loadPageAjax('/login');
		}
		else if(window.location.hash=='#join')
		{
			loadPageAjax('/join');
		}
		else if(window.location.hash=='#business')
		{
			loadPageAjax('/pages/coming-soon.html');
		}
		else if(window.location.hash=='#blog')
		{
			loadPageAjax('/pages/coming-soon.html');
		}
		//logged in 
		else if(window.location.hash=='#home')
		{
			loadPageAjax('/homepage');
		}
		else if(window.location.hash=='#profile')
		{
			loadPageAjax('/profile');
		}
		else if(window.location.hash=='#find')
		{
			loadPageAjax('/find');
		}
		else
		{
			loadPageAjax('/join');
		}
		loadFooterAjax();
		loadHeaderAjax('/header');
		
}

var initialLoad = false;

$(document).ready( function() {
	
	
	if(!initialLoad)
	{
		
		//loadHeaderAjax('/header');
		hashPageLoad();

		initialLoad = true;
	}


	

	
})
