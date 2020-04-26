import React, { useState } from "react";
import {
    Container,
    Body,
    Content,
    Header,
    Title,
    Button,
    Card,
    Icon,
    Right,
    Textarea,
    Item,
    Text,
    Segment,
    Form,
    Left,
} from "native-base";
import { Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const AddActivity = (props) => {
    const [category, setCategory] = useState(0);
    const [enteredText, setEnteredText] = useState("");

    const textChangeHandler = (event) => {
        setEnteredText(event.target.value);
    };

    return (
        <Container>
            <Header>
                <Left>
                    <Button
                        transparent
                        onPress={() => props.navigation.goBack()}
                    >
                        <Icon name="arrow-round-back" />
                    </Button>
                </Left>
                <Body>
                    <Title>Add Activity</Title>
                </Body>
                <Right>
                    <Icon name="ios-leaf" />
                </Right>
            </Header>
            <LinearGradient
                colors={["#B5EAD7", "#fff", "#fff", "#B5EAD7"]}
                style={{ flex: 1 }}
            >
                <Content padder>
                    <Card>
                        <Form style={{ padding: 20 }}>
                            <Image
                                source={{
                                    uri:
                                        "https://wp-rocket.me/wp-content/uploads/1/placeholder-feature-image.png",
                                }}
                                style={{ height: 200, width: null, flex: 1 }}
                            />
                            <Text>Select a category:</Text>
                            <Segment>
                                <Button
                                    active={category === 0}
                                    onPress={() => setCategory(0)}
                                    first
                                >
                                    <Icon name="md-happy" />
                                </Button>
                                <Button
                                    active={category === 1}
                                    onPress={() => setCategory(1)}
                                >
                                    <Icon name="md-contacts" />
                                </Button>
                                <Button
                                    active={category === 2}
                                    onPress={() => setCategory(2)}
                                >
                                    <Icon name="md-bicycle" />
                                </Button>
                                <Button
                                    active={category === 3}
                                    onPress={() => setCategory(3)}
                                >
                                    <Icon name="md-flower" />
                                </Button>
                                <Button
                                    active={category === 4}
                                    onPress={() => setCategory(4)}
                                    last
                                >
                                    <Icon name="md-briefcase" />
                                </Button>
                            </Segment>
                            <Textarea
                                rowSpan={4}
                                rounded
                                bordered
                                placeholder="Write a description here!"
                                onChange={textChangeHandler}
                            />
                        </Form>
                        <Button>
                            <Text>Post!</Text>
                        </Button>
                    </Card>
                </Content>
            </LinearGradient>
        </Container>
    );
};

export default AddActivity;
