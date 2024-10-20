import React, { useState } from 'react';
import './Home.css';
import InputPanel from '../components/InputPanel';

const Home = () => {
  const [showInputPanel, setShowInputPanel] = useState(false);
  const [mealSwipes, setMealSwipes] = useState('');
  const [dailyMeals, setDailyMeals] = useState('');
  const [preferredCuisine, setPreferredCuisine] = useState('');
  const [favoriteMealTime, setFavoriteMealTime] = useState('');

  const handleInputChange = (event) => {
    setMealSwipes(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Meal Plan:
      - Meal Swipes Left: ${mealSwipes}
      - Daily Meals: ${dailyMeals}
      - Preferred Cuisine: ${preferredCuisine}
      - Favorite Meal Time: ${favoriteMealTime}`);
  };

  const toggleInputPanel = () => {
    setShowInputPanel(!showInputPanel);
  };

  const closeInputPanel = () => {
    setShowInputPanel(false);
  };

  return (
    <div className="home-container">
      <button className="create-plan-button" onClick={toggleInputPanel}>
        Create My Plan
      </button>
      <InputPanel
        show={showInputPanel}
        onClose={closeInputPanel}
        mealSwipes={mealSwipes}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        dailyMeals={dailyMeals}
        setDailyMeals={setDailyMeals}
        preferredCuisine={preferredCuisine}
        setPreferredCuisine={setPreferredCuisine}
        favoriteMealTime={favoriteMealTime}
        setFavoriteMealTime={setFavoriteMealTime}
      />
    </div>
  );
};

export default Home;
