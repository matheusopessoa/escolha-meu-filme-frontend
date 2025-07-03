export default function adComponent(){

    const adDiv = useRef(null);
    
    atOptions = {
            'key' : 'b531b9b24d24432ee23694a934d7e3c8',
            'format' : 'iframe',
            'height' : 60,
            'width' : 468,
            'params' : {}
        };
    
      useEffect(() => {
        console.log("adsloading")
        const conf = document.createElement('script')
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.src = `//www.profitablecreativeformat.com/${atOptions.key}/invoke.js`;
        conf.innerHTML = `atOptions = ${JSON.stringify(this.atOptions)}`;
        adDiv.current.append(conf);
        adDiv.current.append(s);
      }, [])
    }
    