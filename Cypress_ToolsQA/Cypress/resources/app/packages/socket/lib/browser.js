"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createWebsocket = exports.client = void 0;
const tslib_1 = require("tslib");
const socket_io_client_1 = tslib_1.__importDefault(require("socket.io-client"));
exports.client = socket_io_client_1.default;
function createWebsocket({ path, browserFamily }) {
    return (0, socket_io_client_1.default)({
        path,
        // TODO(webkit): the websocket socket.io transport is busted in WebKit, need polling
        // https://github.com/cypress-io/cypress/issues/23807
        transports: browserFamily === 'webkit' ? ['polling'] : ['websocket'],
    });
}
exports.createWebsocket = createWebsocket;
