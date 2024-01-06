import { useEffect, useState } from "react";


const Banners = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setDeleting] = useState(false);
    const toRotate = ["Desarrolador FullStack", "Java SpringBoot" , "MERN"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random()*30);
    const period = 2000;

    useEffect(()=>{
        let ticker = setInterval(()=>{
            tick();
        },delta)
    })
  return (
    <section>
        <article className="container">
            <div className="row">
                <div className="col-xs-12 col-md-6 col-xl-7">
                <span className="tagline"> Bievenido a mi Portafolio</span>
                <h1>{`Hola Dev's`}</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus ab eius recusandae quam nesciunt ad porro, excepturi rerum nulla laudantium? Laboriosam quam earum illo eligendi iure quo reprehenderit facilis! Autem?</p>
                <button onClick={()=> console.log('connect')}>conectemos</button>
                </div>
                <div className="col-xs-12 col-md-6 col-xl-5">
                    <img src="https://c0.klipartz.com/pngpicture/585/436/gratis-png-pokemon-pikachu-ilustracion-icono-fondo-pikachu.png" alt="Pikachu" />
                </div>
            </div>
        </article>
    </section>
  )
}

export default Banners