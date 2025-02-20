import React from "react";
import { Box, Button, Container, Heading, Image, Stack, Text, VStack, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box bg="white" color="black">
      {/* Hero Section */}
      <Box bg="red.500" py={20} textAlign="center" color="white">
        <Container maxW="container.lg">
          <Heading as="h1" size="2xl" mb={4}>
            Welcome to Hot Dog House
          </Heading>
          <Text fontSize="xl" mb={6}>
            Family-owned and serving delicious homemade meals since day one!
          </Text>
          <Button as={Link} to="/menu" colorScheme="whiteAlpha" size="lg">
            View Our Menu
          </Button>
        </Container>
      </Box>

      {/* About Section */}
      <Container maxW="container.lg" py={16}>
        <Stack direction={{ base: "column", md: "row" }} spacing={10} align="center">
          <Image
            src="http://stock.calucid.com/fetch/calucid/hotdog-house5/restaurant-interior"
            alt="Restaurant Interior"
            borderRadius="md"
            boxShadow="lg"
          />
          <VStack align="start" spacing={4}>
            <Heading as="h2" size="xl">
              About Us
            </Heading>
            <Text fontSize="lg">
              We are a family-owned restaurant offering homemade soups, specials, and our famous hot dog sauce. Whether
              you're here for breakfast, lunch, or dinner, we have something delicious for you!
            </Text>
            <Button as={Link} to="/about" colorScheme="red">
              Learn More
            </Button>
          </VStack>
        </Stack>
      </Container>

      {/* Menu Highlights */}
      <Box bg="gray.100" py={16}>
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" textAlign="center" mb={10}>
            Our Specialties
          </Heading>
          <Stack direction={{ base: "column", md: "row" }} spacing={10} justify="center">
            <VStack>
              <Image
                src="http://stock.calucid.com/fetch/calucid/hotdog-house5/texas-hot-dog"
                alt="Texas Hot Dog"
                borderRadius="md"
                boxShadow="lg"
              />
              <Text fontSize="lg" fontWeight="bold">
                Texas Hot Dogs
              </Text>
            </VStack>
            <VStack>
              <Image
                src="http://stock.calucid.com/fetch/calucid/hotdog-house5/breakfast-platter"
                alt="Breakfast Platter"
                borderRadius="md"
                boxShadow="lg"
              />
              <Text fontSize="lg" fontWeight="bold">
                Hearty Breakfast
              </Text>
            </VStack>
            <VStack>
              <Image
                src="http://stock.calucid.com/fetch/calucid/hotdog-house5/cheesesteak"
                alt="Cheesesteak"
                borderRadius="md"
                boxShadow="lg"
              />
              <Text fontSize="lg" fontWeight="bold">
                Cheesesteaks
              </Text>
            </VStack>
          </Stack>
        </Container>
      </Box>

      {/* Call to Action */}
      <Box py={16} textAlign="center">
        <Heading as="h2" size="xl" mb={4}>
          Visit Us Today!
        </Heading>
        <Text fontSize="lg" mb={6}>
          Stop by and enjoy a meal with us. We can't wait to serve you!
        </Text>
        <Button as={Link} to="/contact" colorScheme="red" size="lg">
          Get Directions
        </Button>
      </Box>
    </Box>
  );
};

export default Home;