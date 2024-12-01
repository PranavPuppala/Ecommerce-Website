import Image from "next/image";

export const AdPanel = () => {
  return (
    <div className="mx-32 my-8 flex flex-row gap-12 justify-between">
      <Image
        src={
          "https://pisces.bbystatic.com/image2/BestBuy_US/dam/1926951-ghp-ipad-7b789278-8013-4852-ad3e-72dfea92345f.jpg;maxHeight=960;maxWidth=960?format=webp"
        }
        alt={"Product"}
        className="object-contain w-128 h-128"
        width={500}
        height={500}
      />
      <Image
        src={
          "https://pisces.bbystatic.com/image2/BestBuy_US/dam/1926951-ghp-tv-26900b9c-52ed-4945-9b8c-4423a9110435.jpg;maxHeight=960;maxWidth=960?format=webp"
        }
        alt={"Product"}
        className="object-contain w-128 h-128"
        width={500}
        height={500}
      />
      <Image
        src={
          "https://pisces.bbystatic.com/image2/BestBuy_US/dam/1926951-ghp-ipad-7b789278-8013-4852-ad3e-72dfea92345f.jpg;maxHeight=960;maxWidth=960?format=webp"
        }
        alt={"Product"}
        className="object-contain w-128 h-128"
        width={500}
        height={500}
      />
    </div>
  );
};
