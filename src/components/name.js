import {useState} from 'react';
function Name(){
    const [name, setName] = useState("Tom")
    function changeName(){
        setName("James");
    }
    return(
        <div>
            <h2>Welcome to home {name}</h2>
            <button onClick={changeName}>Update</button>
        </div>
    )

};

export default Name;