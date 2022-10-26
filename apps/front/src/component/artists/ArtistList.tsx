import { useQuery } from '@apollo/client';
import {
  Container, Grid, useMantineTheme
} from '@mantine/core';
import recommendProfiles from '../../graphql/queries/lens.query';
import { CardList } from './CardList';
// import {
//   useProfilesQuery
// } from '@use-lens/react-apollo'

export function ArtistList() {
  const theme = useMantineTheme()
  const secondaryColor =
    theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7]

  // const test = apollo.usePublicationsLazyQuery()
  // useProfilesQuery()

  // which is can be used at profile page
  // const { data: profilesData, error } = useProfilesQuery({
  //   variables: {
  //     request: {
  //       ownedBy: [address]
  //     }
  //   }
  // });

  const { loading, error, data } = useQuery(recommendProfiles);
  console.log(data, error, 'data')
  // data.

  return (
    <div>
      <Container style={{ paddingTop: 40, paddingBottom: 40 }} size="md">
        {loading ? <p> loading </p>
          :
        <Grid grow>
          <CardList data={data.recommendedProfiles} />
        </Grid>
          }
      </Container>
    </div>
  )
}
