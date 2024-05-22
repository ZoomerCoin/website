import styles from './footer.module.scss';
import cn from 'classnames';

export interface FooterProps {
  className?: string;
}

export function Footer(props: FooterProps) {
  const { className } = props;
  const currentYear = new Date().getFullYear();

  return (
    <div className={cn(styles['container'], className)}>
      <div className={styles['logo']}>Zoomer.Money</div>
      <div className={styles['copy']}>
        © {currentYear} by ZOOMER.MONEY. All rights reserved!
      </div>
    </div>
  );
}
