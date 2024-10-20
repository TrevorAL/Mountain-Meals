import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  const [mealSwipes, setMealSwipes] = useState('');

  const handleInputChange = (event) => {
    setMealSwipes(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`You have ${mealSwipes} meal swipes left for the semester.`);
  };

  return (
    <div>
      <div className='about-panel'>
        <p>Enter your meal swipes to get started</p>
        <div className='form'>
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            value={mealSwipes}
            onChange={handleInputChange}
            placeholder="Enter meal swipes"
            className="meal-input"
          />
          <button type="submit">Submit</button>
        </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
