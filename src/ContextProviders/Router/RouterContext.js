import React, {useState, useEffect} from "react";

export const RouterContext = React.createContext();

function RouterProvider(props) {
  const [reactLocation, setReactLocation] = useState('/')

  function setLocation(location) {
    window.history.pushState({}, '', location);
    setReactLocation(location)
  }

  return (
    <RouterContext.Provider value={{location:reactLocation, setLocation}} {...props} />
  )
}

export default RouterProvider;