import React from 'react';

import Distance from '../../assets/img/distance.png';
import Hands from '../../assets/img/hands.png';
import Facemask from '../../assets/img/facemask.png';
import Maps from '../../assets/img/maps.png';

export const IconCard = (icon) => {
  switch (icon) {
    case 'distance':
      return Distance;
      break;
    case 'hands':
      return Hands;
      break;
    case 'facemask':
      return Facemask;
      break;
    case 'maps':
      return Maps;
      break;
    default:
      return null;
      break;
  }
};
