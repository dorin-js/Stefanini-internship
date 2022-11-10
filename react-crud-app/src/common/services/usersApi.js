import { BASE_URL, HEADERS } from "./constants.js";

export class UsersApi {
  // constructor(BASE_URL, headers) {
  //   this.baseUrl = BASE_URL
  // }
  async _fetchJSON(endpoint, options = {}) {
    const response = await fetch(endpoint, {
      ...options,
      headers: HEADERS,
    });

    return await response.json();
  }

  getAllUsers() {
    return this._fetchJSON(`${BASE_URL}/users`, {
      method: "GET",
    });
  }
  getUserById(id) {
    return this._fetchJSON(`${BASE_URL}/users${id}`, {
      method: "GET",
    });
  }
  postUser(body) {
    return this._fetchJSON(`${BASE_URL}/users`, {
      method: "POST",
      body: JSON.stringify([body]),
    });
  }
}
