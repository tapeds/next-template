import { IconType } from 'react-icons';

enum ButtonVariant {
  'primary',
  'warning',
  'danger',
  'success',
  'outline',
}

enum ButtonSize {
  'sm',
  'md',
  'lg',
}

export type ButtonProps = {
  isLoading?: boolean;
  size?: keyof typeof ButtonSize;
  variant?: keyof typeof ButtonVariant;
  icon?: IconType;
  iconClassName?: string;
  rightIcon?: React.ElementType & IconType;
  rightIconClassName?: string;
  textClassName?: string;
  isShadow?: boolean;
} & React.ComponentPropsWithRef<'button'>;
