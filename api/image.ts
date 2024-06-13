const ALLOWED_ORIGINS = [
  `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`,
  'https://colbyfayock.com',
  'https://spacejelly.dev'
];

export async function GET(request: Request) {
  const requestOrigin = request.headers.get('origin');
  const accessOrigin = ALLOWED_ORIGINS.find(origin => origin === requestOrigin) || ALLOWED_ORIGINS[0];
  const results = await fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY').then(r => r.json());
  return new Response(JSON.stringify(results), {
    headers: {
      'Access-Control-Allow-Origin': accessOrigin,
    }
  });
}