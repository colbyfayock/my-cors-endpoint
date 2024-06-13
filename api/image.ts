export async function GET(request: Request) {
  const results = await fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY').then(r => r.json());
  return new Response(JSON.stringify(results), {
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  });
}