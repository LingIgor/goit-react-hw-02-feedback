import PropTypes from 'prop-types';
import { Notific } from './Notification.styled';

export const Notification = ({ massege }) => {
  return <Notific>{massege}</Notific>;
};

Notification.propTypes = {
  massege: PropTypes.string.isRequired,
};
