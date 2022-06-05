function routePass(component, page='/'){
  const comp = (window.location.pathname==page && component)
  return  comp
}

export default routePass;