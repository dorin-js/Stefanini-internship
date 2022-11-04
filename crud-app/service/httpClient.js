import { BASE_URL, HEADERS } from "./constants.js";
export class HttpClient {
  _baseUrl = BASE_URL;
  _headers = HEADERS;

  constructor() {}

  async _fetchJSON(endpoint, options = {}) {
    const response = await fetch(this._baseUrl + endpoint, {
      ...options,
      headers: this._headers,
    });

    if (!response.ok) throw new Error(response.statusText);

    if (options.parseResponse !== false && response.status !== 204) {
      const data = await response.json();
      return { data };
    }

    return undefined;
  }

  getAllUsers(options = {}) {
    return this._fetchJSON("/users", {
      ...options,
      method: "GET",
    });
  }
  getUserById(id, options = {}) {
    return this._fetchJSON("/users/" + id, {
      ...options,
      method: "GET",
    });
  }

  postUser(endpoint, body, options = {}) {
    return this._fetchJSON(endpoint, {
      ...options,
      method: "POST",
      body: JSON.stringify(body),
    });
  }
}
