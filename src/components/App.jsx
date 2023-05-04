import React, { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

const options = ['good', 'bad', 'neutral'];

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + bad + neutral;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    return Math.floor((100 / (good + neutral + bad)) * good) || 0;
  };

  onClickButton = e => {
    const element = e.currentTarget.dataset.type;
    this.setState(prevState => ({
      [element]: prevState[element] + 1,
    }));
  };

  render() {
    const total = this.countTotalFeedback();
    const positive = this.countPositiveFeedbackPercentage();

    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Please Leave feedback">
          <FeedbackOptions options={options} feedBack={this.onClickButton} />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? (
            <Notification massege="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positive={positive}
            />
          )}
        </Section>
      </>
    );
  }
}
