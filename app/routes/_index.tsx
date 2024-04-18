import type { MetaFunction } from "@remix-run/node";
import { jsPDF } from "jspdf";
import { useRef } from "react";
import generatePDF from "react-to-pdf";
import { Button } from "~/components/ui/button";
import ExportView from "~/layouts/export-view";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const targetRef = useRef();

  // jsPDF loginc
  // *** needs more configuration
  const generate_jsPDF = () => {
    const doc = new jsPDF("p", "pt", "a4");
    const exportSection = document.getElementById("export_section");
    doc.html(exportSection, {
      html2canvas: {
        // insert html2canvas options here, e.g.
        width: 100,
      },
      callback: function (doc) {
        doc.save();
      },
    });
  };

  return (
    <div>
      <header className="z-10 bg-background px-4 flex justify-end items-center gap-4 top-0 sticky h-16 border-b border-border/40">
        {/* <Button size="sm" onClick={() => generate_jsPDF()}>
          jsPDF Export
        </Button> */}
        <Button
          size="sm"
          onClick={() => generatePDF(targetRef, { filename: "page.pdf" })}
        >
          React PDF Export
        </Button>
      </header>
      <div className="p-4">
        <ExportView targetRef={targetRef} />
      </div>
    </div>
  );
}
