function File1(prop){
    const dstyle = {
    color: "black",
    padding: "20px",
    backgroundColor: "#f0cf6bff",
    borderRadius: "8px"
};
    return (
        <div style={dstyle}>
            <h1>File 1</h1>
            <p>This is the content of file1.jsx</p>
            <p>course name {prop.course} </p>
            <p>course ID: {prop.courseId}</p>
            <p>Validity : {prop.isValid ? <i>YES</i> : <i>NO</i>}</p>
            <p>Address: {prop.address.location}, {prop.address.place}, {prop.address.pin}</p>
        </div>
    )
}

export default File1;