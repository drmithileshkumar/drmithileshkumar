import { w as writable } from './index2-D2s-XE5r.js';

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

export { INVOICE as I, profileImage as a, scannedQR as b, currentPath as c, darkMode as d, bannerImage as e, isLoggedIn as i, navList as n, pageLoadState as p, showLeft as s };
//# sourceMappingURL=stores2-f06Es8-t.js.map
