// src/components/InputPanel.js
import React from 'react';
import './InputPanel.css';

const InputPanel = ({
  show,
  onClose,
  mealSwipes,
  handleInputChange,
  handleSubmit,
  dailyMeals,
  setDailyMeals,
  preferredCuisine,
  setPreferredCuisine,
  favoriteMealTime,
  setFavoriteMealTime,
}) => {
  return (
    <div className={`input-panel ${show ? 'visible' : ''}`}>
      <h2>Welcome to MountainMeals!</h2>
      <p>Please input the details to create your meal plan.</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="mealSwipes">Number of Meal Swipes Left:</label>
          <input
            type="number"
            id="mealSwipes"
            value={mealSwipes}
            onChange={handleInputChange}
            placeholder="Enter meal swipes"
            className="meal-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="dailyMeals">How Many Times You Wish to Eat Per Day:</label>
          <input
            type="number"
            id="dailyMeals"
            value={dailyMeals}
            onChange={(e) => setDailyMeals(e.target.value)}
            placeholder="Enter daily meals"
            className="meal-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="preferredCuisine">Preferred Cuisine:</label>
          <input
            type="text"
            id="preferredCuisine"
            value={preferredCuisine}
            onChange={(e) => setPreferredCuisine(e.target.value)}
            placeholder="e.g., Italian, Mexican"
            className="meal-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="favoriteMealTime">Favorite Meal Time:</label>
          <input
            type="text"
            id="favoriteMealTime"
            value={favoriteMealTime}
            onChange={(e) => setFavoriteMealTime(e.target.value)}
            placeholder="e.g., Breakfast, Dinner"
            className="meal-input"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <button className="close-button" onClick={onClose}>
        Close
      </button>
    </div>
  );
};

export default InputPanel;
