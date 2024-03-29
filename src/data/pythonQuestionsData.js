export const pythonQuestionsData = [
  {
    "id": 1,
    "question": "¿Cuál es la salida de este código?",
    "code": "print(type(None))",
    "answers": [
      "NoneType",
      "object",
      "Null",
      "int"
    ],
    "correctAnswer": 0
  },
  {
    "id": 2,
    "question": "¿Cuál es el resultado de la siguiente expresión?",
    "code": "2 + '3'",
    "answers":
    [
      "5",
      "'23'",
      "TypeError",
      "'5'"
    ],
    "correctAnswer": 2
  },
  {
    "id": 3,
    "question": "¿Cuál es la salida de este código?",
    "code": "a = 50\ndef foo():\n   a = 10\nfoo()\nprint(a)",
    "answers":
    [
      "10",
      "50",
      "SyntaxError",
      "60"
    ],
    "correctAnswer": 1
  },
  {
    "id": 4,
    "question": "¿Cuál es el resultado de la siguiente expresión?",
    "code": "print(('1' + '2') * 3)",
    "answers":
    [
      "'9'",
      "'34'",
      "'121212'",
      "'343434'"
    ],
    "correctAnswer": 2
  },
  {
    "id": 5,
    "question": "¿Cuál es la salida de este código?",
    "code": "for i in range(3):\n    print(i)",
    "answers":
    [
      "0 1 2",
      "3 3 3",
      "1 2 3",
      "2 1 0"
    ],
    "correctAnswer": 0
  },
  {
    "id": 6,
    "question": "¿Cuál es el resultado de la siguiente expresión?",
    "code": "print('3' < '2')",
    "answers":
    [
      "True",
      "False",
      "TypeError",
      "SyntaxError"
    ],
    "correctAnswer": 0
  },
  {
    "id": 7,
    "question": "¿Cuál es la salida de este código?",
    "code": "x = 1\ny = 2\nprint(*[x, y])",
    "answers":
    [
      "1 2",
      "[1, 2]",
      "SyntaxError",
      "None"
    ],
    "correctAnswer": 0
  },
  {
    "id": 8,
    "question": "¿Cuál es el resultado de la siguiente expresión?",
    "code": "'2' * 3 + '4'",
    "answers":
    [
      "'64'",
      "'2224'",
      "TypeError",
      "'10'"
    ],
    "correctAnswer": 1
  },
  {
    "id": 9,
    "question": "¿Cuál es la salida de este código?",
    "code": "x = [1, 2, 3]\nx.append(10)\nprint(len(x))",
    "answers":
    [
      "3",
      "10",
      "4",
      "11"
    ],
    "correctAnswer": 2
  },
  {
    "id": 10,
    "question": "¿Cuál es la salida de este código?",
    "code": "print(float('0.29') + 129)",
    "answers":
    [
      "130",
      "129.29",
      "129",
      "TypeError"
    ],
    "correctAnswer": 1
  },
  {
    "id": 11,
    "question": "¿Cuál es la salida del siguiente código?",
    "code": "def foo():\n    a = 20\n    return [a, a*10] * 2\nprint(foo())",
    "answers":
    [
      "[20, 200, 20, 200]",
      "[40, 400, 40, 400]",
      "[40, 40]",
      "SyntaxError"
    ],
    "correctAnswer": 0
  },
  {
    "id": 12,
    "question": "¿Cuál es el tipo de dato de la siguiente variable?",
    "code": "x = [1, 2, 3]\nprint(type(x))",
    "answers":
    [
      "list",
      "tuple",
      "set",
      "dict"
    ],
    "correctAnswer": 0
  },
  {
    "id": 13,
    "question": "¿Cuál es la salida del siguiente código?",
    "code": "x = 10\nwhile x > 0:\n    x -= 1\nprint(x)",
    "answers":
    [
      "0",
      "1",
      "NaN",
      "-1"
    ],
    "correctAnswer": 0
  },
  {
    "id": 14,
    "question": "¿Cuál es el tipo de dato de la siguiente expresión?",
    "code": "a = {\n  'foot' : 'ball',\n  'foot' : 'loose'\n}\nprint(a)",
    "answers":
    [
      "SyntaxError",
      "{'foot': 'ball'}",
      "{'foot': 'ball', 'foot': 'loose'}",
      "{'foot': 'loose'}"
    ],
    "correctAnswer": 3
  },
  {
    "id": 15,
    "question": "¿Cuál es la salida del siguiente código?",
    "code": "x = 1\ny = 2\nprint(x > y or x < y)",
    "answers":
    [
      "True",
      "False",
      "None",
      "Null"
    ],
    "correctAnswer": 0
  },
  {
    "id": 16,
    "question": "¿Cuál es la salida de este código?",
    "code": "x = '123' * 2\nprint(type(x))",
    "answers":
    [
      "'123123'",
      "'246'",
      "TypeError",
      "'123*2'"
    ],
    "correctAnswer": 0
  },
  {
    "id": 17,
    "question": "¿Cuál es la salida del siguiente código?",
    "code": "x = [1, 2, 3]\nprint(x[-1])",
    "answers":
    [
      "SyntaxError",
      "2",
      "3",
      "1"
    ],
    "correctAnswer": 2
  },
  {
    "id": 18,
    "question": "¿Cuál es el tipo de dato de la siguiente expresión?",
    "code": "'123' * 3",
    "answers":
    [
      "str",
      "int",
      "float",
      "None"
    ],
    "correctAnswer": 0
  },
  {
    "id": 19,
    "question": "¿Cuál es la salida del siguiente código?",
    "code": "x = [1, 2, 3]\nprint(x[x[-3]])",
    "answers":
    [
      "-3",
      "2",
      "3",
      "SyntaxError"
    ],
    "correctAnswer": 1
  },
  {
    "id": 20,
    "question": "¿Cuál es la salida del siguiente código?",
    "code": "def foo(num):\n  return num % 3 == 0\nnumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\nresult = list(filter(lambda x: foo(x), numbers))\nprint(result)",
    "answers":
    [
      "[3, 6, 9]",
      "[3, 3, 3]",
      "[1, 2, 3]",
      "[]"
    ],
    "correctAnswer": 0
  }
]