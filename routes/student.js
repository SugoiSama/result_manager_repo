import {Router} from 'express';
import { getStudentList, createStudent } from '../controllers/student.js';
const studentRouter = new Router();

studentRouter.get('/', getStudentList);
studentRouter.get('/', createStudent);

export default studentRouter;
