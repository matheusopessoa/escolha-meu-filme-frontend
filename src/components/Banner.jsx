import { useRef } from 'react'

const Banner = () => {
    const bannerRef = useRef()

    return (
        <div className="flex justify-center items-center my-8">
            <div 
                ref={bannerRef}
                className="adsbygoogle min-h-[60px] min-w-[468px] bg-black/20 rounded-lg overflow-hidden"
            />
        </div>
    )
}

export default Banner