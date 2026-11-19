
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8'
  });

  res.end(`
<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>WEB3 VISION</title>
<style>
* { box-sizing: border-box; }
body {
  margin: 0;
  background: #101827;
  color: white;
  font-family: Arial, sans-serif;
}
header {
  background: #172438;
  padding: 20px;
  text-align: center;
  border-bottom: 2px solid #00c8ff;
}
header h1 { color: #00c8ff; margin: 0; }
nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background: #1d2d43;
  padding: 12px;
  gap: 18px;
}
nav a {
  color: white;
  text-decoration: none;
  font-size: 14px;
}
nav a:hover { color: #00c8ff; }
.hero {
  text-align: center;
  padding: 65px 20px;
  background: linear-gradient(135deg,#142c48,#101827);
}
.hero h2 { font-size: 30px; }
.hero p { color: #bdc9d8; line-height: 1.7; }
.hero strong { color: #00c8ff; }
.container {
  max-width: 950px;
  margin: auto;
  padding: 25px 18px;
}
.section-title { color: #00c8ff; }
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(220px,1fr));
  gap: 16px;
}
.card {
  background: #1b2a40;
  padding: 22px;
  border-radius: 12px;
  border: 1px solid #30435d;
}
.card h3 { color: #00c8ff; }
.card p { color: #bdc9d8; line-height: 1.6; }
footer {
  text-align: center;
  background: #172438;
  padding: 25px;
  color: #9aacc0;
  margin-top: 35px;
}
</style>
</head>
<body>

<header>
<h1>🚀 WEB3 VISION</h1>
<p>Explore The Future of Digital Technology</p>
</header>

<nav>
<a href="#home">Beranda</a>
<a href="#berita">Berita Crypto</a>
<a href="#edukasi">Edukasi Web3</a>
<a href="#airdrop">Airdrop</a>
<a href="#peluang">Peluang Digital</a>
</nav>

<section class="hero" id="home">
<h2>Jelajahi Masa Depan Web3</h2>
<p>Informasi Crypto, Blockchain, Airdrop dan Peluang Digital.</p>
<p><strong>Belajar hari ini, berkembang untuk masa depan.</strong></p>
</section>

<main class="container">
<h2 class="section-title">Jelajahi WEB3 VISION</h2>

<div class="cards">
<div class="card" id="berita">
<h3>📰 Berita Crypto</h3>
<p>Ikuti perkembangan cryptocurrency dan teknologi blockchain.</p>
</div>

<div class="card" id="edukasi">
<h3>📚 Edukasi Web3</h3>
<p>Pelajari Web3, DeFi, wallet, NFT dan blockchain dari dasar.</p>
</div>

<div class="card" id="airdrop">
<h3>🎁 Informasi Airdrop</h3>
<p>Temukan informasi peluang airdrop dan aktivitas komunitas.</p>
</div>

<div class="card" id="peluang">
<h3>💡 Peluang Digital</h3>
<p>Jelajahi kesempatan membangun penghasilan melalui dunia digital.</p>
</div>
</div>

</main>

<footer>
<h3>WEB3 VISION</h3>
<p>Belajar • Berbagi • Berkembang</p>
<p>© 2026 WEB3 VISION. All Rights Reserved.</p>
</footer>

</body>
</html>
  `);
});

server.listen(3000, '0.0.0.0', () => {
  console.log('WEB3 VISION berjalan di port 3000');
});
