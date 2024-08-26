export default function Loading() {
  return (
    <div className="fixed w-screen h-screen flex items-center justify-center bg-gray/30 z-50">
      <div className="border-[8px] border-t-[8px] border-gray-300 border-t-purple-600 rounded-[50%] w-[80px] h-[80px] animate-spin-slow" />
    </div>
  );
}
