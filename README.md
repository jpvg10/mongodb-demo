# MongoDB Demo

In this demo we will build a movie API using **Express** and **MongoDB**. The repo has different branches that represent different steps in the process:

* 0-project-base - The project base
* 1-mongoose - Using **mongoose** for connecting to MongoDB. Adding *POST* and *GET* endpoints for **movies**
* 2-validation - Improving the mongoose schemas with validation rules
* 3-director-model - Adding a model for **directors** and the corresponding endpoints
* 4-get-by-director - Get movies by a given director
* 5-patch-endpoints (master) - Adding *PATCH* endpoints

*The DELETE endpoints are left as an exercise*

## Instructions

* You don't need to do `npm install` every time you checkout to a branch. Doing it once in `master` is enough.
* Duplicate the file `.env.example` and rename it to `.env`
* Start the server with `npm run start-dev`
