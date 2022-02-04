import { Input, View } from "native-base";
import { useEffect, useRef, useState } from "react";
import { Animated } from "react-native";

interface InputTextProps {
    placeHolderText: string;
}

export function InputText({ placeHolderText }: InputTextProps) {
    const scalePlaceHolderY = useRef(new Animated.Value(0)).current;
    const fadeAnim = useRef(new Animated.Value(0.5)).current;

    const [inputValue, setInputValue] = useState<string>("");

    function Animate() {
        Animated.timing(scalePlaceHolderY, {
            toValue: 1,
            duration: 200,
            useNativeDriver: true,
        }).start();

        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 200,
            useNativeDriver: true,
        }).start();
    }

    function AnimateBack() {
        if (!inputValue || inputValue === "") {
            Animated.timing(scalePlaceHolderY, {
                toValue: 0,
                duration: 200,
                useNativeDriver: true,
            }).start();

            Animated.timing(fadeAnim, {
                toValue: 0.5,
                duration: 200,
                useNativeDriver: true,
            }).start();
        }
    }

    useEffect(() => {
        if (inputValue) {
            scalePlaceHolderY.setValue(1);
            fadeAnim.setValue(1);
        }
    }, []);

    return (
        <View
            marginY={2}
            position={"relative"}
            top={0}
            left={0}
            right={0}
            bottom={0}
            width={"100%"}
            justifyContent={"center"}
        >
            <Input
                onChangeText={(text) => setInputValue(text)}
                value={inputValue}
                hitSlop={{ top: 10, bottom: 10, left: 150, right: 150 }}
                onFocus={Animate}
                onBlur={AnimateBack}
                mx="3"
                w={{
                    base: "75%",
                    md: "25%",
                }}
            />
            <Animated.View
                style={{
                    justifyContent: "center",
                    alignItems: "center",
                    position: "absolute",
                    left: 20,
                    bottom: 3,
                    top: 0,
                    transform: [
                        {
                            translateY: scalePlaceHolderY.interpolate({
                                inputRange: [0, 1],
                                outputRange: [0, -15],
                            }),
                        },
                    ],
                }}
            >
                <Animated.Text
                    style={{
                        backgroundColor: "white",
                        paddingHorizontal: 5,
                        textAlign: "left",
                        opacity: fadeAnim,
                        position: "relative",
                        right: 0,
                        left: 0,
                    }}
                >
                    {placeHolderText}
                </Animated.Text>
            </Animated.View>
        </View>
    );
}
