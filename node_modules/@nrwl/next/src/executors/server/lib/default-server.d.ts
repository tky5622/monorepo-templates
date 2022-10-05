import { NextServerOptions, ProxyConfig } from '../../../utils/types';
/**
 * Adapted from https://github.com/zeit/next.js/blob/master/examples/with-custom-reverse-proxy/server.js
 * @param settings
 */
export declare function defaultServer(settings: NextServerOptions, proxyConfig?: ProxyConfig): Promise<void>;
