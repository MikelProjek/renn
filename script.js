const BIN_ID = "69490ddfae596e708fa9f6ba";
const API_KEY = "$2a$10$OoGfcbF9niJ/J043OSywBukcHXQ/jeYEqT9Mp3Mismcuqw9Xjr4uy";

async function sendMessage() {
  const text = document.getElementById("message").value;
  const status = document.getElementById("status");

  if (!text) {
    status.innerText = "Pesan tidak boleh kosong!";
    return;
  }

  try {
    // Ambil data lama
    const getData = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}/latest`, {
      headers: {
        "X-Master-Key": API_KEY
      }
    });

    const json = await getData.json();
    const messages = json.record.messages;

    // Tambah pesan baru
    messages.push({
      message: text,
      time: new Date().toISOString()
    });

    // Update bin
    await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "X-Master-Key": API_KEY
      },
      body: JSON.stringify({ messages })
    });

    status.innerText = "Pesan berhasil dikirim!";
    document.getElementById("message").value = "";

  } catch (error) {
    status.innerText = "Gagal mengirim pesan";
    console.error(error);
  }
}
