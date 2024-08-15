
module.exports = function towelSort (matrix) {
  let ar = [];
  if (matrix == undefined){
    return ar;
  }
  let index = 0;
  for (row of matrix){
    if (index % 2 == 0){
      ar = ar.concat(row);
      index++;
    }
    else{
      for (let num = row.length-1; num >= 0; num--){
        ar.push(row[num]);
      }
      index++;
    }
  }
  return ar;
}

