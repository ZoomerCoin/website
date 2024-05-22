import styles from './tokenomics.module.scss';
import cn from 'classnames';
import { Button } from '../button/button';
import { useNavigation } from '../../hooks/use-navigation';
import tokenomics from './assets/tokenomics.png';

export interface TokenomicsProps {
  className?: string;
}

export function Tokenomics(props: TokenomicsProps) {
  const { className } = props;
  const { goToBuyNow } = useNavigation();

  return (
    <div className={cn(styles['container'], className)}>
      <div className={styles['image-container']}>
        <img src={tokenomics} alt="Tokenomics" />
      </div>
      <div className={styles['info']}>
        <div className={styles['banner']}>Onboarding zoomers</div>
        <div className={styles['title']}>Tokenomics</div>
        <div className={styles['content']}>
          <p>No Taxes, No Bullshit. It’s that simple.</p>
          <p>LP tokens are burnt, and contract ownership is renounced.</p>
        </div>
        <div className={styles['supply']}>
          <div className={styles['label']}>Token Supply</div>
          <div className={styles['value']}>69,000,000,000</div>
        </div>
        <Button className={styles['cta-button']} to="home">
          Buy now
        </Button>
      </div>
    </div>
  );
}
