import Button from "./Components/Button";
import './App.css'
import TextField from '@mui/material/TextField';

function App()
{
  var name = "faraz"
  return(
    <>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />

      <h1 className="heading">Hello World</h1>
  
      <h1>Hello {name}</h1>

      <h1>The Sum of 2 and 5 is {2+5}</h1>

      <h1>The Square root of 25 {25*25}</h1>

      <Button janisar="sign up"/>

      <Button janisar="logout"/>

      <Button janisar="feedback"/>

      <Button janisar="get Courses"/>

      <Button janisar="Submit"/>

      <Button janisar="sign up"/>

    </>
  )
}

export default App;

