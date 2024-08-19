//implement a set of dummy function which can mimic the following function
//1. download -> This function should mimic downloading of some content from a url
//2. writeFile -> This function should mimic writing of some content to a file
//3. upload -> This functiion should mimic uploading the file to as server 

//Now after you have implemented these functions , try to use them in a scenario where we first
//download a file, then write it to a disk and then upload it to a server

function download(url,callback){
    console.log("Downloading something from the url",url);
    setTimeout(()=>{
        console.log("data downloaded");
        let downloadedData = "some data";
        callback(downloadedData);
    },3000)
}

function writeFile(data,fileName,callback){
    console.log("Writing",data,"to file");
    setTimeout(()=>{
        console.log("Writing to a file",fileName,"is done");
        callback();
    },2000)
}

function upload(fileName,url,callback){
    console.log("uploading file",fileName,"to", url);
    setTimeout(()=>{
        console.log("Upload is done");
        let uploadStatus = "success";
        callback(uploadStatus);
    },3000)
}


function process(){
    download("https://www.example.com",function handleDownload(data) {
        writeFile(data,"file.txt",function handleWrite(status) {
            upload("file.txt","https://www.example.com",function hanldeUpload(uploadStatus) {
                console.log("All done");
            })
        })
    })
}

process();



                