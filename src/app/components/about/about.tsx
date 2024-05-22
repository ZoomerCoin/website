import styles from './about.module.scss';
import { Button } from '../button/button';
import { useNavigation } from '../../hooks/use-navigation';
import motorcycleCharacterSrc from './assets/motorcycle-character.png';
import video1 from './assets/video1.png';
import video2 from './assets/video2.png';
import video3 from './assets/video3.png';
import slide1 from '../roadmap/assets/slide1.png';
import cn from 'classnames';
import Slider from 'react-slick';
import { Ticker } from '../ticker/ticker';

export interface AboutProps {
  className?: string;
}

export function About(props: AboutProps) {
  const { className } = props;
  const { goToBuyNow } = useNavigation();

  const settings = {
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3, // Default to show 3 slides for desktop
    slidesToScroll: 1,
    dots: true,
    centerMode: true,
    centerPadding: '0px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
    ],
  };

  const carousel = [
    { imgSrc: video1, videoUrl: 'https://youtube.com/link_to_video' },
    {
      imgSrc: video2,
      videoUrl: 'https://example.com/direct_link_to_video2.mp4',
    },
    { imgSrc: video3, videoUrl: 'https://youtube.com/link_to_video' },
  ];

  return (
    <div className={cn(styles['container'], className)}>
      <div className={cn(styles['row'], className)}>
        <div className={styles['column-content']}>
          <div className={styles['banner']}>ZOOMER BE BUSSIN!</div>
          <div className={styles['title']}>About $ZOOMER</div>
          <div className={styles['content']}>
            <p>
              Zoomer is tired of watching everyone play hot potato with the
              endless derivative
              Shiba&shy;Cum&shy;GMElon&shy;Kishu&shy;Turbo&shy;Ass&shy;Floki&shy;Moon
              Inu coins. The Inu’s have had their day. It’s time for the most
              recognizable meme in the world to take his reign as king of the
              memes.
            </p>
            <p>
              Zoomer is here to make memecoins great again. Launched stealth
              with no presale, zero taxes, LP burnt and contract renounced,
              $ZOOMER is a coin for the people, forever. Fueled by pure memetic
              power, let $ZOOMER show you the way.
            </p>
          </div>
          <Button className={styles['cta-button']} to="home">
            Buy now
          </Button>
        </div>
        <div className={styles['column-image']}>
          <img
            className={styles['character']}
            src={motorcycleCharacterSrc}
            alt=""
          />
        </div>
      </div>
      <Slider {...settings} className="carousel-container">
        {carousel.map((item, i) => (
          <a
            key={i}
            href={item.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="slide-container">
              <img src={item.imgSrc} />
            </div>
          </a>
        ))}
      </Slider>
      <Ticker
        className={styles['ticker']}
        reverseDirection={true}
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
