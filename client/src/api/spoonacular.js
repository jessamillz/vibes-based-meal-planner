const BASE_URL = 'https://api.spoonacular.com/recipes/complexSearch'
const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY;

/**
 * Fetch recipes from Spoonacular based on a vibe keyword.
 * @param {string} vibe - The selected vibe (e.g., "cozy", "healthy").
 * @returns {Promise<object[]>} - List of recipes.
 */

export const fetchRecipesByVibe = async (vibe) => {
	try {
		const response = await fetch(`${BASE_URL}?query=${vibe}&apiKey=${API_KEY}`);

		if (!response.ok) {
			throw new Error(`Failed to fetch recipes: ${response.status}`);
		}

		const data = await response.json();
		return data.results || []; // Return recipes array or empty if none found
	} catch (error) {
		console.error('Error fetching recipes:', error);
		return []; // Return empty array on error so UI can handle gracefully
	}
};