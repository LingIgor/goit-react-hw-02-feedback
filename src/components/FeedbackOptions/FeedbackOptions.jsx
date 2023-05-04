import { Button } from './Feedback.styled';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <div>
      {options.map(option => (
        <Button
          type="button"
          key={option}
          onClick={onLeaveFeedback}
          data-type={option}
        >
          {option}
        </Button>
      ))}
    </div>
  );
};
