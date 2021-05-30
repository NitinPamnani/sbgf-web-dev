
const gsheetUrl ="https://script.google.com/macros/s/AKfycbz5-t-l3YpPKdUVmog-CB1xLMSgupsadvuVPpS1ToyUTDN329uYyfdEOf5E8XxUEORn/exec";
function insert_data() {
    console.log("Reached here");
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();
    var getInTouch = ""+$("#contactback").is(":checked");

    var url = encodeURI(gsheetUrl +"?name="+name+"&email="+email+"&message="+message+"&getInTouch="+getInTouch);
    console.log(url);
    /*var request = jQuery.ajax({
        crossDomain:true,
        url:url,
        method:"GET",
        dataType:"jsonp",
        success: function(data) {
            console.log(data);
        },
        error: function(xhr, ajaxOptions, thrownError) {
            console.log(xhr.status);
            console.log(thrownError);
        }
    });*/
    var jqxhr = $.get(url, function(){
        
    }).always(function(){
            alert("Thank you for writing out to us!");
        });
}

function ctrlq(e) {
    alert("Thank you for reaching out");
}

