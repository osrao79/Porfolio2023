import ResumeOnkar from '../../assets/ResumeOnkar.pdf'
import './resume.css'
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Resume () {
  return (
    <div className='main-container'>
      <Document file={ResumeOnkar}>
        <Page pageNumber={1} wrap
        />
      </Document>
      <hr />
      <a href={require("../../assets/ResumeOnkar.pdf")} download="myFile">Download file</a>
    </div>
  )
};
export default Resume;