import registerComponent, {
    ComponentMeta,
  } from "@plasmicapp/host/registerComponent";

export interface AudioProps{
  audioURL?: string;
}

export function AudioPlayer({audioURL}:AudioProps){
    return (
      <div>
        <audio 
          controls
          autoPlay
          src={audioURL}
          >
        </audio>
      </div>
    );
}

export function registerAudio(){
    return registerComponent(AudioPlayer,{
      name: "AudioPlayer",
      props: {
        audioURL: "string",
      },
      importPath: "./components/registerAudioplayer"
    });
}

    
    