import { w as writable } from "./index2.js";
const TopBarHeight = writable(0);
const refreshApp = writable(false);
const currentPath = writable("Mathril");
const navList = writable([]);
const darkMode = writable(true);
const showLeft = writable(true);
const showRight = writable(false);
const defaultGuest = null;
const initialGuest = defaultGuest;
const guestID = writable(initialGuest);
guestID.subscribe((value) => {
});
const defaultProfileImage = "/user.svg";
const initialProfileImage = defaultProfileImage;
const profileImage = writable(initialProfileImage);
profileImage.subscribe((value) => {
});
const defaultBannerImage = "/avatar.svg";
const initialBannerImage = defaultBannerImage;
const bannerImage = writable(initialBannerImage);
bannerImage.subscribe((value) => {
});
const defaultPerformance = {
  publicID: "",
  attempted: 0,
  correct: 0
};
const initialPerformance = defaultPerformance;
const performance = writable(initialPerformance);
performance.subscribe((value) => {
});
export {
  TopBarHeight as T,
  showLeft as a,
  currentPath as c,
  darkMode as d,
  guestID as g,
  navList as n,
  refreshApp as r,
  showRight as s
};
