import React, { useState } from "react"
const Join=()=>{

    const [formData,setFormData] = useState({
        userName: "",
        password: "",

    })
    console.log(formData)

    function handleEvent(event){
        
        const { name, value }= event.target
        
        setFormData(() => ({
            ...formData,
            [name]: value
        }))
        
        
    }

    return(
        <div>
            <form>
                <label>Username 
                <input
                    className='inputs'             
                    onChange={handleEvent}
                    name="userName"
                    id="userName"
                    value={formData.userName}
                ></input></label>
                <br/>
                <label>Password: 
                <input
                    type="password"
                    className='inputs'             
                    onChange={handleEvent}
                    name="password"
                    id="password"
                    value={formData.password}
                ></input></label>
                <br/>
                <button type="submit">Submit</button>
            </form>

        </div>
    )
}

export default Join