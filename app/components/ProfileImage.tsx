import SvgNewPhoto from "~/icons/newPhoto";

interface ProfileImageProps {
  imageUrl: string;
}

export default function ProfileImage({ imageUrl }: ProfileImageProps) {
  return (
    <div className="flex flex-col items-center bg-gray-900 pl-6 px-2 rounded-lg">
      <div className="relative">
        <div className="rounded-full overflow-hidden w-56 h-56">
          <img
            src={imageUrl}
            alt="Profile"
            className="object-cover w-full h-full"
          />
        </div>
        <button className="absolute w-full bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-20 px-4 py-2 flex bg-secondary text-white text-sm rounded-md border border-purple-600 hover:bg-gray-700 hover:border-purple-700">
          <SvgNewPhoto />
          <p className="ml-1">NOVA FOTO DE PERFIL</p>
        </button>
      </div>
    </div>
  );
}
