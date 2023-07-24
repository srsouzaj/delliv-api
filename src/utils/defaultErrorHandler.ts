import { HttpException, HttpStatus } from '@nestjs/common';
import { DefaultMessages } from '../types/DefaultMessages';

export const defaultErrorHandler = (error: any) => {
  if (
    error.status == 400 &&
    error?.response?.hasOwnProperty('error') &&
    error?.response?.hasOwnProperty('data') &&
    error?.response?.hasOwnProperty('message')
  ) {
    throw new HttpException(
      {
        error: true,
        message: error?.response?.message,
        data: null,
      },
      HttpStatus.BAD_REQUEST,
    );
  } else if (error?.response?.message == DefaultMessages.DATA_NOT_FOUND) {
    throw new HttpException(
      {
        error: true,
        message: DefaultMessages.DATA_NOT_FOUND,
        data: null,
      },
      HttpStatus.NOT_FOUND,
    );
  } else if (
    error?.status === 403 &&
    error?.response?.hasOwnProperty('error') &&
    error?.response?.hasOwnProperty('data') &&
    error?.response?.hasOwnProperty('message')
  ) {
    throw new HttpException(
      {
        error: true,
        message: error?.response?.message,
        data: null,
      },
      HttpStatus.FORBIDDEN,
    );
  } else {
    throw new HttpException(
      {
        error: true,
        message: DefaultMessages.INTERNAL_SERVER_ERROR,
        data: null,
      },
      HttpStatus.INTERNAL_SERVER_ERROR,
    );
  }
};
