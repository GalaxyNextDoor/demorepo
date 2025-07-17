import File1 from "./components/file1.jsx";
function App() {
    return (
        <div>
          <h1>Welcome</h1>
            <File1
                course="Cybersecurity"
                courseId={163}
                isValid={true}
                address={{
                    location: "MRUH",
                    place: "Hyderabad",
                    pin: "500100"
                }}
            />
        </div>
    );
}
export default App;