import { useState } from "react";


const Form = () => {

    const [input, setInput] = useState({
        email: '',
        password: ''
    })
 
    return (
 <div>
    <Form >
 <label htmlFor="email">Email: </label>
 <input type="text" name="email" value={input.email}/>

 <label htmlFor="password">Password: </label>
 <input type="text" name='password' value={input.password} />

 <button >Submit</button>

    </Form>
 </div>
    )
}
export default Form;