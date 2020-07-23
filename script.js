let xhr = new XMLHttpRequest;
//Call the open function, GET-type of request, url, true-asynchronous
xhr.open('GET', 'https://thatsthespir.it/api', true)
//call the onload 
xhr.onload = function() 
    {
        //check if the status is 200(means everything is okay)
        if (this.status === 200) 
            {
                //return server response as an object with JSON.parse
                let data = JSON.parse(this.responseText);
                updateUI(data);
            } 
    }
//call send
xhr.send();
function updateUI(data) {
    const text = document.getElementById("text");
    const authorName = document.getElementById("authorName");
    const picture = document.getElementById("picture");

    text.innerHTML = data.quote;
    authorName.innerHTML = data.author;
    picture.setAttribute("src", data.photo);
}