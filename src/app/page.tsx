

// BulletinItem.js
import { Box, Heading, Text } from "@chakra-ui/react";

type BulletinItemProps = {
  title: string;
  content: string;
};

export default function BulletinItem({ title, content }: BulletinItemProps) {
  return (
    <Box borderWidth="1px" borderRadius="lg" p={4} boxShadow="lg" w="100%">
      <Heading as="h3" size="lg" mb={2}>
        감사합니다.
      </Heading>
      <Text>{content}</Text>
    </Box>
  );
}


