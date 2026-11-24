
const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
    });

    res.end(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Coderwanda Ltd | Digital Innovation</title>

    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: Arial, sans-serif;
        }

        body {
            background: #f5f7fb;
            color: #1e293b;
        }

        header {
            background: #0f172a;
            color: white;
            padding: 20px 8%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
        }

        .logo {
            font-size: 25px;
            font-weight: bold;
            color: #38bdf8;
        }

        nav a {
            color: white;
            text-decoration: none;
            margin-left: 25px;
            font-size: 15px;
        }

        nav a:hover {
            color: #38bdf8;
        }

        .hero {
            min-height: 480px;
            padding: 100px 8%;
            background: linear-gradient(120deg, #0f172a, #164e63);
            color: white;
            display: flex;
            align-items: center;
        }

        .hero-content {
            max-width: 650px;
        }

        .hero h1 {
            font-size: 48px;
            margin-bottom: 20px;
            line-height: 1.2;
        }

        .hero h1 span {
            color: #38bdf8;
        }

        .hero p {
            font-size: 18px;
            line-height: 1.7;
            margin-bottom: 30px;
            color: #dbeafe;
        }

        .btn {
            display: inline-block;
            padding: 14px 25px;
            border-radius: 6px;
            background: #0284c7;
            color: white;
            text-decoration: none;
            margin-right: 12px;
            font-weight: bold;
        }

        .btn:hover {
            background: #0369a1;
        }

        .section {
            padding: 70px 8%;
            text-align: center;
        }

        .section h2 {
            font-size: 32px;
            margin-bottom: 15px;
            color: #0f172a;
        }

        .section-intro {
            color: #64748b;
            margin-bottom: 40px;
            line-height: 1.6;
        }

        .services {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: 25px;
        }

        .service-card {
            background: white;
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.06);
        }

        .service-card h3 {
            margin: 15px 0;
            color: #0369a1;
        }

        .service-card p {
            color: #64748b;
            line-height: 1.6;
        }

        .icon {
            font-size: 38px;
        }

        .about {
            background: white;
            line-height: 1.8;
        }

        footer {
            background: #0f172a;
            color: white;
            padding: 30px 8%;
            text-align: center;
        }

        footer p {
            color: #cbd5e1;
            margin: 8px;
        }

        @media (max-width: 600px) {
            header {
                gap: 15px;
            }

            nav a {
                margin-left: 0;
                margin-right: 12px;
            }

            .hero h1 {
                font-size: 34px;
            }
        }
    </style>
</head>

<body>

    <header>
        <div class="logo">Coderwanda Ltd.</div>

        <nav>
            <a href="/">Home</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <a href="/login">Login</a>
        </nav>
    </header>

    <section class="hero">
        <div class="hero-content">
            <h1>Building a Smarter <span>Digital Future</span></h1>

            <p>
                Welcome to Coderwanda Ltd. We provide innovative
                technology solutions that help businesses and
                individuals grow in the digital world.
            </p>

            <a href="#services" class="btn">Explore Services</a>
            <a href="/login" class="btn">Get Started</a>
        </div>
    </section>

    <section class="section" id="services">
        <h2>Our Services</h2>

        <p class="section-intro">
            Technology solutions designed to help you succeed.
        </p>

        <div class="services">

            <div class="service-card">
                <div class="icon">💻</div>
                <h3>Web Development</h3>
                <p>Modern, responsive and user-friendly websites
                for businesses and organizations.</p>
            </div>

            <div class="service-card">
                <div class="icon">⚙️</div>
                <h3>Software Solutions</h3>
                <p>Reliable software applications designed
                to solve real-world problems.</p>
            </div>

            <div class="service-card">
                <div class="icon">🔒</div>
                <h3>IT Solutions</h3>
                <p>Technology support and digital solutions
                that help protect and improve your systems.</p>
            </div>

        </div>
    </section>

    <section class="section about" id="about">
        <h2>About Coderwanda Ltd</h2>

        <p>
            Coderwanda Ltd is committed to delivering creative,
            reliable and accessible digital solutions.
            Our goal is to use technology to create opportunities,
            improve productivity and support innovation.
        </p>
    </section>

    <footer id="contact">
        <h3>Coderwanda Ltd.</h3>
        <p>Email: info@coderwanda.com</p>
        <p>Location: Rwanda</p>
        <p>&copy; 2026 Coderwanda Ltd. All rights reserved.</p>
    </footer>

</body>
</html>
    `);
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
