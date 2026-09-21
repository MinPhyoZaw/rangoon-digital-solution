import { NextResponse } from "next/server";

function formatMMK(value) {
  if (!value) return "-";

  return `${new Intl.NumberFormat("en-US").format(Number(value))} MMK`;
}

function formatAddons(addons = []) {
  if (!addons.length) {
    return "None";
  }

  return addons
    .map((addon) => {
      if (typeof addon === "string") {
        return `• ${addon}`;
      }

      return `• ${addon.title} - ${formatMMK(addon.price)}`;
    })
    .join("\n");
}

export async function POST(request) {
  try {
    const {
      name,
      email,
      company,
      phone,
      service,
      message,
      addons = [],
      total,
    } = await request.json();

    if (!phone && !email) {
      return NextResponse.json(
        {
          message: "Please provide your phone number or email.",
        },
        { status: 400 },
      );
    }

    if (!process.env.TELEGRAM_BOT_TOKEN || !process.env.TELEGRAM_CHAT_ID) {
      console.error("Telegram environment variables are missing.");

      return NextResponse.json(
        {
          message: "Telegram is not configured.",
        },
        { status: 500 },
      );
    }

    const addonsText = formatAddons(addons);

    const telegramMessage = `
🔔 New Alita Quotation Request

👤 Name
${name || "-"}

🏢 Business / Company
${company || "-"}

📞 Phone
${phone || "-"}

📧 Email
${email || "-"}

💻 Software / Service
${service || "-"}

🧩 Selected Add-ons
${addonsText}

💰 Estimated Total
${formatMMK(total)}

📝 Message
${message || "Quotation request from Build Your System."}
`.trim();

    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: process.env.TELEGRAM_CHAT_ID,
          text: telegramMessage,
        }),
      },
    );

    const telegramResult = await telegramResponse.json();

    if (!telegramResponse.ok) {
      console.error("Telegram error:", telegramResult);

      return NextResponse.json(
        {
          message: "Could not send your quotation request.",
        },
        { status: 500 },
      );
    }

    return NextResponse.json({
      message: "Thanks — your quotation request has been sent.",
    });
  } catch (error) {
    console.error("Quotation error:", error);

    return NextResponse.json(
      {
        message: "Something went wrong.",
      },
      { status: 500 },
    );
  }
}
