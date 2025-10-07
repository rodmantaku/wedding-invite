// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import React from "react";
import "./App.css";
import InviteFormYes from "./InviteFormYes";
import {
  Badge,
  Box,
  Center,
  Fade,
  HStack,
  Icon,
  Image,
  Radio,
  RadioGroup,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import topimg from "./assets/image.png";
import { motion } from "framer-motion";
import { useState } from "react";
import InviteFormNo from "./InviteFormNo";
import { CalendarIcon } from "@chakra-ui/icons";

const MotionImage = motion(Image);

function App() {
  const [attendance, setAttendance] = useState<string>("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-lg">
        {/* <h1 className="text-2xl font-bold mb-4 text-center">結婚式ご招待</h1>
        <p className="mb-6 text-center">ご出席のご意向をお知らせください ✨</p> */}
        <MotionImage
          src={topimg}
          alt="トップ画像"
          // borderRadius="md"
          // boxShadow="md"
          // objectFit="cover"
          w="100%"
          h="auto"
          borderRadius="md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }} // アニメーション速度
        ></MotionImage>

        <Fade
          in={true}
          transition={{
            enter: { duration: 1.0 }, // フェードインの速度（秒）
          }}
        >
          <VStack mt={4} align="start" spacing={1}>
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
                東京の何処か
              </Text>
            </HStack>
          </VStack>

          <Center mt={4}>
            <RadioGroup onChange={setAttendance} value={attendance}>
              <Stack direction="row" spacing={10}>
                <Radio value="出席">出席</Radio>
                <Radio value="欠席">欠席</Radio>
              </Stack>
            </RadioGroup>
          </Center>
        </Fade>
        {attendance ? (
          attendance === "出席" ? (
            <InviteFormYes />
          ) : (
            <InviteFormNo />
          )
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default App;
