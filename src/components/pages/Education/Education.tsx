
const Education = () => {
    return <div style={{width: '90%', padding: '5%', gap: '5%', backgroundColor: '#f8e5e6', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
        <div style={{flex: 1, height: '50vh'}}>
            <img style={{width: '100%', height: '100%'}} src='images/degree.jpg' alt="thumbnail" />
        </div>
        <div style={{flex: 1, height: '50vh', display: 'flex', flexDirection: 'column',  justifyContent: 'space-evenly', alignItems: 'start'}}>
            <div>
                <h2>Northeastern University</h2>
                <p><b><i>B.S in Computer Science and Cognitive Psychology - Graduated 2023 <br/></i></b></p>
                <p>GPA: 3.82 <br/></p>
                <p>Graduate with high honnors (Magna Cum Laude) - Dean's List all semesters <br/></p> 
                <p>Coursework: <i>Software Development, Networks and Distributed System, Object Oriented Design, Artificial Intelligence, Human Computer Interaction, Fundamentals of CS (Accelerated Sections)</i></p>
            </div>
            <div>
                <h2>IELTS</h2>
                <p>7.5</p>
            </div>
        </div>
    </div>
}

export default Education