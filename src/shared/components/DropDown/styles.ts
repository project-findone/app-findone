import { StyleSheet } from 'react-native';
import styled, { DefaultTheme } from 'styled-components/native';

import { Theme } from '@shared/theme';

interface Props extends DefaultTheme {
  error: boolean
  width: number
}

export const originalDropDownStyle = StyleSheet.create({
  buttonContainer: {
    backgroundColor: 'transparent',
    width: 'auto',
    height: 'auto',
    paddingLeft: 0,
    paddingRight: 0,
    marginTop: 20,
    overflow: 'scroll',
  },

  dropDownContainer: {
    marginTop: -50,
    borderRadius: 10,
    backgroundColor: Theme.COLORS.BG,
  },

  dropDownText: {
    fontFamily: Theme.FONT_FAMILY.REGULAR,
    fontSize: 16,
    color: Theme.COLORS.CAPTION_700,
  },
});

export const ButtonDropdownContainer = styled.View<Props>`
    width: ${({ width }) => width || 100}%;
    height: 65px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border: 2.3px solid ${({ error, theme }) => (error
    ? theme.COLORS.ALERT
    : theme.COLORS.CAPTION_400)};
    border-radius: 6px;
    padding: 10px;
`;

export const ButtonText = styled.Text<Props>`
    font-size: ${({ theme }) => theme.FONT_SIZE.SM};
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    color: ${({ error, theme }) => (error
    ? theme.COLORS.ALERT
    : theme.COLORS.CAPTION_600)};
`;

export const LabelContainer = styled.View<Props>`
    background-color: ${({ theme }) => theme.COLORS.BG};
    padding: 6px;
    align-self: flex-start;
    margin-bottom: -18px;
    margin-left: 18px;
    z-index: 1;
`;

export const LabelText = styled.Text<Props>`
    font-size: ${({ theme }) => theme.FONT_SIZE.SM};
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    color: ${({ error, theme }) => (error
    ? theme.COLORS.ALERT
    : theme.COLORS.CAPTION_700)};
`;
