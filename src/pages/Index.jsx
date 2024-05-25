import React, { useState } from "react";
import { Container, Text, VStack, Button, Spinner, Alert, AlertIcon, Box } from "@chakra-ui/react";
import { FaRocket } from "react-icons/fa";

const Index = () => {
  const [story, setStory] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchStory = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("https://relay.kuzco.xyz/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer kuzco-47f40e77cad64425830f45069`,
        },
        body: JSON.stringify({
          messages: [
            {
              role: "user",
              content: `Tell me a short story about an emperor named Kuzco.`,
            },
          ],
          model: "llama3:latest",
          stream: false,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setStory(data.choices[0].message.content);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Kuzco's Story Generator</Text>
        <Button leftIcon={<FaRocket />} colorScheme="teal" onClick={fetchStory} isLoading={loading}>
          Generate Story
        </Button>
        {loading && <Spinner />}
        {error && (
          <Alert status="error">
            <AlertIcon />
            {error}
          </Alert>
        )}
        {story && (
          <Box p={4} borderWidth={1} borderRadius="md" boxShadow="md">
            <Text>{story}</Text>
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
