module.exports = function check(str, bracketsConfig) {
  var stack=[];
  str=str.split('');
  if (str.length%2) return false;
  str.forEach((bracket)=>{
   bracketsConfig.forEach((c)=>{
     
     if (bracket==c[0] && bracket!=c[1]) {
      stack.push(bracket);
    } else if (bracket==c[0] && bracket==c[1]) {

        if (stack[stack.length-1]==bracket) {
        stack.pop();
        } else {stack.push(bracket);}


      } else if (stack[stack.length-1]==c[0] && bracket==c[1]){
        stack.pop();
      } else {return false}; 
      
  });
  
  });
  return stack.length==0;
}