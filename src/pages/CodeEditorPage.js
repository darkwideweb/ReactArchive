import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Container, Typography, Box, Paper, IconButton, Select, MenuItem, Snackbar, Alert, Tooltip } from '@mui/material';
import { Save, Undo, Redo, CopyAll } from '@mui/icons-material';
import CodeEditor from '../components/CodeEditor';

const CodeEditorPage = () => {
  const [code, setCode] = useState(localStorage.getItem('code') || '// Начните писать ваш код здесь...');
  const [language, setLanguage] = useState('javascript');
  const [theme, setTheme] = useState('dracula');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');
  const [undoStack, setUndoStack] = useState([]);
  const [redoStack, setRedoStack] = useState([]);
  const iframeRef = useRef(null);

  const runCode = useCallback((code) => {
    if (iframeRef.current) {
      const iframe = iframeRef.current;
      const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

      let htmlContent = '';
      let cssContent = '';
      let jsContent = '';

      if (language === 'html') {
        htmlContent = code;
      } else if (language === 'css') {
        cssContent = code;
        htmlContent = `<style>${cssContent}</style>`;
      } else if (language === 'javascript') {
        jsContent = code;
        htmlContent = `<script>
          try {
            console.log = function(message) {
              const output = document.createElement('div');
              output.textContent = message;
              document.body.appendChild(output);
            };
            ${jsContent}
          } catch (error) {
            const errorMessage = document.createElement('div');
            errorMessage.style.color = 'red';
            errorMessage.textContent = error.message;
            document.body.appendChild(errorMessage);
          }
        </script>`;
      }

      iframeDoc.open();
      iframeDoc.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>Вывод кода</title>
            ${language === 'css' ? `<style>${cssContent}</style>` : ''}
          </head>
          <body>
            ${htmlContent}
            ${language === 'javascript' ? `<script>${jsContent}</script>` : ''}
          </body>
        </html>
      `);
      iframeDoc.close();
    }
  }, [language]);

  useEffect(() => {
    localStorage.setItem('code', code);
    runCode(code);
  }, [code, runCode]);

  const handleCodeChange = (newCode) => {
    setUndoStack((prev) => [...prev, code]);
    setRedoStack([]);
    setCode(newCode);
  };

  const handleLanguageChange = (event) => setLanguage(event.target.value);
  const handleThemeChange = (event) => setTheme(event.target.value);

  const handleSave = () => {
    try {
      localStorage.setItem('code', code);
      showSnackbar('Код успешно сохранён!', 'success');
    } catch (error) {
      showSnackbar('Не удалось сохранить код!', 'error');
    }
  };

  const handleUndo = () => {
    if (undoStack.length > 0) {
      const lastState = undoStack.pop();
      setRedoStack((prev) => [...prev, code]);
      setCode(lastState);
    }
  };

  const handleRedo = () => {
    if (redoStack.length > 0) {
      const lastState = redoStack.pop();
      setUndoStack((prev) => [...prev, code]);
      setCode(lastState);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
      .then(() => showSnackbar('Код скопирован в буфер обмена!', 'success'))
      .catch(() => showSnackbar('Не удалось скопировать код!', 'error'));
  };

  const showSnackbar = (message, severity) => {
    setSnackbarMessage(message);
    setSnackbarSeverity(severity);
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => setSnackbarOpen(false);

  return (
    <Container sx={{ mt: 6, mb: 6 }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{
          fontWeight: 'bold',
          color: 'primary.main',
          textTransform: 'uppercase',
          letterSpacing: 1,
          mb: 4,
        }}
      >
        Интерактивный IDE
      </Typography>

      <Paper
        elevation={3}
        sx={{
          padding: 4,
          backgroundColor: 'background.paper',
          borderRadius: 2,
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <Box>
            <Tooltip title="Сохранить" arrow>
              <IconButton onClick={handleSave}><Save /></IconButton>
            </Tooltip>
            <Tooltip title="Отменить" arrow>
              <IconButton onClick={handleUndo}><Undo /></IconButton>
            </Tooltip>
            <Tooltip title="Применить" arrow>
              <IconButton onClick={handleRedo}><Redo /></IconButton>
            </Tooltip>
            <Tooltip title="Скопировать" arrow>
              <IconButton onClick={handleCopy}><CopyAll /></IconButton>
            </Tooltip>
          </Box>
          <Box>
            <Select value={language} onChange={handleLanguageChange} sx={{ mr: 2 }}>
              <MenuItem value="javascript">JavaScript</MenuItem>
              <MenuItem value="html">HTML</MenuItem>
              <MenuItem value="css">CSS</MenuItem>
            </Select>
            <Select value={theme} onChange={handleThemeChange}>
              <MenuItem value="dracula">Dracula</MenuItem>
              <MenuItem value="xcodeLight">Light Xcode</MenuItem>
              <MenuItem value="xcodeDark">Dark Xcode</MenuItem>
            </Select>
          </Box>
        </Box>

        <Box sx={{ mt: 2 }}>
          <CodeEditor
            code={code}
            onCodeChange={handleCodeChange}
            language={language}
            theme={theme}
          />
        </Box>

        {language && (
          <Box sx={{ mt: 2 }}>
            <Typography variant="h6">Вывод:</Typography>
            <Paper elevation={2} sx={{ padding: 2, height: '300px', overflow: 'auto' }}>
              <iframe
                ref={iframeRef}
                title="Вывод кода"
                style={{ width: '100%', height: '100%', border: 'none' }}
              />
            </Paper>
          </Box>
        )}
      </Paper>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbarSeverity}
          sx={{ width: '100%' }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default CodeEditorPage;
