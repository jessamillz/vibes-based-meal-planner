# Software Requirements Specification (SRS)
## Vibes-Based Meal Planner
### Version 1.0
### Author: [Jessica Miller]
### Last Updated: [February 17, 2025]

---

## **1. Introduction**
### **1.1 Purpose**
The Vibes-Based Meal Planner is a full-stack web application that helps users plan meals based on their mood or desired "vibe." The app will provide meal suggestions using external APIs, allow users to schedule meals, and integrate with Google Calendar for event-based meal planning.

### **1.2 Scope**
- Users select a "vibe" (e.g., cozy, energizing, light & fresh), and the app suggests meals accordingly.
- Meal data is fetched using the Spoonacular API, and weather-based meal suggestions are integrated via the OpenWeather API.
- Users can manually schedule meals, including take-out and restaurant options.
- Basic calendar integration for syncing planned meals with Google Calendar.
- Full-stack implementation using **React (frontend), Express.js (backend), and PostgreSQL (via Supabase)**.

### **1.3 Intended Audience**
- Individuals who want a more intuitive and mood-based approach to meal planning.
- Millennials and younger generations who enjoy personalized, user-friendly experiences.
- Potential employers reviewing this project as part of a portfolio.

### **1.4 Definitions & Acronyms**
- **API** – Application Programming Interface
- **MVP** – Minimum Viable Product
- **CRUD** – Create, Read, Update, Delete
- **Supabase** – A managed PostgreSQL database service
- **Spoonacular API** – API for meal and recipe data
- **OpenWeather API** – API for real-time weather data

---

## **2. Functional Requirements**
### **2.1 Core Features (MVP)**
✅ Users can select a mood/vibe, and the app suggests meals accordingly.
✅ Fetch meal data using **Spoonacular API** based on predefined vibe categories.
✅ Weather-based meal recommendations using **OpenWeather API**.
✅ Users can schedule meals manually.
✅ Users can add take-out and restaurant meals with custom notes.
✅ Basic Google Calendar integration for syncing planned meals.

### **2.2 Future Enhancements**
💡 Shared meal planning (invite spouse, friends, etc.).
💡 User accounts & authentication (save preferences, history).
💡 AI-based personalized recommendations based on user choices.

---

## **3. Non-Functional Requirements**
- **Performance:** App should load meal suggestions in under 2 seconds.
- **Scalability:** Designed to support a small user base with potential for future expansion.
- **Security:** Basic protection of API keys, secure database connections.
- **Usability:** Simple UI/UX optimized for quick selection and meal planning.

---

## **4. Technology Stack**
### **Frontend:**
- React.js (Vite for fast development)
- React Router for navigation
- Axios for API calls

### **Backend:**
- Express.js (Node.js framework)
- PostgreSQL (via Supabase for database management)
- CORS and dotenv for security and environment management

### **APIs Used:**
- **Spoonacular API** – Meal and recipe data
- **OpenWeather API** – Weather-based meal suggestions
- **Google Calendar API** – Event-based meal syncing (later phase)

### **Hosting & Deployment:**
- **Frontend:** Netlify
- **Backend:** Render (or another free-tier backend hosting service)
- **Database:** Supabase (managed PostgreSQL)

---

## **5. Development Timeline**
### **Phase 1 (MVP - Core Features) (Feb - Early March)**
- ✅ Set up repo, initialize React and Express.
- ✅ Fetch and display meals from Spoonacular API based on vibe selection.
- ✅ Integrate OpenWeather API for weather-based meal suggestions.
- ✅ Allow users to schedule meals and add take-out options.

### **Phase 2 (Enhancements & Backend Refinement) (March - Early April)**
- ✅ Connect backend to PostgreSQL (via Supabase) for structured meal storage.
- ✅ Improve API calls and optimize response handling.
- ✅ Add Google Calendar syncing.

### **Phase 3 (Final Features & Portfolio Polish) (April - May)**
- ✅ UI/UX improvements and mobile optimization.
- ✅ Test, debug, and finalize all core features.
- ✅ Deploy on Netlify (Frontend) and Render (Backend).
- ✅ Document project and add to portfolio.

---

## **6. Open Questions & Next Steps**
- Should we allow users to manually add their own meals (custom database)?
- What filtering options should be available for meal selection?
- How should we categorize "vibes" in the database for better meal matching?

---

## **7. References & External Resources**
- [Spoonacular API Docs](https://spoonacular.com/food-api)
- [OpenWeather API Docs](https://openweathermap.org/api)
- [Supabase Documentation](https://supabase.com/docs)

---

### **📌 Next Steps:**


