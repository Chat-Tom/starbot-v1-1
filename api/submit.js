export default function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    console.log("📥 Dữ liệu nhận được:", data);

    // Phản hồi tùy theo loại dữ liệu
    let message = "✅ Hệ thống đã ghi nhận thông tin!";

    // Nếu form người dùng có đầy đủ name + phone
    if (data.name && data.phone) {
      message = `✅ Cảm ơn ${data.name}, chúng tôi sẽ liên hệ với bạn qua số ${data.phone}`;
    }

    // Nếu là webhook kiểu app_id / payload
    if (data.payload?.message) {
      message = `📩 Đã nhận tin nhắn: ${data.payload.message}`;
    }

    return res.status(200).json({
      status: "ok",
      message,
      received: data
    });
  }

  // Nếu không phải POST
  return res.status(405).json({ error: "Method Not Allowed" });
}

