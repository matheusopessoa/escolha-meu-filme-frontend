import { useEffect, useRef } from 'react';

const SocialBar = () => {
    const adRef = useRef();

    useEffect(() => {
        if (typeof window === 'undefined' || !adRef.current) return;

        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = '//pl27073517.profitableratecpm.com/14/a4/56/14a45667fdd30e43857079a81c772b34.js';
        script.async = true;

        adRef.current.appendChild(script);

        return () => {
            if (adRef.current) {
                adRef.current.innerHTML = '';
            }
        };
    }, []);

    return (
        <div className="flex justify-center items-center my-8">
            <div 
                ref={adRef}
                className="min-h-[90px] w-full bg-black/20 rounded-lg overflow-hidden"
            />
        </div>
    );
};

export default SocialBar; 