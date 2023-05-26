export const handleVideo = (video, display) => {
  if (display) {
    video.current.currentTime = 30;
    if (!(video.current.currentTime > 0 && !video.current.paused && !video.current.ended
      && video.current.readyState > video.current.HAVE_CURRENT_DATA)) {
      setTimeout(() => {
        video.current.play()
      }, 100)
    }
  } else {
    setTimeout(() => {
      video.current.pause()
    }, 100)
  }
  return video.current
}