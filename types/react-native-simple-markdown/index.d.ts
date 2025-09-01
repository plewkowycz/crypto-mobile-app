declare module 'react-native-simple-markdown' {
  import * as React from 'react';
  import { ImageStyle, TextStyle, ViewStyle } from 'react-native';

  export type MarkdownStyle = ViewStyle | TextStyle | ImageStyle;

  export type MarkdownStyles = {
    view?: ViewStyle;
    [styleName: string]: MarkdownStyle | undefined;
  };

  export interface MarkdownProps {
    /** Style overrides for markdown elements */
    styles?: MarkdownStyles;
    /** Markdown content to render */
    children?: string | string[];
    /** Custom simple-markdown rules to merge with defaults */
    rules?: Record<string, any>;
    /** Only allow these rule names (paragraph and text are always kept) */
    whitelist?: string[];
    /** Disallow these rule names (paragraph and text are always kept) */
    blacklist?: string[];
    /** Optional error handler invoked when parsing/rendering fails */
    errorHandler?: (errors: unknown, children?: string) => void;
  }

  export default class Markdown extends React.Component<MarkdownProps> {}
}

declare module 'react-native-simple-markdown/styles' {
  import { MarkdownStyles } from 'react-native-simple-markdown';
  const styles: MarkdownStyles;
  export default styles;
}

declare module 'react-native-simple-markdown/rules' {
  import { MarkdownStyles } from 'react-native-simple-markdown';
  const createRules: (styles: MarkdownStyles) => Record<string, any>;
  export default createRules;
}
