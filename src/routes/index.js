//Page
import Home from "../pages/Home";
import Following from "../pages/Following";
import Profile from "../pages/Profile";
import Upload from "../pages/Upload";
import Search from "../pages/Search";

// Layout
import { HeaderLayout } from "../components/Layout";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/following", component: Following },
  { path: "/profile", component: Profile },
  { path: "/upload", component: Upload, layout: HeaderLayout },
  { path: "/search", component: Search },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };