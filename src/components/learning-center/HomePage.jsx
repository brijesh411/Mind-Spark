import { useState } from 'react';
import QuizScreen from './QuizScreen';
import QuizSelectionScreen from './FrontScreen';
import EndScreen from './EndScreen';

// css
import './HomePage.css';

function HomePage(props) {
  // Your Code Start below.
  const [category, setCategory] = useState('');
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [quizSummary, setQuizSummary] = useState({});

  const [maintenance] = useState(false);

  const calculateBooleanValues = (array = [], key) => {
    return array.reduce((a, b) => (a += b[key] ? 1 : 0), 0);
  };

  const getQuizSummary = (result = []) => {
    if (result.length === 100) {
      setQuizCompleted(true);
      const correctAnswers = calculateBooleanValues(result, 'correct');
      const cheatedAnswers = calculateBooleanValues(result, 'cheated');
      const wrongAnswers = 100 - correctAnswers;

      return setQuizSummary({
        correctAnswers,
        cheatedAnswers,
        wrongAnswers,
        result
      });
    }

    return;
  };

  const redirectHome = () => {
    setQuizCompleted(false);
    setCategory('');
  };

  if (maintenance) return <h1>This Page is under Maintenance</h1>;

  return (
    <>
      <div className="play-details">
        <div className="play-details-body fun-quiz">
          {/* Your Code Starts Here */}
          {!category && !quizCompleted && <QuizSelectionScreen getSelectedCategory={setCategory} />}
          {category && !quizCompleted && (
            <QuizScreen category={category} getQuizSummary={getQuizSummary} />
          )}
          {quizCompleted && <EndScreen quizSummary={quizSummary} redirectHome={redirectHome} />}
          {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default HomePage;