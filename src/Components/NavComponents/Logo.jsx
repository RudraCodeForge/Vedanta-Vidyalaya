
import "./Logo.css";

let a="IMAGES/logo.png";

const Logo=()=>{
  return(
    <div className="logo">
      <img className="mlogo" src={a}></img>
    </div>
  )
}
export default Logo;