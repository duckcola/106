'use strict';

module.exports = function createUpdatedCollection(collection, objectB) {
   let str=[];
 let j=0;
let app=[];


 for(let i=0;i<collection.length;i++){

   if(collection[i].length==1){
      if(i==collection.indexOf(collection[i]))
      { str[j]={ key:collection[i], count:1};   app.push(collection[i]); 
        j++;
      }

 else{  str[app.indexOf(collection[i])].count++;
        }
 }//适用单个字符的方法

    if(collection[i].length==3){

        if(app.indexOf( collection[i].charAt(0) ) !==-1  ){let p=app.indexOf( collection[i].charAt(0) );
          let m=parseInt(collection[i].charAt(2));
          str[p].count=str[p]+m;
      }

      else str[j]={ key:collection[i].charAt(0), count:parseInt(collection[i].charAt(2))};
    }

 }

let array=[];
  array=objectB.value;
let p;

 for(let x=0;x<array.length;x++)
  for(let y=0;y<str.length;y++)
      if(array[x]==str[y].key)
        {p=str[y].count;
          str[y].count=p-parseInt(p/3);}

    return str; 

}