import { Dimensions } from 'react-native';
const window = Dimensions.get('window');
const width = window.width;
const height = window.height;

export default { window: { width, height }, isSmallDevice: width < 375, };