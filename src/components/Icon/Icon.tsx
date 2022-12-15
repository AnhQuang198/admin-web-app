import React, { useMemo } from "react";
import { IconType } from "./type";

function Icon({ name, type }: IconType) {
  const icon = useMemo(() => {
    try {
      return require(`../../assets/images/${name}.${type}`);
    } catch (error) {
      return "";
    }
  }, [name]);

  return (
    <React.Fragment>
      <img src={icon} />
    </React.Fragment>
  );
}

export default Icon;
