import { CloseButton } from "./CloseButton";

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  return (
    <header>
      <span className="text-xl leading-6">{title}</span>

      <CloseButton />
    </header>
  );
}
