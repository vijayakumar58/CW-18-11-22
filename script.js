var url="https://63770e1e81a568fc250af19a.mockapi.io/:user"

async function createData(){
    let data = {
        "name": "vijayakumar",
        "email": "vijayalingam@58gmailmail.com",
        "phone": 97
    }
    let res= await fetch(url,{
        method:"POST",
        body:JSON.stringify(data),
        headers:{
            "Content-type":"application/json;charset=UTF-8"
        }
    })
    var result = await res.json()
    console.log(result); 
}
createData();