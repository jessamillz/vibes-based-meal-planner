const BASE_URL = 'https://api.spoonacular.com/recipes/complexSearch'
const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY;

// Mapping vibe names to better search keywords
const vibeKeywordMap = {
    cozy: "crockpot",
    adventurous: "crazy",
    healthy: "salad",
    "quick&easy": "easy",
    fancy: "fine",
    comfort: "hearty",
  };

/**
 * Fetch recipes from Spoonacular based on a vibe keyword.
 * @param {string} vibe - The selected vibe (e.g., "cozy", "healthy").
 * @returns {Promise<object[]>} - List of recipes.
 */

export const fetchRecipesByVibe = async (vibe) => {
	try {
        let searchQuery = vibe;
        let response = await fetch(`${BASE_URL}?query=${searchQuery}&sort=random&apiKey=${API_KEY}`);

        if (!response.ok) {
			throw new Error(`Failed to fetch recipes: ${response.status}`);
		}

        let data = await response.json();

         // If no results, try the mapped word
        if (!data.results || data.results.length === 0) {
            console.log(`No results found for "${vibe}". Retrying with mapped word...`);
        
            // Use the mapped keyword if it exists
            const fallbackQuery = vibeKeywordMap[vibe.toLowerCase()];
            if (fallbackQuery) {
                response = await fetch(`${BASE_URL}?query=${fallbackQuery}&sort=random&apiKey=${API_KEY}`);
  
                if (!response.ok) {
                    throw new Error(`Failed to fetch fallback recipes: ${response.status}`);
                }
  
                data = await response.json();
            }
        }
        
	    return data.results || []; // Return recipes array or empty if none found
	}   catch (error) {
		console.error('Error fetching recipes:', error);
		return []; // Return empty array on error so UI can handle gracefully
	}
};