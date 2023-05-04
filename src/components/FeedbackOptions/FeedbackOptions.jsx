import { Button } from './Feedback.styled';

export const FeedbackOptions = ({ feedBack, options }) => {
  return (
    <div>
      {options.map(option => (
        <Button
          type="button"
          key={option}
          onClick={feedBack}
          data-type={option}
        >
          {option}
        </Button>
      ))}
    </div>
  );
};
