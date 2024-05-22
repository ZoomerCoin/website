import { Chain } from './chain.enum';
import ethereumSrc from './assets/ethereum.png';
import solanaSrc from './assets/solana.png';
import baseSrc from './assets/base.png';

export const chains = [
  {
    id: Chain.Ethereum,
    imageSrc: ethereumSrc,
    label: 'Ethereum',
    currencySymbol: 'ETH',
  },
  {
    id: Chain.Solana,
    imageSrc: solanaSrc,
    label: 'Solana',
    currencySymbol: 'SOL',
  },
  {
    id: Chain.Base,
    imageSrc: baseSrc,
    label: 'Base',
    currencySymbol: 'ETH',
  },
];
