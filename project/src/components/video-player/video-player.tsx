import { useEffect, useRef, useState } from 'react';

type VideoPlayerProps = {
  src: string;
  poster: string;
  muted: boolean;
  width: string;
  height: string;
  isPlaying: boolean;
}

function VideoPlayer(props: VideoPlayerProps):JSX.Element {
  const {src, poster, muted, width, height, isPlaying} = props;
  const [ , setIsLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null >(null);

  useEffect(() => {
    if (videoRef.current !== null) {
      videoRef.current.onloadeddata = () => setIsLoading(false);
    }

    return () => {
      if (videoRef.current !== null) {
        videoRef.current.onloadeddata = null;
        videoRef.current = null;
      }
    };
  }, [src]);

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }

    if (isPlaying) {
      videoRef.current.play();
      return;
    }

    videoRef.current.pause();
    videoRef.current.load();

  }, [isPlaying]);

  return <video src={src} ref={videoRef} poster={poster} muted={muted} width={width} height={height}></video>;

}

export default VideoPlayer;
