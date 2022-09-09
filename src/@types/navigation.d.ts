import { RootStackParamList } from '@shared/routes/AuthNavigation';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}