import { cn } from "@/lib/utils";
import Image from "next/image";

type THomeCardProps = {
  imgUrl: string;
  header: string;
  subHeader: string;
  bgColor: string;
  clickHandler: () => void;
};

const HomeCard = ({ imgUrl, header, subHeader, bgColor, clickHandler }: THomeCardProps) => {
  return (
    <div
      className={cn(
        "px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-[14px] cursor-pointer",
        bgColor
      )}
      onClick={clickHandler}
    >
      <div className="flex-center glassmorphism size-12 rounded-[10px]">
        <Image src={imgUrl} alt="meeting" width={27} height={27} />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">{header}</h1>
        <p className="text-lg font-normal">{subHeader}</p>
      </div>
    </div>
  );
};

export default HomeCard;
