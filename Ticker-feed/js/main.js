
var posts;

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
            update();
        })
        .catch(err => {
            // Do something for an error here
        });
}




function btn_send() {
    

    var user_fullname = "Avi .C.";
    var user_input = document.getElementsByClassName("user_input")[0].value;
    var user_pic = "images/user11.jpg";
    var datetime="";
    var d = new Date();
    datetime += d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear() + "&nbsp" + d.getHours() + ":" + d.getMinutes();
    data.push(
        {
            picture: user_pic,
            fullname: user_fullname,
            datetime: datetime,
            text: user_input


        }
    );


}



function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}





var duration_css = "0.5";//seconds
var i = 0;//index for loop
var stop;
var delay_interval = 3000;//milliseconds 

function update() {

    console.log("data updated");
    posts = getDataVariable();
    stop = posts.length;

    if (i >= stop) {
       
        i = 0;
    }

    //using data variable

    //get item from the inifinte loop

   

    

        //---LOOP BODY



        //modifying html according to item

   
     
    usr.picture = posts[i].picture;
    usr.date = posts[i].datetime;
    usr.msg = posts[i].text;
    usr.name = posts[i].fullname;



  

    posts = null;
    //using special css class for animation here
        var template = '<div class="mt-3 box seperator newly animated fadeInDown delay-'+duration_css+'s  " id="newly' +
            i +
            '"' +
            ">" +
            '   <div class="row">' +
            ' <div class="col-12" style="margin-top: 2%">' +
            ' <div class="user_profile_pic float-right mt-2">' +
            ' <img class="h-100 w-100" src="' +
            usr.picture +
            '"/>' +
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


        


        

    i++;//forwarding the index loop

    //inserting the code of the new item into HTML 
    //{doing animation}
    delay(delay_interval).then(function () {
         $("#append_here").after(template);

        var collec = document.getElementsByClassName("box");
        var delete_duration = "0.2";//seconds
        
        if (collec.length > 3) {

           
            //delete uneeded class
            collec[collec.length - 1].classList.remove("animated", "fadeInDown", "delay-" + duration_css + "s");
            //add needed classes



            delay(300).then(function () {
                collec[collec.length - 1].classList.add("animated", "fadeOutDown", "delay-" + delete_duration + "s");

                collec[collec.length - 1].remove();

            });
           
            
           
           



        }


        update();


        });



    

}


$(document).ready(init);
function init() {

    $(".send_btn").click(btn_send);
    


}