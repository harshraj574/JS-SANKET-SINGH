
function printSubArray(ans){
    for(let start=0;start<ans.length;start++){
        let str = "";
        for(let end=start;end<ans.length;end++){
            str += ans[end];
            console.log(str);
        }
    }

}

let ans = ["A","B","C"];
printSubArray(ans);
