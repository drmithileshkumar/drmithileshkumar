import type * as Kit from '@sveltejs/kit';

type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;
// @ts-ignore
type MatcherParam<M> = M extends (param : string) => param is infer U ? U extends string ? U : string : string;
type RouteParams = {  };
type RouteId = '/(mathril)/mathril';
type MaybeWithVoid<T> = {} extends T ? T | void : T;
export type RequiredKeys<T> = { [K in keyof T]-?: {} extends { [P in K]: T[K] } ? never : K; }[keyof T];
type OutputDataShape<T> = MaybeWithVoid<Omit<App.PageData, RequiredKeys<T>> & Partial<Pick<App.PageData, keyof T & keyof App.PageData>> & Record<string, any>>
type EnsureDefined<T> = T extends null | undefined ? {} : T;
type OptionalUnion<U extends Record<string, any>, A extends keyof U = U extends U ? keyof U : never> = U extends unknown ? { [P in Exclude<A, keyof U>]?: never } & U : never;
export type Snapshot<T = any> = Kit.Snapshot<T>;
type PageParentData = Omit<Omit<EnsureDefined<import('../../$types.js').LayoutData>, keyof import('../$types.js').LayoutData> & EnsureDefined<import('../$types.js').LayoutData>, keyof LayoutData> & EnsureDefined<LayoutData>;
type LayoutRouteId = RouteId | "/(mathril)/mathril" | "/(mathril)/mathril/about" | "/(mathril)/mathril/class[classn]" | "/(mathril)/mathril/class[classn]/chapter[chaptern]" | "/(mathril)/mathril/games" | "/(mathril)/mathril/games/addition" | "/(mathril)/mathril/games/addition2" | "/(mathril)/mathril/games/appDerivative" | "/(mathril)/mathril/games/beattarget" | "/(mathril)/mathril/games/clock" | "/(mathril)/mathril/games/counting" | "/(mathril)/mathril/games/division" | "/(mathril)/mathril/games/eucliddivisionalgorithm" | "/(mathril)/mathril/games/eucliddivisionlemma" | "/(mathril)/mathril/games/inout" | "/(mathril)/mathril/games/integral" | "/(mathril)/mathril/games/lineareqn" | "/(mathril)/mathril/games/lp" | "/(mathril)/mathril/games/matchnumber" | "/(mathril)/mathril/games/multiplication" | "/(mathril)/mathril/games/subtraction" | "/(mathril)/mathril/games/subtraction2" | "/(mathril)/mathril/[...catchAll]"
type LayoutParams = RouteParams & { classn?: string; chaptern?: string; catchAll?: string }
type LayoutParentData = Omit<EnsureDefined<import('../../$types.js').LayoutData>, keyof import('../$types.js').LayoutData> & EnsureDefined<import('../$types.js').LayoutData>;

export type PageServerData = null;
export type PageLoad<OutputData extends OutputDataShape<PageParentData> = OutputDataShape<PageParentData>> = Kit.Load<RouteParams, PageServerData, PageParentData, OutputData, RouteId>;
export type PageLoadEvent = Parameters<PageLoad>[0];
export type PageData = Expand<Omit<PageParentData, keyof Kit.LoadProperties<Awaited<ReturnType<typeof import('../../../../../../src/routes/(mathril)/mathril/+page.js').load>>>> & OptionalUnion<EnsureDefined<Kit.LoadProperties<Awaited<ReturnType<typeof import('../../../../../../src/routes/(mathril)/mathril/+page.js').load>>>>>>;
export type LayoutServerData = null;
export type LayoutData = Expand<LayoutParentData>;