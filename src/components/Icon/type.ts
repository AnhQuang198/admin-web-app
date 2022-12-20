const iconList = [
    "logo-sm-light",
    "error-img",
    "authentication-bg"
] as const;

export type IconTypeEnum = typeof iconList[number];

interface IconType {
  name: IconTypeEnum;
  type: string;
}

export type { IconType };
