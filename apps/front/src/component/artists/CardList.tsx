
import { createStyles, Group, useMantineTheme } from '@mantine/core';

import { Profile } from '@use-lens/react-apollo';
import { ArtistCard } from './ArtistCard';

const useStyles = createStyles((theme) => ({
  icon: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
  },

  name: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
}))


export const CardList = ({ data }: { data : Profile[] }) => {
  const theme = useMantineTheme()
  const secondaryColor =
    theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7]
    console.log(data)
  const { classes } = useStyles();

  return (
     <>
    {

      data && data.map((artist: Profile, i) => (
      <Group noWrap key={i}>
          <ArtistCard  picture={artist.picture} name={artist.name} bio={artist.bio} id={artist.id}/>
      </Group>
    )
    )}
    </>
  )
}


