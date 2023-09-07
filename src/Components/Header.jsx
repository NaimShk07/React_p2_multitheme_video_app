import {
	Drawer,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	Button,
	useDisclosure,
	VStack,
	HStack,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { BiMenuAltLeft } from "react-icons/bi";

const Header = () => {
	const { isOpen, onClose, onOpen } = useDisclosure();
	return (
		<div >
			<Button
			style={{zIndex:999}}
				colorScheme="purple"
				pos={"fixed"}
				top={4}
				left={4}
				p={0}
				w={10}
				h={10}
				borderRadius={"full"}
				onClick={onOpen}

			>
				<BiMenuAltLeft size={20} />
			</Button>

			<Drawer isOpen={isOpen} placement="left" onClose={onClose}>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader>Video Hub</DrawerHeader>

					<DrawerBody>
						<VStack alignItems={"flex-start"}>
							<Button onClick={onClose} variant={"ghost"} colorScheme="purple">
								<Link to={"/"}>Home</Link>
							</Button>
							<Button onClick={onClose} variant={"ghost"} colorScheme="purple">
								<Link to={"/videos"}>Videos</Link>
							</Button>
							<Button onClick={onClose} variant={"ghost"} colorScheme="purple">
								<Link to={"/videos?category=free"}>Free Videos</Link>
							</Button>
							<Button onClick={onClose} variant={"ghost"} colorScheme="purple">
								<Link to={"/upload"}>Upload Videos</Link>
							</Button>
						</VStack>
					</DrawerBody>

					<DrawerFooter>
						<HStack w={"full"} justifyContent={"space-evenly"} mb={6}>
							<Button onClick={onClose} colorScheme="purple">
								<Link to={"/login"}>Login</Link>
							</Button>
							<Button onClick={onClose} variant="outline" colorScheme="purple">
								<Link to={"/signup"}>Sign Up</Link>
							</Button>
						</HStack>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</div>
	);
};

export default Header;
