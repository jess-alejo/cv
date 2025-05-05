// Array of profile images
const images = [
  "profile-0.jpg",
  "profile-1.jpg",
  "profile-2.jpg",
  "profile-3.jpg",
  "profile-4.jpg",
  "profile-5.jpg",
  "profile-6.jpg",
]

// Initial image index
let currentIndex = 0

// Get the image element
const profileImage = document.querySelector("#profile-image")

profileImage.addEventListener("click", updateImage)

// Function to update the displayed image
function updateImage() {
  if (currentIndex === images.length - 1) {
    currentIndex = 0
  } else {
    currentIndex++
  }

  const imageUrl = `assets/images/${images[currentIndex]}`
  profileImage.src = imageUrl
}
