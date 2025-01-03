import { w as writable } from "./index2.js";
const pageLoadState = writable(false);
const isLoggedIn = writable(false);
const currentPath = writable("Vectorial");
const navList = writable([]);
const darkMode = writable(true);
const scannedQR = writable();
const INVOICE = writable();
const showLeft = writable(true);
const defaultProfileImage = "/avatar.svg";
const initialProfileImage = defaultProfileImage;
const profileImage = writable(initialProfileImage);
profileImage.subscribe((value) => {
});
const defaultBannerImage = "/avatar.svg";
const initialBannerImage = defaultBannerImage;
const bannerImage = writable(initialBannerImage);
bannerImage.subscribe((value) => {
});
export {
  INVOICE as I,
  profileImage as a,
  bannerImage as b,
  currentPath as c,
  scannedQR as d,
  darkMode as e,
  isLoggedIn as i,
  navList as n,
  pageLoadState as p,
  showLeft as s
};
