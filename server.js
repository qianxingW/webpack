let express = require('express');

let app = express();

app.get('/api/user', (req, res) => {
   res.json({
      name: 'lufei'
   });
});

app.listen(3000);
