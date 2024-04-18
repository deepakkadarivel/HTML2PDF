import { payments } from "~/lib/constants";
import { columns } from "./table/columns";
import { DataTable } from "./table/data-table";
import { CardDemo } from "./simple-card";

export default function ExportView({ targetRef }: { targetRef: any }) {
  return (
    <div
      id="export_section"
      className="p-4 flex items-center justify-center flex-col gap-8"
      ref={targetRef}
    >
      <div>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          The Joke Tax Chronicles
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Once upon a time, in a far-off land, there was a very lazy king who
          spent all day lounging on his throne. One day, his advisors came to
          him with a problem: the kingdom was running out of money.
        </p>
      </div>
      <DataTable columns={columns} data={payments} />
      <CardDemo />
    </div>
  );
}
