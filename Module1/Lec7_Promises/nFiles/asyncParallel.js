let files = ["../f1.txt", "../f2.txt", "../f3.txt"] ;

const fs = require("fs") ;

for(let i = 0; i < files.length; i++){
    let filesKaPromise = fs.promises.readFile(files[i]) ;

    filesKaPromise.then(function(data){
        console.log(data + "") ;
    })
}