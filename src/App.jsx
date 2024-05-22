import { useEffect, useState } from 'react';
import QuestionList from './components/QuestionList';

function App() {
  const [questionList, setQuestionList] = useState("");
  
  useEffect(() => {
    fetch("https://the-trivia-api.com/v2/questions")
      .then(res => res.json())
      .then(data => setQuestionList(data))
      .catch(e => console.log(e))
  }, []);

  if (!questionList) {
    return <div className="flex items-center justify-center min-h-screen">Loading Questions...</div>
  }

  return (
    <QuestionList questions={questionList} />
  )
}

export default App
