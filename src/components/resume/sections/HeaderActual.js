// which header to load - mobile ore desktop?
import { isMobileOnly } from 'react-device-detect';

import Header from './Header';
import HeaderMobile from './HeaderMobile';

export default function HeaderActual() {
  if (isMobileOnly) {
    return HeaderMobile();
  }
  return Header();
}
