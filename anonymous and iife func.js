// 1)Print odd numbers in an array
console.log("answer for 1 ques");
(()=>{                                                            //iif
var oddarray=[];
let anofun=(function(array){
    for(let ele of array){                         
        if(ele%2!==0)
        oddarray.push(ele);
    }
    return oddarray;
})

console.log(anofun([1,2,3,4,5,6,7,8,9,10]));
}) ()

// 2)Convert all the strings to title caps in a string array
console.log("answer for 2nd ques");
var caparray=[];                                             //ananymous func
let anofun2=(function(str){
    for (let iterator of str) {
    let a= iterator.toUpperCase(); 
    caparray.push(a);
    }
    return caparray;
 
}
);
console.log(anofun2(["ajith","deepan","aravindh","madan"]));

//3)sum of all numbers in an array

console.log("answer for 3 ques");
(()=>{                                                         //iif
    var output=0;
    let anofun3=(function(str){
    for (let iterator of str) {
        output+=iterator;
    }
    return output;
    })
    console.log(anofun3([23,23,70,45]));
}) ()


//4)Return all the prime numbers in an array
console.log("answer for 4th ques");
primearray=[];
nonprimearray=[];                                               //anonymous func
let anofun4=(function(array){
    for (var iterator of array) {
        for (var i = 2; i < iterator; i++) {
            a=i;
            if(iterator%i==0){
            nonprimearray.push(iterator);
           break;}
        }   
        if(iterator%a!==0){
        primearray.push(iterator);}
}
return primearray;
}
)
console.log(anofun4([3,7,15,21,56,11]));

//5) Return all the palindromes in an array
console.log("answer for 5th ques");
(()=>{                                                                     //iif
    var reversedName=[];
    var palindromeNames=[];  
    let anofun5=(function(array){
        for (var iterator of array) {
            for(i=iterator.length-1;i>=0;i--){
               reversedName.push(iterator[i]); 
               
            }
            reversedstring=reversedName.join("");
              
              if(reversedstring.toUpperCase() === iterator.toUpperCase())
              {console.log(reversedstring)}
             
              for(i=iterator.length-1;i>=0;i--){
                reversedName.pop(iterator[i]); 
                
             }
              
       }
        return 0;
    })
     console.log(anofun5(["racecar","madam","level","access","lock"])); 
}) ()

 
 //6)Return median of two sorted arrays of the same size
 console.log("answer for 6th ques");
 let anofun6=(arr1,arr2)=>{
      arr3=[...arr1,...arr2];
      
      for (i=0;i<arr3.length;i++) {
        for (j=0;j<arr3.length;j++) {
            if(arr3[i]<arr3[j])
            {
                temp=arr3[i];
                arr3[i]=arr3[j];
                arr3[j]=temp;
            }
        }    
      }
      index=arr3.length/2;
      //console.log(arr3[index]);
     // console.log(arr3[index+1]);
      median=(arr3[index]+arr3[index+1])/2;
      return median;

 }
 console.log(anofun6([45,34,78,27,61,55],[12,100,36,78]));

 //7)Remove duplicates from an array
 console.log("answer for 7 ques");
 let anofun7=(arr1,arr2)=>{              //anofun
    arr3=[...arr1];
    for (i=0;i<arr3.length;i++) {
      for (j=1;j<arr3.length;j++) {
          if(arr3[i]==arr3[j] && i!==j)
          {
             arr3.splice(j,1);
          }
      }    
    }
    
    return arr3;

}
console.log(anofun7([45,78,78,78,61,55]));
   

 //8)Rotate an array by k times 
 console.log("answer for 8 ques");
 (()=>{
    let rotateArray=function(arr,k){
        if(k==arr.length || k%arr.length==0)
        return arr;
        if(k>arr.length)
         k=k%arr.length;                                 //iif
         for(i=0;i<k;i++){
            use=arr[arr.length-1];
            arr.unshift(use);
            arr.length=arr.length-1;
         }
         return arr;
     }
    console.log(rotateArray([1,2,3,4],10));
 })()


 


