import PropTypes from 'prop-types';

import { List } from './Statistic.styled';
export const Statistics = props => {
  return (
    <List>
      <li> Good:{props.good} </li>
      <li> Neutral:{props.neutral} </li>
      <li> Bad:{props.bad} </li>
      <li> Total: {props.total}</li>
      <li> Positive feedback:{props.positivePercentage} %</li>
    </List>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,

  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
