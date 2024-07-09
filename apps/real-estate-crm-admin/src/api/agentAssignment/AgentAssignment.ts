import { Property } from "../property/Property";

export type AgentAssignment = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  agentName: string | null;
  property?: Property | null;
};
