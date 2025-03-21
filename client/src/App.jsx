import { useState } from 'react';
import VibeSelection from './components/VibeSelection';
import { fetchRecipesByVibe } from './api/spoonacular';
import './App.css'; // Custom styles

function App() {
    const [selectedVibe, setSelectedVibe] = useState(null);
    const [recipes, setRecipes] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0); // Index of first recipe to show
    // Limit to display 2 recipes at a time
    const visibleRecipes = recipes.slice(currentIndex, currentIndex + 2);

    const handleVibeSelect = async (vibe) => {
        setSelectedVibe(vibe);
        console.log(`Selected Vibe: ${vibe}`); // For now, just log it
        // Fetch recipes based on vibe
        const fetchedRecipes = await fetchRecipesByVibe(vibe);
        // Reset recipe view when vibe changes
        setCurrentIndex(0); 
        setRecipes(fetchedRecipes);
    };

    return (
        <div className="text-center p-8">
            <h1 className="text-3xl font-bold mb-6">Vibes-Based Meal Planner</h1>
            <VibeSelection onVibeSelect={handleVibeSelect} />
            {selectedVibe && (
                <>
                    <p className="mt-4 text-xl">You picked: {selectedVibe}</p>
                    <div className="recipes-container">
                        <div className="recipes-grid mt-6">
					    	{recipes.length > 0 ? (
					    		visibleRecipes.map((recipe) => (
					    			<div key={recipe.id} className="recipe-card">
					    				<img src={recipe.image} alt={recipe.title} />
					    				<p>{recipe.title}</p>
					    			</div>
					    		))
					    	) : (
					    		<p>No recipes found for this vibe.</p>
					    	)}
                        </div>
                        <div className="pagination-controls mt-4">
	                        <button
		                        onClick={() => setCurrentIndex(currentIndex - 2)}
		                        disabled={currentIndex === 0}
	                        >
		                        Previous
	                        </button>
	                        <button
		                        onClick={() => setCurrentIndex(currentIndex + 2)}
		                        disabled={currentIndex + 2 >= recipes.length}
	                        >
		                        Next
	                        </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default App;
