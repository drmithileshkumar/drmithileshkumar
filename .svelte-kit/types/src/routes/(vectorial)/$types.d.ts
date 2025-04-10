import type * as Kit from '@sveltejs/kit';

type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;
// @ts-ignore
type MatcherParam<M> = M extends (param : string) => param is infer U ? U extends string ? U : string : string;
type RouteParams = {  };
type RouteId = '/(vectorial)';
type MaybeWithVoid<T> = {} extends T ? T | void : T;
export type RequiredKeys<T> = { [K in keyof T]-?: {} extends { [P in K]: T[K] } ? never : K; }[keyof T];
type OutputDataShape<T> = MaybeWithVoid<Omit<App.PageData, RequiredKeys<T>> & Partial<Pick<App.PageData, keyof T & keyof App.PageData>> & Record<string, any>>
type EnsureDefined<T> = T extends null | undefined ? {} : T;
type OptionalUnion<U extends Record<string, any>, A extends keyof U = U extends U ? keyof U : never> = U extends unknown ? { [P in Exclude<A, keyof U>]?: never } & U : never;
export type Snapshot<T = any> = Kit.Snapshot<T>;
type LayoutRouteId = RouteId | "/(vectorial)/vectorial/(nonapp)" | "/(vectorial)/vectorial/(nonapp)/about" | "/(vectorial)/vectorial/(nonapp)/auth" | "/(vectorial)/vectorial/(nonapp)/comment/[commentID]" | "/(vectorial)/vectorial/(nonapp)/compose" | "/(vectorial)/vectorial/(nonapp)/drawings" | "/(vectorial)/vectorial/(nonapp)/learn" | "/(vectorial)/vectorial/(nonapp)/learn/advanced" | "/(vectorial)/vectorial/(nonapp)/learn/filters" | "/(vectorial)/vectorial/(nonapp)/learn/latex" | "/(vectorial)/vectorial/(nonapp)/learn/markers" | "/(vectorial)/vectorial/(nonapp)/learn/masks" | "/(vectorial)/vectorial/(nonapp)/learn/paths" | "/(vectorial)/vectorial/(nonapp)/learn/shapes" | "/(vectorial)/vectorial/(nonapp)/learn/styles" | "/(vectorial)/vectorial/(nonapp)/learn/text" | "/(vectorial)/vectorial/(nonapp)/learn/transform" | "/(vectorial)/vectorial/(nonapp)/legal/privacy" | "/(vectorial)/vectorial/(nonapp)/legal/refund" | "/(vectorial)/vectorial/(nonapp)/legal/terms" | "/(vectorial)/vectorial/(nonapp)/post/[postID]" | "/(vectorial)/vectorial/(nonapp)/search" | "/(vectorial)/vectorial/(nonapp)/settings" | "/(vectorial)/vectorial/(nonapp)/settings/profile" | "/(vectorial)/vectorial/(nonapp)/shipping" | "/(vectorial)/vectorial/(nonapp)/subscription" | "/(vectorial)/vectorial/(nonapp)/[...catchAll]" | "/(vectorial)/vectorial/(nonapp)/[publicID]" | "/(vectorial)/vectorial/(nonapp)/[publicID]/drawings" | "/(vectorial)/vectorial/(nonapp)/[publicID]/edit" | "/(vectorial)/vectorial/(nonapp)/[publicID]/edit/comment" | "/(vectorial)/vectorial/(nonapp)/[publicID]/invoices" | "/(vectorial)/vectorial/app" | "/(vectorial)/vectorial/download" | "/(vectorial)/vectorial/login"
type LayoutParams = RouteParams & { commentID?: string; postID?: string; catchAll?: string; publicID?: string }
type LayoutParentData = EnsureDefined<import('../$types.js').LayoutData>;

export type LayoutServerData = null;
export type LayoutData = Expand<LayoutParentData>;
export type LayoutProps = { data: LayoutData; children: import("svelte").Snippet }