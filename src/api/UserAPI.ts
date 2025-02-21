import {User} from "../data/types";
import axios, {AxiosResponse} from "axios";

export default class UserAPI{
  private readonly baseUrl: string;

  constructor() {
    this.baseUrl = 'https://petstore.swagger.io/v2/'
  }

  async createUser(data: User) {
    return await axios.post(`${this.baseUrl}user`, data);
  }

  async getUser(username: string): Promise<AxiosResponse<User>> {
    return await axios.get(`${this.baseUrl}user/${username}`);
  }

  async createUsers(data: User[]) {
    return await axios.post(`${this.baseUrl}user/createWithList`, data);
  }

  async login(username: string, password: string): Promise<{message: string}> {
    const response = await axios.get(`${this.baseUrl}user/login`, {params: {username, password}})

    return {
      message: response.data.message,
    };
  }

  async logout() {
    return await axios.get(`${this.baseUrl}user/logout`);
  }
}
