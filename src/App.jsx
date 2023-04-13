import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChoiceUser from './pages/ChoiceUser';

import Dashboard from './pages/Dashboard';
import Header from './components/layout/Header';
import Error from './pages/Error';

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<ChoiceUser />} />
                    <Route path="/dashboard/:userId" element={<Dashboard />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
