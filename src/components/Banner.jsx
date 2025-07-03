import { useEffect, useRef } from 'react'

const Banner = () => {
    const bannerRef = useRef()

    useEffect(() => {
        // Verifica se está no browser e se o banner não foi já inicializado
        if (typeof window !== 'undefined' && bannerRef.current && !bannerRef.current.firstChild) {
            const atOptions = {
                'key': 'b531b9b24d24432ee23694a934d7e3c8',
                'format': 'iframe',
                'height': 60,
                'width': 468,
                'params': {}
            }

            // Cria e configura o script de configuração
            const configScript = document.createElement('script')
            configScript.text = `atOptions = ${JSON.stringify(atOptions)}`

            // Cria e configura o script principal do Adsterra
            const mainScript = document.createElement('script')
            mainScript.type = 'text/javascript'
            mainScript.src = `//www.highperformancedformats.com/${atOptions.key}/invoke.js`
            mainScript.async = true

            // Adiciona os scripts ao DOM
            bannerRef.current.appendChild(configScript)
            bannerRef.current.appendChild(mainScript)

            // Cleanup function
            return () => {
                if (bannerRef.current) {
                    bannerRef.current.innerHTML = ''
                }
            }
        }
    }, [])

    return (
        <div className="flex justify-center items-center my-8">
            <div 
                ref={bannerRef}
                className="min-h-[60px] min-w-[468px] bg-black/20 rounded-lg overflow-hidden"
            />
        </div>
    )
}

export default Banner