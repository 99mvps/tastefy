"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { signIn, useSession } from "next-auth/react";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const { data: session, status } = useSession();

  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  console.log(!!session);

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    signIn();
  }

  return (
    <>
      {!session && (
        <div className={cn("grid gap-6", className)} {...props}>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Faça o seu Login
              </span>
            </div>
          </div>
          <Button
            onClick={onSubmit}
            variant="outline"
            type="button"
            disabled={isLoading}
          >
            <Icons.spotify className="mr-2 h-4 w-4" /> Spotify
          </Button>
        </div>
      )}
    </>
  );
}
