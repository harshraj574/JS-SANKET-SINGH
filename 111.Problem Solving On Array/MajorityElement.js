//given an array where a element occurs more than (n/2) times i.e majority element .find that element

function getMajorityElement(arr){
    let currMajorityElement = arr[0], currMajorityCount =0;
    for(let i=0;i<arr.length;i++){
        if(arr[i] == currMajorityElement){
            currMajorityCount +=1;
        }
        else{
            currMajorityCount--;
            if(currMajorityCount == 0){
                currMajorityElement = arr[i+1];
            }
        }
    }
    return currMajorityElement;

}


let arr=  [1,2,2,2,1,1,2,1,1];
console.log(getMajorityElement(arr));


