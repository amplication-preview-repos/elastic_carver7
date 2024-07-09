import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";
import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";

export type AppointmentCreateInput = {
  dateTime?: Date | null;
  property?: PropertyWhereUniqueInput | null;
  agent?: string | null;
  client?: ClientWhereUniqueInput | null;
};
