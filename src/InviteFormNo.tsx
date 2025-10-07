import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { inviteFormSchema, type InviteFormValues } from "./validation";
import {
  VStack,
  Input,
  Textarea,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  RadioGroup,
  Radio,
  Stack,
  Center,
  Fade,
} from "@chakra-ui/react";
import emailjs from "@emailjs/browser";

const InviteFormNo: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<InviteFormValues>({
    resolver: yupResolver(inviteFormSchema),
  });

  const onSubmit = async (data: InviteFormValues) => {
    try {
      const pubKey = import.meta.env.VITE_PUB_KEY;
      const serviceID = import.meta.env.VITE_SERVICE_ID;
      const templateID = import.meta.env.VITE_TEMPLATE_ID;

      await emailjs.send(serviceID, templateID, data, pubKey);

      alert("送信しました！ありがとうございます。");
      reset();
    } catch (error: unknown) {
      if (error instanceof Error) {
        alert("送信に失敗しました: " + error.message);
      } else {
        alert("送信に失敗しました");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <VStack spacing={4} maxW="md" mx="auto" p={4}>
        <Fade
          in={true}
          transition={{
            enter: { duration: 1.0 }, // フェードインの速度（秒）
            exit: { duration: 0.5 }, // フェードアウトの速度（秒）
          }}
        >
          <FormControl isInvalid={!!errors.name}>
            <FormLabel>お名前</FormLabel>
            <Input {...register("name")} />
            <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.email}>
            <FormLabel>メールアドレス</FormLabel>
            <Input type="email" {...register("email")} />
            <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.title}>
            <FormLabel>欠席理由</FormLabel>
            <Textarea {...register("title")} />
            <FormErrorMessage>{errors.title?.message}</FormErrorMessage>
          </FormControl>

          <Button type="submit" colorScheme="blue" isLoading={isSubmitting}>
            送信
          </Button>
        </Fade>
      </VStack>
    </form>
  );
};

export default InviteFormNo;
