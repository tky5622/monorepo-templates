import { useQuery } from '@apollo/client'
import { Publication, Scalars } from '@use-lens/react-apollo'
import React from 'react'
import { PUBLICATION_QUERY } from '../../graphql/queries/lens.publicaition.query'



export const useExtractUrl = (picture: any) => {
  const url = React.useMemo(() => {
    if (picture) {
      if (picture.__typename === 'MediaSet') {
        return picture.original.url as string
      } else if (picture.__typename === 'NftImage') {
        return picture.uri as string
      }
    }
  }, [picture])
  return url
}

export type PublicationQuery = {
  publications: {
    items: Publication[]
  }
}


export const usePublications = (profileId: Scalars['ProfileId']) => {
  const {data, loading , error } = useQuery<PublicationQuery>(PUBLICATION_QUERY, {
    variables: {
      id: profileId,
    },
  })

  return { data, loading , error }

}