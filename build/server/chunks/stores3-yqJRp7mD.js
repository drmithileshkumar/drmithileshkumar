import { w as writable } from './index2-z1g76_ny.js';

const Guest = writable(false);
const TopBarHeight = writable(0);
const refreshApp = writable(false);
const currentPath = writable("Dr Mithilesh Kumar");
const navList = writable([]);
const darkMode = writable(false);
const scannedQR = writable();
const showLeft = writable(true);
const showRight = writable(false);
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

export { Guest as G, TopBarHeight as T, showLeft as a, scannedQR as b, currentPath as c, darkMode as d, bannerImage as e, navList as n, profileImage as p, refreshApp as r, showRight as s };
//# sourceMappingURL=stores3-yqJRp7mD.js.map
