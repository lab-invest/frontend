export type DefaultUserData = {
  uid: string;
  name: string;
  email: string;
  password: string;
  birth: string;
  cpf: string;
  confirmPassword: string;
};

export default class AppData {
  private readonly baseUrl: string;

  constructor(baseUrl: string = "") {
    this.baseUrl = baseUrl || "https://investlab-back.onrender.com";
  }

  async getUserData(uid: string): Promise<JSON> {
    return this.makeRequest(`/user?uuid=${encodeURIComponent(uid)}`, "GET");
  }

  private async makeRequest<T>(
    endpoint: string,
    method: "GET" | "POST" | "PUT" | "DELETE",
    data?: object,
    additionalHeaders: Record<string, string> = {}
  ): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;

    const headers: Record<string, string> = {
      "Content-Type": "application/json",
      ...additionalHeaders,
    };

    const options: RequestInit = {
      method,
      headers,
    };

    if (data) {
      options.body = JSON.stringify(data);
    }

    try {
      // console.log(`Making ${method} request to URL:`, url); // Log para depurar a URL e o método
      const response = await fetch(url, options);

      if (!response.ok) {
        const errorDetails = await response.text();
        throw new Error(
          `Request failed with status ${response.status}: ${errorDetails}`
        );
      }

      // console.log(`Response from ${method} request:`, response); // Log da resposta
      return response.json();
    } catch (error) {
      console.error(`Error during ${method} request to ${url}:`, error);
      throw error;
    }
  }
}
