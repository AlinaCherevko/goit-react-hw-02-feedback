import { Component } from 'react';
import Feedback from './Feedback/Feedback';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = option => {
    this.setState(prevState => ({
      ...prevState,
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    const totalVotes = this.countTotalFeedback();
    return totalVotes > 0
      ? Math.round((this.state.good / totalVotes) * 100)
      : 0;
  };
  render() {
    const totalFeedback = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    // const obj = Object.keys(this.state);
    // console.log(obj);
    return (
      <div className="container">
        <Section title="Leave your feedback">
          <Feedback
            leaveFeedback={this.leaveFeedback}
            const
            options={Object.keys(this.state)}
            // options={['good', 'neutral', 'bad']}
          />
        </Section>

        <Section title="Statistics">
          {totalFeedback > 0 ? (
            <Statistics
              good={this.state.good}
              neuntal={this.state.neutral}
              bad={this.state.bad}
              total={totalFeedback}
              positiveFeedback={positivePercentage}
            />
          ) : (
            <Notification />
          )}
        </Section>
      </div>
    );
  }
}
