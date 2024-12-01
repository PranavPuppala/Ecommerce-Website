import Image from "next/image";
import { useState } from "react";

export const ImagePanel = ({ imageUrls }: { imageUrls: string[] }) => {
  const [currentImage, setCurrentImage] = useState<string>(imageUrls[0]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-row w-1/3">
      <div className="">
        {imageUrls.slice(0, 4).map((imageUrl, index) => (
          <button
            key={index}
            type="button"
            className="inline-flex items-center justify-center border border-gray-500 h-20 w-20 mb-2 rounded-md"
            onClick={() => {
              setCurrentImage(imageUrl);
            }}
          >
            <div className="h-full w-full flex items-center justify-center rounded-md bg-white overflow-hidden relative">
              {imageUrl ? <Image src={imageUrl} alt="Product" className="object-contain" fill /> : null}
            </div>
          </button>
        ))}
        {imageUrls.length - 4 > 0 ? (
          <button
            type="button"
            className="relative inline-flex items-center justify-center border border-gray-500 h-20 w-20 mb-2 rounded-md"
            onClick={handleToggle}
          >
            <div className="h-full w-full flex items-center justify-center rounded-md bg-white overflow-hidden">
              <div className="m-1">
                <Image
                  src={imageUrls[4]}
                  alt={"More"}
                  className="object-contain w-full h-full"
                  width={500}
                  height={500}
                />
              </div>
              <div className="absolute inset-0 bg-neutral-950 bg-opacity-50 flex flex-col items-center justify-center">
                <span className="text-white text-md font-semibold">+ {imageUrls.length - 4}</span>
                <span className="text-white text-sm">more</span>
              </div>
            </div>
          </button>
        ) : (
          ""
        )}
      </div>
      <div className="mx-36 bg-white flex items-center justify-center w-full h-full">
        <div className="flex items-center justify-center w-[500px] h-[500px] min-w-[300px] min-h-[300px]">
          {currentImage ? (
            <Image
              src={currentImage}
              alt={"Product"}
              className="object-contain w-full h-full"
              width={500}
              height={500}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};
