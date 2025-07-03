import { useEffect, useRef } from 'react'
export default function Banner() {
    const banner = useRef()

    const atOptions = {
        key: 'b531b9b24d24432ee23694a934d7e3c8',
        format: 'iframe',
        height: 60,
        width: 468,
        params: {},
    }
    useEffect(() => {
    if (banner.current && !banner.current.firstChild) {
        const conf = document.createElement('script')
        const script = document.createElement('script')
        script.type = 'text/javascript'
        script.src = `//www.highperformancedformats.com/${atOptions.key}/invoke.js`
        conf.innerHTML = `atOptions = ${JSON.stringify(atOptions)}`

        banner.current.append(conf)
        banner.current.append(script)
    }
}, [banner])

    return <div className="mx-2 my-5 border border-gray-200 justify-center items-center text-white text-center" ref={banner}></div>
}