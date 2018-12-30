let data1 = ['Manvi','Saarang','kush'];
let data2 = ['andy','varsha','kamal'];

let result = findSM(data1);
console.log(result);

console.log(findSM(data1));      // -- expected result -> true
console.log(findSM(data2));      // -- expected result -> false


function findSM(data){
    let isFound =false;
    for(let i=0; i<data.length; i++){
        if(data[i]=='Saarang' || data[i]=='Manvi'){
            isFound = true;
        }       
    }
    return isFound;
}
