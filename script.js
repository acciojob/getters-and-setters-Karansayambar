class Person:
    def __init__(self, name, age):
        self._name = name
        self._age = age

    @property
    def name(self):
        return self._name

    @property
    def age(self):
        return self._age

    @age.setter
    def age(self, value):
        self._age = value


class Student(Person):
    def study(self):
        print(f'{self.name} is studying')


class Teacher(Person):
    def teach(self):
        print(f'{self.name} is teaching')


# Example usage:
person1 = Person("John", 30)
print(f"Person 1: {person1.name}, Age: {person1.age}")

student1 = Student("Alice", 20)
print(f"Student 1: {student1.name}, Age: {student1.age}")
student1.study()

teacher1 = Teacher("Mr. Smith", 40)
print(f"Teacher 1: {teacher1.name}, Age: {teacher1.age}")
teacher1.teach()

