// Export to PDF using html2pdf.js, exporting the #resume element so the export button is not included.
document.getElementById("exportBtn").addEventListener("click", function () {
  const element = document.getElementById("resume");

  // Options tuned for print-like output matching on-screen
  const opt = {
    margin: [10, 10, 10, 10], // mm
    filename: "resume-gabriel-cavalcante.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: {
      scale: 2,
      useCORS: true,
      logging: false,
      // Allow larger render size for better fidelity
      windowWidth: document.documentElement.scrollWidth,
    },
    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
  };

  // Generate PDF
  html2pdf()
    .set(opt)
    .from(element)
    .save()
    .catch(function (err) {
      console.error("PDF export failed", err);
      alert("Export failed. Please try again in a modern browser.");
    });
});
