var data ="";

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




