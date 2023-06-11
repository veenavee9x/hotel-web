function selectRoom(roomNumber) {
    const rooms = document.getElementsByClassName('room');
    
    // Remove 'selected' class from all rooms
    for (let i = 0; i < rooms.length; i++) {
      rooms[i].classList.remove('selected');
    }
    
    // Add 'selected' class to the clicked room
    const selectedRoom = document.querySelector(`.room:nth-child(${roomNumber})`);
    selectedRoom.classList.add('selected');
  }
  