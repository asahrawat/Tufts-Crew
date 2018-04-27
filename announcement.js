function init()
{
	var request;

    request = new XMLHttpRequest();

    request.open("POST", "http://vast-crag-95027.herokuapp.com/blog", true)

    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded")

    request.onreadystatechange = function() {

       	if (request.readyState == 4 && request.status == 200) {

            var result = request.responseText;

            divElement = document.getElementById("log");
             
            var obj = JSON.parse(result)

            for (i = 0; i < obj.blog.length; i++)
            {
                var user = obj.blog[i].username;
                var date = obj.blog[i].date; 
                var content = obj.blog[i].content;
                info = "<p>" + content + "</p>" + "<p> Written by: " + user  + " - " + date + "</p>" + "<hr>\n";
                $("#blog").html(info);
            }
        }
	}
}

function post()
{
	var button = document.getElementById("post")
	button.addEventListener("click", function(){
		console.log("YAY");
	})
}
