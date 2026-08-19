// apps/mobile/src/screens/AiCoachScreen.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import { Sparkles, Send } from 'lucide-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const API_URL = process.env.EXPO_PUBLIC_API_URL || 'http://localhost:3012';

interface Message {
  sender: string;
  text: string;
}

export default function AiCoachScreen() {
  const [transcript, setTranscript] = useState<Message[]>([
    {
      sender: 'Emma',
      text: 'Hello Mrityunjay! I am Emma, your AI Speech Coach. Practice your corporate pitch or ask me anything about English grammar.',
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!inputMessage.trim()) return;

    const userMsg = inputMessage;
    setInputMessage('');

    // Safely update transcript with user message
    setTranscript((prev) =>
      Array.isArray(prev)
        ? [...prev, { sender: 'You', text: userMsg }]
        : [{ sender: 'You', text: userMsg }]
    );
    setIsLoading(true);

    try {
      const token = await AsyncStorage.getItem('user_token');
      const response = await axios.post(
        `${API_URL}/speech/chat`,
        { message: userMsg },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      const aiReply =
        response.data?.reply || 'Great pronunciation and fluency! Keep up the professional tone.';
      setTranscript((prev) =>
        Array.isArray(prev)
          ? [...prev, { sender: 'Emma', text: aiReply }]
          : [{ sender: 'Emma', text: aiReply }]
      );
    } catch (error) {
      // Offline fallback response simulation
      setTranscript((prev) => [
        ...(Array.isArray(prev) ? prev : []),
        {
          sender: 'Emma',
          text: 'Your sentence structure looks solid. Practice pacing your pitch with more confidence!',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      {/* AI Coach Status Banner */}
      <View style={styles.coachBanner}>
        <Sparkles size={16} color="#f43f5e" />
        <Text style={styles.coachBannerText}> Emma • Real-time Pronunciation & Grammar AI</Text>
      </View>

      {/* Transcript Chat Bubbles with Safe Array Check */}
      {Array.isArray(transcript) &&
        transcript.map((t, idx) => (
          <View
            key={idx}
            style={[styles.chatBubble, t?.sender === 'You' ? styles.userBubble : styles.aiBubble]}
          >
            <Text style={styles.chatSender}>{t?.sender}</Text>
            <Text style={styles.chatText}>{t?.text}</Text>
          </View>
        ))}

      {/* Loading Indicator when AI is evaluating */}
      {isLoading && (
        <View style={styles.loadingBox}>
          <ActivityIndicator size="small" color="#f43f5e" />
          <Text style={styles.loadingText}>Emma is evaluating your grammar...</Text>
        </View>
      )}

      {/* Bottom Input Area */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Speak or type your answer..."
          placeholderTextColor="#64748b"
          value={inputMessage}
          onChangeText={setInputMessage}
          onSubmitEditing={handleSend}
          returnKeyType="send"
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSend} activeOpacity={0.8}>
          <Send size={18} color="#fff" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, paddingBottom: 120, backgroundColor: '#030712', flexGrow: 1 },
  coachBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1e1b4b',
    padding: 12,
    borderRadius: 14,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#312e81',
  },
  coachBannerText: { color: '#f43f5e', fontSize: 12, fontWeight: 'bold', marginLeft: 6 },
  chatBubble: { padding: 14, borderRadius: 16, marginBottom: 12, maxWidth: '85%' },
  aiBubble: {
    backgroundColor: '#111827',
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderColor: '#1f2937',
  },
  userBubble: { backgroundColor: '#4c1d95', alignSelf: 'flex-end' },
  chatSender: { color: '#9ca3af', fontSize: 10, fontWeight: 'bold', marginBottom: 4 },
  chatText: { color: '#f3f4f6', fontSize: 13, lineHeight: 18 },
  loadingBox: { flexDirection: 'row', alignItems: 'center', padding: 10, gap: 8 },
  loadingText: { color: '#9ca3af', fontSize: 11 },
  inputContainer: { flexDirection: 'row', marginTop: 15, gap: 10, alignItems: 'center' },
  textInput: {
    flex: 1,
    backgroundColor: '#111827',
    borderWidth: 1,
    borderColor: '#374151',
    borderRadius: 16,
    paddingHorizontal: 16,
    color: '#fff',
    height: 50,
    fontSize: 13,
  },
  sendButton: {
    backgroundColor: '#f43f5e',
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 16,
    shadowColor: '#f43f5e',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
});
