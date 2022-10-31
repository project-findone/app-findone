import { StyleSheet } from 'react-native';
import Toast from 'react-native-root-toast';

import { Theme } from '@shared/theme';

interface Props {
  message: string;
  duration?: number;
  position?: number;
  type: 'sucess' | 'alert';
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 30,
    padding: 16,
  },

  text: {
    color: Theme.COLORS.TEXT_INVERTED,
    fontFamily: Theme.FONT_FAMILY.MEDIUM,
    fontSize: 16,
  },
});

export const showToast = ({
  message,
  duration = Toast.durations.LONG,
  position = 50,
  type,
}: Props) => {
  const toast = Toast.show(message, {
    containerStyle: styles.container,
    textStyle: styles.text,
    backgroundColor: type === 'sucess' ? Theme.COLORS.SUCESS : Theme.COLORS.ALERT,
    opacity: 1,
    duration,
    position,
    animation: true,
    shadow: true,
    hideOnPress: true,
  });

  return toast;
};
