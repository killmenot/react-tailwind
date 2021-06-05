import clsx from 'clsx';
import { AvatarDefaultIcon} from './avatar-default-icon'
import { FunctionComponent, HTMLAttributes, ReactNode } from 'react';

export enum AvatarShapeEnum {
  SQUARE = 'square',
  CIRCLE = 'circle',
}

export enum AvatarSizeEnum {
  SMALLEST = 'smallest',
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
  HUGE = 'huge',
}

export interface AvatarInterface extends HTMLAttributes<HTMLDivElement> {
  /** The shape of the avatar */
  shape?: Lowercase<keyof typeof AvatarShapeEnum>;
  /** The size of the avatar */
  size?: Lowercase<keyof typeof AvatarSizeEnum>;
  /** The src attribute for the img element */
  src?: string;
  /** The alt attribute for the ing element */
  altName?: string;
  /** The background color of the avatar */
  bgColor?: string;
  /** If true, a border will be shown */
  border?: boolean;
  /** If true, an accent border will be shown */
  accent?: boolean;
  /** If true, a badge will be shown */
  badge?: boolean;
  /** The badge color */
  badgeColor?: string;
  /** If true, the hover effect will be active */
  action?: boolean;
  /** Used to render icon or text elements inside the Avatar if src is not set. This can be an element, or just a string */
  children?: ReactNode;
}

/** Avatars used in everything from tables to dialog menus */
export const Avatar: FunctionComponent<AvatarInterface> = ({
  shape = AvatarShapeEnum.CIRCLE,
  size = AvatarSizeEnum.MEDIUM,
  src,
  altName,
  bgColor,
  border,
  accent,
  badge,
  badgeColor,
  action,
  className,
  children: _children,
  ...props
}) => {
  const classes = {
    wrapper: clsx(
      //'relative z-0 flex justify-center items-center',
      {
        'w-6.5 h-6.5': accent && size === AvatarSizeEnum.SMALLEST,
        'w-8.5 h-8.5': accent && size === AvatarSizeEnum.SMALL,
        'w-10.5 h-10.5': accent && size === AvatarSizeEnum.MEDIUM,
        'w-13 h-13': accent && size === AvatarSizeEnum.LARGE,
        'w-15 h-15': accent && size === AvatarSizeEnum.HUGE,
      },
      className ?? 'm-2',
    ),
    gradient: clsx('absolute inset-0 bg-gradient-to-br from-purple-800 via-pink-500 to-pink-200', {
      'rounded-full': accent && shape === AvatarShapeEnum.CIRCLE,
      'rounded-5px': accent && shape === AvatarShapeEnum.SQUARE,
      'w-6.5 h-6.5': accent && size === AvatarSizeEnum.SMALLEST,
      'w-8.5 h-8.5': accent && size === AvatarSizeEnum.SMALL,
      'w-10.5 h-10.5': accent && size === AvatarSizeEnum.MEDIUM,
      'w-13 h-13': accent && size === AvatarSizeEnum.LARGE,
      'w-15 h-15': accent && size === AvatarSizeEnum.HUGE,
    }),
    avatar: clsx(
      'z-10 text-white overflow-hidden flex flex-shrink justify-center items-center',
      {
        'border-red-500 border-2': border || accent,
        'hover:shadow-avatar cursor-pointer': action,
        'rounded-full': shape === AvatarShapeEnum.CIRCLE,
        'rounded-5px': shape === AvatarShapeEnum.SQUARE && !accent,
        rounded: shape === AvatarShapeEnum.SQUARE && accent,
        'w-5 h-5 text-tiny': size === AvatarSizeEnum.SMALLEST,
        'w-7 h-7 text-xs': size === AvatarSizeEnum.SMALL,
        'w-9 h-9 text-sm': size === AvatarSizeEnum.MEDIUM,
        'w-12 h-12 text-sm': size === AvatarSizeEnum.LARGE,
        'w-14 h-14 text-base': size === AvatarSizeEnum.HUGE,
      },
      bgColor ?? 'bg-primary',
    ),
    badge: clsx(
      'absolute z-20 box-content rounded-full border-2 border-white transform translate-x-1/2 -translate-y-1/2',
      {
        'w-1.5 h-1.5': size === AvatarSizeEnum.SMALLEST,
        'w-2 h-2': size === AvatarSizeEnum.SMALL || size === AvatarSizeEnum.MEDIUM || size === AvatarSizeEnum.LARGE,
        'w-2.5 h-2.5': size === AvatarSizeEnum.HUGE,
      },
      {
        'top-0 right-0': shape === AvatarShapeEnum.SQUARE,
        'top-0.5 right-0.5 mt-px mr-px': shape === AvatarShapeEnum.CIRCLE && size === AvatarSizeEnum.SMALLEST,
        'top-1 right-1': shape === AvatarShapeEnum.CIRCLE && size === AvatarSizeEnum.SMALL,
        'top-1 right-1 mt-0.5 mr-0.5': shape === AvatarShapeEnum.CIRCLE && size === AvatarSizeEnum.MEDIUM,
        'top-1.5 right-1.5 mt-px mr-px': shape === AvatarShapeEnum.CIRCLE && size === AvatarSizeEnum.LARGE,
        'top-2 right-2': shape === AvatarShapeEnum.CIRCLE && size === AvatarSizeEnum.HUGE,
      },
      badgeColor ?? 'bg-success-dark',
    ),
    noImageWidth: clsx({
      'w-5': size === AvatarSizeEnum.SMALLEST,
      'w-7': size === AvatarSizeEnum.SMALL,
      'w-9': size === AvatarSizeEnum.MEDIUM,
      'w-12': size === AvatarSizeEnum.LARGE,
      'w-14': size === AvatarSizeEnum.HUGE,
    }),
    noImageHeight: clsx({
      'h-5': size === AvatarSizeEnum.SMALLEST,
      'h-7': size === AvatarSizeEnum.SMALL,
      'h-9': size === AvatarSizeEnum.MEDIUM,
      'h-12': size === AvatarSizeEnum.LARGE,
      'h-14': size === AvatarSizeEnum.HUGE,
    }),
  };

  const image = src ? <img src={src} alt={altName ?? 'Avatar Image'} /> : null;
  const children = !src && _children ? _children : null;
  const defaultImage = !src && !_children ? <AvatarDefaultIcon /> : null;
  {/*<div className={classes.wrapper} {...props}>*/}
  return (
    
    <>
      <div className={classes.avatar}>
        {image}
        {children}
        {defaultImage}
      </div>
      {accent && <div role="presentation" className={classes.gradient} />}
      {badge && <div role="presentation" className={classes.badge} />}
    </>
  );
  {/*</div>*/}
};
