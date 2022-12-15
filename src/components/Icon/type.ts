const iconList = [
    "logo-sm-light"
] as const;

export type IconTypeEnum = typeof iconList[number];

interface IconType {
  name: IconTypeEnum;
  type: string;
}

export type { IconType };
