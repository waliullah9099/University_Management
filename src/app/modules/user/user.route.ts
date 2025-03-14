import express from 'express';
import { UserControllers } from './user.controller';
import validateRequest from '../../middlewares/validateRequest';
import { StudentValidations } from '../student/student.validation';

const router = express.Router();

router.post(
  '/create-student',
  validateRequest(StudentValidations.CreateStudentValidationSchema),
  UserControllers.createStudent,
);

export const UserRoute = router;
