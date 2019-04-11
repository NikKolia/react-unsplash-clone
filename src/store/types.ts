import { ImagesState } from './images/types';
import { AuthState } from './auth/types';

export interface AppState {
  images: ImagesState,
  auth: AuthState
}
