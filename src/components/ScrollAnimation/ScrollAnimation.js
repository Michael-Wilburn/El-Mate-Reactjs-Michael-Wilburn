import { useEffect, useState, useRef } from "react"


const ScrollAnimation = () =>{
    const [background, setBackground] = useState('pink')

    const divRef = useRef() //Se usa para no tenre ID repeditos en los diferentes componentes de una sitio react
  
    useEffect(()=>{

        const handleScroll = () =>{
            // const div = document.getElementById('scroll-color');
            const div = divRef.current
            const {y} = div.getBoundingClientRect();
            console.log(y)

            const backgroundcolor = y <= 0 ? 'orange' : 'pink';
            setBackground(backgroundcolor)

        }

        window.addEventListener('scroll', handleScroll)

        return() =>{
            window.removeEventListener('scroll',handleScroll)
        }


    }, [])

    return(
        <div>
            <div 
                ref={divRef}
                // id='scroll-color' 
                style={{height: '180vh',background:background, margin:'20px'}}>
                <h1>
                    Scrollear para cambiar color de fondo
                </h1>
            </div>

        </div>
    )

}

export default ScrollAnimation