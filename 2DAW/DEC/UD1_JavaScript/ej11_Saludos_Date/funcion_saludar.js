function saludar() {
    var hora = new Date().getHours();
  if (hora >= 5 && hora < 12) {
    console.log("Buenos dias");
  } else if (hora >= 12 && hora < 18) {
    console.log("Buenas tardes");
  } else {
    console.log("Buenas noches");
  }
}

saludar();