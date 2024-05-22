import styles from './roadmap.module.scss';
import roadmapSrc from './assets/roadmap.png';
import cn from 'classnames';
import { Button } from '../button/button';
import { useNavigation } from '../../hooks/use-navigation';
import { Ticker } from '../ticker/ticker';
import slide1 from './assets/slide1.png';
import slide2 from './assets/slide2.png';
// import slide3 from './assets/slide3.png';
import Slider from 'react-slick';

export interface RoadmapProps {
  className?: string;
}

export function Roadmap(props: RoadmapProps) {
  const { className } = props;
  const { goToBuyNow } = useNavigation();

  const settings = {
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
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
    { imgSrc: slide1, link: 'https://youtube.com/link_to_video' },
    {
      imgSrc: slide2,
      link: 'https://example.com/direct_link_to_video2.mp4',
    },
    { imgSrc: slide2, link: 'https://youtube.com/link_to_video' },
  ];

  return (
    <div className={cn(styles['container'], className)}>
      <div className={cn(styles['row'])}>
        <div className={styles['banner']}>Onboarding Zoomers</div>
        <div className={styles['title']}>Roadmap</div>
      </div>
      <div className={styles['img']}>
        <img src={roadmapSrc} alt="" />
      </div>
      <Slider {...settings} className="carousel-container">
        {carousel.map((item, i) => (
          <a key={i} href={item.link} target="_blank" rel="noopener noreferrer">
            <div className="slide-container">
              <img src={item.imgSrc} />
            </div>
          </a>
        ))}
      </Slider>
      <div className={styles['bottom']}>
        <div className={styles['helper']}>
          Onboarding zoomers into brypto one coin at a time
        </div>
        <Button className={styles['cta-button']} to="home">
          Buy now
        </Button>
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
