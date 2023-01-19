export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["Hdtl192.png","Hdtl512.png","favicon.png","manifest.json"]),
	mimeTypes: {".png":"image/png",".json":"application/json"},
	_: {
		entry: {"file":"_app/immutable/start-531b98f8.js","imports":["_app/immutable/start-531b98f8.js","_app/immutable/chunks/index-022ea163.js","_app/immutable/chunks/singletons-fc88f71d.js","_app/immutable/chunks/index-697c4ca9.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js'),
			() => import('../output/server/nodes/3.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/fix",
				pattern: /^\/fix\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
