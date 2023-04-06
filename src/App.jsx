import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChoiceUser from './pages/ChoiceUser';

import Dashboard from './pages/Dashboard';
import Header from './components/layout/Header';

function App() {
    return (
        <div className="App">
            <Header />

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
