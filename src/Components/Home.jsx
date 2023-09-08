import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Box, Container, Heading, Image, Stack, Text } from "@chakra-ui/react";
import img1 from "../Assets/1.jpg";
import img2 from "../Assets/2.jpg";
import img3 from "../Assets/3.jpg";
import img4 from "../Assets/4.jpg";
import img5 from "../Assets/5.png";

const headingOption = {
	pos: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%,-50%)",
	textTransform: "uppercase",
	p: "4",
	size: "3xl",
};

const Home = () => {
	return (
		<Box>
			<MyCarousel />
			<Container maxW={"container.xl"} minH={"100vh"} p={16}>
				<Heading textTransform={"uppercase"} m="auto" py={2} w={"fit-content"}>
					Services
				</Heading>

				<Stack
					h={"full"}
					p={4}
					alignItems={"center"}
					flexDirection={["column", "column", "column", "row"]}
				>
					<Image src={img5} h={[40, 240, 400]} />
					<Text
						letterSpacing={"widest"}
						lineHeight={"190%"}
						p={["4", "16"]}
						textAlign={"center"}
					>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores
						facilis id officiis perferendis ducimus, dolor excepturi eligendi,
						voluptatibus deserunt doloribus provident laborum vel optio non, eos
						dolore commodi sint. Delectus debitis quo error laboriosam, ut,
						repellat fugit deleniti consectetur maiores quis quam pariatur
						dolorem, officia earum autem laborum? Quibusdam unde quidem dolorem,
						molestias numquam esse cumque sint aliquam tempora sed cupiditate
						doloremque corrupti soluta. Obcaecati ipsa placeat sint repellat ab
						facilis nostrum, tenetur id animi natus voluptate nisi nesciunt non,
						aliquam eius similique nobis repellendus, quibusdam necessitatibus
						doloribus impedit. Earum excepturi voluptatibus aliquid fuga beatae,
						vitae rerum debitis aut laborum!
					</Text>
				</Stack>
			</Container>
		</Box>
	);
};

const imgOption = {
	h: "full",
	w: "full",
	objectFit: "cover",
};

const MyCarousel = () => (
	<Carousel
		infiniteLoop
		autoPlay
		showArrows={false}
		showStatus={false}
		showThumbs={false}
		interval={2000}
	>
		<Box w="full" h={"100vh"}>
			<Image src={img1} {...imgOption} />
			<Heading {...headingOption} bgColor={"blackAlpha.600"} color={"white"}>
				Watch the future
			</Heading>
		</Box>
		<Box w="full" h={"100vh"}>
			<Image src={img2} {...imgOption} />
			<Heading {...headingOption} bgColor={"blackAlpha.600"} color={"white"}>
				Future is Gaming
			</Heading>
		</Box>
		<Box w="full" h={"100vh"}>
			<Image src={img3} {...imgOption} />
			<Heading {...headingOption} bgColor={"blackAlpha.600"} color={"white"}>
				Gaming on console
			</Heading>
		</Box>
		<Box w="full" h={"100vh"}>
			<Image src={img4} {...imgOption} />
			<Heading {...headingOption} bgColor={"blackAlpha.600"} color={"white"}>
				Night life is cool
			</Heading>
		</Box>
	</Carousel>
);

export default Home;
