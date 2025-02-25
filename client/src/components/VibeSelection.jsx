// client/src/components/VibeSelection.jsx
import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import PropTypes from 'prop-types';
import './VibeSelection.css'; // Import external styles

const VibeSelection = ({ onVibeSelect }) => {
  const [vibes, setVibes] = useState([]);
  const [selectedVibe, setSelectedVibe] = useState(null); // Track selected vibe
  
  useEffect(() => {
    const fetchVibes = async () => {
      const { data, error } = await supabase.from('vibes').select('*');
      if (error) {
        console.error('Error fetching vibes:', error);
      } else {
        setVibes(data);
      }
    };

    fetchVibes();
  }, []);

  const handleVibeClick = (vibe) => {
    setSelectedVibe((prev) => (prev === vibe.id ? null : vibe.id)); // Set selected vibe
    onVibeSelect(vibe.name);  // Keep existing behavior
  };

  return (
    <div className="vibe-grid">
      {vibes.map((vibe) => (
        <button
          key={vibe.id}
          className={`vibe-card ${selectedVibe === vibe.id ? `vibe-${vibe.name.toLowerCase().split(' ')[0]}` : ''}`}
          onClick={() => handleVibeClick(vibe)}
        >
          <span className="vibe-emoji">{vibe.emoji}</span>
          <p className="vibe-name">{vibe.name}</p>
        </button>
      ))}
    </div>
  );
};


// Define PropTypes
VibeSelection.propTypes = {
    onVibeSelect: PropTypes.func.isRequired, // Enforces a function prop
  };

export default VibeSelection;