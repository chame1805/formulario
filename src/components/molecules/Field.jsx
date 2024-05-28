import Input from "../atoms/Input";
import Label from "../atoms/Label";


function Field(props) {
    return (
        <>
        
            <div>
                <Label text={props.text}/>
                
                <Input type={props.type} placeholder={props.placeholder} val={props.val} fnVal={props.fnVal}/>
            </div>

        </>
        
      )
}

export default Field;