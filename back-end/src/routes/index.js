<<<<<<< Updated upstream
const UserRouter = require('./UserRouter')
const Recruitment = require('./RecruitmentRouter')
const Project = require('./ProjectRouter')
const Intern = require('./InternRouter')
=======
const UserRouter = require('./UserRouter');
const ProjectRouter = require('./ProjectRouter');
>>>>>>> Stashed changes


const routes = (app) => {
    app.use('/api/user', UserRouter)
<<<<<<< Updated upstream
    app.use('/api/recruitment', Recruitment)
    app.use('/api/project', Project)
    app.use('/api/intern', Intern)
=======
    app.use('/api/project', ProjectRouter)
>>>>>>> Stashed changes

}

module.exports = routes