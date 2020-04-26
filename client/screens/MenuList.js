import React from "react";
import {
    Container,
    Body,
    Content,
    Header,
    Title,
    Button,
    Icon,
    Text,
} from "native-base";
import { LinearGradient } from "expo-linear-gradient";

const MenuList = (props) => {
    return (
        <Container>
            <Header>
                <Body>
                    <Title>Menu</Title>
                </Body>
            </Header>
            <LinearGradient
                colors={["#B5EAD7", "#fff", "#fff", "#B5EAD7"]}
                style={{ flex: 1 }}
            >
                <Content padder>
                    <Content padder></Content>
                    <Button
                        iconLeft
                        rounded
                        onPress={() => props.navigation.navigate("Profile")}
                    >
                        <Icon name="md-person" />
                        <Text>Edit Profile</Text>
                    </Button>
                    <Content padder></Content>
                    <Button
                        iconLeft
                        rounded
                        onPress={() => props.navigation.navigate("Statistics")}
                    >
                        <Icon name="md-stats" />
                        <Text>Statistics</Text>
                    </Button>
                    <Content padder></Content>
                    <Button
                        iconLeft
                        rounded
                        onPress={() => props.navigation.navigate("Friends")}
                    >
                        <Icon name="people" />
                        <Text>Friends</Text>
                    </Button>
                    <Content padder></Content>
                    <Button
                        iconLeft
                        rounded
                        onPress={() => props.navigation.navigate("Redeem")}
                    >
                        <Icon name="md-card" />
                        <Text>Redeem Points</Text>
                    </Button>
                    <Content padder></Content>
                    <Button
                        rounded
                        onPress={() => props.navigation.navigate("Login")}
                    >
                        <Text>Log Out</Text>
                    </Button>
                </Content>
            </LinearGradient>
        </Container>
    );
};

export default MenuList;
