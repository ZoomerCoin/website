import styles from './tokens-swap.module.scss';
import { useState } from 'react';
import { Chain } from './chain.enum';
import { chains } from './chains';
import _ from 'lodash';
import { ReactComponent as SwitchArrows } from './assets/switch-arrows.svg';
import { Button } from '../button/button';
import { useNavigation } from '../../hooks/use-navigation';
import cn from 'classnames';
import { Widget, WidgetConfig } from '@rango-dev/widget-embedded';
import { useEffect } from 'react';

export interface TokensSwapProps {
  className?: string;
}

export function TokensSwap(props: TokensSwapProps) {
  const { className } = props;

  const [selectedChainId, setSelectedChainId] = useState(Chain.Ethereum);

  const getConfig = () => {
    if (selectedChainId === Chain.Base) {
      return {
        amount: 1000,
        from: {
          blockchain: 'BASE',
          token: {
            blockchain: 'BASE',
            address: '0x940181a94a35a4569e4529a3cdfb74e38fd98631',
            symbol: 'AERO',
          },
        },
        to: {
          blockchain: 'BASE',
          token: {
            blockchain: 'BASE',
            address: '0xd1db4851bcf5b41442caa32025ce0afe6b8eabc2',
            symbol: 'ZOOMER',
          },
          blockchains: ['BASE'],
        },
        theme: {
          colors: {
            dark: {
              primary: '#4c228a',
              secondary: '#6D49A6',
              neutral: '#2c284b',
              info: '#6B3CB1',
              foreground: '#fcf7ff',
              background: '#120f29ff',
            },
            light: {
              primary: '#4c228a',
              secondary: '#51278F',
              neutral: '#9793AD',
              info: '#744AB2',
              foreground: '#120f29ff',
              background: '#fcf7ff',
            },
          },
        },
        apiKey: 'c6381a79-2817-4602-83bf-6a641a409e32',
        walletConnectProjectId: 'e24844c5deb5193c1c14840a7af6a40b',
        title: 'Swap AERO to ZOOMER On BASE',
      };
    }
    // Default to Ethereum configuration
    return {
      amount: 1000,
      from: {
        blockchain: 'ETH',
        token: {
          blockchain: 'ETH',
          address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
          symbol: 'USDT',
        },
      },
      to: {
        blockchain: 'ETH',
        token: {
          blockchain: 'ETH',
          address: '0x0d505c03d30e65f6e9b4ef88855a47a89e4b7676',
          symbol: 'ZOOMER',
        },
        blockchains: ['ETH'],
      },
      theme: {
        colors: {
          dark: {
            primary: '#4c228a',
            secondary: '#6D49A6',
            neutral: '#2c284b',
            info: '#6B3CB1',
            foreground: '#fcf7ff',
            background: '#120f29ff',
          },
          light: {
            primary: '#4c228a',
            secondary: '#51278F',
            neutral: '#9793AD',
            info: '#744AB2',
            foreground: '#120f29ff',
            background: '#fcf7ff',
          },
        },
      },
      apiKey: 'c6381a79-2817-4602-83bf-6a641a409e32',
      walletConnectProjectId: 'e24844c5deb5193c1c14840a7af6a40b',
      title: 'Swap USDT to ZOOMER On ETH',
    };
  };

  const config = getConfig();

  useEffect(() => {
    if (selectedChainId === Chain.Solana) {
      const scriptId = 'jupiter-script';
      if (!document.getElementById(scriptId)) {
        const script = document.createElement('script');
        script.id = scriptId;
        script.src = 'https://terminal.jup.ag/main-v2.js';
        script.async = true;
        script.onload = () => {
          if (document.getElementById('integrated-terminal')) {
            // @ts-ignore
            window.Jupiter.init({
              displayMode: 'integrated',
              integratedTargetId: 'integrated-terminal',
              endpoint:
                'https://hardworking-fragrant-replica.solana-mainnet.quiknode.pro/5f783f9053aa7cf67cae238855896c9f0ca26f76/',
              strictTokenList: false,
              defaultExplorer: 'SolanaFM',
              formProps: {
                initialAmount: '888888880000',
                initialInputMint: 'So11111111111111111111111111111111111111112',
                initialOutputMint:
                  'nBZEcHSG771mRbi4y2sSgKjfDUH8jsM2Eo5fNcASLeU',
              },
            });
          }
        };
        document.head.appendChild(script);
      } else if (document.getElementById('integrated-terminal')) {
        // @ts-ignore
        window.Jupiter.init({
          displayMode: 'integrated',
          integratedTargetId: 'integrated-terminal',
          endpoint:
            'https://hardworking-fragrant-replica.solana-mainnet.quiknode.pro/5f783f9053aa7cf67cae238855896c9f0ca26f76/',
          strictTokenList: false,
          defaultExplorer: 'SolanaFM',
          formProps: {
            initialAmount: '888888880000',
            initialInputMint: 'So11111111111111111111111111111111111111112',
            initialOutputMint: 'nBZEcHSG771mRbi4y2sSgKjfDUH8jsM2Eo5fNcASLeU',
          },
        });
      }
    }
  }, [selectedChainId]);

  const content = (
    <div className={cn(styles['container'], className)}>
      <div className={styles['chain-picker']}>
        {chains.map((chain) => (
          <div
            key={chain.id}
            className={cn(styles['chain'], {
              [styles['selected']]: chain.id === selectedChainId,
            })}
            onClick={() => setSelectedChainId(chain.id)}
          >
            <div className={styles['chain-img']}>
              <img src={chain.imageSrc} alt="" />
            </div>
            {chain.id === selectedChainId && (
              <div className={styles['chain-label']}>{chain.label}</div>
            )}
          </div>
        ))}
      </div>
      {(selectedChainId === Chain.Ethereum ||
        selectedChainId === Chain.Base) && <Widget config={config} />}
      {selectedChainId === Chain.Solana && (
        <div id="integrated-terminal" className="jupiter-terminal"></div>
      )}
    </div>
  );

  if (selectedChainId === Chain.Base) {
    return (
      <a
        target="_blank"
        href="https://aerodrome.finance/swap?from=0x940181a94a35a4569e4529a3cdfb74e38fd98631&to=0xd1db4851bcf5b41442caa32025ce0afe6b8eabc2"
      >
        {content}
      </a>
    );
  }

  return content;
}
