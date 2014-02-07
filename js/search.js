
/*quick search*/
$(document).ready( function() {
	$("#searchresult").hide();		
$("#click").click( function(event){
		var s = $("#key").val();
		if( s != ''){
			$.ajax({
			type: "POST",
			data: ({search: s}),
			url:"search.php",
			success: function(response) {
			$("#verse_text").hide(1000);
			$("#searchresult").slideDown().html(response); 
			}
		});
			
		}else{
			var str = '<strong>Search for a word or text in Bible</strong>';
			$("#verse_text").hide(1000);
			$("#searchresult").html(str);
		}

    });

});