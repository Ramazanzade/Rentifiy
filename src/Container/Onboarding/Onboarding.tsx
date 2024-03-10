import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Image, SafeAreaView, FlatList, TouchableOpacity, Modal } from 'react-native';
import { useSelector } from 'react-redux';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../Utils/common';
import LottieView from 'lottie-react-native';
import LoadingPage from '../../Contance/Loading-Page/LoadingPage';
import Svg1 from '../../assets/imge/Onboarding-imge/1.svg'
import Svg2 from '../../assets/imge/Onboarding-imge/2.svg'
import Svg3 from '../../assets/imge/Onboarding-imge/3.svg'
import Svg4 from '../../assets/imge/Onboarding-imge/4.svg'
import LinearGradient from 'react-native-linear-gradient';
const images = [
  { id: 1, uri: 'Svg1', title: 'Welcome', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' },
  { id: 2, uri: 'Svg2', title: 'Rent a car', text: 'Customize your gifting experience, from elegant bouquets to thoughtful gifts, all at your fingertips with Bloomify. Start spreading joy today!', },
  { id: 3, uri: 'Svg3', title: 'Security', text: 'Customize your gifting experience, from elegant bouquets to thoughtful gifts, all at your fingertips with Bloomify. Start spreading joy today!', },
  { id: 4, uri: 'Svg4', title: 'Fast Process', text: 'Customize your gifting experience, from elegant bouquets to thoughtful gifts, all at your fingertips with Bloomify. Start spreading joy today!', },

];

const icons = {
  Svg1: Svg1,
  Svg2: Svg2,
  Svg3: Svg3,
  Svg4: Svg4


};
type Item = {
  uri: 'Svg1' | 'Svg2' | 'Svg3' | 'Svg4';
  title: string;
  text: string;
};
const Slide = ({ item }: { item: Item }) => {
  const Icon = icons[item.uri];

  return (
    <View style={{ alignItems: 'center', width: SCREEN_WIDTH }}>
      <Text style={{ width: SCREEN_WIDTH - 60, textAlign: 'center', color: '#000000', fontSize: 38, fontWeight: '700', marginVertical: '5%' }}>{item?.title}</Text>
      <Icon />
      <View>
        <Text style={{ width: SCREEN_WIDTH - 60, textAlign: 'center', color: '#667085', fontSize: 13, marginTop: '9%' }}>{item?.text}</Text>
      </View>
    </View>
  );
};

const Onboarding = ({ navigation }: any) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [loading, setloading] = useState(false);
  const ref = useRef<any>();
  const updateCurrentSlideIndex = (e: any) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / SCREEN_WIDTH);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex !== images.length) {
      const offset = nextSlideIndex * SCREEN_WIDTH;
      ref.current.scrollToOffset({ offset });
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const skip = () => {
    const lastSlideIndex = images.length - 1;
    const offset = lastSlideIndex * SCREEN_WIDTH;
    ref.current.scrollToOffset({ offset });
    setCurrentSlideIndex(lastSlideIndex);
  };
  const goaccountpage = () => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
      navigation.navigate('AccountSetupScreen')
    }, 3000);

  }
  const Footer = () => {
    return (
      <View style={{ height: SCREEN_HEIGHT * 0.2, justifyContent: 'space-between', alignSelf: 'center' }}>
        <View style={{ flexDirection: 'row', justifyContent: 'center', }}>
          {images.map((_, index) => (
            <View
              key={index}
              style={[
                { height: 10, width: 10, backgroundColor: 'rgba(248, 207, 141, 1)', marginHorizontal: 3, borderRadius: 50 },
                currentSlideIndex === index && { backgroundColor: 'rgba(244, 183, 85, 1) ', height: 8, width: 50, alignSelf: 'center' },
              ]}
            />
          ))}
        </View>
        <View style={{ marginBottom: '10%' }}>
          {currentSlideIndex === images.length - 1 ? (
            <View style={{ height: 60 }}>
              <TouchableOpacity
                onPress={() => goaccountpage()}
                style={{ flex: 1, height: 100, width: SCREEN_WIDTH - 40, borderRadius: 70 }}
              >
                <LinearGradient
                  colors={['rgba(244, 183, 85, 0.27)', 'rgba(244, 183, 85, 0.5)', 'rgba(244, 183, 85, 0.7)', 'rgba(244, 183, 85, 0.75)', 'rgba(244, 183, 85, 0.9)', 'rgba(244, 183, 85, 1)']}
                  style={{ flex: 1, borderRadius: 70, justifyContent: 'center', alignItems: 'center' }}
                >
                  <Text style={{ fontWeight: 'bold', fontSize: 17, color: '#FFFFFF' }}>Get Start</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={{ flexDirection: 'row', width: SCREEN_WIDTH - 40 }}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={[{ flex: 1, height: 50, borderRadius: 50, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }, { backgroundColor: '#F2F4F7' }]}
                onPress={skip}>
                <Text style={{ fontWeight: 'bold', fontSize: 17, color: 'rgba(102, 112, 133, 1)' }}>Skip</Text>
              </TouchableOpacity>
              <View style={{ width: 15 }} />
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={goToNextSlide}
                style={{ flex: 1, height: 50, }}>
                <LinearGradient
                  colors={['rgba(244, 183, 85, 0.27)', 'rgba(244, 183, 85, 0.5)', 'rgba(244, 183, 85, 0.7)', 'rgba(244, 183, 85, 0.75)', 'rgba(244, 183, 85, 0.9)', 'rgba(244, 183, 85, 1)']}
                  style={{ borderRadius: 50, justifyContent: 'center', alignItems: 'center', flex: 1 }}
                >
                  <Text style={{ fontWeight: 'bold', fontSize: 17, color: '#ffffff' }}>Next</Text>
                </LinearGradient>

              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={loading}
        >
          <LoadingPage />
        </Modal>
       
        <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}>
          <View>
            <Text style={{ fontFamily: 'Dragrace', color: '#000000', textAlign: 'center', fontSize: 50, marginTop: '10%' }}>RENTIFIY</Text>
            <FlatList
              ref={ref}
              onMomentumScrollEnd={updateCurrentSlideIndex}
              showsHorizontalScrollIndicator={false}
              horizontal
              data={images}
              pagingEnabled
              renderItem={({ item }: any) => <Slide item={item} />}
            />
          </View>
          <View >
            <Footer />
          </View>
        </View>
    </SafeAreaView>
  );
};

export default Onboarding;
