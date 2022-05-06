import { CloseButton } from "./CloseButton";

interface HeaderProps {
  title: string;
  image?: string;
  alt?: string;
}

export function Header({ title, image, alt }: HeaderProps) {
  return (
    <header>
      <span className="text-xl leading-6 flex items-center gap-2">
        {image && <img src={image} alt={alt} className="w-6 h-6" />}
        {title}
      </span>

      <CloseButton />
    </header>
  );
}
