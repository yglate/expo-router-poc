import type { ReactElement } from "react";
import { useEffect, useState } from "react";
import { StyleProp, ViewStyle } from "react-native";
import type { SvgProps } from "react-native-svg";

import getAssetsContext from "@/utils/getAssetsContext";

export type IconName = string; // Any icon name from assets/icons/

interface IconProps extends Omit<SvgProps, "width" | "height"> {
  name: IconName;
  size?: number;
  color?: string;
  style?: StyleProp<ViewStyle>;
}

const icons = getAssetsContext("icons");
const EXTENSION = "svg";

/**
 * Dynamic Icon component - loads SVG icons on demand using require.context
 * Automatically discovers all .svg files in assets/icons/
 *
 * @example
 * ```tsx
 * <Icon name="home" size={24} color="#3b82f6" />
 * ```
 */
export const Icon = ({
  name,
  size = 24,
  color = "transparent",
  style,
  ...props
}: IconProps): ReactElement | null => {
  const [IconComponent, setIconComponent] = useState<React.FC<SvgProps> | null>(
    null,
  );

  useEffect(() => {
    if (!icons) {
      console.warn("Icons context not available");
      return;
    }

    try {
      const iconModule = icons(`./${name}.${EXTENSION}`);
      setIconComponent(() => iconModule.default || iconModule);
    } catch (error) {
      console.warn(`Couldn't load the icon: ${name}.${EXTENSION}`, error);
      setIconComponent(null);
    }
  }, [name]);

  if (!IconComponent) {
    return null;
  }

  return <IconComponent width={size} height={size} style={style} {...props} />;
};

export default Icon;
