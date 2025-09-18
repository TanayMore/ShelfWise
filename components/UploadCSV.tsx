"use client";
import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useState } from "react";

export default function UploadCSV() {
  const [fileName, setFileName] = useState<string | null>(null);
  const [data, setData] = useState<any[]>([]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setFileName(file.name);

    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target?.result as string;
      const rows = text.split("\n").map((row) => row.split(","));
      setData(rows);
    };
    reader.readAsText(file);
  };

  return (
    <div className="p-6 border rounded-xl shadow-md bg-white">
      <h2 className="text-xl font-bold mb-4">Upload CSV</h2>
      <input type="file" accept=".csv" onChange={handleFileUpload} />
      
      {fileName && (
        <div className="mt-4">
          <p className="font-semibold">File: {fileName}</p>
          <div className="overflow-x-auto mt-2">
            <table className="border border-gray-300">
              <tbody>
                {data.slice(0, 5).map((row, i) => (
                  <tr key={i}>
                    {row.map((cell: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined, j: Key | null | undefined) => (
                      <td key={j} className="border px-2 py-1 text-sm">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-gray-500 mt-2">
              Showing first 5 rows...
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
