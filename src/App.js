import './App.css';
import Stopwatch from "./components/Stopwatch_2.0/Stopwatch";
import {ContextProvider} from "./context/context";

function App() {
    return (
        <ContextProvider>
            <div className="App">
                <Stopwatch/>
            </div>
        </ContextProvider>
    );
}

export default App;
