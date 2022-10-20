/* eslint-disable @typescript-eslint/no-var-requires */
import ReactPixelStreaming, { PixelStreamingContext, PixelWindow } from "../../share/PixelStreaming";

/* eslint-disable react/react-in-jsx-scope */
import type { NextPage } from 'next';
import Head from 'next/head';
import { docs } from '../../share/editorPage/player';
import NoSSR from '../component/shared/NoSSR';
import styles from '../styles/Home.module.css';
// import InnerHTML from 'dangerously-set-html-content'

// const docs = require("../../share/editorPage/player.html").default;
const YourComponent = (context: any) => (
  <div>
    {context.context.webrtcState}
    <button
      disabled={context.context.webrtcState !== "connected"}
      onClick={() => {
        context.context
          .emitter(context.context.webRtcPlayerObj)
          .emitUIInteraction({
            Command: "foo",
            Value: "bar"
          });
      }}
    >
      My Component
    </button>
  </div>
)

const Editor: NextPage = () => {
  console.log(docs)
  return (
    <div className={styles.container}>
      <Head>
      </Head>

      <main className={styles.main}>
        <NoSSR>
              <ReactPixelStreaming
      webRtcHost="127.0.0.1:8888"
      pixelStreamingResponseEvents={[]}
    >
      <div>
        <PixelStreamingContext.Consumer>
          {(context:any) => (
            <div>
              <PixelWindow
                videoStyle={{ width: 1280, height: 720 }}
                windowStyle={{ width: 1300, height: 740 }}
                load={context.load}
                actions={context.actions}
                connect={context.connect}
                host={context.webRtcHost}
              />
              <YourComponent context={context} />
            </div>
          )}
        </PixelStreamingContext.Consumer>
      </div>
    </ReactPixelStreaming>

        </NoSSR>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  )
}

export default Editor
