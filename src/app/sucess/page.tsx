"use client";
import { useEffect, useState } from "react";
import { getexamresultApi } from "../../../api";

export default function Home() {
  const [latestLife, setLatestLife] = useState<any>(null);
  const [latestGeneral, setLatestGeneral] = useState<any>(null);

  useEffect(() => {
    const fetchExamResult = async () => {
      const getexam: any = await getexamresultApi();
      if (Array.isArray(getexam)) {
        const sortedLife = getexam
          .filter((item: any) => item.paper_name === "Life Insurance Exam")
          .sort((a: any, b: any) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
        setLatestLife(sortedLife[0]);

        const sortedGeneral = getexam
          .filter((item: any) => item.paper_name === "General Insurance Exam")
          .sort((a: any, b: any) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
        setLatestGeneral(sortedGeneral[0]);
      }
    };
    fetchExamResult();
  }, []);

  if (!latestLife && !latestGeneral) return <div className="text-center mt-10">Loading or no results found.</div>;

  return (
    <div className="flex flex-col justify-center items-center h-screen gap-10">
      {latestLife && (
        <div className="p-4 border rounded shadow w-full max-w-md">
          <p className="text-3xl font-bold">{latestLife.id}</p>
          <p>{latestLife.paper_name}</p>
          <p>Passing Marks: {latestLife.passing_marks}</p>
          <p>Created At: {new Date(latestLife.created_at).toLocaleString()}</p>
        </div>
      )}
      {latestGeneral && (
        <div className="p-4 border rounded shadow w-full max-w-md">
          <p className="text-3xl font-bold">{latestGeneral.id}</p>
          <p>{latestGeneral.paper_name}</p>
          <p>Passing Marks: {latestGeneral.passing_marks}</p>
          <p>Created At: {new Date(latestGeneral.created_at).toLocaleString()}</p>
        </div>
      )}
    </div>
  );
}
