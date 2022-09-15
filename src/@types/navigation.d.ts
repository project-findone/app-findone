import { RootStackParamList } from '@shared/routes/Stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
