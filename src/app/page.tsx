"use client";

import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import { api } from "~/trpc/react";

export default function Home() {
  const user = useUser();
  const { data } = api.posts.getAll.useQuery();
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div>
        {!user.isSignedIn && <SignInButton />}
        {!!user.isSignedIn && <SignOutButton />}
      </div>
      <div>{data?.map((post) => <div key={post.id}>{post.content}</div>)}</div>
    </div>
  );
}
