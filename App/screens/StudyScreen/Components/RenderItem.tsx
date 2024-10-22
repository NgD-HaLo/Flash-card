import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {TCard} from '../../../types/Card';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {AppText} from '../../../components';
import {colors} from '../../../themes/color';
import SvgComponent from '../../../assets/svg';
const {width} = Dimensions.get('window');

const ITEM_LAYOUT = {
  width: width,
  height: 300,
};
interface RenderItemProps {
  item: TCard;
  isOpen: boolean;
  setSelectedCardId: (id: TCard['id'] | null) => void;
}
const RenderItem = ({item, isOpen, setSelectedCardId}: RenderItemProps) => {
  const cardOffset = useSharedValue(ITEM_LAYOUT.height / 4);
  const descOffset = useSharedValue(-ITEM_LAYOUT.height);

  const OpenDesc = () => {
    cardOffset.value = withTiming(-(ITEM_LAYOUT.height / 5), {duration: 500});
    descOffset.value = withTiming(ITEM_LAYOUT.height / 5, {duration: 500});
  };
  useEffect(() => {
    if (isOpen) {
      OpenDesc();
    } else {
      CloseDesc();
    }
  }, [isOpen, item.id]);

  const CloseDesc = () => {
    cardOffset.value = withTiming(ITEM_LAYOUT.height / 4, {duration: 500});
    descOffset.value = withTiming(-ITEM_LAYOUT.height, {duration: 500});
  };
  const toggleCard = (id: TCard['id']) => {
    if (isOpen) {
      setSelectedCardId(null);
      CloseDesc();
    } else {
      setSelectedCardId(id);
      OpenDesc();
    }
  };

  const cardAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: cardOffset.value}],
    };
  });

  const descAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: descOffset.value}],
      opacity: interpolate(
        descOffset.value,
        [-ITEM_LAYOUT.height, ITEM_LAYOUT.height / 5],
        [0, 1],
      ),
      zIndex: -1,
    };
  });

  return (
    <View style={styles.cardContainer}>
      <Animated.View style={[styles.cardContent, cardAnimatedStyle]}>
        <AppText color={colors.white} fontSize={40}>
          {item.content}
        </AppText>
        {!isOpen ? (
          <TouchableOpacity
            style={styles.showDesc}
            onPress={() => toggleCard(item.id)}>
            <SvgComponent name="ARROW_DOWN" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.hideDesc}
            onPress={() => toggleCard(item.id)}>
            <SvgComponent name="ARROW_UP" />
          </TouchableOpacity>
        )}
      </Animated.View>
      <Animated.View style={[styles.cardDesc, descAnimatedStyle]}>
        <AppText color={colors.white} fontSize={25}>
          {item.content}
        </AppText>
        <AppText color={colors.white} fontSize={16}>
          {item.desc}
        </AppText>
      </Animated.View>
    </View>
  );
};

export default RenderItem;

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  cardContent: {
    height: ITEM_LAYOUT.height,
    width: width - width * 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4A0E5C',
    borderRadius: 10,
    marginHorizontal: 10,
  },
  cardDesc: {
    height: ITEM_LAYOUT.height - ITEM_LAYOUT.height / 3,
    width: width - width * 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4A0E5C',
    borderRadius: 10,
    marginHorizontal: 10,
  },
  page: {
    marginTop: 10,
  },
  showDesc: {
    padding: 20,
    backgroundColor: colors.white,
    borderRadius: 20,
    position: 'absolute',
    bottom: -30,
    shadowColor: '#000',
    elevation: 10,
  },
  hideDesc: {
    padding: 20,
    backgroundColor: colors.white,
    borderRadius: 20,
    position: 'absolute',
    bottom: -30,
    shadowColor: '#000',
    elevation: 10,
  },
});