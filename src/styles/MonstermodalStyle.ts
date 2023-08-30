import backgroundImage from '../assets/sougen.png';

export const MonstermodalStyle = {
  position: 'absolute' as const,
  top: '65%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 550,
  color: '#000',

  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  borderRadius: '10px',
  p: 4,
  outline: 'none',
};
