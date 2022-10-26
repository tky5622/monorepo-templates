
import {
  Avatar, Button, createStyles, Group, Text,
  useMantineTheme
} from '@mantine/core';

import { Profile } from '@use-lens/react-apollo';
import Link from 'next/link';

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
      {data && data.map((artist: Profile) => (
      <Group noWrap>
        <Avatar src={artist.picture} size={94} radius="md" />
        <div>
          <Text size="xs" sx={{ textTransform: 'uppercase' }} weight={700} color="dimmed">
            {}
          </Text>

          <Text size="lg" weight={500} className={classes.name}>
            {artist.name}
          </Text>

          <Group noWrap spacing={10} mt={3}>
            <Text size="xs" color="dimmed">
              {artist.bio}
            </Text>
          </Group>

        </div>
            <Link href={`/artist/${artist.id}`}>
              <Button
                size="sm"
                variant="light"
                color="cyan"
                fullWidth
                style={{ marginTop: 10 }}
              >
                Book tour
              </Button>
            </Link>

      </Group>
      )
  )}
    </>
  )
}

