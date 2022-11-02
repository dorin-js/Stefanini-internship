export class HttpClient {
  constructor(options = {}) {
    this._baseUrl = options.baseUrl || "";
    this._headers = options.headers || {
      "Content-Type": "application/json",
      Authorization:
        "Bearer olu5NPakWYl5j4sI_KYgZ7AcybIN-B5ke6fyafBQzgGsB7vggw",
    };
  }

  setHeader(key, value) {
    this._headers[key] = value;
    return this;
  }

  async _fetchJSON(endpoint, options = {}) {
    let loading = false;
    try {
      loading = true;

      // const span = document.querySelector("#loading");
      // span.textContent = "Loading...";

      const response = await fetch(this._baseUrl + endpoint, {
        ...options,
        headers: this._headers,
      });

      if (!response.ok) throw new Error(response.statusText);

      if (options.parseResponse !== false && response.status !== 204) {
        loading = false;
        const data = await response.json();
        return { data, isLoading: loading };
      }

      return undefined;
    } catch (error) {
      loading = false;
      console.log(error);
    }
  }

  get(endpoint, options = {}) {
    return this._fetchJSON(endpoint, {
      ...options,
      method: "GET",
    });
  }

  post(endpoint, body, options = {}) {
    return this._fetchJSON(endpoint, {
      ...options,
      method: "POST",
      body: JSON.stringify(body),
    });
  }
}
