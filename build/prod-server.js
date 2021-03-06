const Express = require('express');
const App = Express();
const Path = require('path');
const DistPath=Path.resolve(__dirname, '../dist');
//加载静态地址
App.use(Express.static(DistPath));
console.log(Path.join(DistPath, 'index.html'));
App.get('/', (req, res) => {
  res.sendFile(Path.join(DistPath, 'index.html'));
})

App.listen(8082, function() {
  console.log('Server listening on http://localhost:8082, Ctrl+C to stop')
})

