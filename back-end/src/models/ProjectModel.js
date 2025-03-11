const mongoose = require('mongoose');

<<<<<<< Updated upstream
const projectSchema = new mongoose.Schema(
    {
        project_name: { type: String, required: [true, 'Project name is require'] },
        mentor_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
        project_img: { type: String, required: false },
        project_details: { type: String, required: false },
        project_start: { type: Date, required: true },
        project_end: { type: Date, required: true },
    } 
);
=======
const projectSchema = new mongoose.Schema({
    project_code: { type: String, required: true, unique: true },
    project_name: { type: String, required: true },
    mentor_id: { type: String, required: true },
    project_detail: { type: String, required: true },
    project_img: { type: String, required: true },
    project_start_day: { type: Date, required: true },
    project_end_day: { type: Date, required: true }
});
>>>>>>> Stashed changes

const Project = mongoose.model("Project", projectSchema);
module.exports = Project;
