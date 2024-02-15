import { writable } from "svelte/store";
import { browser } from "$app/environment";

export const isAuth = writable(false);
export const Guest = writable(false);
export const TopBarHeight = writable(0);
export const refreshApp = writable(false);
export const clipboardData = writable('');
export const currentPath = writable('Dr Mithilesh Kumar');
export const navList = writable([]);
export const darkMode = writable(false);
export const showSettings = writable(false)
export const loggedInUser = writable();
export const visitedUser = writable();
export const scannedQR = writable();
export const INVOICE = writable();
export const showLeft = writable(true);
export const showRight = writable(false);
export const saveProfile = writable(false);
const defaultProfileImage = '/avatar.svg';
const initialProfileImage = browser ? window.localStorage.getItem('profileImage') ?? defaultProfileImage : defaultProfileImage;
export const profileImage = writable(initialProfileImage);
profileImage.subscribe((value) => {
    if(browser) {
        window.localStorage.setItem('profileImage', value);
    }
});
const defaultBannerImage = '/avatar.svg';
const initialBannerImage = browser ? window.localStorage.getItem('bannerImage') ?? defaultBannerImage : defaultBannerImage;
export const bannerImage = writable(initialBannerImage);
bannerImage.subscribe((value) => {
    if(browser) {
        window.localStorage.setItem('bannerImage', value);
    }
});
