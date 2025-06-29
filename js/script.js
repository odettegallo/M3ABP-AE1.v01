const whatsappNumber = "56912345678"; // Formato internacional sin el "+".

    // Evento para abrir WhatsApp
    document.getElementById("whatsapp-button").addEventListener("click", () => {
      const message = encodeURIComponent("¡Hola! Me gustaría obtener más información.");
      const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;
      window.open(whatsappURL, "_blank");
    });