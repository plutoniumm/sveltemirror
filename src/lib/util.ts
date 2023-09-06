/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-this-alias */

/**
 * Reduce calls to the passed function.
 *
 * @param func - Function to debounce.
 * @param threshold - The delay to avoid recalling the function.
 * @param execAsap - If true, the Function is called at the start of the threshold, otherwise the Function is called at the end of the threshold.
 */
export function debounce<T extends (...args: any[]) => any> (func: T, threshold: number, execAsap = false): T {
    let timeout: any;

    return function debounced (this: any, ...args: any[]): any {
        const self = this;

        if (timeout) clearTimeout(timeout);
        else if (execAsap) func.apply(self, args);

        timeout = setTimeout(delayed, threshold || 100);

        function delayed (): void {
            if (!execAsap) func.apply(self, args);
            timeout = null;
        }
    } as T;
}

/**
 * Get cyrb53 hash of string.
 *
 * @param str - String to hash.
 * @param seed - Seed to hash with.
 * @returns Hashed string.
 * @see https://stackoverflow.com/a/52171480
*/
const cyrb53 = (str: string, seed: number = 0): number => {
    let h1 = 0xdeadbeef ^ seed, h2 = 0x41c6ce57 ^ seed;
    for (let i = 0, ch; i < str.length; i++) {
        ch = str.charCodeAt(i);
        h1 = Math.imul(h1 ^ ch, 2654435761);
        h2 = Math.imul(h2 ^ ch, 1597334677);
    }
    h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507);
    h1 ^= Math.imul(h2 ^ (h2 >>> 13), 3266489909);
    h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507);
    h2 ^= Math.imul(h1 ^ (h1 >>> 13), 3266489909);

    return 4294967296 * (2097151 & h2) + (h1 >>> 0);
};


let globId: string | null = null;
/**
 * Get the ID of the element.
 *
 * @param id - ID of the element.
 */
export const getID = (id: string | undefined): string => {
    // if id is passed, save. If not hash the url
    if (id) {
        if (globId === null) globId = id;
        return id;
    } else {
        if (typeof window === 'undefined')
            throw new Error('Cannot get ID in SSR');
        if (globId === null)
            globId = cyrb53(
                window.location.href
                    .split('?')[0]
                    .split('#')[0]
            ).toString();
        return globId;
    };
}
/**
 * Save to localStorage.
 *
 * @param value - Value to save.
 * @param id - Optional id to save under.
 */
export let save = (value: any, id: string): void => {
    if (typeof localStorage === 'undefined') return;
    localStorage.setItem('sv-mirror-v' + id, value);
};

/**
 * Load from localStorage.
 *
 * @param id - Optional id to load from.
 */
export let load = (id: string): string | void => {
    if (typeof localStorage === 'undefined') return;
    let value = localStorage.getItem('sv-mirror-v' + id);

    if (value === null) return;
    return value;
};
