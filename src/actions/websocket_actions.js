import WebSocketClient from 'client/websocket_client'

export function initialize() {
  if (!window.WebSocket) {
    console.log('🔥 [WS] Browser does not support websocket');
    return;
  }
  
  console.log('[WS] Browser supports websocket');
  WebSocketClient.initialize("ws://10.49.46.54")
}
