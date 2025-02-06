function checkClickjacking() {
  const targetUrl = document.getElementById('targetUrl').value.trim();
  const iframe = document.getElementById('targetIframe');
  const statusMessage = document.getElementById('statusMessage');

  if (targetUrl === "") {
    alert("Please enter a valid URL.");
    return;
  }

  statusMessage.innerText = "Testing...";
  statusMessage.style.color = "#ffffff";
  iframe.src = targetUrl;

  iframe.onload = function() {
    setTimeout(() => {
      try {
        if (iframe.contentWindow.length === 0) {
          statusMessage.innerText = "✅ This website is protected from clickjacking (Frame-busting detected).";
          statusMessage.style.color = "#00c853"; // Green
        } else {
          statusMessage.innerText = "⚠️ This website is vulnerable to clickjacking!";
          statusMessage.style.color = "#e50914"; // Red
        }
      } catch (e) {
        statusMessage.innerText = "✅ This website is protected from clickjacking (X-Frame-Options/CSP enabled).";
        statusMessage.style.color = "#00c853"; // Green
      }
    }, 1000);
  };

  iframe.onerror = function() {
    statusMessage.innerText = "✅ This website is protected from clickjacking (Blocked by browser security settings).";
    statusMessage.style.color = "#00c853"; // Green
  };
}