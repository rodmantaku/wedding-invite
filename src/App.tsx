// src/App.tsx
import React, { useState } from "react";
import {
  Box,
  Center,
  VStack,
  HStack,
  Text,
  Badge,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import topimg from "./assets/image.png";
import InviteFormYes from "./InviteFormYes";
import InviteFormNo from "./InviteFormNo";

const MotionBox = motion(Box);

function App() {
  const [attendance, setAttendance] = useState<string>("");

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }, // 子要素を0.3秒ずつずらしてフェード
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 1.5 } },
  };

  return (
    <VStack
      m={3}
      spacing={0}
      className="min-h-screen flex items-center justify-center bg-gray-50 p-4"
    >
      <MotionBox
        className="bg-white shadow-lg rounded-xl p-6 w-full max-w-lg"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* トップ画像 */}
        <MotionBox
          as="img"
          src={topimg}
          alt="トップ画像"
          width="100%"
          borderRadius="md"
          variants={itemVariants}
          mb={4}
        />

        {/* 日時・場所 */}
        <MotionBox variants={itemVariants}>
          <VStack align="start" spacing={0}>
            <HStack spacing={2} align="center">
              <Text fontSize="lg" fontWeight="bold" color="gray.700">
                日時:
              </Text>
              <Text fontSize="lg" color="gray.600">
                12月27日 (土)
              </Text>
              <Badge colorScheme="gray" variant="subtle">
                時間未定
              </Badge>
            </HStack>
            <HStack>
              <Text fontSize="lg" fontWeight="bold" color="gray.700">
                場所:
              </Text>
              <Text fontSize="lg" color="gray.600">
                東京のどこか
              </Text>
            </HStack>
          </VStack>
        </MotionBox>

        {/* 出席/欠席ラジオ */}
        <MotionBox variants={itemVariants}>
          <Center mt={2}>
            <RadioGroup onChange={setAttendance} value={attendance}>
              <Stack direction="row" spacing={10}>
                <Radio value="出席">出席</Radio>
                <Radio value="欠席">欠席</Radio>
              </Stack>
            </RadioGroup>
          </Center>
        </MotionBox>

        {/* フォーム部分は選択後にフェード */}
        {attendance === "出席" && (
          <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            mt={1}
          >
            <InviteFormYes />
          </MotionBox>
        )}
        {attendance === "欠席" && (
          <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            mt={1}
          >
            <InviteFormNo />
          </MotionBox>
        )}
      </MotionBox>
    </VStack>
  );
}

export default App;
