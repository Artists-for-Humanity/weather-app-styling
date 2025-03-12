# 🌤️ Weather App Styling Exercise (Mobile Only)

## 📌 Part 1: Figma Design & Styling

### 🎨 Design & Planning  
1. **Create a new Figma design file**  
   - Use a mobile frame (e.g., **iPhone 13/14** or your preferred mobile size).  
   - Apply a **grid system** for layout consistency.  

2. **Gather inspiration**  
   - Search **Pinterest** for "Weather App" designs.  
   - Create a **mood board** with UI/UX references.  

3. **Design graphical assets**  
   - Create your own icons & illustrations **(optional)**.  
   - Download free icons from **[Flaticon](https://www.flaticon.com/)** or similar sites.  

4. **Apply a styling system**  
   - Choose a **color palette**, typography, and UI components.  
   - Focus on **user experience and readability**.  

---

## 🛠️ Part 2: Development & API Integration  

### 🌐 Setup  
1. **Create a new branch** in your repository.  
2. Pull the branch into your local development environment.  
3. Sign up at **[OpenWeatherMap](https://openweathermap.org/)** for an API key.  

### 🔑 API Key Setup  
1. Create an **.env** file in your project root.  
2. Add your API key in the following format:  
   ```env
   REACT_APP_WEATHER_API_KEY=your_api_key_here


## Bonus Challenge

### Check for stale cache weather data then request new data from API

Currently the web application use countriesService.js to fetch data from the open-weather-map api, 

- This only happens once to save api request calls

- The fetched data is stored as a cache

- As long as there is cached data, search bar will use cached data instead of making new requests.

Write a helper function so that when the search bar is used it checks how much time has elapsed since the last update of the cache data. If the cached data is over than 30 minutes, fetch new data from the API then replace the old cached data with new data.