const BIN_ID = "69490ddfae596e708fa9f6ba";
const API_KEY = "$2a$10$OoGfcbF9niJ/J043OSywBukcHXQ/jeYEqT9Mp3Mismcuqw9Xjr4uy";

// Load pesan saat halaman dibuka
window.onload = loadMessages;

async function loadMessages() {
  const container = document.getElementById("messages");
  container.innerHTML = "Memuat pesan...";

  try {
    const res = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}/latest`, {
      headers: {
        "X-Master-Key": API_KEY
      }
    });

    const data = await res.json();
    const messages = data.record.messages;

    container.innerHTML = "";

    // Tampilkan dari yang terbaru
    messages.reverse().forEach(item => {
      const div = document.createElement("div");
      div.className = "message";
      div.innerHTML = `
        ${item.message}
        <div class="time">${new Date(item.time).toLocaleString()}</div>
      `;
      container.appendChild(div);
    });

  } catch (err) {
    container.innerHTML = "Gagal memuat pesan";
  }
}

async function sendMessage() {
  const text = document.getElementById("message").value;
  const status = document.getElementById("status");

  if (!text) {
    status.innerText = "Pesan kosong!";
    return;
  }

  try {
    const res = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}/latest`, {
      headers: {
        "X-Master-Key": API_KEY
      }
    });

    const data = await res.json();
    const messages = data.record.messages;

    messages.push({
      message: text,
      time: new Date().toISOString()
    });

    await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "X-Master-Key": API_KEY
      },
      body: JSON.stringify({ messages })
    });

    document.getElementById("message").value = "";
    status.innerText = "Pesan terkirim!";
    loadMessages(); // refresh pesan

  } catch (err) {
    status.innerText = "Gagal mengirim pesan";
  }
}
