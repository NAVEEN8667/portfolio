const cv = document.getElementById("cv");
cv.addEventListener("click", () => {
  const link = document.createElement("a");
  link.href = "./images/RESUME.pdf";
  link.download = "RESUME.pdf";
  link.click();
});
