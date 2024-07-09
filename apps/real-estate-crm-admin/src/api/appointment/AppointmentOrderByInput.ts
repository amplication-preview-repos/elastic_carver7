import { SortOrder } from "../../util/SortOrder";

export type AppointmentOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  dateTime?: SortOrder;
  propertyId?: SortOrder;
  agent?: SortOrder;
  clientId?: SortOrder;
};
