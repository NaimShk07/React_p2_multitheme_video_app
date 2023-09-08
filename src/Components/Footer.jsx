import {
	Box,
	Button,
	HStack,
	Heading,
	Input,
	Stack,
	Text,
	VStack,
} from "@chakra-ui/react";
import React from "react";
import {
	AiOutlineSend,
	AiOutlineInstagram,
	AiOutlineTwitter,
	AiOutlineLinkedin,
	AiOutlineYoutube,
} from "react-icons/ai";

const Footer = () => {
	return (
		<Box bgColor={"black"} minH={40} p={16} color={"white"}>
			<Stack
				flexDirection={["column", "column", "row"]}
				gap={10}
			>
				<VStack alignItems={"stretch"} w={"full"} px={4}>
					<Heading size={"md"} textTransform={"uppercase"} textAlign={["center","center","left"]}>
						Subscribe to get updates
					</Heading>
					<HStack borderBottom={"2px solid white"} py={2}>
						<Input
							placeholder="Enter email here..."
							border={"none"}
							outline={"none"}
							borderRadius={"none"}
							focusBorderColor="none"
						/>
						<Button
							colorScheme="purple"
							p={0}
							variant={"ghost"}
							borderRadius={"0 20px 20px 0"}
						>
							<AiOutlineSend size={20} />
						</Button>
					</HStack>
				</VStack>

				<VStack
					alignItems={"stretch"}
					w={"full"}
					px={4}
					textAlign={"center"}
					borderRight={["none", "none", "1px solid white"]}
					borderLeft={["none", "none", "1px solid white"]}
				>
					<Heading  textTransform={"uppercase"}>
						Video hub
					</Heading>
					<Text py={2}>All right reserved</Text>
				</VStack>

				<VStack alignItems={"stretch"} w={"full"} px={4}>
					<Heading size={"md"} textTransform={"uppercase"} textAlign={"center"}>
						Social Media
						<HStack justifyContent={"center"} py={8}>
							<AiOutlineInstagram size={25} />
							<AiOutlineTwitter size={25} />
							<AiOutlineYoutube size={25} />
						</HStack>
					</Heading>
				</VStack>
			</Stack>
		</Box>
	);
};

export default Footer;
