interface ConfigOptionsProps {
  name: string;
  description: string;
  textButton: string;
  isDestructive?: boolean;
}

export default function ConfigOptions({
  name,
  description,
  textButton,
  isDestructive = false,
}: ConfigOptionsProps) {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-800 rounded-md bg-secondary w-full">
      <div>
        <p className="text-white font-semibold">{name}</p>
        <p className="text-neutral-500 font-medium text-sm">{description}</p>
      </div>
      <button
        className={`px-3.5 py-1.5 text-white font-semibold text-sm rounded-md 
          ${
            isDestructive
              ? "bg-red-600 hover:bg-red-700 w-24"
              : "bg-purple-600 hover:bg-purple-700"
          }`}
      >
        {textButton}
      </button>
    </div>
  );
}
