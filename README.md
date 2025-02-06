### Clickjacking Vulnerability Tester

The Clickjacking Vulnerability Tester is a web-based tool designed to help security professionals and developers identify if a website is vulnerable to clickjacking attacks. Clickjacking occurs when an attacker embeds a target website inside an invisible or misleading iframe, tricking users into interacting with elements they don’t intend to. This tool allows you to quickly check if a website has proper defenses against such attacks.

### Features

• User-Friendly Interface – A clean and modern dark-themed UI with intuitive design.

• Real-Time Testing – Checks if the given URL can be loaded inside an iframe.

• Automated Detection – Determines if a website is protected using X-Frame-Options, Content Security Policy (CSP), or JavaScript frame-busting techniques.

• Instant Feedback – Displays a clear status message indicating whether the target website is vulnerable or protected.

• Secure and Lightweight – Runs locally in your browser without sending data to external servers.


### How It Works

1. Enter the Target URL – Provide the website you want to test in the input field.


2. Run the Test – Click the "Test" button, and the tool will attempt to load the website in an iframe.


3. Analyze the Result – The tool checks if the iframe is blocked or accessible and displays a message:

✅ Protected – The site has security measures preventing clickjacking.

⚠️ Vulnerable – The site loads inside the iframe, indicating a clickjacking risk.


### Installation & Usage

1. Download or clone this repository.


2. Open index.html in any modern browser.


3. Enter a target URL and click "Test" to check for clickjacking vulnerabilities.


Check out the live page :
https://g0w6y.github.io/Vulnx/

### Disclaimer

This tool is intended for security research and educational purposes only. Do not test websites without permission. The developer is not responsible for any misuse.

### Author

Developed by g0w6y

GitHub: g0w6y

Email: intercept0r@duck.com
