export default class ClientError extends Error {
  url: string;
  serverErrorId: any;
  statusCode: any;
  constructor(baseUrl: string, data: any) {
    super(data.messages);
    this.url = data.url;
    this.statusCode = data.statusCode;
    this.serverErrorId = data.serverErrorId
  }
}
