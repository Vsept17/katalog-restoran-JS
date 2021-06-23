/* eslint-disable no-underscore-dangle */
import NotificationHelper from './notification';

const WebSocketInitiator = {
  init(url) {
    const webSocket = new WebSocket(url);
    webSocket.onmessage = this._onMessageHandler;
  },

  _onMessageHandler(message) {
    const restaurant = JSON.parse(message.data);
    NotificationHelper.sendNotification({
      title: `${restaurant.title}`,
      options: {
        body: restaurant.overview,
      },
    });
  },
};
export default WebSocketInitiator;
