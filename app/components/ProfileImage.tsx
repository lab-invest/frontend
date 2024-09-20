import SvgNewPhoto from "~/icons/newPhoto";

interface ProfileImageProps {
  imageUrl: string;
}

export default function ProfileImage({ imageUrl }: ProfileImageProps) {
  return (
    <div className="flex flex-col items-center bg-gray-900 p-6 rounded-lg h-fit">
      <div className="relative">
        <div className="rounded-full overflow-hidden w-56 h-56">
          <img src={imageUrl} alt="Profile" className="object-cover w-full h-full" />
        </div>
      </div>
      <button className="-mt-8 z-20 px-4 py-2 flex bg-secondary text-white text-sm font-medium rounded-md border border-purple-600 hover:bg-gray-700 hover:border-purple-700">
        <SvgNewPhoto />
        <p className="ml-1">NOVA FOTO DE PERFIL</p>
      </button>
    </div>
  );
}
