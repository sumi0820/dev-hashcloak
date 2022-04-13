import { Waitlist } from './waitlist';

type BaseApiResponse = {
  success: boolean;
  errorMessage: string;
};

type SendEmailSuccessResponse = BaseApiResponse & {
  statusCode: 200;
  body: unknown;
};

type FailureResponse = BaseApiResponse & {
  statusCode: unknown;
  body: null;
};

export type SendEmailApiResponse = SendEmailSuccessResponse | FailureResponse;

export type Data = {
  email: string;
  'form-name': string;
};

export type WaitlistApiResponse = {
  status: number;
  data: Waitlist;
};
