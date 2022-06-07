/**
 * @param {Component} component 
 * @param {String} page 
 * @returns Boolean representing if the route should pass or not
 */
function routePass(component, page='/'){
  const comp = (window.location.pathname==page && component)
  return  comp
}

export default routePass;