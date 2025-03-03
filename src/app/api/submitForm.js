import connectDB from "@/lib/Database";
import FormModel from "@/Models/FormData";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      await connectDB();

      const {
        name,
        email,
        company,
        findMore,
        services,
        features,
        budget,
        projectGoal,
      } = req.body;

      if (!name || !email) {
        return res
          .status(400)
          .json({ success: false, message: "Name and email are required!" });
      }

      const newForm = new FormModel({
        name,
        email,
        company,
        findMore,
        services,
        features,
        budget,
        projectGoal,
      });
      await newForm.save();

      return res
        .status(200)
        .json({ success: true, message: "Form submitted successfully!" });
    } catch (error) {
      console.error("Error saving form:", error);
      return res
        .status(500)
        .json({ success: false, message: "Server error! Please try again." });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
