import internshipModel from '../models/internship.model.js'



export const getInternships = async (req, res) => {
    try {
        //check if internships exists.
        const internships = await internshipModel.find();

        if (internships.length !== 0) {
            return res.status(200).json({
                success: true,
                data: internships
            })
        }
        else {
            res.status(404).json({
                success: false,
                message: "No internships found"
            })
        }
    }
    catch (e) {
        console.error("internship error:", e.message)
        res.status(500).json({
            success: false,
            message: "Server error"
        })
    }
};


export const getInternshipsById = async (req, res) => {
    try {
        const {id } = req.params;

        const internshiById = await internshipModel.findById(id)

        if (internshiById) {
            return res.status(200).json({
                success: true,
                data: internshiById
            })
        }
        else {
            return res.status(404).json({
                success: false,
                message: "Internship not found"
            })
        }
    }
    catch (e) {
        console.error("Error:", e.message)
        return res.status(500).json({
            success: false,
            message: "Server error"
        })
    }
}