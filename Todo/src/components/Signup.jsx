import { useState } from "react";
import Login from "./login";

const Signup = () => {
    const [data,setdata] = useState()
    const [errors,seterrors] = useState()
    
    
    return (
     <div>
      <h1>Registration Form</h1>
      <p> Already registered? <Login/></p>
     </div>
    )
}
export default Signup;