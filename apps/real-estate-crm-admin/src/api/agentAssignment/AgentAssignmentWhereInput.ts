import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type AgentAssignmentWhereInput = {
  id?: StringFilter;
  agentName?: StringNullableFilter;
  property?: PropertyWhereUniqueInput;
};
