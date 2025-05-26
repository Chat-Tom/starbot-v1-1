export default async function handler(req, res) {
  if (req.method === 'POST') {
    const response = await fetch('https://script.google.com/macros/s/AKfycbwWG2gzuzD1zQb2tY9NaY43BK0Y74WK-v0tcTWyc3juH5fHnLEDiaBM8byvafTco78xDQ/exec', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body),
    });

    const result = await response.text();
    res.status(200).send(result);
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}