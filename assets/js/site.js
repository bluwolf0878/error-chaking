
//errorchecking with logic operator

//Denne funktion skal checkes for om den modtager data
myFunction()

function myFunction(myData) {

    if (myData) {
        console.log(myData);
    } else{ 
        console.log('no data')
    }

    


}



// denne funktion skal checkes for modtagelse af en array
myArrayFunction()

function myArrayFunction(mydata) {
if (Array.isArray()) {
    mydata.forEach(element => {
        console.log(element);
    });
}else{
    console.log('no array')
}
}



// error checking in fetch
// http response codes see here: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#server_error_responses

//her skal du checke om vi har et respons der er ok
function getData(myUrl) {

    fetch(myUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error("stop");
                
            } else{
                console.log(response.ok);
                return response.json();
            }
        })
        .then((data) => {
            console.log(data)
        })


        .catch((error) => {
            console.log('my error: ' + error);
        })
}

getData('https://dummyjson.com/http/429')


