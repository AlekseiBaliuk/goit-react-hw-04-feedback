import { PropTypes } from 'prop-types';
import { FeedbackButton, OptionsWrapper } from './FeedbackOptions.styled';
import { firstLetterUpperCase } from '../utils/firstLetterUpperCase';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <OptionsWrapper>
      {options.map(option => (
        <FeedbackButton key={option} onClick={() => onLeaveFeedback(option)}>
          {firstLetterUpperCase(option)}
        </FeedbackButton>
      ))}
    </OptionsWrapper>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
