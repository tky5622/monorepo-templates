import { useQuery } from '@apollo/client';
import { Scalars } from '@use-lens/react-apollo';
import { useRouter } from 'next/router';
import { profileQueryById } from '../../graphql/queries/lens.profile-by-id.query';
import { PUBLICATION_QUERY } from '../../graphql/queries/lens.publicaition.query';

export function ArtistProfile() {

  const router = useRouter()
  const profileId = router.query.id as Scalars['ProfileId']
  // console.log(profileId)
  // const { loading, data } = useProfileQuery({variables:{
  //     request: {
  //       profileId
  //     }
  // }})
  console.log(profileId)
  const { loading, data } = useQuery(profileQueryById,
    {
      variables: {
        id: profileId
    },
  }
  )

  const publication = useQuery(PUBLICATION_QUERY,
    {
      variables: {
        id: profileId
      },
    }
  )

  console.log(data)
  console.log(publication?.data)

  return (
    <>
    { loading ? <p>loading</p> :
      <>
      </>
      }
    </>

  );
}