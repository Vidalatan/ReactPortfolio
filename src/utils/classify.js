/**
 * @param  {...classRefrences} classes 
 * @returns String of combined class refrences
 */
function classify(...classes) {
  return classes.join(' ');
}

export default classify;