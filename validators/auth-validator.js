const { z } = require("zod");

const signupSchema = z.object({
    username: z
        .string({ required_error: "Name is required" })
        .trim()
        .min(3, { message: "Name must be at least of 3 characters." })
        .max(255, { message: "Name must not be more than 255 characters." }),

    email: z
        .string({ required_error: "Email is required" })
        .trim()
        .email({ message: "Invalid email address" })
        .min(3, { message: "Email must be at least of 3 characters." })
        .max(255, { message: "Email must not be more than 255 characters." }),

    phone: z
        .string({ required_error: "phone is required" })
        .trim()
        .min(10, { message: "phone must be at least of 10 characters." })
        .max(20, { message: "phone must not be more than 20 characters." }),

    password: z
        .string({ required_error: "password is required" })
        .trim()
        .min(7, { message: "password must be at least of 6 characters." })
        .max(1024, { message: "password can't be greter than 1024 characters." }),
});

module.exports = signupSchema;