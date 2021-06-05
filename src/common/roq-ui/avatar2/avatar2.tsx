import clsx from 'clsx';
import { FunctionComponent, HTMLAttributes, ReactNode } from 'react';
//import { useTheme } from 'next-themes'

export enum Avatar2SizeEnum {
  XSMALL = 'xsmall',
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
  XLARGE = 'xlarge',
}

export interface Avatar2Interface extends HTMLAttributes<HTMLDivElement> {
  /** The size of the avatar */
  size?: Lowercase<keyof typeof Avatar2SizeEnum>;
  /** If true, a border will be shown */
  border?: boolean;

  /** If true, an accent border will be shown */
  accent?: boolean;

  component?: any;
  classes?: any;
}

/** Avatars used in everything from tables to dialog menus */
export const Avatar2: FunctionComponent<Avatar2Interface> = ({
  size = Avatar2SizeEnum.MEDIUM,
  border,
  accent,
  component = 'div',
  className,
  classes: inClasses,
  children,
  ...props
}) => {
  // const { theme } = useTheme()

  const Component = component
  const classes = {
    avatar: clsx(
      'avatar',
      {
        'avatar-xs': size === Avatar2SizeEnum.XSMALL,
        'avatar-sm': size === Avatar2SizeEnum.SMALL,
        'avatar-lg': size === Avatar2SizeEnum.LARGE,
        'avatar-xl': size === Avatar2SizeEnum.XLARGE,
        [`avatar-border ${inClasses && inClasses.border}`]: border,
        [`avatar-accent dark:avatar-accent-dark`]: accent,
      },
    ),
  };

  return (
    <Component className={clsx(classes.avatar, className)}>
      {children}
    </Component>
  );
};
