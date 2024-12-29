import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const AvatarList = [
  "https://github.com/shadcn.png",
  "https://ui.shadcn.com/avatars/01.png",
  "https://ui.shadcn.com/avatars/02.png",
  "https://ui.shadcn.com/avatars/03.png",
  "https://ui.shadcn.com/avatars/04.png",
  "https://ui.shadcn.com/avatars/05.png",
];

export function getAvatar(index: number) {
  return AvatarList[index];
}
