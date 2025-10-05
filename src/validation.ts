// validation.ts
import * as yup from "yup";

export const inviteFormSchema = yup.object({
  name: yup.string().required("お名前は必須です"),
  email: yup
    .string()
    .required("メールアドレスは必須です")
    .email("正しいメールアドレスを入力してください"),
  title: yup
    .string()
    .required("メールアドレスは必須です")
    .max(200, "メッセージは200文字以内で入力してください"),
});

// Yupから型を推論
export type InviteFormValues = yup.InferType<typeof inviteFormSchema>;
