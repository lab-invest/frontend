export type DefaultUserData = {
  uid: string;
  name: string;
  email: string;
  password: string;
  birth: string;
  cpf: string;
  confirmPassword?: string;
};

export default class AppData {
  private readonly baseUrl: string;

  constructor(baseUrl: string = "") {
    this.baseUrl =
      baseUrl || "http://ec2-34-226-163-14.compute-1.amazonaws.com:8080";
  }

  async deleteUserAccount(uid: string): Promise<JSON> {
    return this.makeRequest(`/user?uuid=${encodeURIComponent(uid)}`, "DELETE");
  }

  async patchUserName(uid: string, name: string): Promise<JSON> {
    return this.makeRequest(
      `/updateName?uuid=${encodeURIComponent(uid)}&name=${name}`,
      "PATCH"
    );
  }

  async getUserData(uid: string): Promise<JSON> {
    return this.makeRequest(`/user?uuid=${encodeURIComponent(uid)}`, "GET");
  }

  async getUserWallets(uid: string): Promise<JSON> {
    return this.makeRequest(
      `/user/wallets?uuid=${encodeURIComponent(uid)}`,
      "GET"
    );
  }

  async getStockInfos(uid: string): Promise<JSON> {
    return this.makeRequest(
      `/bff/stock/marketplace?ticker=${encodeURIComponent(uid)}`,
      "GET"
    );
  }

  async getWalletComparison(uid: string): Promise<JSON> {
    return this.makeRequest(
      `/bff/wallet/comparison?uuid=${encodeURIComponent(uid)}`,
      "GET"
    );
  }

  async getStockComparison(stocks: string[]): Promise<JSON> {
    return this.makeRequest(
      `/bff/stock/comparison?ticker=${stocks}`,
      "GET"
    );
  }

  async getWalletByName(uid: string, walletName: string): Promise<JSON> {
    return this.makeRequest(
      `/user/wallet?uuid=${encodeURIComponent(uid)}&wallet=${walletName}`,
      "GET"
    );
  }

  async getWalletComparisonAside(uid: string, walletName: string): Promise<JSON> {
    return this.makeRequest(
      `/bff/stock/comparison/aside?uuid=${encodeURIComponent(uid)}&wallet=${walletName}`,
      "GET"
    );
  }

  async getUserBalance(uid: string): Promise<JSON> {
    return this.makeRequest(
      `/user/balance?uuid=${encodeURIComponent(uid)}`,
      "GET"
    );
  }

  async getStokpage(): Promise<JSON> {
    return this.makeRequest(`/bff/stock/stockpage`, "GET");
  }

  async getMarketplace(ticker: string) {
    return this.makeRequest(`/bff/stock/marketplace?ticker=${ticker}`, "GET");
  }

  async buyStock(
    uid: string,
    wallet: string,
    ticker: string,
    quantity: number,
    average_price: number
  ): Promise<JSON> {
    return this.makeRequest(`/stock?uuid=${uid}&wallet=${wallet}`, "PATCH", {
      ticker,
      quantity,
      average_price,
    });
  }

  async deleteUser(uid: string): Promise<JSON> {
    return this.makeRequest(`/user?uuid=${encodeURIComponent(uid)}`, "DELETE");
  }

  async updateUserName(uid: string, name: string): Promise<JSON> {
    return this.makeRequest(`/updateName?uuid=${uid}&name=${name}`, "PATCH");
  }

  async resetAccount(uid: string): Promise<JSON> {
    return this.makeRequest(`/cleanUser?uuid=${uid}`, "PATCH");
  }

  async createUserData(data: DefaultUserData): Promise<JSON> {
    return this.makeRequest("/user", "POST", {
      uuid: data.uid,
      cpf: data.cpf,
      name: data.name,
      email: data.email,
      password: data.password,
      birth_date: data.birth,
      user_photo: "",
    });
  }

  private async makeRequest<T>(
    endpoint: string,
    method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH",
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
      console.log(`Making ${method} request to URL:`, url); // Log para depurar a URL e o método
      const response = await fetch(url, options);

      if (!response.ok) {
        const errorDetails = await response.text();
        throw new Error(
          `Request failed with status ${response.status}: ${errorDetails}`
        );
      }

      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        // Retorna a resposta parseada como JSON
        return await response.json();
      } else {
        // Retorna a resposta como texto se não for JSON
        return (await response.text()) as unknown as T;
      }
    } catch (error) {
      console.error(`Error during ${method} request to ${url}:`, error);
      throw error;
    }
  }
}
