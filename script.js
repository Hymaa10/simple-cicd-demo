const quotes = {
  happy: "Keep smiling, because life is a beautiful thing!",
  sad: "This too shall pass. You're stronger than you think.",
  angry: "Take a deep breath. Peace begins with you.",
  calm: "Serenity is not freedom from the storm, but peace amid the storm."
};

const colors = {
  happy: "#ffe066",
  sad: "#74c0fc",
  angry: "#ff6b6b",
  calm: "#a3f7bf"
};

function setMood(mood) {
  document.body.style.backgroundColor = colors[mood];
  document.getElementById("quote").textContent = quotes[mood];
}