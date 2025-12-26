import LogoImg from '../assets/logo.svg';

type LogoProps = {
  isSmall: boolean;
}

export function Logo({isSmall}: LogoProps) {

  return (
    <div className={` ${isSmall ? ' py-10 px-10' : 'mb-20'}`}>
      <img src={LogoImg} alt="Base Apparel logo" />
    </div>
  )
}