import styles from './slider.module.scss';
import cn from 'classnames';

export interface SliderProps {
  className?: string;
}

export function Slider(props: SliderProps) {
  const { className } = props;

  return <div className={cn(styles['container'], className)}></div>;
}
