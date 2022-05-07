import { ArrowLeft } from "phosphor-react";
import { CloseButton } from "./CloseButton";

interface HeaderProps {
  title?: string;
  image?: string;
  alt?: string;
  backButton?: () => void;
}

export function Header({ title, image, alt, backButton }: HeaderProps) {
  return (
    <header>
      <button
        type="button"
        className="absolute top-5 left-5 text-zinc-400 hover:text-zinc-100"
        onClick={backButton}
      >
        <ArrowLeft weight="bold" className="w-4 h-4" />
      </button>

      <span className="text-xl leading-6 flex items-center gap-2">
        {image && <img src={image} alt={alt} className="w-6 h-6" />}
        {title}
      </span>

      <CloseButton />
    </header>
  );
}
