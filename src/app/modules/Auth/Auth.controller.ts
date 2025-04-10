import httpStatus from 'http-status';
import { catchAsync } from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { AuthServices } from './Auth.service';

const loginUser = catchAsync(async (req, res) => {
    const result = await AuthServices.loginUser(req.body);
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User is login successfully',
      data: result,
    });
  });


  export const AuthControllers = {
    loginUser
  } 