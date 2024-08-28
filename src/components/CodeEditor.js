import React, { useMemo } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';
import { dracula } from '@uiw/codemirror-theme-dracula';
import { xcodeLight, xcodeDark } from '@uiw/codemirror-theme-xcode';
import { keymap } from '@codemirror/view';
import { history, undo, redo } from '@codemirror/commands';

const languageExtensions = {
  javascript: javascript(),
  html: html(),
  css: css(),
};

const themes = {
  dracula: dracula,
  xcodeLight: xcodeLight,
  xcodeDark: xcodeDark,
};

const basicSetup = {
  lineNumbers: true,
  foldGutter: true,
  highlightActiveLineGutter: true,
  matchBrackets: true,
};

const CodeEditor = ({ code, onCodeChange, language, theme }) => {
  const languageExtension = useMemo(() => languageExtensions[language] || languageExtensions.javascript, [language]);
  const themeValue = useMemo(() => themes[theme] || themes.dracula, [theme]);

  return (
    <CodeMirror
      value={code}
      height="400px"
      theme={themeValue}
      extensions={[
        languageExtension,
        keymap.of([undo, redo]),
        history(),
      ]}
      onChange={onCodeChange}
      basicSetup={basicSetup}
    />
  );
};

export default CodeEditor;