var p = document.getElementById("results");
var params = document.getElementById('name').value;
document.getElementById("generate").onclick = () => {   
    if(params != '' || params == null){
        params = JSON.stringify({"name" : params});
        var Http = new XMLHttpRequest();
        const url = 'https://smart-farm-backend.vercel.app/api/gateways/generate';
        Http.open("POST", url);
        Http.setRequestHeader('Content-type','application/json');
        Http.setRequestHeader('x-access-token',JWT-KEY)
        Http.send(params);
        Http.onreadystatechange = () => {
                p.innerHTML = Http.response;
        }
    }else{
        console.log("ISI WOI!!!")
    }
}