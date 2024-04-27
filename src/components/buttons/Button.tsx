import * as React from 'react';
import { ImSpinner2 } from 'react-icons/im';

import clsxm from '@/lib/clsxm';
import { ButtonProps } from '@/types/button';

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      disabled: buttonDisabled,
      isLoading,
      size = 'md',
      variant = 'primary',
      icon: Icon,
      rightIcon: RightIcon,
      iconClassName,
      rightIconClassName,
      textClassName,
      isShadow,
      ...rest
    },
    ref,
  ) => {
    const disabled = isLoading || buttonDisabled;

    return (
      <button
        ref={ref}
        type='button'
        disabled={disabled}
        style={{
          boxShadow: isShadow ? '3px 3px #959698' : 'none',
        }}
        className={clsxm(
          'button inline-flex items-center justify-center rounded-2xl',
          'focus-visible:ring-primary-info-main focus:outline-none focus-visible:ring',
          'border-typo-outline-2 border-2',
          'text-typo-primary font-medium',
          //#region  //*=========== Size ===========
          [
            size === 'lg' && ['min-h-[51px] px-8 py-3 text-lg'],
            size === 'md' && ['min-h-[48px] px-5 py-2 text-base'],
            size === 'sm' && ['min-h-[32px] px-4 py-1.5 text-sm'],
          ],
          //#endregion  //*======== Size ===========
          //#region  //*=========== Variants ===========
          [
            variant === 'primary' && [
              'bg-primary-info-main text-typo-main',
              'hover:bg-primary-info-hover hover:text-typo-white',
              'active:bg-primary-info-active active:text-typo-main',
            ],
            variant === 'warning' && [
              'bg-warning-main text-typo-main',
              'hover:bg-warning-hover hover:text-typo-white',
              'active:bg-warning-active active:text-typo-main',
            ],
            variant === 'danger' && [
              'bg-danger-main text-typo-main',
              'hover:bg-danger-hover hover:text-typo-white',
              'active:bg-danger-active active:text-typo-main',
            ],
            variant === 'success' && [
              'bg-success-main text-typo-main',
              'hover:bg-success-hover hover:text-typo-white',
              'active:bg-success-active active:text-typo-main',
            ],
            variant === 'outline' && [
              'border-typo-outline-1 text-typo-main border-2 bg-transparent',
              'disabled:border-typo-outline-2 disabled:text-typo-inline',
            ],
          ],
          'disabled:cursor-not-allowed',
          isLoading &&
            'relative text-transparent transition-none hover:text-transparent disabled:cursor-wait',
          className,
        )}
        {...rest}
      >
        {isLoading && (
          <div
            className={clsxm(
              'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
              [
                ['primary-info', 'danger', 'warning', 'success'].includes(
                  variant,
                ) && 'text-typo-white',
              ],
            )}
          >
            <ImSpinner2 className='animate-spin' />
          </div>
        )}
        {Icon && (
          <div className='mr-2'>
            <Icon className={clsxm('text-2xl font-semibold', iconClassName)} />
          </div>
        )}
        <span className={textClassName}>{children}</span>
        {RightIcon && (
          <div className='ml-2'>
            <RightIcon
              className={clsxm('text-2xl font-semibold', rightIconClassName)}
            />
          </div>
        )}
      </button>
    );
  },
);

export default Button;
