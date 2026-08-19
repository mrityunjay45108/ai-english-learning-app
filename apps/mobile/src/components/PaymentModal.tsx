// apps/mobile/src/components/PaymentModal.tsx
import React from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';

interface PaymentModalProps {
  visible: boolean;
  onClose: () => void;
  onSuccess: () => void;
  onFailure: () => void;
}

export default function PaymentModal({ visible, onClose, onSuccess, onFailure }: PaymentModalProps) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Secure Payment (Mock Gateway)</Text>
          <Text style={styles.modalSub}>Simulating UPI / Card Transaction of ₹1 for 3-Day Trial</Text>

          <TouchableOpacity style={styles.successBtn} onPress={onSuccess}>
            <Text style={styles.btnText}>✅ Pay ₹1 (Simulate Success)</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.failBtn} onPress={onFailure}>
            <Text style={styles.failBtnText}>❌ Cancel / Fail</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalContent: {
    backgroundColor: '#1F2937',
    padding: 24,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#374151',
  },
  modalTitle: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  modalSub: {
    color: '#9CA3AF',
    fontSize: 12,
    marginBottom: 20,
    textAlign: 'center',
  },
  successBtn: {
    backgroundColor: '#10B981',
    width: '100%',
    padding: 14,
    borderRadius: 14,
    alignItems: 'center',
    marginBottom: 12,
  },
  btnText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 15,
  },
  failBtn: {
    backgroundColor: '#374151',
    width: '100%',
    padding: 14,
    borderRadius: 14,
    alignItems: 'center',
  },
  failBtnText: {
    color: '#F87171',
    fontWeight: 'bold',
    fontSize: 15,
  },
});