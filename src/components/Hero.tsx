// src/components/Hero.jsx
import tuFoto from '../assets/images/yo.png'; // Asegúrate de tener una imagen tuya aquí
import { MotionEffectFadeBlurDemo } from './FadeBlur';
type LocationBadgeProps = {
  className?: string;
};

const LocationBadge = ({ className }: LocationBadgeProps) => {
  return (
    <div
      className={`
        flex items-center gap-2
        rounded-full bg-blue-600/20
        px-3 py-1 text-sm text-white
        
        ${className}
      `}
    >
      <span role="img" aria-label="Bandera de España" ><img className='w-8 rounded-md' src="src\assets\images\spain.png" alt="Bandera de España" /></span>
      <span>Located in Spain</span>
    </div>
  );
};

const Hero = () => {
  return (
    <section id="sobre-mi" className=" text-white min-h-full flex flex-col justify-center items-start text-center p-8 overflow-x-hidden">
      <img src={tuFoto} alt="Tu foto" className="w-100 h-100 max-w-screen rounded-full mb-6 object-cover ml-auto" style={{ filter: "drop-shadow(0 0 3px rgba(0, 0, 0, 0.2))" }} />
      <MotionEffectFadeBlurDemo>
        <p className="text-4xl md:text-9xl font-semibold mb-2 text-start">
          Full <br />
          Stack<br />
          Developer
        </p>
        <p className="text-xl max-w-2xl">
          Soy un desarrollador web apasionado por crear aplicaciones modernas y funcionales.
          Especializado en React, con experiencia en DevOps.
        </p>
      </MotionEffectFadeBlurDemo>
      <LocationBadge className="ml-auto" />
    </section>
  );
};

export default Hero;