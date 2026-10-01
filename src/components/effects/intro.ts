// Evaluated once per page load: is the branded intro about to play?
// The hero uses this to delay its entrance until the preloader has lifted.
export const introWillPlay = (() => {
  try {
    return !sessionStorage.getItem('intro-seen')
  } catch {
    return true
  }
})()

export const INTRO_DELAY = introWillPlay ? 2.1 : 0.2
