const MAX_WEBSOCKET_FAILS = 7;
const MIN_WEBSOCKET_RETRY_TIME = 3000; // 3 sec

const MAX_WEBSOCKET_RETRY_TIME = 300000; // 5 mins

class WebSocketClient {
  conn?: WebSocket | null;
  connectionUrl: null;
  token: string | null;
  sequence: number;
  stop: boolean;
  connectionFailCount: number;
  eventCallback?: Function;
  firstConnectCallback?: Function;
  reconnectCallback?: Function;
  errorCallback?: Function;
  closeCallback?: Function;
  connectingCallback?: Function;
  connectionTimeout: any;

  constructor() {
    this.connectionUrl = null;
    this.token = null;
    this.sequence = 1;
    this.stop = false;
    this.connectionFailCount = 0;
  }

  initialize(token: string | null, opts: any) {
    const defaults = {
      connectionUrl: this.connectionUrl,
    };

    const { connectionUrl } = Object.assign({}, defaults, opts);

    return new Promise((resolve, reject) => {
      if (this.conn) {
        resolve();
        return;
      }

      if (connectionUrl == null) {
        console.log('🔥 [WS] Websocket must have connection url');
        reject(new Error('🔥 [WS] Websocket must have connection url'));
        return;
      }

      if (this.connectionFailCount === 0) {
        console.log('[WS] Websocket connecting to '
        
        
        + connectionUrl);
      }

      this.conn = new WebSocket(connectionUrl);
      this.connectionUrl = connectionUrl;
      this.token = token;

      this.conn.onopen = () => {};

      this.conn.onclose = () => {
        this.conn = null;
        this.sequence = 1;
        if (this.connectionFailCount === 0) {
          console.log('[WS] Websocket closed');
        }

        this.connectionFailCount++;

        if (this.closeCallback) {
          this.closeCallback(this.connectionFailCount);
        }

        let retryTime = MIN_WEBSOCKET_RETRY_TIME;

        if (this.connectionFailCount > MAX_WEBSOCKET_FAILS) {
          retryTime = MIN_WEBSOCKET_RETRY_TIME * this.connectionFailCount;
          if (retryTime > MAX_WEBSOCKET_RETRY_TIME) {
            retryTime = MAX_WEBSOCKET_RETRY_TIME;
          }
        }

        if (this.connectionTimeout) {
          clearTimeout(this.connectionTimeout);
        }

        this.connectionTimeout = setTimeout(() => {
          if (this.stop) {
            clearTimeout(this.connectionTimeout);
            return;
          }
          this.initialize(token, opts);
        }, retryTime);
      };

      this.conn.onerror = () => {};

      this.conn.onmessage = (evt) => {
        const msg = JSON.parse(evt.data);

        if (msg.seq_reply) {
        } else if (this.eventCallback) {
          this.eventCallback(msg);
        }
      };
    });
  }

  setConnectingCallback(callback: Function) {
    this.connectingCallback = callback;
  }

  setEventCallback(callback: Function) {
    this.eventCallback = callback;
  }

  setFirstConnectCallback(callback: Function) {
    this.firstConnectCallback = callback;
  }

  setReconnectCallback(callback: Function) {
    this.reconnectCallback = callback;
  }

  setErrorCallback(callback: Function) {
    this.errorCallback = callback;
  }

  setCloseCallback(callback: Function) {
    this.closeCallback = callback;
  }

  close(stop = false) {
    this.connectionFailCount = 0;
    this.sequence = 1;
    if (this.conn && this.conn.readyState === WebSocket.OPEN) {
      this.conn.onclose = () => {};
      this.conn.close();
      this.conn = null;
      console.log('[WS] Websocket closed');
    }
  }
}

export default new WebSocketClient();
