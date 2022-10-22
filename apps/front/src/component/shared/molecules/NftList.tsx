

import { Carousel } from '@mantine/carousel';
import { createStyles, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { NftCard } from '../atoms/card/NftCard';

const useStyles = createStyles((theme) => ({
  card: {
    height: 440,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: 32,
    marginTop: theme.spacing.xs,
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: 'uppercase',
  },
}));

interface CardProps {
  image: string;
  title: string;
  category: string;
}

const data = [
  {
    image: 'string',
    title: 'strom',
    description: 'string',
    stats: [{
    title: 'string',
    value: 'string;'
  }, {
    title: 'string',
    value: 'string;'
  }]},
  {
    image: 'string',
    title: 'strom',
    description: 'string',
    stats: [{
    title: 'string',
    value: 'string;'
  }]},    {
    image: 'string',
    title: 'strom',
    description: 'string',
    stats: [{
    title: 'string',
    value: 'string;'
  }]},    {
    image: 'string',
    title: 'strom',
    description: 'string',
    stats: [{
    title: 'string',
    value: 'string;'
  }]},    {
    image: 'string',
    title: 'strom',
    description: 'string',
    stats: [{
    title: 'string',
    value: 'string;'
  }]},    {
    image: 'string',
    title: 'strom',
    description: 'string',
    stats: {
    title: 'string',
    value: 'string;'
  }},
    {
    image: 'string',
    title: 'strom',
    description: 'string',
    stats: [{
    title: 'string',
    value: 'string;'
  }]},
    {
    image: 'string',
    title: 'strom',
    description: 'string',
    stats: [
      {
    title: 'string',
    value: 'string;'
     }
    ]
  }
]

export function NftList() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <NftCard {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize="50%"
      breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: 2 }]}
      slideGap="xl"
      align="start"
      slidesToScroll={mobile ? 1 : 2}
    >
      {slides}
    </Carousel>
  );
}