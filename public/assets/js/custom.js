var box=null;
var chkemail;
function alertBox(html,control){
    box=bootbox.alert({
        backdrop:true,
        title:'Information',
        message:html,
    });
    $('.bootbox').on('hidden.bs.modal', function() { 
        $(control).focus();
    });
}

$('#btnsubscribe').click(function(){
    chkemail = $('#email').val();
    if($("#email").val() == "") {
		alertBox("<b>Email field is blank. <b/> <br/>Please enter your email address.")	;
		return;
	}
    if(chkemail != "") {
          var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;  
          var emailaddress = $("#email").val();
          if(!emailReg.test(emailaddress)) {
            alertBox("<b>Email field is not valid.</b> <br/>Please enter your  valid email address."); 
            return; 
          }
    }
    $.post("phppages/newsletter.php", $('#phpForm').serialize(),function(resp) {
      alertBox(resp);
    });
    
});    

