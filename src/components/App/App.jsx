import { useState } from 'react';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import Section from '../Section/Section';
import Notification from '../Notification/Notification';
import { Div } from './App.styled';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const incrementFeedback = key => {
    switch (key) {
      case 'good':
        setGood(good => good + 1);
        break;

      case 'neutral':
        setNeutral(neutral => neutral + 1);
        break;

      case 'bad':
        setBad(bad => bad + 1);
        break;

      default:
        return;
    }
  };

  const total = good + neutral + bad;

  const countPositiveFeedbackPercentage = Math.trunc((good / total) * 100);

  const options = Object.keys({ good, neutral, bad });

  return (
    <Div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={incrementFeedback}
        ></FeedbackOptions>
      </Section>

      <Section title="Statistics">
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage}
          ></Statistics>
        ) : (
          <Notification title="There is no feedback"></Notification>
        )}
      </Section>
    </Div>
  );
};

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

// incrementFeedback = key => {
//   this.setState(prevState => ({
//     [key]: prevState[key] + 1,
//   }));
// };

// countTotalFeedback = () => {
//   const total = Object.values(this.state).reduce(
//     (acc, value) => acc + value,
//     0
//   );
//   return total;
// };

// countPositiveFeedbackPercentage = () => {
//   return Math.trunc((this.state.good / this.countTotalFeedback()) * 100);
// };

//   render() {
//     const { good, neutral, bad } = this.state;
//     return (
//       <Div>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={Object.keys(this.state)}
//             onLeaveFeedback={this.incrementFeedback}
//           ></FeedbackOptions>
//         </Section>

//         <Section title="Statistics">
//           {this.countTotalFeedback() ? (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={this.countTotalFeedback()}
//               positivePercentage={this.countPositiveFeedbackPercentage()}
//             ></Statistics>
//           ) : (
//             <Notification title="There is no feedback"></Notification>
//           )}
//         </Section>
//       </Div>
//     );
//   }
// }

export default App;
