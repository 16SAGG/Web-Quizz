export const javaQuestionsData = [
  {
    "id": 1,
    "question": "¿Cuál es la salida de este código?",
    "code": "System.out.println('Hello World ' + 200*10);",
    "answers": [
      "'Hello World 200*10'",
      "'Hello World + 200*10'",
      "'Hello World 2000'",
      "Error"
    ],
    "correctAnswer": 2
  },
  {
    "id": 2,
    "question": "¿Cuál es el tipo de datos de la variable `x`?",
    "code": "x = 10f;",
    "answers": [
      "float",
      "double",
      "int",
      "boolean"
    ],
    "correctAnswer": 0
  },
  {
    "id": 3,
    "question": "¿Cuál es el resultado de la siguiente expresión?",
    "code": "System.out.println(1 * '0');",
    "answers":
    [
      "47",
      "48",
      "NaN",
      "Error"
    ],
    "correctAnswer": 1
  },
  {
    "id": 4,
    "question": "¿Cuál es la salida de este código?",
    "code": "String myText = 'I am not in DANGER, i am the DANGER';\nSystem.out.println(myText.indexOf('DANGER'));",
    "answers":
    [
      "29",
      "13",
      "28",
      "12"
    ],
    "correctAnswer": 3
  },
  {
    "id": 5,
    "question": "¿Cuál es la salida de este código?",
    "code": "int a = 3;\ndouble b = a;\nSystem.out.println(b);",
    "answers":
    [
      "Error",
      "3",
      "3.0",
      "2.99"
    ],
    "correctAnswer": 2
  },
  {
    "id": 6,
    "question": "¿Cuál es la salida de este código?",
    "code": "double a = 3.99;\nint b = a;\nSystem.out.println(b);",
    "answers":
    [
      "4",
      "3",
      "Error",
      "3.99"
    ],
    "correctAnswer": 2
  },
  {
    "id": 7,
    "question": "¿Cuál es el resultado de la siguiente expresión?",
    "code": "true && false || false && true",
    "answers":
    [
      "true",
      "false",
      "Error",
      "undefined"
    ],
    "correctAnswer": 1
  },
  {
    "id": 8,
    "question": "¿Cuál es la salida de este código?",
    "code": "double a = 3.99;\nint b = (int) a;\nSystem.out.println(b);",
    "answers":
    [
      "4",
      "3",
      "Error",
      "3.99"
    ],
    "correctAnswer": 1
  },
  {
    "id": 9,
    "question": "¿Cuál es la salida de este código?",
    "code": "String words = 'Hello My Darling.';\nint x = words.split(' ').length;\nSystem.out.println(x);",
    "answers":
    [
      "16",
      "15",
      "8",
      "3"
    ],
    "correctAnswer": 3
  },
  {
    "id": 10,
    "question": "¿Cuál es el tipo de datos de la variable `x`?",
    "code": "x = '3' * 3;",
    "answers":
    [
      "char",
      "Error",
      "int",
      "String"
    ],
    "correctAnswer": 2
  },{
    "id": 11,
    "question": "¿Cuál es la salida de este código?",
    "code": "int[] arr = new int[3];\nfor (int i = 1; i < arr.length; i++) {\narr[i] = arr[i-1] + 2;\n}\nSystem.out.println(arr[2]);",
    "answers":
    [
      "4",
      "2",
      "6",
      "Error"
    ],
    "correctAnswer": 0
  },
  {
    "id": 12,
    "question": "¿Cuál es el resultado de la siguiente expresión?",
    "code": "class A {\n  public static void main(String[] args) {\n    int x = 10;\n    x += 2.5;\n    System.out.println(x);\n  }\n}",
    "answers":
    [
      "13",
      "12.5",
      "Error",
      "12"
    ],
    "correctAnswer": 3
  },
  {
    "id": 13,
    "question": "¿Cuál es la salida de este código?",
    "code": "String originalStr = 'hello';\nString newStr = '';\n\nfor (int i = 0; i < originalStr.length(); i++) {\n  newStr = originalStr.charAt(i) + newStr;\n}\nSystem.out.println(newStr);",
    "answers":
    [
      "hello",
      "llohe",
      "olleh",
      "eholl"
    ],
    "correctAnswer": 2
  },
  {
    "id": 14,
    "question": "¿Cuál es la salida de este código?",
    "code": "String str = 'Hola, mundo!';\nchar x = str.charAt(9);\nchar y = str.charAt(3);\nchar z = str.charAt(1);\nSystem.out.println(x);\nSystem.out.println(y);\nSystem.out.println(x);\nSystem.out.println(z);",
    "answers":
    [
      "d a d o",
      "m o m a",
      "h a l o",
      "m u d o"
    ],
    "correctAnswer": 0
  },
  {
    "id": 15,
    "question": "¿Cuál es la salida de este código?",
    "code": "String str = 'Hola, mundo!';\nSystem.out.println(str.length());",
    "answers":
    [
      "12",
      "11",
      "10",
      "Error"
    ],
    "correctAnswer": 0
  },
  {
    "id": 16,
    "question": "¿Cuál es la salida de este código?",
    "code": "String str = 'Hola, mundo!';\nString[] arr = str.split(', ');\nSystem.out.println(arr[0]);",
    "answers":
    [
      "Hola,",
      "Hola",
      "H",
      ", "
    ],
    "correctAnswer": 1
  },
  {
    "id": 17,
    "question": "¿Cuál es la salida de este código?",
    "code": "Integer x = new Integer(10);\nint y = 10;\nSystem.out.println(x + y);",
    "answers":
    [
      "Error",
      "10",
      "undefined",
      "20"
    ],
    "correctAnswer": 3
  },{
    "id": 18,
    "question": "¿Cuál es el resultado de la siguiente expresión?",
    "code": "int[] myArray = {1, 5, 10, 25};\nint x = -1;\n\nfor (int i = 0; i < myArray.length; i++) {\n  x += myArray[i];\n}\nSystem.out.println(x);",
    "answers":
    [
      "41",
      "40",
      "45",
      "44"
    ],
    "correctAnswer": 1
  },
  {
    "id": 19,
    "question": "¿Cuál es la salida de este código?",
    "code": "class A {\n  public static void main(String[] args) {\n    int[] arr = new int[5];\n    for (int i = 0; i < arr.length; i++) {\n      arr[i] = i * 2;\n    }\n    for (int i = 0; i < arr.length; i++) {\n      System.out.println(arr[i]);\n    }\n  }\n}",
    "answers":
    [
      "0 2 4 6 8",
      "2 4 6 8 10",
      "10 8 6 4 2",
      "Error"
    ],
    "correctAnswer": 0
  },
  {
    "id": 20,
    "question": "¿Cuál es el tipo de datos de la variable `x`?",
    "code": "int number = 5;\n\nif (number % 2 == 0) {\n  System.out.println('even.');\n} else {\n  System.out.println('odd.');\n}",
    "answers":
    [
      "even.",
      "undefined",
      "null",
      "odd."
    ],
    "correctAnswer": 3
  }
]