import {TextInput, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import {AppText, SubmitButton} from '../../components';
import {colors} from '../../themes/color';
import Navigator from '../../navigation/NavigationService';
import {TTopic} from '../../types/Topic';
import SCREEN_NAME from '../../navigation/ScreenName';
import SvgComponent, {SvgName} from '../../assets/svg';
import {AppContainer} from '../../components/Core/AppContainer';
import {iconCategories} from '../ChooseIconScreen/Constant/listIcon';
import {iconColors} from '../ChooseIconScreen/Constant/listColor';

interface AddNewTopicViewProps {
  addTopic: (topic: TTopic) => void;
}

const AddNewTopicView = ({addTopic}: AddNewTopicViewProps) => {
  const initIcon = iconCategories[0].data[0];
  const initColor = iconColors[0];

  const [iconName, setIconName] = useState(initIcon);
  const [iconColor, setIconColor] = useState(initColor);

  const [topicName, setTopicName] = useState('');
  const handleSubmit = () => {
    let topic: TTopic = {title: topicName};
    if (topic.title === '') {
      return;
    }
    addTopic(topic);
    setTopicName('');
    setTimeout(() => {
      Navigator.navigateTo(SCREEN_NAME.MANUAL.ADD_NEW_CARD, {
        topic,
        iconName,
        iconColor,
      });
    }, 100);
  };
  return (
    <AppContainer title="ADD NEW TOPIC">
      <View style={styles.containerContent}>
        <View style={styles.addBox}>
          <View style={styles.addIconBox}>
            <AppText>Icon:</AppText>
            <TouchableOpacity
              style={[styles.icon, {backgroundColor: iconColor}]}
              onPress={() =>
                Navigator.navigateTo(SCREEN_NAME.MANUAL.CHOOSE_ICON, {
                  callback: (iconName: SvgName, iconColor: string) => {
                    setIconName(iconName);
                    setIconColor(iconColor);
                  },
                })
              }>
              <SvgComponent name={iconName} />
            </TouchableOpacity>
          </View>
          <View style={styles.addTopic}>
            <AppText>Topic:</AppText>
            <TextInput
              style={styles.inputTopic}
              placeholder="Input topic name"
              onChangeText={setTopicName}
              value={topicName}
            />
          </View>
        </View>
        <SubmitButton submit={handleSubmit} />
      </View>
    </AppContainer>
  );
};

export default AddNewTopicView;
