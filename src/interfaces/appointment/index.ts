import { UserInterface } from 'interfaces/user';
import { DoctorInterface } from 'interfaces/doctor';
import { ClinicInterface } from 'interfaces/clinic';
import { GetQueryInterface } from 'interfaces';

export interface AppointmentInterface {
  id?: string;
  patient_id?: string;
  doctor_id?: string;
  clinic_id?: string;
  appointment_time: any;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  doctor?: DoctorInterface;
  clinic?: ClinicInterface;
  _count?: {};
}

export interface AppointmentGetQueryInterface extends GetQueryInterface {
  id?: string;
  patient_id?: string;
  doctor_id?: string;
  clinic_id?: string;
}
