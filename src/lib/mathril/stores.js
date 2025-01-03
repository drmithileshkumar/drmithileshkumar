//@ts-nocheck
import { writable } from "svelte/store";
import { browser } from "$app/environment";

export const Guest = writable(false);
export const TopBarHeight = writable(0);
export const refreshApp = writable(false);
export const clipboardData = writable('');
export const currentPath = writable('Mathril');
export const navList = writable([]);
export const darkMode = writable(true);
export const showSettings = writable(false)
export const loggedInUser = writable();
export const visitedUser = writable();
export const currentUserDetails = writable();
export const scannedQR = writable();
export const INVOICE = writable();
export const showLeft = writable(true);
export const showRight = writable(false);
export const saveProfile = writable(false);
export const lineBreak = writable("");

export const guestPopUp = writable(true);
const defaultGuest = null;
const initialGuest = browser ? window.localStorage.getItem('guestID') ?? defaultGuest : defaultGuest;
export const guestID = writable(initialGuest);
guestID.subscribe((value) => {
    if(browser && typeof value === 'string') {
        window.localStorage.setItem('guestID', value);
    }
})

const defaultProfileImage = '/user.svg';
const initialProfileImage = browser ? window.localStorage.getItem('profileImage') ?? defaultProfileImage : defaultProfileImage;
export const profileImage = writable(initialProfileImage);
profileImage.subscribe((value) => {
    if(browser && typeof value === 'string') {
        window.localStorage.setItem('profileImage', value);
    }
});
const defaultBannerImage = '/avatar.svg';
const initialBannerImage = browser ? window.localStorage.getItem('bannerImage') ?? defaultBannerImage : defaultBannerImage;
export const bannerImage = writable(initialBannerImage);
bannerImage.subscribe((value) => {
    if(browser && typeof value === 'string') {
        window.localStorage.setItem('bannerImage', value);
    }
});
const defaultPerformance = {
    publicID: "", attempted: 0, correct: 0 
}
const initialPerformance = browser ? window.localStorage.getItem('performance') ?? defaultPerformance : defaultPerformance;
export const performance = writable(initialPerformance);
performance.subscribe((value) => {
    if(browser) {
        window.localStorage.setItem('performance', value);
    }
});