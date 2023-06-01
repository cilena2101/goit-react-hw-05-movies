import css from './Button.module.css';
import PropTypes from 'prop-types';

export const Button = ({ onClick }) => {
  return (
    <div className={css.button__container}> 
     <button className={css.button} onClick={onClick}>
     Search
    </button>   
    </div>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
};