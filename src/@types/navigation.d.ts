import { IndexParamsList } from '@shared/routes';
import { ProfileParamsList } from '@shared/routes/ProfileRoutes';
import { RegisterParamsList } from '@shared/routes/RegisterRoutes';
import { SearchParamsList } from '@shared/routes/SearchRoutes';
import { SupporterParamsList } from '@shared/routes/SupporterRoutes';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends IndexParamsList,
      ProfileParamsList,
      RegisterParamsList,
      SearchParamsList,
      SupporterParamsList {}
  }
}
