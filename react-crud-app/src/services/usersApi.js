import { BASE_URL, HEADERS } from "./constants.js";

export class usersApi {
  _baseUrl = BASE_URL;
  _headers = HEADERS;

  async _fetchJSON(endpoint, options = {}) {
    const response = await fetch(endpoint, {
      ...options,
      headers: this._headers,
    });

    if (!response.ok) throw new Error(response.statusText);

    const data = await response.json();

    return data;
  }

  getAllUsers() {
    return this._fetchJSON(this._baseUrl + "/users", {
      method: "GET",
    });
  }
  getUserById(id) {
    return this._fetchJSON(this._baseUrl + "/users/" + id, {
      method: "GET",
    });
  }
  postUser(body) {
    return this._fetchJSON(this._baseUrl + "/users", {
      method: "POST",
      body: JSON.stringify(body),
    });
  }
}
