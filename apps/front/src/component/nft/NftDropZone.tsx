/* eslint-disable no-constant-condition */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable react/no-unknown-property */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { Group, Text, useMantineTheme } from '@mantine/core'
import { Dropzone, DropzoneProps } from '@mantine/dropzone'
import { IconPhoto, IconUpload, IconX } from '@tabler/icons'
import React, { Suspense, useState } from 'react'
// import { useLoader } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

const ModelViewer = (model) => {
  // const url = window.URL.createObjectURL(model)
  // const reader = new FileReader();
  const newModel = React.useCallback(() => {
    const binaryData = []
    binaryData.push(model)
    const newModel = window.URL.createObjectURL(
      new Blob(binaryData, { type: 'model/gltf+json' })
    )
    console.log(newModel)
    return newModel
  }, [model])
  const { scene } = useGLTF(newModel)
  console.log(scene, 'scene')

  // const url = window.URL.createObjectURL(newModel)
  // console.log(url)

  return (
    <>
      <primitive object={scene} />
    </>
  )
}
export function NftDropZone(props: Partial<DropzoneProps>) {
  const theme = useMantineTheme()
  const [model, setModel] = useState()
  // newFunction();
  // function newFunction() {
  //   console.log(model.path);
  // }

  return (
    <Dropzone
      onDrop={(files) => {
        console.log(files[0].type)
        setModel(files[0])
      }}
      onReject={(files) => console.log('rejected files', files)}
      maxSize={3 * 1024 ** 2}
      {...props}
    >
      <Group
        position="center"
        spacing="xl"
        style={{ minHeight: 220, pointerEvents: 'none' }}
      >
        <Dropzone.Accept>
          <IconUpload
            size={50}
            stroke={1.5}
            color={
              theme.colors[theme.primaryColor][
                theme.colorScheme === 'dark' ? 4 : 6
              ]
            }
          />
        </Dropzone.Accept>
        <Dropzone.Reject>
          <IconX
            size={50}
            stroke={1.5}
            color={theme.colors.red[theme.colorScheme === 'dark' ? 4 : 6]}
          />
        </Dropzone.Reject>
        <Dropzone.Idle>
          <IconPhoto size={50} stroke={1.5} />
        </Dropzone.Idle>

        <div>
          {/* <Suspense fallback={null}>
            <ModelViewer model={model} />
          </Suspense> */}

          {true ? (
            <Canvas camera={{ position: [0, 0, 10] }}>
              <Suspense fallback={<p>loading..</p>}>
                <ModelViewer model={model} />
              </Suspense>
            </Canvas>
          ) : (
            <>
              <Text size="xl" inline>
                Drag images here or click to select files
              </Text>
              <Text size="sm" color="dimmed" inline mt={7}>
                Attach as many files as you like, each file should not exceed
                5mb
              </Text>
            </>
          )}
        </div>
      </Group>
    </Dropzone>
  )
}

export default NftDropZone
