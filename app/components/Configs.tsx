interface ConfigsProps {
    name: string;
    description: string;
    isDestructive?: boolean;
  }
  
  export default function Configs({ name, description, isDestructive = false }: ConfigsProps) {
    return (
      <div className="flex justify-between items-center p-4 bg-gray-800 rounded-md bg-secondary">
        <div>
          <p className="text-white font-semibold">{name}</p>
          <p className="text-neutral-500 font-medium text-sm">{description}</p>
        </div>
        <button
          className={`px-3.5 py-1.5 text-white text-sm rounded-md 
          ${isDestructive ? 'bg-red-600 hover:bg-red-700' : 'bg-purple-600 hover:bg-purple-700'}`}
        >
          {isDestructive ? 'Destructive' : 'Continue'}
        </button>
      </div>
    );
  }
  