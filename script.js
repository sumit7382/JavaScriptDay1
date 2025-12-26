let arr = [250, 645, 300, 900, 50];
let newArr = [0, 0 , 0, 0 , 0];

for(let i=0;i<arr.length; i++){
    newArr[i] = arr[i]-(arr[i]*0.1);
}

for(let i=0;i<arr.length;i++){
    console.log(newArr[i]);
}



