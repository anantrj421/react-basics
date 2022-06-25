function user(props){
    function myAction(){
        console.log('Button was clicked');
    }
    function showAlert(){
        alert('Alert is displayed!');
    }
    return(
        <div>
            {props.status?<h3>Success</h3>:<h3>Failure</h3>}
            <button onClick={myAction}>New Button</button>
            <button onClick={showAlert}>Alert button</button>
        </div>
    );
}

export default user;