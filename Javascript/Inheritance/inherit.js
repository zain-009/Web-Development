const TeacherSupport = {
  isAvailable: true,
};

const TASupport = {
  fullTime: true,
  __proto__: TeacherSupport,
};

// TASupport.__proto__ = TeacherSupport;

Object.setPrototypeOf(TeacherSupport, TASupport);
