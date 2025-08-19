import React from "react";
import { auth } from "@/auth";
export default async function Setting() {
  const session = await auth();
  return (
    <div className="flex justify-center items-center flex-col">
      <h1>Setting Page</h1>
      <h2>Session: {JSON.stringify(session)}</h2>
    </div>
  );
}
