import { Appointment } from "../appointment/Appointment";
import { AgentAssignment } from "../agentAssignment/AgentAssignment";

export type Property = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  address: string | null;
  price: number | null;
  size: number | null;
  typeField?: "Option1" | null;
  appointments?: Array<Appointment>;
  agentAssignments?: Array<AgentAssignment>;
};
