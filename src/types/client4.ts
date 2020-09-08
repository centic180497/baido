export type logLevel = 'ERROR' | 'WARNING' | 'INFO';

export type Options = {
  headers?: { [x: string]: string };
  method?:
    | 'get'
    | 'GET'
    | 'delete'
    | 'DELETE'
    | 'head'
    | 'HEAD'
    | 'options'
    | 'OPTIONS'
    | 'post'
    | 'POST'
    | 'put'
    | 'PUT'
    | 'patch'
    | 'PATCH';
  credentials?: 'omit' | 'same-origin' | 'include';
  params?: any;
  data?: any;
};

export type RequestConfig = {
  url?: string;
  params?: any;
  headers?: { [x: string]: string };
  method:
    | 'get'
    | 'GET'
    | 'delete'
    | 'DELETE'
    | 'head'
    | 'HEAD'
    | 'options'
    | 'OPTIONS'
    | 'post'
    | 'POST'
    | 'put'
    | 'PUT'
    | 'patch'
    | 'PATCH';
  data?: any;
};
