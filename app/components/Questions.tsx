interface QuestionProps {
    question: string;
    answer: string;
  }
  
  export default function Question({ question, answer }: QuestionProps) {
    return (
      <div className="bg-gray-900 mt-0 text-white p-4 sm:p-6 md:p-8 lg:p-6 rounded-md max-w-full">
        <h2 className=" font-semibold mb-2 sm:mb-4 sm:text-[1rem] lg:mb-4 lg:text-[1.375rem]">
          {question}
        </h2>
        <p className="lg:text-[1rem] font-medium text-gray">
          {answer}
        </p>
      </div>
    );
  }