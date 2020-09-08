import axios from 'axios';
// import ClientError from './client4_error'

import { Options } from 'types/client4';
import ClientError from './client4_error';

const HEADER_AUTH = 'Authorization';
const HEADER_BEARER = 'BEARER';
const HEADER_REQUESTED_WITH = 'X-Requested-With';
const HEADER_USER_AGENT = 'User-Agent';

export default class Client4 {
  token = '';
  url = '';
  urlVersion = '/api/v4';
  defaultHeaders: { [x: string]: string } = {};
  userId = '';
  userRoles?: string;

  getUrl() {
    return this.url;
  }

  setUrl(url: string) {
    this.url = url;
  }

  getToken() {
    return this.token;
  }

  setToken(token: string) {
    this.token = token;
  }

  setUserId(userId: string) {
    this.userId = userId;
  }

  getUrlVersion() {
    return this.urlVersion;
  }

  getBaseRoute() {
    return `${this.url}${this.urlVersion}`;
  }

  getUsersRoute() {
    return `${this.getBaseRoute()}/users`;
  }

  getUserRoute(userId: string) {
    return `${this.getUsersRoute()}/${userId}`;
  }

  getCamerasRoute() {
    return `${this.getBaseRoute}/cameras`;
  }

  getCameraRoute(cameraId: string) {
    return `${this.getCamerasRoute()}/${cameraId}`;
  }

  getViolationsRoute() {
    return `${this.getBaseRoute()}/violations`;
  }

  getViolationRoute(violationId: string) {
    return `${this.getViolationsRoute()}/${violationId}`;
  }

  getOptions(options: Options) {
    const newOptions: Options = { ...options };

    const headers: { [x: string]: string } = {
      ...this.defaultHeaders,
    };

    if (this.token) {
      headers[HEADER_AUTH] = `${HEADER_BEARER} ${this.token}`;
    }

    return { ...newOptions, headers };
  }

  login = async (username: string, password: string) => {
    const { data } = await this.doFetchWithResponse(`${this.getUsersRoute()}/login`, {
      method: 'post',
      data: { username, password },
    });
  };

  doFetch = async (url: string, options: Options) => {
    const { data } = await this.doFetchWithResponse(url, options);

    return data;
  };

  doFetchWithResponse = async (url: string, options: Options) => {
    try {
      const { data } = await axios({ url, ...this.getOptions(options) });

      return { data };
    } catch (error) {
      throw new ClientError(this.getUrl(), {
        messages: error.response.data.messages,
        serverErrorId: error.response.data.id,
        statusCode: error.response.status,
      });
    }
  };
}
