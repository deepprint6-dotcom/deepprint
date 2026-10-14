// ====== EDIT THESE ======
const WHATSAPP_NUMBER = "919999999999"; // country code + number, no + or spaces
const BRAND = "Deep Print";
// ========================

document.getElementById("yr").textContent = new Date().getFullYear();
document.getElementById("waLink").href = "https://wa.me/" + WHATSAPP_NUMBER;

const form = document.getElementById("orderForm");
const status = document.getElementById("status");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const d = Object.fromEntries(new FormData(form).entries());
  status.className = "";
  if (!d.name.trim() || !d.address.trim() || !d.city.trim()) {
    status.className = "err"; status.textContent = "Please fill in your name, address and city."; return;
  }
  if (!/^[6-9]\d{9}$/.test(d.phone.replace(/\s|-/g, ""))) {
    status.className = "err"; status.textContent = "Enter a valid 10-digit mobile number."; return;
  }
  if (!/^\d{6}$/.test(d.pin.trim())) {
    status.className = "err"; status.textContent = "Enter a 6-digit pincode."; return;
  }
  const msg = [
    "New order for " + BRAND,
    "Name: " + d.name,
    "Phone: " + d.phone,
    "Quantity: " + d.qty,
    "Address: " + d.address + ", " + d.city + " - " + d.pin
  ].join("
");
  window.open("https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(msg), "_blank");
  status.className = "ok";
  status.textContent = "WhatsApp is opening. Send the message and attach your model file there.";
});
