import React from 'react';

import classes from './Header.module.css';

const Header = props => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <button>Cart</button>
      </header>
      <div className={classes['main-image']}>
        <img src='https://github.com/academind/react-complete-guide-code/blob/11-practice-food-order-app/extra-files/meals.jpg?raw=true' alt="A table full of delicious food!" />
      </div>
    </React.Fragment>
  )
};

export default Header;
