
import {
  Badge,
  // Hr,
  Button,
  Card, Grid,
  Image,
  Text,
  useMantineTheme
} from '@mantine/core';
import { Profile } from '@use-lens/react-apollo';
import Link from 'next/link';


export const CardList = ({ data }: { data : Profile[] }) => {
  const theme = useMantineTheme()
  const secondaryColor =
    theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7]
    console.log(data)

  return (
    <>
      {data && data.map((artist: Profile) => (
      <Grid.Col key={artist.id}>
      <Card shadow="sm" style={{ minWidth: 240 }}>
        <Image
          src={artist.coverPicture}
          height={160}
          alt={artist.id}
          withPlaceholder
        />

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 10,
          }}
        >
            <Text weight={500}>{artist.name}</Text>
            {artist.dispatcher && (
            <Badge
              color="red"
              variant={theme.colorScheme === 'dark' ? 'light' : 'filled'}
            >
              sale
            </Badge>
          )}
        </div>

        <Text size="sm" style={{ color: secondaryColor, minHeight: 140 }}>
            {artist.bio}
        </Text>

        {/* <Hr /> */}

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
      </Card>
    </Grid.Col>
    )
  )}
    </>
  )
}

