import { instance } from "./api";
import { ResponseType, ResponseTypeRT } from "./types";

export const ResponseApi = {
  createResponse({ email, text }: ResponseType) {
    return instance
      .post<ResponseTypeRT>(`/landing/create-contact/`, {
        email,
        text,
      })
      .then((response) => {
        return response;
      });
  },
};
