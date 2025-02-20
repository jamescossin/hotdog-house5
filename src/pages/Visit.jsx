import { Box, Heading, Text, Image, VStack, HStack, Icon, Link } from "@chakra-ui/react";
import { FaMapMarkerAlt, FaClock, FaPhone } from "react-icons/fa";

const Visit = () => {
  return (
    <Box maxW="1200px" mx="auto" p={5}>
      <VStack spacing={8} align="center">
        <Heading as="h1" size="2xl" color="red.600">
          Visit Hot Dog House
        </Heading>

        <Image
          src="http://stock.calucid.com/fetch/calucid/hotdog-house5/restaurant-exterior"
          alt="Hot Dog House Exterior"
          borderRadius="md"
          boxShadow="lg"
        />

        <Text fontSize="lg" textAlign="center" maxW="800px">
          We are a family-owned restaurant serving homemade soups, specials, and our famous hot dog sauce. 
          Whether you're stopping by for a hearty breakfast, a delicious lunch, or a full dinner, we have 
          something for everyone. Come and experience the best Texas hot dogs, cheesesteaks, and more!
        </Text>

        <HStack spacing={10} align="start" wrap="wrap" justify="center">
          <VStack align="center">
            <Icon as={FaMapMarkerAlt} boxSize={10} color="red.500" />
            <Heading as="h3" size="lg">Location</Heading>
            <Text fontSize="md" textAlign="center">
              123 Main Street, Your City, ST 12345
            </Text>
            <Image
              src="http://stock.calucid.com/fetch/calucid/hotdog-house5/map-location"
              alt="Map Location"
              borderRadius="md"
              boxShadow="md"
            />
          </VStack>

          <VStack align="center">
            <Icon as={FaClock} boxSize={10} color="red.500" />
            <Heading as="h3" size="lg">Hours</Heading>
            <Text fontSize="md" textAlign="center">
              Monday - Friday: 5:00 AM - 9:00 PM <br />
              Saturday - Sunday: 6:00 AM - 10:00 PM
            </Text>
          </VStack>

          <VStack align="center">
            <Icon as={FaPhone} boxSize={10} color="red.500" />
            <Heading as="h3" size="lg">Contact</Heading>
            <Text fontSize="md" textAlign="center">
              Phone: (123) 456-7890 <br />
              Email: contact@hotdoghouse.com
            </Text>
          </VStack>
        </HStack>

        <Image
          src="http://stock.calucid.com/fetch/calucid/hotdog-house5/dining-area"
          alt="Hot Dog House Dining Area"
          borderRadius="md"
          boxShadow="lg"
        />

        <Link
          href="https://www.google.com/maps/dir/?api=1&destination=123+Main+Street,+Your+City,+ST+12345"
          isExternal
          bg="red.500"
          color="white"
          px={6}
          py={3}
          borderRadius="md"
          fontSize="lg"
          fontWeight="bold"
          _hover={{ bg: "red.600" }}
        >
          Get Directions
        </Link>
      </VStack>
    </Box>
  );
};

export default Visit;