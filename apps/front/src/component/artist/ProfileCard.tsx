import { Avatar, Button, Card, createStyles, Text } from '@mantine/core';
import { ProfileMedia } from '@use-lens/react-apollo';
import { Maybe } from 'graphql/jsutils/Maybe';
import { useExtractUrl } from '../../hooks/useLens/useLens';

type ProfileCardProps = {
  picture?: Maybe<ProfileMedia> | undefined,
  name?: Maybe<string> | undefined,
  bio?: Maybe<string> | undefined,
  id: string,
  coverPicture?: Maybe<ProfileMedia>,

}

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  avatar: {
    border: `2px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white}`,
  },
}));


export function ProfileCard({ coverPicture, picture, name, bio, id }: ProfileCardProps) {
  const { classes, theme } = useStyles();
  const url = useExtractUrl(picture)
  const coverUrl = useExtractUrl(coverPicture)


  // const items = stats.map((stat) => (
  //   <div key={stat.label}>
  //     <Text align="center" size="lg" weight={500}>
  //       {stat.value}
  //     </Text>
  //     <Text align="center" size="sm" color="dimmed">
  //       {stat.label}
  //     </Text>
  //   </div>
  // ));

  return (
    <Card withBorder p="xl" radius="md" className={classes.card}>
      <Card.Section sx={{ backgroundImage: `url(${coverUrl})`, height: 140 }} />
      <Avatar src={url} size={80} radius={80} mx="auto" mt={-30} className={classes.avatar} />
      <Text align="center" size="lg" weight={500} mt="sm">
        {name}
      </Text>
      <Text align="center" size="sm" color="dimmed">
        {bio}
      </Text>
      {/* <Group mt="md" position="center" spacing={30}>
        {items}
      </Group> */}
      <Button
        fullWidth
        radius="md"
        mt="xl"
        size="md"
        color={theme.colorScheme === 'dark' ? undefined : 'dark'}
      >
        Follow
      </Button>
    </Card>
  );
}