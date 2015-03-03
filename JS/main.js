var toShow = true;

$(document).keydown(function(e) {

    if(e.which == 77 && e.ctrlKey) {
        
    	if(toShow){

            $('.navigator').hide();
            toShow = false;
            $('#main-content').addClass('col-md-12').removeClass('col-md-10');
 
    	}else{

            $('.navigator').show();
            toShow = true;
            $('#main-content').addClass('col-md-10').removeClass('col-md-12');
 

    	}
    }
});


$(document).ready(function(){  
    
});