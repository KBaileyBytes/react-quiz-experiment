import Question from "./Question";
import TotalProgressBar from "./TotalProgressBar";

export default function QuestionContainer({ ...props }) {
  return (
    <section {...props}>
      <TotalProgressBar />
      <Question />
    </section>
  );
}
