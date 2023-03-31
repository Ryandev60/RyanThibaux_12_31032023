import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChoiceUser from './pages/ChoiceUser';

import Dashboard from './pages/Dashboard';

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<ChoiceUser />} />
                    <Route path="/dashboard/:userId" element={<Dashboard />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
