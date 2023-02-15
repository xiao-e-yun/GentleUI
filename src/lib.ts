export function gentleStorage() {
  const runningBrowser = typeof window !== "undefined"
  const uninitialized = typeof window.GentleUI === "undefined"
  if(!runningBrowser) return {}
  if(uninitialized) return window.GentleUI = {}
  return window.GentleUI
}

export function imageLazyLoader() {

  const storage = gentleStorage()!
  if(storage.lazyLoader) return storage.lazyLoader

  const observer = new IntersectionObserver(entries=>{
    for (const entry of entries) {
      if (!entry.isIntersecting) return
      const target = entry.target as HTMLImageElement
      const src =  target.dataset.src || ""

      const img = new Image()
      img.src = src
      img.onload = () => target.src = src
      
      observer.unobserve(target)
    }
  })

  return storage.lazyLoader = observer
} 