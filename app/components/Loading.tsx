export default function Loading() {
  return (
    <div className="fixed p-0 w-screen h-screen flex items-center justify-center bg-gray/30 z-50">
      <div className="w-20 h-20 border-8 border-gray-300 border-t-purple-600 rounded-full animate-spin" />
    </div>
  );
}
