function send_data(name, content)
{

	var request;

    request = new XMLHttpRequest();

    request.open("POST", "https://vast-crag-95027.herokuapp.com/news", true)

    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded")

    request.send("username=" + name + "&content=" + content);
}

function get_data()
{
    document.getElementById("content").innerHTML = "Getting Content";
    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
                var result = xhttp.responseText;
                var obj = JSON.parse(result)
                console.log("obj length = " + obj.length)

                var info = "";
                var cap = 0;

                if (obj.length > 10)
                {
                    cap = obj.length - 10;
                }
                for (i = obj.length - 1; i >= cap; i--)
                {
                    var user = obj[i].username;
                    var date = obj[i].date;
                    date = date.toString().substring(0,11) + date.toString().substring(16,24) + date.toString().substring(10,16);



                    var content = obj[i].content;
                    info += "<p>" + content + "</p>" + "<p> Written by: " + user  + " - " + date + "</p>" + "<hr>\n";
                    document.getElementById("content").innerHTML = info;

                }   
        }
    };
xhttp.open("GET", "https://vast-crag-95027.herokuapp.com/news_get", true);
xhttp.send();
}



/*
    var request;

    request = new XMLHttpRequest();

    request.open("GET", "https://vast-crag-95027.herokuapp.com/news_get", true)

    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded")


    console.log("waiting")

    request.onreadystatechange = function() {

        console.log("In onreadystate");

        if (request.readyState == 4 && request.status == 200) {

            var result = request.responseText;
             
            var obj = JSON.parse(result)
            console.log("got obj")
            console.log("obj length = " + obj.length)
            for (i = 0; i < obj.length; i++)
            {
                var user = obj[i].username;
                var date = obj[i].date;
                date = date.toString().substring(0,11) + date.toString().substring(16,24) + date.toString().substring(10,16);



                var content = obj[i].content;
                info = "<p>" + content + "</p>" + "<p> Written by: " + user  + " - " + date + "</p>" + "<hr>\n";
                document.getElementById("content").innerHTML = info;

            }
            console.log("out")
        }
        console.log("error")
    }

    console.log("out2")
}*/