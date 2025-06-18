import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Animated,
} from 'react-native';
import {useRef} from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import TodoCard from '../Components/TodoCard';

interface Todo {
  id: string;
  text: string;
  date: string;
  category: string;
  completed: boolean;
}

const ToDoScreen: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: '1',
      text: 'TOA assignment',
      date: 'June 1',
      category: 'TOA',
      completed: false,
    },
    {
      id: '2',
      text: 'MAD Quiz',
      date: 'June 1',
      category: 'MAD',
      completed: false,
    },
    {
      id: '3',
      text: 'OS Quiz',
      date: 'June 2',
      category: 'OS',
      completed: false,
    },
    {
      id: '4',
      text: 'FA Assignment',
      date: 'June 2',
      category: 'FA',
      completed: false,
    },
  ]);

  const [showUndo, setShowUndo] = useState(false);
  const [pendingDelete, setPendingDelete] = useState<Todo | null>(null);
  const [undoTimeout, setUndoTimeout] = useState<NodeJS.Timeout | null>(null);
  // const undoAnimation = new Animated.Value(0);
  const undoAnimation = useRef(new Animated.Value(0)).current;

  const handleTodoCheck = (todoId: string) => {
    const todoToComplete = todos.find(todo => todo.id === todoId);
    if (!todoToComplete) return;

    // Set the todo as pending delete and show undo button
    setPendingDelete(todoToComplete);
    setShowUndo(true);

    // Animate undo button appearance
    Animated.timing(undoAnimation, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();

    // Set timeout to actually delete the todo after 5 seconds
    const timeout = setTimeout(() => {
      setTodos(prevTodos => prevTodos.filter(todo => todo.id !== todoId));
      hideUndoButton();
    }, 3000);

    setUndoTimeout(timeout);
  };

  const handleUndo = () => {
    if (undoTimeout) {
      clearTimeout(undoTimeout);
      setUndoTimeout(null);
    }
    setPendingDelete(null);
    hideUndoButton();
  };

  const hideUndoButton = () => {
    Animated.timing(undoAnimation, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setShowUndo(false);
    });
  };

  useEffect(() => {
    return () => {
      if (undoTimeout) {
        clearTimeout(undoTimeout);
      }
    };
  }, [undoTimeout]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.Container}>
        <View style={styles.headingContainer}>
          <Text style={styles.headingTxt}>To-do</Text>
          <Text style={styles.descriptionTxt}>
            Find info related todo tasks.
          </Text>
        </View>

        <View style={styles.bodyContainer}>
          {todos.map(todo => (
            <TodoCard
              key={todo.id}
              text={todo.text}
              date={todo.date}
              category={todo.category}
              onCheck={() => handleTodoCheck(todo.id)}
              isPendingDelete={pendingDelete?.id === todo.id}
            />
          ))}
        </View>
      </ScrollView>

      {showUndo && (
        <Animated.View
          style={[
            styles.undoContainer,
            {
              opacity: undoAnimation,
              transform: [
                {
                  translateY: undoAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [100, 0],
                  }),
                },
              ],
            },
          ]}>
          <TouchableOpacity style={styles.undoButton} onPress={handleUndo}>
            <Icon
              name="undo"
              size={20}
              color="#FFFFFF"
              style={styles.undoIcon}
            />
            <Text style={styles.undoText}>UNDO</Text>
          </TouchableOpacity>
        </Animated.View>
      )}
    </SafeAreaView>
  );
};

export default ToDoScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  Container: {
    margin: 16,
    paddingVertical: 8,
    paddingHorizontal: 6,
  },
  headingContainer: {},
  headingTxt: {
    fontSize: 24,
    color: '#1A6B7E',
    fontWeight: 'bold',
  },
  descriptionTxt: {
    marginVertical: 12,
  },
  bodyContainer: {},
  undoContainer: {
    position: 'absolute',
    bottom: 30,
    left: 20,
    right: 20,
    alignItems: 'center',
  },
  undoButton: {
    backgroundColor: '#1A6B7E',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 25,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  undoIcon: {
    marginRight: 8,
  },
  undoText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
