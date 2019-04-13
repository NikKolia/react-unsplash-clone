import dev from './dev';
import prod from './prod';
let config = process.env.NODE_ENV === 'development' ? dev : prod;

export default config;