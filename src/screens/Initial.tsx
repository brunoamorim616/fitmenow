import { Input, View } from 'native-base';
import { useRef, useState } from 'react';
import { Animated } from 'react-native';

export function Initial() {
  const scalePlacheHolderY = useRef(new Animated.Value(0)).current
  const fadeAnim = useRef(new Animated.Value(1)).current

  const [inputValue, setInputValue] = useState<string>('');

  function Animate () {
    Animated.timing(scalePlacheHolderY, {
      toValue: 1, duration: 500,  useNativeDriver: true
    }).start()

    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }
    ).start();

  }

  function AnimateBack () {
    if (!inputValue || inputValue===''){
      Animated.timing(scalePlacheHolderY, {
        toValue: 0, duration: 500,  useNativeDriver: true
      }).start()
  
      Animated.timing(
        fadeAnim,
        {
          toValue: 0.5,
          duration: 500,
          useNativeDriver: true,
        }
      ).start();
    }
  }


  return (
  <View backgroundColor={'white'} flex={1} justifyContent={'center'} alignItems={'center'}>
    <View position={'absolute'} top={0} left={0} right={0} bottom={0} width={'100%'}  color={'red'} justifyContent={'center'} >
      <Input
      onChangeText={(text) => setInputValue(text)}
      value={inputValue}
      hitSlop={{top: 30, bottom: 30}}
      onFocus={Animate}
      onBlur={AnimateBack}
        mx="3"
        w={{
          base: "75%",
          md: "25%",
        }}
      />
      <Animated.View style={{ backgroundColor: 'white',
        width: 80,
        position: 'relative',right: 0, left: 20, bottom: 27,
        transform: [
          {translateY: scalePlacheHolderY.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -15]
          },
        )}
      ] 
      }} >
        <Animated.Text style={{
          textAlign:'center',
          width: 80,
          opacity: fadeAnim, 
          position: 'relative',right: 0, left: 0 }} >Placeholder</Animated.Text>
      </Animated.View>
    </View>
  </View>
  );
}