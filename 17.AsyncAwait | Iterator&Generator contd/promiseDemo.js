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
            rej(status);
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

function* exec(){
    console.log("Starting execution");

    const downloadedData = yield download("https://www.example.com");
    console.log("data downloaded is", downloadedData);

    const fileResponse  = yield writeFile(downloadedData,"example.txt");
    console.log("file write status is ", fileResponse);

    const uploadStatus = yield upload("example.txt","https://www.example.com");
    console.log("upload status", uploadStatus);

    return uploadStatus;
}

const it = exec(); //exec function will return us a generator object having a iterator
const ft = it.next();
console.log(ft);
ft.value.then(function doAfterReceiving(value){
    console.log("Calling doAfterreceiving when download is finised",value);
    it.next(value); //interesting
})