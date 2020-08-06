function getjson(file,callback){
	var xhr = new XMLHttpRequest();
	xhr.overrideMimeType("application/json");
	xhr.open("GET",file,true);
	xhr.onreadystatechange=function() {
		if (xhr.readyState === 4 && xhr.status =="200") {
           callback(xhr.responseText);
		}
	}
xhr.send();
}

// calling the function
getjson("data.json",function(text) {
	var data =JSON.parse(text);
	console.log(data);
    mydetails(data.details);
})

var parent = document.querySelector(".parent-div");
function display(){
	var x = document.getElementById('button').value;
	document.getElementById('div').innerHTML = x;
}

function mydetails(React) {
	var d=document.createElement("div");
	d.classList.add("Basicdetails");
	parent.appendChild(d);
	var h=document.createElement("h1");
	h.textContent="RESUME"
	d.appendChild(h);
	h.appendChild(document.createElement("hr"));
	var i=document.createElement("img");
	i.src=React.image;
	i.alt="profile-image";
	d.appendChild(i);

	var name=document.createElement("h4");
	name.classList.add("name");
	// name.style.color="#000";
	name.setAttribute("id","name");
	name.textContent=React.name;
	d.appendChild(name);

	var e=document.createElement("p");
	e.classList.add("mail");
	e.textContent=React.email;
	d.appendChild(e);
	var li=document.createElement("li");
    li.textContent=React.phone;
   d.appendChild(li);
}