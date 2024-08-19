
// function download(url){
//     return new Promise((resolve) => {
//         setTimeout(() => {
            
//         }, 5000); 
//     });
// }

// function writeFile(fileName){
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(`Content written to ${fileName}`);
//         }, 1000); 
//     });
// }

// function uploadFile(fileName) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(`File ${fileName} uploaded`);
//         }, 2000);
//     });
// }

function download(url){
    return new Promise((res,rej)=>{
        console.log("Started downloading data from ",url);
        setTimeout(()=>{
            let data  = "some data from " + url;
            console.log("Downloaded data from",url);
            res(data);
        },3000)
    })
}

function writeFile(data,filename){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log("writing to file", filename," is done");
            let status = "success";
            res(status);
        },3000)
    })
}

function upload(fileName,url){
   return new Promise((res,rej)=>{
    console.log("uploading file",fileName,"to", url);
    setTimeout(()=>{
        console.log("Upload is done");
        let uploadStatus = "success";
        res(uploadStatus);
    },3000)
   })
}


const p2 = download("https://www.example.com").then(function handleDownload(value){
    console.log("downloaded value is ",value);
    return writeFile(value,"file.txt");
})
const p3 = p2.then((value)=>{
    console.log("file written", value);
    return upload("file.txt","https://www.example.com");
})
p3.then((value)=>{
    console.log("file uploaded");
})

   