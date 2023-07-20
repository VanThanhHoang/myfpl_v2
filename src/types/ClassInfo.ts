import {ClassAdress} from './Adress';
import {Subject} from './Subject';
import {Teacher} from './Teacher';
import {TimeSlot} from './TimeSlot';

export interface ClassInfo {
  _id: string;
  subject: Subject;
  classCode: string;
  clsasAddress: ClassAdress;
  slot: TimeSlot;
  link: string;
  date: string;
  note: string;
  status: string;
  description: string;
  teacher: Teacher;
}
