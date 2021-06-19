require('esbuild').serve({
  port: 8000,
  host: '127.0.0.1',
  servedir: 'www'
}, {
  entryPoints: ['src/index.js'],
  bundle: true,
  loader: { '.js': 'jsx' },
  inject: ['./react-shim.js'],
  target: ['es2020'],
  splitting: true,
  outdir: 'www',
  format: 'esm',
}).then(server => {
  const { port, host } = server
  
  console.log(`Serving on http://${host}:${port}`)
})
