import { AppointmentInterface } from 'interfaces/appointment';
import { ClinicInterface } from 'interfaces/clinic';
import { GetQueryInterface } from 'interfaces';

export interface DoctorInterface {
  id?: string;
  name: string;
  clinic_id?: string;
  created_at?: any;
  updated_at?: any;
  appointment?: AppointmentInterface[];
  clinic?: ClinicInterface;
  _count?: {
    appointment?: number;
  };
}

export interface DoctorGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  clinic_id?: string;
}
