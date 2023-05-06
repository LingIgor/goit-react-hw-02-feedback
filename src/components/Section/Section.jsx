import PropTypes from 'prop-types';
import { Title } from './Section.styled';
import { Box } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <Box>
      <Title>{title}</Title>
      {children}
    </Box>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
