import React, { useState } from 'react';
import './Home.css';
import InputPanel from '../components/InputPanel';
import { Drawer, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
// Home.js


const Home = () => {
  const [showInputPanel, setShowInputPanel] = useState(false);
  const [mealSwipes, setMealSwipes] = useState('');
  const [dailyMeals, setDailyMeals] = useState('');
  const [preferredCuisine, setPreferredCuisine] = useState('');
  const [favoriteMealTime, setFavoriteMealTime] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

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
      <div className="header">
        <Button
          icon={<MenuOutlined />}
          type="text"
          onClick={toggleMenu}
          className="menu-button"
        />
        <h1>Meal Budget Planner</h1>
      </div>

      <div className="intro">
        <p>
          Plan your meals and manage your budget effectively with our Meal Budget Planner.
          Get personalized meal plans and cost breakdowns to make budgeting easy!
        </p>
        <div className="get-started">
          <Link to="/create-plan">
            <Button type="primary" size="large">
              Get Started
            </Button>
          </Link>
        </div>
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
      </div>

      <Drawer
        placement="left"
        closable={true}
        onClose={closeMenu}
        open={isMenuOpen}
        width={250}
      >
        <ul className="menu-list">
          <li onClick={closeMenu}>
            <Link to="/create-plan">Create Plan</Link>
          </li>
          <li onClick={closeMenu}>
            <Link to="/help">Help</Link>
          </li>
          <li onClick={closeMenu}>
            <Link to="/about">About</Link>
          </li>
          <li onClick={closeMenu}>
            <Link to="/map">Map</Link>
          </li>
        </ul>
      </Drawer>
      
<footer className="footer">
  <p>&copy; 2024 Meal Budget Planner. All rights reserved.</p>
</footer>
    </div>
    
  );
};

export default Home;
    

