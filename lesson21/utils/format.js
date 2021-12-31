export default value =  "default value";

export function currency(num){
  return `$${num}`;
}


export function number(num){
  return String(num).replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
}

