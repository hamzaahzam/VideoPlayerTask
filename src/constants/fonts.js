import { Platform } from 'react-native';
import { isPAD } from './index';

export default {
  SF_PRO_TEXT: {
    ...Platform.select({
      ios: {
        Poppins: {
          Light: 'Poppins-Light',
        },
      },
      android: {
        Poppins: {
          Light: 'Poppins-Light',
        },
      },
    }),
  },
};

const MOB_TAB_RATIO = 1.4;
export const fontWeight = weight => {
  let size = isPAD ? Math.floor(weight * MOB_TAB_RATIO) : weight;
  return size;
};
