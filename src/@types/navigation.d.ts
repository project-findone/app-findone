import { ProfileParamsList } from '@shared/routes/ProfileRoutes';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends ProfileParamsList {}
  }
}
