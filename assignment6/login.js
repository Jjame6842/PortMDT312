window.onload = loginLoad;

const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);
const firstname = urlParams.get('firstname')
const lastmame = urlParams.get('lastmame')
const username = urlParams.get('username')
const password = urlParams.get('password')


function loginLoad(){
	var form = document.getElementById("myLogin");
	form.onsubmit = checkLogin;
}

function checkLogin(){
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
	if(document.forms["myLogin"]["username"].value == username)
	{
		if(document.forms["myLogin"]["password"].value == password)
		{
			alert("Login succeed");
		}
		else
		{
			alert("incorrect password");
			return false;
		}
	}
	else
	{
		alert("no username in data");
		return false;
	}
	
}