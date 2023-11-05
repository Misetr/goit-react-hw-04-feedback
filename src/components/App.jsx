import React, { useState } from 'react';
import { Feedback } from './Feedback/Feedback.jsx';
import { SectionTitle } from './SectionTitle/SectionTitle.jsx';
import { Statistics, Notification } from './Statistics/Statistics.jsx';

const App = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleIncrement = e => {
    setState(prev => ({
      ...state,
      [e.target.name]: (prev[e.target.name] += 1),
    }));
  };

  const totalFeedback = () => {
    return state.good + state.neutral + state.bad;
  };

  const positiveFeedback = () => {
    if (totalFeedback()) {
      return Math.round(((state.good + state.neutral) * 100) / totalFeedback());
    }
  };
  return (
    <>
      <SectionTitle
        title="Please leave your feedback"
        child={
          <Feedback options={Object.keys(state)} increment={handleIncrement} />
        }
      />
      <SectionTitle
        title="Statistic"
        child={
          <>
            {state.good || state.neutral || state.bad ? (
              <Statistics
                good={state.good}
                neutral={state.neutral}
                bad={state.bad}
                total={totalFeedback}
                positive={positiveFeedback}
              />
            ) : (
              <Notification message="There is no feedback"></Notification>
            )}
          </>
        }
      />
    </>
  );
};

export default App;

// class App extends React.Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };
//   handleIncrement = e => {
//     this.setState(prev => ({ [e.target.name]: (prev[e.target.name] += 1) }));
//   };

//   totalFeedback = () => {
//     return this.state.good + this.state.neutral + this.state.bad;
//   };

//   positiveFeedback = () => {
//     if (this.totalFeedback()) {
//       return Math.round(
//         ((this.state.good + this.state.neutral) * 100) / this.totalFeedback()
//       );
//     }
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     return (
//       <>
//         <SectionTitle
//           title="Please leave your feedback"
//           child={
//             <Feedback
//               options={Object.keys(this.state)}
//               increment={this.handleIncrement}
//             />
//           }
//         />
//         <SectionTitle
//           title="Statistic"
//           child={
//             <>
//               {good || neutral || bad ? (
//                 <Statistics
//                   good={good}
//                   neutral={neutral}
//                   bad={bad}
//                   total={this.totalFeedback}
//                   positive={this.positiveFeedback}
//                 />
//               ) : (
//                 <Notification message="There is no feedback"></Notification>
//               )}
//             </>
//           }
//         />
//       </>
//     );
//   }
// }
