function Student(props){
    return(
        <div>
            <h2>Hello {props.data.name}</h2>
            <h2>Hello {props.data.usn}</h2>
        </div>
    )
};

export default Student;