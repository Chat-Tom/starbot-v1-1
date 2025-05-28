export default function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    console.log("📥 Dữ liệu nhận từ form:", data);

    res.status(200).json({
      status: "ok",
      message: "Đã nhận dữ liệu thành công",
      received: data
    });
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
