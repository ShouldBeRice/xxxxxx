self.addEventListener("notificationclick", function (event) {
  console.log("Thông báo đã được nhấn:", event.notification.tag);
  event.notification.close();

  // Mở lại trang web khi người dùng nhấn vào thông báo
  event.waitUntil(clients.openWindow("/"));
});
