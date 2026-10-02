import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static assets
app.use('/assets', express.static(join(__dirname, 'assets')));

// Serve index.html for root route explicitly
app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'index.html'));
});

// Fallback to serving root static files
app.use(express.static(__dirname));

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on http://0.0.0.0:${PORT}`);
});
