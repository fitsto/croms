/* Author:
	Felipe Toro
*/
$(document).ready(function() {
						   
	var hash = window.location.hash.substr(1);
	var href = $('nav a').each(function(){
		var href = $(this).attr('href');
		if(hash==href.substr(0,href.length-5)){
			var toLoad = hash+'.html #content';
			$('#content').load(toLoad)
		}											
	});

	$('nav a').click(function(){
								  
		var toLoad = $(this).attr('href')+' #content';
		$('#content').hide(10,loadContent);
		$('#load').remove();
		$('#carga').append('<span id="load">LOADING...</span>');
		$('#load').fadeIn('normal');
		window.location.hash = $(this).attr('href').substr(0,$(this).attr('href').length-5);
		function loadContent() {
			$('#content').load(toLoad,'',showNewContent())
		}
		function showNewContent() {
			$('#content').show(10,hideLoader());
		}
		function hideLoader() {
			$('#load').fadeOut('normal');
		}
		return false;
		
	});

});




