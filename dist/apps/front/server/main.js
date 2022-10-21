'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
var tslib_1 = require('tslib')
/*
 * This is only a minimal custom server to get started.
 * You may want to consider using Express or another server framework, and enable security features such as CORS.
 *
 * For more examples, see the Next.js repo:
 * - Express: https://github.com/vercel/next.js/tree/canary/examples/custom-server-express
 * - Hapi: https://github.com/vercel/next.js/tree/canary/examples/custom-server-hapi
 */
var http_1 = require('http')
var next_1 = tslib_1.__importDefault(require('next'))
var path = tslib_1.__importStar(require('path'))
var url_1 = require('url')
// Next.js server options:
// - The environment variable is set by `@nrwl/next:server` when running the dev server.
// - The fallback `__dirname` is for production builds.
// - Feel free to change this to suit your needs.
var dir = process.env.NX_NEXT_DIR || path.join(__dirname, '..')
var dev = process.env.NODE_ENV === 'development'
// HTTP Server options:
// - Feel free to change this to suit your needs.
var hostname = process.env.HOST || 'localhost'
var port = process.env.PORT ? parseInt(process.env.PORT) : 4200
function main() {
  return tslib_1.__awaiter(this, void 0, void 0, function () {
    var nextApp, handle, server
    return tslib_1.__generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          nextApp = (0, next_1.default)({ dev: dev, dir: dir })
          handle = nextApp.getRequestHandler()
          return [4 /*yield*/, nextApp.prepare()]
        case 1:
          _a.sent()
          server = (0, http_1.createServer)(function (req, res) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore //
            var parsedUrl = (0, url_1.parse)(req.url, true)
            handle(req, res, parsedUrl)
          })
          server.listen(port, hostname)
          console.log('[ ready ] on http://'.concat(hostname, ':').concat(port))
          return [2 /*return*/]
      }
    })
  })
}
main().catch(function (err) {
  console.error(err)
  process.exit(1)
})
//# sourceMappingURL=main.js.map
