import {useEffect} from "react";
import {
  BrowserRouter
} from "react-router-dom";

import AnimatedRoutes from './AnimatedRoutes';

const MainContent = () => {
  

  return (
    <BrowserRouter>
    <AnimatedRoutes/>
    </BrowserRouter>
  )
}

export default MainContent

function useAuthState(auth: any): [any, any, any] {
  throw new Error("Function not implemented.");
}
function fetchUserName() {
  throw new Error("Function not implemented.");
}

