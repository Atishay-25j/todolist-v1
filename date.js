
exports.getDate = function (){
const date = new Date();
const options = {
  weekday :'long',
  year : 'numeric',
  month : 'long',
  day : 'numeric'
};
return  date.toLocaleDateString("en-US" ,options);
}
exports.getDay = getDay;

function getDay(){
  const date = new Date();
  const options = {
    weekday :'long'
  };
  return date.toLocaleDateString("en-US" ,options);

  }
