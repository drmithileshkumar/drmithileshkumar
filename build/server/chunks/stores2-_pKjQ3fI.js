import { w as writable } from './index2-yB1Itf2W.js';

const TopBarHeight = writable(0);
const refreshApp = writable(false);
const currentPath = writable("Dr Mithilesh Kumar");
const navList = writable([]);
const darkMode = writable(false);
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

export { TopBarHeight as T, showLeft as a, currentPath as c, darkMode as d, navList as n, refreshApp as r, showRight as s };
//# sourceMappingURL=stores2-_pKjQ3fI.js.map
