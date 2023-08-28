import backgroundImage from '../assets/tutorial.png';

export const modalStyle = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  color: '#000',

  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  border: '1.5px solid #FFF',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
  outline: 'none',
};
