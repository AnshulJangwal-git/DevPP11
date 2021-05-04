const fs = require("fs");

// cat f1.txt => f1 ka content
// cat f1.txt f2.txt => f1 ka content + f2 ka content

let data = fs.readFileSync("./f1.txt", "utf8");
let f2KaData = fs.readFileSync("./f2.txt", "utf8");

// let bothOutput = f1KaData + "\n" +f2KaData;
// console.log(f1KaData);
// console.log(f2KaData);
// console.log(bothOutput);

// f1KaData
// -s flag => remove extra spaces !!!
function applySFlag(data) {
  // Hey I am F1
  // space
  // space
  // space
  // space
  // space
  // Bye I am F1
  let emptyIncluded = false;
  let removedSpaces = [];
  let splittedData = data.split("\r\n");
  //   [ 'Hey I am F1', '', '', '', '',  '','Bye I am F1', ''];
  console.log(splittedData);

  for (let i = 0; i < splittedData.length; i++) {
    if (splittedData[i] == "" && emptyIncluded == false) {
      removedSpaces.push(splittedData[i]);
      emptyIncluded = true;
    } else if (splittedData[i] != "") {
      removedSpaces.push(splittedData[i]);
      if(i < splittedData.length-2 ) emptyIncluded = false;
    }
  }

  let removedSpacesString = removedSpaces.join("\r\n");
  return removedSpacesString;
  // Hey I am F1
  // space
  // Bye I am F1
}

// let removedSpacesString = applySFlag(f1KaData);
// console.log(removedSpacesString);


//-b Flag => 
function applyBFlag(data){
  let count = 1 ;
  let splittedData = data.split("\r\n") ;

  for(let i = 0; i < splittedData.length; i++){
    if(splittedData[i] != ''){
      splittedData[i] = `${count}.${splittedData[i]}` ;
      count ++ ;
    }
  }
  console.log(splittedData) ;
  let bFlaggedString = splittedData.join("\r\n") ;
  return bFlaggedString ;

}
// let bFlaggedString = applyBFlag(data) ;
// console.log(bFlaggedString) ;



//-n Flag...
function applyNFlag(data){
  let count = 1 ;
  let splittedData = data.split("\r\n") ;

  for(let i = 0; i < splittedData.length; i++){
   
      splittedData[i] = `${count}.${splittedData[i]}` ;
      // splittedData[i] = count+". " + splittedData[i] ;
      count ++ ;
  }
  console.log(splittedData) ;
  let nFlaggedString = splittedData.join("\r\n") ;
  return nFlaggedString ;

}
console.log(applyNFlag(data)) ;
