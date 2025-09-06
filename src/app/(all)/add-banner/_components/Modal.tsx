import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image";
import React from "react";
interface Props {
  ref: React.RefObject<HTMLDivElement | null>;
  icon: StaticImageData;
  text: string;
  setState: (value: boolean) => void;
}

const Modal: React.FC<Props> = ({ ref, icon, text, setState }) => {
  const t = useTranslations();
  return (
    <motion.div
      key={text}
      ref={ref}
      className="p-8 rounded-xl bg-white flex flex-col items-center gap-10 grow max-w-[477px]"
      initial={{ y: 20 }}
      animate={{
        y: [0, 10, 0, 5, 0],
      }}
      exit={{ y: 20, transition: { duration: 0.3 } }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <div className="w-[87px] h-[87px] relative">
        <Image src={icon} alt="status icon" fill loading="lazy" sizes="87px" />
      </div>
      <h4 className="text-center text-xl font-bold">{text}</h4>
      <button
        type="button"
        className="h-[50px] rounded-lg w-full flex-c text-white font-bold text-sm bg-main"
        onClick={() => setState(false)}
      >
        {t("tracking")}
      </button>
    </motion.div>
  );
};

export default Modal;
