import { useQuery } from '@apollo/client';
import { Profile, Publication, Scalars } from '@use-lens/react-apollo';
import { useRouter } from 'next/router';
import { profileQueryById } from '../../graphql/queries/lens.profile-by-id.query';
import { PUBLICATION_QUERY } from '../../graphql/queries/lens.publicaition.query';
import { NftList } from '../nft/NftList';
import { ProfileCard } from './ProfileCard';

type Profiles = {
  profiles:{
    items: Profile[]
  }
}

type PublicationQuery = {
  publications: {
    items: Publication[]
  }
}

export function ArtistProfile() {

  const router = useRouter()
  const profileId = router.query.id as Scalars['ProfileId']
  const { loading, data } = useQuery<Profiles>(profileQueryById,
    {
      variables: {
        id: profileId
    },
  }
  )

  const publication = useQuery<PublicationQuery>(PUBLICATION_QUERY,
    {
      variables: {
        id: profileId
      },
    }
  )

  console.log()
  console.log(publication?.data)
  const profile = data?.profiles.items[0]
  console.log(profile, data, 'test')

  return (
    <>
    { loading ? <p>loading</p> :
      <>
          <ProfileCard stats={profile?.stats} coverPicture={profile?.coverPicture} picture={profile?.picture} name={profile?.name} bio={profile?.bio} id={profile?.id}  />
      </>
      }
      {
        publication && <NftList publications={publication?.data?.publications?.items}/>
      }
    </>
  );
}