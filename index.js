var fs = require('fs');
// Read the contents of the file into memory.
fs.readFile('data', 'utf8', function (err, fileOut) {
    if (err) throw err;

    console.log(fileOut);

    var splitFile = fileOut.split('\n');
    console.log(splitFile);

    var lines = parseInt(splitFile[0]);
    console.log(typeof lines);

    var l1 = splitFile[1].split(" ").map(x => parseInt(x));
    console.log(l1);
    console.log(parseLine('x'));



});

var parseLine = (line) =>{
    return line + 'x';
};

// scope.accord = () => {
//     $('.collapsible').collapsible({
//       accordion: false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
//     });
//   };
// var x ("offering", scope.OID, (err, response)=> {
//     if (err) {
//         throw(err);
//     }
//     else {
//
//     }
// });