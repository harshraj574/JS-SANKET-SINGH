
let arr = [0, 1, 0, 1, 1, 1];
let p1= 0;
let n = arr.length;
let p2 = n-1;

while(p1<=p2){
    if(arr[p1] == 1 && arr[p2] == 0){
        [arr[p1],arr[p2]] = [arr[p2],arr[p1]];
        p1++;
        p2--;
        continue;
    }
    if(arr[p1] == 0){
        p1++;
    }
    if(arr[p2] == 1){
        p2--;
    }
}
console.log(arr);


