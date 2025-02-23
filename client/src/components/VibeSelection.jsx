// client/src/components/VibeSelection.jsx
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
  return (
    <div className="vibe-grid">
      {vibes.map((vibe) => (
        <button
          key={vibe.name}
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