import './Footer.scss';
import Earth from './../../../assets/images/earth.png';
import EarthCatoon from './../../../assets/images/earth-cartoon.png';
import Moon from './../../../assets/images/moon.png';
import MoonTintin from './../../../assets/images/moon_tintin.png';

export default function Footer() {
  return (
    <footer>
      <img src={MoonTintin} alt="Planet" className="max-w-7xl object-cover" />
    </footer>
  );
}
