// src/index.js
import { useHistory, useLocation } from 'react-router-dom';

/**
 * Navigate to a different path.
 * @param {string} path - The path to navigate to.
 * @throws {Error} Throws an error if the path is invalid or empty.
 */
export function navigateTo(path) {
  if (typeof path !== 'string' || path.trim().length === 0) {
    throw new Error('Invalid path provided: must be a non-empty string');
  }
  
  const history = useHistory();
  history.push(path);
}

/**
 * Navigate to a different path with query parameters.
 * @param {string} path - The path to navigate to.
 * @param {Object} params - Query parameters as key-value pairs.
 * @throws {Error} Throws an error if the path is invalid or empty.
 */
export function navigateWithParams(path, params = {}) {
  if (typeof path !== 'string' || path.trim().length === 0) {
    throw new Error('Invalid path provided: must be a non-empty string');
  }

  const history = useHistory();
  const queryString = new URLSearchParams(params).toString();
  history.push(`${path}?${queryString}`);
}

/**
 * Get query parameter value from the current URL.
 * @param {string} key - The key of the query parameter to retrieve.
 * @returns {string|null} The value of the query parameter, or null if not found.
 */
export function getQueryParam(key) {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  return searchParams.get(key);
}

/**
 * Redirect to a different URL.
 * @param {string} url - The URL to redirect to.
 * @throws {Error} Throws an error if the URL is invalid or empty.
 */
export function redirectTo(url) {
  if (typeof url !== 'string' || url.trim().length === 0) {
    throw new Error('Invalid URL provided: must be a non-empty string');
  }

  const history = useHistory();
  history.push(url);
}
