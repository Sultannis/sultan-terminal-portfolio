import CVFile from "@/assets/files/Sultan Mustafin CV.pdf";

export const downloadCv = () => {
  const link = document.createElement("a");
  link.style.display = "none";
  link.href = CVFile;
  link.download = "Sultan Mustafin CV";

  document.body.appendChild(link);
  link.click();

  setTimeout(() => {
    URL.revokeObjectURL(link.href);
    link.parentNode?.removeChild(link);
  }, 0);
};
