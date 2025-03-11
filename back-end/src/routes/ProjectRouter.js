<<<<<<< Updated upstream
const express = require('express')
const router = express.Router();
const projectController = require("../controllers/ProjectController");
const { authHRMiddleware } = require('../middleware/authMiddleware');
const { authAdminMiddleware } = require('../middleware/authMiddleware');

router.post("/create-project", authHRMiddleware, projectController.createProject);
router.get("/list-all-projects", projectController.listAllProjects);
router.get("/list-project-detail/:id", projectController.listProjectDetail);
router.get("/search-project-by-name/:name", projectController.searchProjectByName);
router.put("/update-project/:id", authAdminMiddleware, projectController.updateProject);
router.delete("/delete-project/:id", authAdminMiddleware, projectController.deleteProject);
=======
const express = require("express");
const router = express.Router();
const ProjectController = require("../controllers/ProjectController");

router.get("/", ProjectController.getAllProject);
router.get("/get-details/:id", ProjectController.getDetailsProject);
router.get("/search", ProjectController.searchProjectByName);
>>>>>>> Stashed changes

module.exports = router;