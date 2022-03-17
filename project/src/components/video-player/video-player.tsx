import { useEffect, useRef, useState } from 'react';

type VideoPlayerProps = {
  src: string;
  poster: string;
  muted: boolean;
}

function VideoPlayer(props: VideoPlayerProps):JSX.Element {
  const {src} = props;
  const [isLoading, setIsLoading] = useState(true);
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

  return <video src={src} ref={videoRef}></video>;

}

export default VideoPlayer;
