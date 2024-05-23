import { useEffect, useState } from 'react';
import QuestionContainer from './components/QuestionContainer';

function App() {
  const [questionList, setQuestionList] = useState("");
  
  useEffect(() => {
    fetch("https://the-trivia-api.com/v2/questions")
      .then(res => res.json())
      .then(data => {
        setQuestionList(data)
        console.log(data.map(question => question.category))
      })
      .catch(e => console.log(e))
  }, []);

  if (!questionList) {
    return <div className="flex items-center justify-center min-h-screen">Loading Questions...</div>
  }

  return (
    <div className="flex items-center justify-center min-h-screen max-w-xlg">
      <QuestionContainer questions={questionList} />
    </div>
  )
}

export default App
