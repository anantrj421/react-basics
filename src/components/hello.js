
import Student from "./student";
import User from "./user";
import Person from "./Person";
function hello() {
    const studentData1 = {
        name: 'Alex',
        usn: '1MS17CS010',
        dept: 'CSE'
    };
    const studentData2 = {
        name: 'Sam',
        usn: '1MS17CS011',
        dept: 'CSE'
    };
    var statusValue = 1;
    return(
        <div className="test">
            <Student data={studentData1}/>
            <User status={statusValue}/>
            <Person/>
        </div>
    );
}

export default hello;