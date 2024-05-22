import styles from './ticker.module.scss';
import cn from 'classnames';
import Marquee from 'react-fast-marquee';

export interface TickerProps {
  elements: string[];
  className?: string;
  reverseDirection?: boolean;
}

export function Ticker(props: TickerProps) {
  const { elements, className, reverseDirection = false } = props;

  return (
    <div className={cn(styles['container'], className)}>
      <Marquee
        className={styles['marquee']}
        direction={reverseDirection ? 'right' : 'left'}
      >
        {elements.map((element, index) => (
          <div key={index} className={styles['element']}>
            <div className={styles['content']}>{element}</div>
            <div className={styles['icon']}>$Z</div>
          </div>
        ))}
      </Marquee>
    </div>
  );
}
