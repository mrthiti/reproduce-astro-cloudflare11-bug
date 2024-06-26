export const prerender = false;

export async function GET() {
  const number = Math.round(1000 * Math.random());
  return new Response(JSON.stringify({ number, message: `Here's a random number: ${number}` }));
}
