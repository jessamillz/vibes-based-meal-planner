// client/src/components/VibeSelection.jsx
import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import PropTypes from 'prop-types';
import './VibeSelection.css'; // Import external styles

const vibes = [
  { name: "Cozy", emoji: "🧣", colorClass: "vibe-cozy" },
  { name: "Adventurous", emoji: "🌄", colorClass: "vibe-adventurous" },
  { name: "Healthy", emoji: "🥗", colorClass: "vibe-healthy" },
  { name: "Comfort Food", emoji: "🍕", colorClass: "vibe-comfort" },
  { name: "Quick & Easy", emoji: "⚡", colorClass: "vibe-quick" },
  { name: "Fancy", emoji: "🍷", colorClass: "vibe-fancy" }
];

const VibeSelection = ({ onVibeSelect }) => {
  const [vibes, setVibes] = useState([]);
  
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

  return (
    <div className="vibe-grid">
      {vibes.map((vibe) => (
        <button
          key={vibe.id}
          className={`vibe-card ${vibe.colorClass}`}
          onClick={() => onVibeSelect(vibe.name)}
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