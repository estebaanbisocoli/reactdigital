import React from 'react'
import TextField from 'material-ui/TextField';
const MyInput = (props) => {
    return <TextField value={props.inputValue} onChange={props.setNewInput}  hintText="Ingrese un pokemon" />
}
export default MyInput