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
    carobj(data.careerobjective);
    educ(data.educationqua);
    hob(data.hobbies);
    lang(data.languages);
    pro(data.add);
    dec(data.declaration);

})

var parent = document.querySelector(".parent-div");
function display(){
	var x = document.getElementById('button').value;
	document.getElementById('div').innerHTML = x;
}


function carobj(M) {
	var d=document.createElement("div");
	d.classList.add("career");
	parent.appendChild(d);
	var h=document.createElement("h2");
	h.textContent="Career objective:"
   d.appendChild(h);
   h.appendChild(document.createElement("hr"));
   ul=document.createElement("ul");
   for (var i = 0; i <M.length; i++) {
   	var li=document.createElement("li");
   	li.textContent=M[i];
    ul.appendChild(li);
   }
   d.appendChild(ul);
}
function hob(M) {
	var d=document.createElement("div");
	d.classList.add("hobby");
	parent.appendChild(d);
	var h=document.createElement("h2");
	h.textContent="Hobbies :"
   d.appendChild(h);
   ul=document.createElement("ul");
   for (var i = 0; i <M.length; i++) {
   	var li=document.createElement("li");
   	li.textContent=M[i];
    ul.appendChild(li);
   }
   d.appendChild(ul);
}

function educ(Education) {
var d=document.createElement("div");
	d.classList.add("edu");
	parent.appendChild(d);
	var h=document.createElement("h2");
	h.textContent="Educational Qualification :"
   d.appendChild(h);

   var table=document.createElement("table");
   var row="";
   for (var i = 0; i < Education.length; i++) {
   	row +="<tr><td>"+Education[i].name+"</td><td>"+Education[i].course+"</td><td>"+Education[i].institution+"</td><td>"+Education[i].yop+"</td></tr>";
   }
   table.innerHTML=row;
   d.appendChild(table);
}

function lang(M) {
	var d=document.createElement("div");
	d.classList.add("lan");
	parent.appendChild(d);
	var h=document.createElement("h2");
	h.textContent="Languages Known:"
   d.appendChild(h);
   ol=document.createElement("ol");
   for (var i = 0; i <M.length; i++) {
   	var li=document.createElement("li");
   	li.textContent=M[i];
    ol.appendChild(li);
   }
   d.appendChild(ol);
}
function pro(M) {
	var d=document.createElement("div");
	d.classList.add("additional");
	parent.appendChild(d);
	var h=document.createElement("h2");
	h.textContent="Additional Skills:"
   d.appendChild(h);
   ul=document.createElement("ul");
   for (var i = 0; i <M.length; i++) {
   	var li=document.createElement("li");
   	li.textContent=M[i];
    ul.appendChild(li);
   }
   d.appendChild(ul);
}
function dec(M) {
	var d=document.createElement("div");
	d.classList.add("declare");
	parent.appendChild(d);
	var h=document.createElement("h2");
	h.textContent="Declaration :"
   d.appendChild(h);
   ul=document.createElement("ul");
   for (var i = 0; i <M.length; i++) {
   	var li=document.createElement("li");
   	li.textContent=M[i];
    ul.appendChild(li);
   }
   d.appendChild(ul);
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