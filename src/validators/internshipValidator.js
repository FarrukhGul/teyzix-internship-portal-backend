import {z} from 'zod'

export const internshipValidator = z.object({
    title : z.string().min(5, "Title must be at least 5 characters.").max(20, "Title cannot be greater than 20 characters."),
    description :z.string().min(30, "Description must be at least 30 characters.").max(200, "Description cannot be greater than 200 characters."),
    domain : z.string().min(5, "domain must be at least 5 characters.").max(20, "domain cannot be greater than 20 characters."),
    duration : z.string().min(5, "duration must be at least 5 characters.").max(20, "duration cannot be greater than 20 characters."),
    stipend : z.string().min(5, "stipend must be at least 5 characters.").max(20, "stipend cannot be greater than 20 characters."),
    slots: z.number().min(1, "At least 1 slot required").max(50, "Cannot exceed 50 slots"),
    isOpen: z.boolean()
});