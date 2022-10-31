import PropTypes from 'prop-types';
import { SectionTitle } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <section>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </section>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
