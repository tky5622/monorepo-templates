
import {
  Avatar, Button, createStyles, Group, Text
} from '@mantine/core';

import Link from 'next/link';

const useStyles = createStyles((theme) => ({
  icon: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
  },

  name: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
}))




export const ArtistCard = ({ picture, name, bio, id }: any) => {
  const { classes } = useStyles()
  return (
    <>
      <Avatar src={picture} size={94} radius="md" />
      <div>
        <Text size="xs" sx={{ textTransform: 'uppercase' }} weight={700} color="dimmed">
          { }
        </Text>

        <Text size="lg" weight={500} className={classes.name}>
          {name}
        </Text>

        <Group noWrap spacing={10} mt={3}>
          <Text size="xs" color="dimmed">
            {bio}
          </Text>
        </Group>

      </div>
      <Link href={`/artist/${id}`}>
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

    </>

  )
}