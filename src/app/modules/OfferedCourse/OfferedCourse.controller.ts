import { Request, Response } from 'express';
import httpStatus from 'http-status';

import sendResponse from '../../utils/sendResponse';
import { OfferedCourseServices } from './OfferedCourse.service';
import { catchAsync } from '../../utils/catchAsync';

const createOfferedCourse = catchAsync(async (req: Request, res: Response) => {
  const result = await OfferedCourseServices.createOfferedCourseIntoDB(
    req.body,
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Offered Course is created successfully !',
    data: result,
  });
});

const getAllOfferedCourses = catchAsync(async (req: Request, res: Response) => {
  //   const result =
  //   sendResponse(res, {
  //     statusCode: httpStatus.OK,
  //     success: true,
  //     message: 'OfferedCourses retrieved successfully !',
  //     data: result,
  //   });
});

const getMyOfferedCourses = catchAsync(async (req: Request, res: Response) => {
  const userId = req.user.userId;
    const result = await OfferedCourseServices.getMyOfferedCoursesFromDB(userId)
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'My Offered Courses retrieved successfully !',
      data: result,
    });
});

const getSingleOfferedCourses = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    //   const result =
    //   sendResponse(res, {
    //     statusCode: httpStatus.OK,
    //     success: true,
    //     message: 'OfferedCourse fetched successfully',
    //     data: result,
    //   });
  },
);

const updateOfferedCourse = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await OfferedCourseServices.updateOfferedCourseIntoDB(
    id,
    req.body,
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'OfferedCourse updated successfully',
    data: result,
  });
});

const deleteOfferedCourseFromDB = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await OfferedCourseServices.deleteOfferedCourseFromDB(id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'OfferedCourse deleted successfully',
      data: result,
    });
  },
);

export const OfferedCourseControllers = {
  createOfferedCourse,
  getAllOfferedCourses,
  getMyOfferedCourses,
  getSingleOfferedCourses,
  updateOfferedCourse,
  deleteOfferedCourseFromDB,
};