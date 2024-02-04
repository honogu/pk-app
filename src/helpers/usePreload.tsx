const images = []

export default function usePreload() {
    const preloadImages = async (sources: string[]) => {
        const promises = sources.map(source => images.push(new Image().src = source))
        await Promise.all(promises)
    }

    return { preloadImages }
}
