// Import React hooks for state and side effects
import { useEffect, useState } from 'react';
// Import Supabase client for database interaction
import { supabase } from '../supabaseClient';
// PropTypes for prop validation
import PropTypes from 'prop-types';
// Import component-specific styles
import './VibeSelection.css'; 

/**
 * VibeSelection Component
 * ------------------------
 * Displays a list of vibes fetched from Supabase.
 * Allows users to select a vibe, triggering specific styling and callbacks.
 */
const VibeSelection = ({ onVibeSelect }) => {
    // State to store the list of vibes fetched from Supabase
    const [vibes, setVibes] = useState([]);
	// State to track the currently selected vibe (by its ID)
    const [selectedVibe, setSelectedVibe] = useState(null);
    
   /**
   * useEffect - Fetch Vibes from Supabase on Component Mount
   * ---------------------------------------------------------
   * Runs once when the component mounts to fetch the available vibes.
   */
    useEffect(() => {
	const fetchVibes = async () => {
		// Fetch all rows from the 'vibes' table
	    const { data, error } = await supabase.from('vibes').select('*');
	    if (error) {
		console.error('Error fetching vibes:', error);
	    } else {
		setVibes(data); // Store the fetched vibes in state
	    }
	};

	fetchVibes();
    }, []); // Empty dependency array ensures it runs only once

   /**
   * handleVibeClick - Handles Vibe Selection
   * ----------------------------------------
   * - Toggles the selected vibe.
   * - Applies specific styling based on selection.
   * - Calls the parent component's onVibeSelect callback.
   */
    const handleVibeClick = (vibe) => {
		// If the clicked vibe is already selected, deselect it; otherwise, select it
		setSelectedVibe((prev) => (prev === vibe.id ? null : vibe.id));
		// Trigger the parent callback with the selected vibe's name
		onVibeSelect(vibe.name);    // Keep existing behavior
    };

    return (
	<div className="vibe-grid">
	    {vibes.map((vibe) => (
		<button
		    key={vibe.id}
			// Dynamically apply the vibe-specific class only if the vibe is selected
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
	// Expects a function to handle vibe selection (e.g., for parent state updates)
	onVibeSelect: PropTypes.func.isRequired, 
    };

export default VibeSelection;