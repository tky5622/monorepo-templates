import { useQuery } from '@apollo/client';
import { Scalars } from '@use-lens/react-apollo';
import { useRouter } from 'next/router';
import { profileQueryById } from '../../graphql/queries/lens.profile-by-id.query';

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
  console.log(data)

  return (
    <>
    { loading ? <p>loading</p> :
      <>
      </>
      }
    </>

  );
}