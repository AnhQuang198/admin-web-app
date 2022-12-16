const iconList = [
    "logo-sm-light",
    "error-img"
] as const;

export type IconTypeEnum = typeof iconList[number];

interface IconType {
  name: IconTypeEnum;
  type: string;
}

export type { IconType };
