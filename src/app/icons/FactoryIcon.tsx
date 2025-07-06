import Image from 'next/image';
import FactorySVG from '../../../public/icons/factory.svg';

export default function FactoryIcon() {
  return (
    <Image
      src={FactorySVG}
      alt="Factory Icon"
      width={18}
      height={18}
      style={{ marginLeft: 6, verticalAlign: 'middle' }}
    />  
  );
}
