interface QuestionProps {
  question: string;
  answer: string;
  className?: string;
}

export default function QuestionBox({
  question,
  answer,
  className,
}: QuestionProps) {
  return (
    <div className={`text-white w-full ${className}`}>
      <h2 className="font-semibold mb-4 text-xl">{question}</h2>
      <p className="text-lg text-justify font-medium text-gray">{answer}</p>
    </div>
  );
}
