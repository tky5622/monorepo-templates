import React from 'react'

// global styles
import 'rsuite/dist/rsuite.min.css'

// libs
import {
  Player,
  ContextProvider,
  usePlayer,
  useSystem,
  PlayerPropsSchema,
} from 'pixel-streaming'

// TODO: split context file later
const PlayerContext: React.FC = () => {
  const player = usePlayer()
  const system = useSystem()

  React.useEffect(() => {
    if (player.cls.initReady) {
      // player.cls.initPlayer('https://i-00c56684d4fff23e4.cloudvec.com')
      system.cls.connectBuild('lumen')
    }
  }, [player.cls.initReady])

  //   const playerConfig: PlayerPropsSchema = {
  //     metaConfig: null,
  //     config: null,
  //     psConfig: null ,
  //     ueSettingsts: null
  //     // Read more:
  //     // https://metaeditor.io/docs/metaeditor/installation
  //   }
  // {...playerConfig}

  return <Player />
}

const CustomPlayer: React.FC = () => (
  <ContextProvider>
    <PlayerContext />
  </ContextProvider>
)

export default CustomPlayer
