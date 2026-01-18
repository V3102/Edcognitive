const Contact = require("../models/contact-model");

const contactForm = async (req, res) => {
    try {
        const { username, email, message } = req.body;

        if (!username || !email || !message) {
            return res.status(400).json({ message: "username, email and message are required" });
        }

    const created = await Contact.create({ username, email, message });
    console.log('New contact saved:', created._id || created._id?.toString());
    return res.status(201).json({ message: "message sent successfully" });
    } catch (error) {
        console.error("contactForm error:", error);
        return res.status(500).json({ message: "message not delivered" });
    }
};

module.exports = contactForm;