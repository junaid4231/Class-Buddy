
// types.ts
// export type Subject = {
//   id: string;
//   title: string;
//   description: string;
//   professor: string;
// };



// export type RootStackParamList = {
//   Tabs: undefined; // 👈 Use this for BottomTabs entry point
//   SubjectDetail: { subject: Subject };
//   Assignments: { subject: Subject };
//   Syllabus: { subject: Subject };
//   StudyMaterial: { subject: Subject };
//   Grades: { subject: Subject };
//   AssignmentDetail: { assignment: Assignment; subject: Subject };
// };

// types.ts
export interface Subject {
  id: string;
  title: string;
  description: string;
  professor: string;
}
export type Assignment = {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  status: 'pending' | 'submitted';
};

export type RootStackParamList = {
  Tabs: undefined;
  SubjectDetail: {
    subject: Subject;
  };
  Assignments: {
    subject: Subject;
  };
  Syllabus: {
    subject: Subject;
  };
  StudyMaterial: {
    subject: Subject;
  };
  Grades: {
    subject: Subject;
  };
  AssignmentDetail: {
    assignment: Assignment;
    subject: Subject;
  };
};