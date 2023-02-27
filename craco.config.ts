/* eslint-disable no-undef */
import {resolve} from 'path';

const resolvePath = (p: string) => resolve(__dirname, p);

export const webpack = {
  alias: {
    '~': resolvePath('src'),
  },
};
