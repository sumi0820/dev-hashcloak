/* eslint-disable consistent-return */
import axios from 'axios';
import { WaitlistApiResponse } from 'domains';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const postWaitlist = async (email: string, url: string) => {
  try {
    const waitlistResponse: WaitlistApiResponse = await axios.post(
      'api/sendwaitlist',
      {
        email,
        url,
      },
    );

    return waitlistResponse;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
  }
};

export default postWaitlist;
