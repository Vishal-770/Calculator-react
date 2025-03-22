import Key from "./Key";
function Body({OnButtonClick}){
  let keys=["1","2","3","+","-","4","5","6","*","/","7","8","9","**","%","X","C","="];
  return(<>
  
  <div className="calculator-body">

    {keys.map(key=>(<Key  key={key}  label={key}  OnButtonClick={OnButtonClick}></Key>))}





  </div>
  </>)
}
export default Body;