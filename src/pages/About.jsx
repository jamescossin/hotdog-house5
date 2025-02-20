import { Box, Container, Heading, Text, Image, VStack } from "@chakra-ui/react";

const About = () => {
  return (
    <Container maxW="container.lg" py={10}>
      <VStack spacing={6} align="center">
        <Heading as="h1" size="2xl" color="red.600">
          About Hot Dog House
        </Heading>
        <Image
          src="http://stock.calucid.com/fetch/calucid/hotdog-house5/restaurant-exterior"
          alt="Hot Dog House Exterior"
          borderRadius="md"
        />
        <Text fontSize="lg" textAlign="center">
          We are a family-owned restaurant dedicated to serving delicious, homemade meals. Our famous Hot Dog Sauce, 
          fresh soups, and daily specials have made us a local favorite. Whether you're stopping by for breakfast, 
          lunch, or dinner, we have something for everyone.
        </Text>
        <Image
          src="http://stock.calucid.com/fetch/calucid/hotdog-house5/breakfast-food"
          alt="Delicious Breakfast"
          borderRadius="md"
        />
        <Text fontSize="lg" textAlign="center">
          Start your day with a hearty breakfast at Hot Dog House! We serve eggs, bacon, sausage, home fries, 
          hashbrowns, French toast, pancakes, and more starting at 5:00 AM.
        </Text>
        <Image
          src="http://stock.calucid.com/fetch/calucid/hotdog-house5/hot-dogs"
          alt="Famous Texas Hot Dogs"
          borderRadius="md"
        />
        <Text fontSize="lg" textAlign="center">
          Our famous Texas hot dogs are a must-try! We also offer hamburgers, cheesesteaks, chef salads, 
          French fries, onion rings, mozzarella sticks, and more for lunch.
        </Text>
        <Image
          src="http://stock.calucid.com/fetch/calucid/hotdog-house5/dinner-plate"
          alt="Delicious Dinner Options"
          borderRadius="md"
        />
        <Text fontSize="lg" textAlign="center">
          Enjoy a full dinner with options like chicken, liver & onions, ham, fish, and shrimp. 
          We take pride in serving homemade meals with the best ingredients.
        </Text>
        <Image
          src="http://stock.calucid.com/fetch/calucid/hotdog-house5/family-dining"
          alt="Family Dining Experience"
          borderRadius="md"
        />
        <Text fontSize="lg" textAlign="center">
          Hot Dog House is more than just a restaurant—it's a place where families and friends come together 
          to enjoy great food and warm hospitality. Stop by and give us a try!
        </Text>
      </VStack>
    </Container>
  );
};

export default About;