import {z} from 'zod'

export const applicationValidator = z.object({
    name : z.string().min(3, "Name must be 3 characters."),
    email: z.string().email("Invalid email format"),
    phoneNumber: z.string().min(11, "Invalid phone number").max(11, "Invalid phone number"),
    selectedDomain: z.string().min(1, "Please select a domain"),
    message: z.string().min(20, "Message must be at least 20 characters").max(100, "Message cannot exceed to 100 words.")
}) 