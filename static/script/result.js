window.addEventListener("DOMContentLoaded", function () {
  // Get the insights paragraph element
  const insightsParagraph = document.querySelector(".insights-card p");

  // Get the length of the insights text
  const insightsLength = insightsParagraph.textContent.length;

  // Define a base margin and scaling factor for different screen sizes
  const baseMargin = 3; // Base margin in em (for a short text)

  // Function to calculate margin based on length of the text
  function calculateMargin(length, scaleFactor) {
    return baseMargin + length * scaleFactor;
  }

  // For desktop devices (default scaling factor)
  const desktopScaleFactor = 0.00001;
  const desktopMargin = calculateMargin(insightsLength, desktopScaleFactor);

  // For tablet devices
  const tabletScaleFactor = 0.008;
  const tabletMargin = calculateMargin(insightsLength, tabletScaleFactor);

  // For mobile devices
  const mobileScaleFactor = 0.003;
  const mobileMargin = calculateMargin(insightsLength, mobileScaleFactor);

  // Apply the appropriate margin based on the screen width
  if (window.innerWidth <= 480) {
    // Mobile devices (small screens)
    document.body.style.marginTop = `${mobileMargin}em`;
    document.body.style.marginBottom = `${mobileMargin}em`;
  } else if (window.innerWidth <= 768) {
    // Tablet devices (medium screens)
    document.body.style.marginTop = `${tabletMargin}em`;
    document.body.style.marginBottom = `${tabletMargin}em`;
  } else {
    // Desktop devices (large screens)
    document.body.style.marginTop = `${desktopMargin}em`;
    document.body.style.marginBottom = `${desktopMargin}em`;
  }
});
