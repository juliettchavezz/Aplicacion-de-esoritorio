import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';

export default function App() {
  const questions = [
    { text: 'Sera este el fin del hombre araña.', answer: false },
    { text: 'mi tia jeanin le gustan los negros.', answer: true },
    // Agrega más preguntas según sea necesario
    { text: 'React es un marco de trabajo de JavaScript.', answer: true },
    { text: 'El sol es una estrella.', answer: true },
    { text: 'El agua hierve a 100 grados Celsius.', answer: true },
    { text: 'JavaScript se utiliza solo en el lado del cliente.', answer: false },
    { text: 'La Tierra es plana.', answer: false },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleAnswer = (answer) => {
    if (answer === questions[currentQuestion].answer) {
      Alert.alert('Correcto', '¡Respuesta correcta!');
    } else {
      Alert.alert('Incorrecto', 'Respuesta incorrecta. Inténtalo de nuevo.');
    }

    // Avanzar a la siguiente pregunta
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Si ya no hay más preguntas, reiniciar el juego
      Alert.alert('Fin del juego', 'Has respondido todas las preguntas.', [{ text: 'OK', onPress: resetGame }]);
    }
  };

  const goToNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Estás en la última pregunta, vuelve a la primera pregunta
      setCurrentQuestion(0);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    } else {
      // Estás en la primera pregunta, ve a la última pregunta
      setCurrentQuestion(questions.length - 1);
    }
  };

  const resetGame = () => {
    setCurrentQuestion(0);
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerWithBorder}>
        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>{questions[currentQuestion].text}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => handleAnswer(true)}>
            <Text style={styles.buttonText}>Verdadero</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleAnswer(false)}>
            <Text style={styles.buttonText}>Falso</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.navigationButtons}>
        <TouchableOpacity style={[styles.navigationButton, { backgroundColor: 'gray', borderColor: 'gray' }]} onPress={goToPreviousQuestion}>
          <Text style={styles.buttonText}>Anterior</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.navigationButton, { backgroundColor: 'gray', borderColor: 'gray' }]} onPress={goToNextQuestion}>
          <Text style={styles.buttonText}>Siguiente</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  containerWithBorder: {
    borderWidth: 2,
    borderColor: 'blue',
    borderRadius: 5,
    marginVertical: 10,
    width: '100%',
  },
  questionContainer: {
    padding: 10,
    marginBottom: 20,
  },
  questionText: {
    fontSize: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    padding: 10,
  },
  button: {
    borderWidth: 2, // Añadido: Borde alrededor del botón
    borderColor: '#3498db',
    backgroundColor: '#3498db',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    width: '45%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  navigationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  navigationButton: {
    borderWidth: 2, // Añadido: Borde alrededor del botón de navegación
    borderColor: 'gray',
    backgroundColor: 'gray',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    width: '45%',
    alignItems: 'center',
  },
});
