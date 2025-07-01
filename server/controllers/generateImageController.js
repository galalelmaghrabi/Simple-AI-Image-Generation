import dotenv from "dotenv";
import axios from "axios";
import FormData from "form-data";
dotenv.config();

export const generateImage = async (req, res) => {
  const { prompt } = req.body;

  try {
    const form = new FormData();
    form.append("prompt", prompt);
    form.append("output_format", "png");

    const response = await axios.post(
      "https://api.stability.ai/v2beta/stable-image/generate/core",
      form,
      {
        headers: {
          Authorization: `Bearer ${process.env.STABILITY_API_KEY}`,
          ...form.getHeaders()
        },
      }
    );

    const image = response.data.image; // base64
    res.status(200).json({ image });
  } catch (error) {
    console.error(
      "Image generation error:",
      error.response?.data || error.message
    );
    res.status(500).json({ error: "Failed to generate image" });
  }
};
