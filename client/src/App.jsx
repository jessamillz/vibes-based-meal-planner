import { useState } from 'react';
import VibeSelection from './components/VibeSelection';
import './App.css'; // Keep this if you're using custom styles

function App() {
    const [selectedVibe, setSelectedVibe] = useState(null);

    const handleVibeSelect = (vibe) => {
        setSelectedVibe(vibe);
        console.log(`Selected Vibe: ${vibe}`); // For now, just log it
    };

    return (
        <div className="text-center p-8">
            <h1 className="text-3xl font-bold mb-6">Vibes-Based Meal Planner</h1>
            <VibeSelection onVibeSelect={handleVibeSelect} />
            {selectedVibe && <p className="mt-4 text-xl">You picked: {selectedVibe}</p>}
        </div>
    );
}

export default App;
