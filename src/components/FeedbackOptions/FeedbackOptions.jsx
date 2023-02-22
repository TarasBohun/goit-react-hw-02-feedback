import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(option => {
        return (
          <div key={option}>
            <button type="button" onClick={() => onLeaveFeedback(option)}>
              {option}
            </button>
          </div>
        );
      })}
    </>
  );
};

FeedbackOptions.protoTypes = {
  options: PropTypes.arrayOf().isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
