
import Heading from "./Heading";
import InputBox   from "./InputBox";
function Header({displayValue}){
  
console.log(displayValue);


  return(<>
  <div className="heading">

    <Heading></Heading>
    <InputBox value={displayValue}></InputBox>


  </div>
  
  
  
  </>)
}
export default Header;