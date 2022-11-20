var url="https://6379a4bd7eb4705cf282a5b9.mockapi.io/user"

async function createData(){

    let data = {
        name: "vijayakumar",
        email: "vijayalingam@58gmail.com",
        phone: 97887
    }
    let res= await fetch (url, {
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

async function readData(){
    let res= await fetch(url);
    var result1=await res.json();
      console.log(result1)
}
readData();

async function updateData(){

    let data1 = {
        name: "vijayakumar",
        email: "vijayalingam@58gmail.com",
        phone: 97887
    }
    let res1= await fetch (url+"/10", {
        method:"PUT",
        body:JSON.stringify(data1),
        headers:{
            "Content-type":"application/json;charset=UTF-8"
        }
    })
    var result2 = await res1.json()
    console.log(result2); 
}
updateData();

async function deleteData(){

    let res2= await fetch (url+"/16", {
        method:"DELETE",
    })
    var result3 = await res2.json() 
    console.log(result3); 
}
deleteData();