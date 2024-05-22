import styles from './home.module.scss';
import zoomerSrc from './assets/zoomer.png';
import smokeSrc from './assets/smoke.png';
import cn from 'classnames';
import { Ticker } from '../ticker/ticker';
import { TokensSwap } from '../tokens-swap/tokens-swap';
import { useMediaQuery } from 'react-responsive';

export interface HomeProps {
  className?: string;
}

export function Home(props: HomeProps) {
  const { className } = props;
  const isDesktop = useMediaQuery({
    query: '(min-width: 1280px)',
  });

  return (
    <div className={cn(styles['container'], className)}>
      <div className={styles['top-helper']}>This coin is bussin fr fr</div>
      <div className={styles['content']}>
        <div className={styles['hero-section']}>
          <div className={styles['words']}>
            <div className={styles['word-1']}>$ZOOMER</div>
            <div className={styles['word-2']}>$ZOOMER</div>
            <div className={styles['word-3']}>$ZOOMER</div>
            {!isDesktop && <div className={styles['word-4']}>$ZOOMER</div>}
            {!isDesktop && <div className={styles['word-5']}>$ZOOMER</div>}
          </div>
          <div className={styles['character']}>
            <img src={zoomerSrc} alt="" />
            <img className={styles['smoke']} src={smokeSrc} alt="" />
          </div>
        </div>
        <div>
          <TokensSwap className={styles['tokens-swap']} />
          <div className={styles['bottom-helper']}>
            Onboarding zoomers into brypto one coin at a time
          </div>
        </div>
      </div>
      <Ticker
        className={styles['ticker']}
        elements={[
          'DEV_TAUGHT_SATOSHI_CODING',
          'this slaps fr!',
          'DEV_VIBIN_WITH_MUSK_&KANYE',
          'shheeeeeeshh!',
          'BUY NOOOOW',
        ]}
      />
    </div>
  );
}
