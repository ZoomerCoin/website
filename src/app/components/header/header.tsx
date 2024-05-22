import styles from './header.module.scss';
import { ReactComponent as BarsIcon } from './assets/bars.svg';
import { ReactComponent as CrossIcon } from './assets/cross.svg';
import { ReactComponent as TelegramIcon } from './assets/telegram.svg';
import { ReactComponent as XIcon } from './assets/x.svg';
import { ReactComponent as DiscordIcon } from './assets/discord.svg';
import { Button } from '../button/button';
import { useNavigation } from '../../hooks/use-navigation';
import { useMediaQuery } from 'react-responsive';
import cn from 'classnames';
import { useState } from 'react';
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from 'react-scroll';

export interface HeaderProps {
  className?: string;
}

export function Header(props: HeaderProps) {
  const { className } = props;
  const { goToTelegram, goToX, goToDiscord, goToBuyNow } = useNavigation();
  const [isOpen, setIsOpen] = useState(false);

  const isDesktop = useMediaQuery({
    query: '(min-width: 1280px)',
  });

  function menu() {
    return (
      <div className={styles['menu']}>
        <Link to="home" smooth={true} className={styles['menu-item']}>
          Home
        </Link>
        <Link to="about" smooth={true} className={styles['menu-item']}>
          About
        </Link>
        <Link to="tokenomics" smooth={true} className={styles['menu-item']}>
          Tokenomics
        </Link>
        <Link to="roadmap" smooth={true} className={styles['menu-item']}>
          Roadmap
        </Link>
      </div>
    );
  }

  function socialLinks() {
    return (
      <div className={styles['social-links']}>
        <div className={styles['social-link']} onClick={goToTelegram}>
          <TelegramIcon />
        </div>
        <div className={styles['social-link']} onClick={goToX}>
          <XIcon />
        </div>
        <div className={styles['social-link']} onClick={goToDiscord}>
          <DiscordIcon />
        </div>
      </div>
    );
  }

  function callToAction() {
    return (
      <div className={styles['cta-container']}>
        <Button className={styles['cta']} to="home">
          Buy now
        </Button>
        <div className={styles['dropdown']}>
          <a
            href="https://app.uniswap.org/#/tokens/ethereum/0x0d505c03d30e65f6e9b4ef88855a47a89e4b7676"
            className={styles['dropdown-item']}
            target="_blank"
          >
            buy On ETH
          </a>
          <a
            href="https://jup.ag/swap/SOL-ZOOMER_nBZEcHSG771mRbi4y2sSgKjfDUH8jsM2Eo5fNcASLeU"
            className={styles['dropdown-item']}
            target="_blank"
          >
            buy On SOL
          </a>
          <a
            href="https://aerodrome.finance/swap?from=0x940181a94a35a4569e4529a3cdfb74e38fd98631&to=0xd1db4851bcf5b41442caa32025ce0afe6b8eabc2"
            className={styles['dropdown-item']}
            target="_blank"
          >
            buy On BASE
          </a>
        </div>
      </div>
    );
  }
  return (
    <div className={cn(styles['container'], className)}>
      <div className={styles['logo']}>Zoomer.money</div>
      {!isDesktop && (
        <div
          className={styles['menu-toggle']}
          onClick={() => setIsOpen(() => !isOpen)}
        >
          <BarsIcon />
        </div>
      )}
      {!isDesktop && (
        <div
          className={cn(styles['mobile-content'], { [styles['open']]: isOpen })}
        >
          <div className={styles['menu-header']}>
            <div className={styles['logo']}>Zoomer.money</div>
            <div
              className={styles['menu-toggle']}
              onClick={() => setIsOpen(() => !isOpen)}
            >
              <CrossIcon />
            </div>
          </div>
          {menu()}
          {callToAction()}
          {socialLinks()}
        </div>
      )}
      {isDesktop && (
        <div className={styles['desktop-content']}>
          {menu()}
          {socialLinks()}
          {callToAction()}
        </div>
      )}
    </div>
  );
}
