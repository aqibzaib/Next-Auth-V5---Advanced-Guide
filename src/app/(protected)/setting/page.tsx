import React from "react";
import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import { SignOut } from "@/actions/signout";
export default async function Setting() {
  const session = await auth();
  return (
    <div className="flex justify-center items-center flex-col">
      <h1>Setting Page</h1>
      <h2>Session: {JSON.stringify(session)}</h2>

      <form action={SignOut}>
        <Button type="submit">Signout</Button>
      </form>
    </div>
  );
}
