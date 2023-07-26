//Page
import Home from "../pages/Home";
import Following from "../pages/Following";
import Profile from "../pages/Profile";
import Upload from "../pages/Upload";
import Search from "../pages/Search";

//
import routesConfig from '../config/routes';

// Layout
import { HeaderLayout } from "../Layout";

const publicRoutes = [
  { path: routesConfig.home, component: Home },
  { path: routesConfig.following, component: Following },
  { path: routesConfig.profile, component: Profile },
  { path: routesConfig.upload, component: Upload, layout: HeaderLayout },
  { path: routesConfig.search, component: Search },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
