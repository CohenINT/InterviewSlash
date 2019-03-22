


function loadData() {
    
   

    // Replace ./data.json with your JSON feed
    fetch('./js/Jobject.json')
        .then(response => {
            return response.json();
        })
        .then(data => {
            // Work with JSON data here
            stop = data.length;
            this.data = data;
        })
        .catch(err => {
            // Do something for an error here
        });
}




function send() {

    var user_input = document.getElementsByClassName("user_input")[0].value;
    var user_pic = document.getElementsByClassName("typing_user_profile")[0].src;
    var datetime="";
    var d = new Date();
    datetime += d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear() + "&nbsp" + d.getHours() + ":" + d.getMinutes();


  



}



function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}






var i = 0;//index for loop
var stop ;

function update() {

    if (i >= stop) {
        return;
    }
    //using data variable

    //get item from the inifinte loop

   

    

        //---LOOP BODY

    var duration_css = "0.5";//seconds

    var delay_interval = 2000;//milliseconds 

        //modifying html according to item
        var item = data[i];
        

        usr.picture = item.picture;
        usr.date = item.datetime;
        usr.msg = item.text;
        usr.name = item.fullname;

    //using special css class for animation here
        var template = '<div class="mt-3 box seperator newly animated fadeInDown delay-'+duration_css+'s  " id="newly' +
            i +
            '"' +
            ">" +
            '   <div class="row">' +
            ' <div class="col-12" style="margin-top: 2%">' +
            ' <div class="user_profile_pic float-right mt-2">' +
            ' <img class="h-100 w-100" src=' +
            usr.picture.toString() +
            '/>' +
            '</div>' +
            '</div>' +
            ' </div>' +
            '  <div class="row" style="margin-top: -12%; margin-right: 6%;">' +
            ' <div class="col-12">' +
            '  <div class="container">' +
            '  <div class="row">' +
            ' <div class="col-12">' +
            ' <div class="float-right poster_name float-right">' +
            usr.name.toString() +
            '</div>' +
            ' </div>' +
            ' <div class="col-12">' +
            '  <div class=" poster_date float-right mr-2 ">' +
            usr.date.toString() +
            '</div>' +
            ' </div>' +
            ' <div class="col-12">' +
            ' <div class="float-right poster_text">' +
            usr.msg.toString() +
            '</div>' +
            '</div>' +
            ' </div>' +
            '  </div>' +
            '  </div>' +
            ' </div>' +
            '  </div>';


        


        

    i++;//fowrding the index loop

    //inserting the code of the new item into HTML 
    //{doing animation}
    delay(delay_interval).then(function () {
         $("#append_here").after(template);

        update();


        });



    

}


$(document).ready(init);
function init() {

    $(".send_btn").click(send);






}