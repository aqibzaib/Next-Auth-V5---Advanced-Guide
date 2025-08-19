/**
 * An array of routes that are publicly accessible
 * @type {string[]}
 */
export const publicRoutes = ["/"];

/**
 * An array of routes that require authentication
 * @type {string[]}
 */
export const authRoutes = ["/auth/login", "/auth/register"];

/**
 * The prefix for API authentication routes.
 * Routes that start with this prefix are used for API authentication purposes.
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * Default path to redirect users after login
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/setting";
