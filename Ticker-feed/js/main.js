


function loadData() {
    
   

    // Replace ./data.json with your JSON feed
    fetch('./js/Jobject.json')
        .then(response => {
            return response.json();
        })
        .then(data => {
            // Work with JSON data here
            console.log(data);
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


function update()
{

    

    //get item from the inifinte loop
    for (var i = 0; i < data.length; i++) {
        //modifying html according to item
        var item = data[i];
        debugger;
        console.log("this is data");
        console.log(data);
        usr.picture = item.picture;
        usr.date = item.datetime;
        usr.msg = item.text;
        usr.name = item.fullname;
        console.log("this is usr");
        console.log(usr);
       
        var template = '<div class="mt-3 box seperator">' +
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
            usr.name.toString() + '</div>' +


            ' </div>' +
            ' <div class="col-12">' +
            '  <div class=" poster_date float-right mr-2 ">' + usr.date.toString() + '</div>' +

            ' </div>' +
            ' <div class="col-12">' +
            ' <div class="float-right poster_text">' + usr.msg.toString() + '</div>' +
            '</div>' +

            ' </div>' +
            '  </div>' +

            '  </div>' +
            ' </div>' +
            '  </div>';
        console.log("template now is: ");
        console.log(template);
       

        //inserting the code of the new item into HTML 
        $("#append_here").prepend(template);


        //{doing animation}


    }

}



$(document).ready(init);
function init() {

    $(".send_btn").click(send);






}