'use client'
import { useMutation, useQuery } from '@apollo/client'
import {
  Button
} from '@mantine/core'
import { useSigner } from '@web3modal/react'
import { useState } from 'react'
import { AuthMutation } from '../../graphql/mutations/lens.auth.mutation'
import { getDefaultProfile } from '../../graphql/mutations/lens.default-profile.query'
import { CreateProfileRequest, ProfileMutation } from '../../graphql/mutations/lens.profile.mutaion'
import { AuthChallengeQuery } from '../../graphql/queries/lens.auth.query'
// import { CreateProfile } from '@use-lens/react-apollo'
import React from 'react'
import { useLocalStorage } from 'usehooks-ts'
import { refreshAuth } from '../../libs/authentication/refresh'
import { createProfile } from '../../libs/create-profile'
console.log(ProfileMutation)

type SignupLensProps ={
  address: string
}


const useLensAuth = (address: string) => {
  const { data, loading, error } = useQuery(AuthChallengeQuery, {
    variables: {
      request: {
        address: address
      }
    }
  })
  console.log(data, 'data')
  const signer = useSigner()
  console.log(data?.challenge.text)
  // const sign = useSignMessage(data?.challenge.text)
  // const testww = sign.signMessage()


  const [authFunc] = useMutation(AuthMutation)

  const request: CreateProfileRequest = ({
    handle: new Date().getTime().toString(),
  })
  // const [createProfile] = useMutation(ProfileMutation)
  const defaultProfile = useQuery(getDefaultProfile, { variables: {
    address: address
  }
}
)
  const [accessToken, SetAccessToken] = useLocalStorage('LensAccessToken', '')
  const [refreshToken, SetRefreshToken] = useLocalStorage('LensRefreshToken', '')

  console.log(defaultProfile, 'defaultprofile')


  const onClickCreateProfile = React.useCallback(async() => {
    const sign = await signer.data?.signMessage(data?.challenge.text)
    console.log(sign, 'test signt wait ')
    const authResult = await authFunc({
      variables: {
        request: {
          address: address,
          signature: sign
        }
      }
    })
    console.log(authResult, request, 'authResult')
    SetAccessToken(authResult.data.authenticate.accessToken)
    SetRefreshToken(authResult.data.authenticate.refreshToken)
    // console.log(test, SetAccessToken, 'refreshToken')
    console.log('try refresh')
    const refreshResult = await refreshAuth({
      refreshToken: authResult.data.authenticate.refreshToken,
    })
    console.log(console.log('refresh: result', refreshResult))
    const test = await createProfile(address, authResult.data.authenticate.accessToken)
    console.log(test, 'create profile')

    // const profileResult = await featchDefaultProfile({
    //  variables: {
    //   address: address
    //  }
    // })
    // console.log(profileResult, 'profileResult')
    // Window.sessionStorage.key = 'value';

    // sessionStorage['key'] = 'value';
    // sessionStorage.setItem('key', 'value');


  }, [address, authFunc, data, request])

  return { onClickCreateProfile }


}

export const SignupLens: React.FC<SignupLensProps> = ({address}) => {
  const [open, setOpen] = useState(false)
  const { onClickCreateProfile } = useLensAuth(address)


  return (
    <>
      <Button onClick={onClickCreateProfile}>create profile</Button>
    {/* <Button onClick={React.useCallback(() => setOpen(true),[setOpen])}>signup with lens</Button>
      <Modal onClose={React.useCallback(() => console.log('test'),[])} opened={open}>
        <Button onClick={() => createProfile()}>create profile</Button>
      </Modal> */}
    </>
  )
}
