import { AppointmentUpdateManyWithoutPropertiesInput } from "./AppointmentUpdateManyWithoutPropertiesInput";
import { AgentAssignmentUpdateManyWithoutPropertiesInput } from "./AgentAssignmentUpdateManyWithoutPropertiesInput";

export type PropertyUpdateInput = {
  address?: string | null;
  price?: number | null;
  size?: number | null;
  typeField?: "Option1" | null;
  appointments?: AppointmentUpdateManyWithoutPropertiesInput;
  agentAssignments?: AgentAssignmentUpdateManyWithoutPropertiesInput;
};
