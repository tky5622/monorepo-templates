import { useQuery } from '@apollo/client';
import {
  Container, useMantineTheme
} from '@mantine/core';
import recommendProfiles from '../../graphql/queries/lens.query';
import { CardList } from './CardList';

export function ArtistList() {
  const theme = useMantineTheme()
  const secondaryColor =
    theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7]
  const { loading, error, data } = useQuery(recommendProfiles);
  console.log(data, error, 'data')
  // data.

  return (
    <div>
      <Container style={{ paddingTop: 40, paddingBottom: 40 }} size="md">
        {loading ? <p> loading </p>
          :
          <CardList data={data.recommendedProfiles} />
          }
      </Container>
    </div>
  )
}
