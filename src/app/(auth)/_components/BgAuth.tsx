
import { auth_bg } from "@/assets";
import { cn } from "@/utils/cn";
import Image from "next/image";
interface Props {
  children: React.ReactNode;
  className?: string;
}

const BgAuth = ({ children, className }: Props) => {
  return (
    <section className="relative min-h-screen flex-c px-5">
      <div className="absolute w-full h-full top-0 start-0 z-[1]">
        <div className="relative w-full h-full">
          <Image
            src={auth_bg}
            alt="bg-image"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>
      <div className=" absolute z-[2] w-full h-full top-0 start-0 bg-[#00000052]" />
      <div className={cn("container relative z-10", className)}>{children}</div>
    </section>
  );
};

export default BgAuth;
