
'use client'

import { ChakraProvider, ColorModeScript, Box, Heading, VStack, Input, Textarea, Button, Text } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import BulletinItem from "../page";
type ICreate = {
  title: string;
  content: string;
};

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
});


export default function CreatePage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [bulletins, setBulletins] = useState<ICreate[]>([]);

  const router = useRouter();

  const handleCreateBulletin = () => {
    if (title && content) {
      const newBulletin = { title, content };
      setBulletins([...bulletins, newBulletin]);

    }
  };

  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Box p={4}>
        <Heading as="h1" size="2xl" mb={4}>
          게시판 작성
        </Heading>
        <VStack align="start" spacing={4}>
          <Input
            placeholder="제목"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Textarea
            placeholder="내용"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <Button colorScheme="teal" onClick={handleCreateBulletin}>
            게시물 작성
          </Button>
        </VStack>
        <VStack align="start" spacing={4}>
          {bulletins.map((bulletin, index) => (
            <BulletinItem key={index} title={bulletin.title} content={bulletin.content} />
          ))}
        </VStack>
      </Box>
    </ChakraProvider>
  );
}
