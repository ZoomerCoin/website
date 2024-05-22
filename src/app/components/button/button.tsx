import React from 'react';
import styles from './button.module.scss';
import cn from 'classnames';
import { Link } from 'react-scroll';

export interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  to?: string;
}

export function Button(props: ButtonProps) {
  const { onClick, children, className, to } = props;

  if (to) {
    return (
      <Link
        to={to}
        smooth={true}
        className={cn(styles['container'], className)}
        onClick={onClick}
      >
        {children}
      </Link>
    );
  }

  return (
    <div className={cn(styles['container'], className)} onClick={onClick}>
      {children}
    </div>
  );
}
