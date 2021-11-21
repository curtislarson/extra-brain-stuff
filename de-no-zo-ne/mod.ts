import { serve } from "https://deno.land/std@0.114.0/http/server.ts";

async function handleRequest(request: Request): Promise<Response> {
  const poorFella = `
                 __
                / _)
       _.----._/ /
      /         /
   __/ (  | (  |
  /__.-'|_|--|_|`;
  return new Response(poorFella, {
    headers: {
      go: "home",
      "content-type": "text/plain; charset=us-ascii",
    },
  });
}

await serve(handleRequest);
